// Import statements
const express = require('express');
const Post = require('../schemas/Post');
const Community = require('../schemas/Community');

// Define router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Send all the posts of a given community ID
router.get('/all/:communityId', async (req, res) => {
  try {
    const posts = await Post.find({ communityId: req.params.communityId });
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
  }
});

// Save a new post into the MongoDB database
router.post('/new', async (req, res) => {
  try {
    const { userId, communityId, title, info, comments } = req.body;
    const newPost = new Post({
      userId,
      communityId,
      title,
      info,
      comments,
    });
    newPost.save();
  } catch (err) {
    console.log(err);
  }
});

// Send back a post given a post ID
router.get('/get/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
});

// Delete a post given a post ID
router.delete('/delete/:postId', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.postId);
    Community.findByIdAndUpdate(post.communityId, {
      $pull: { posts: post._id },
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
