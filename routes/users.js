// Import statements
const express = require('express');
const mongoose = require('mongoose');
const User = require('../schemas/User');
const Community = require('../schemas/Community');
const Post = require('../schemas/Post');
const Order = require('../schemas/Order');
const Session = require('../schemas/Session');
const Rating = require('../schemas/Rating');
const Comment = require('../schemas/Comment');
const Product = require('../schemas/Product');

// Define express router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Send all users
router.get('/all', async (_req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
});

// Save a new user into MongoDB
router.post('/new', async (req, res) => {
  try {
    let { username, hash, email } = req.body;
    const newUser = new User({
      username,
      hash,
      email,
      isVerified: false,
      isAdmin: false,
    });

    res.status(200).json(await newUser.save());
  } catch (err) {
    console.log(err);
  }
});

// Send back a user given a username
router.get('/getUserByUsername/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

// Send back a user given a user ID
router.get('/getUserByUsername/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

// Send back all the users whose usernames are like the given string
router.get('/like/:username', async (req, res) => {
  try {
    const users = await User.find();
    const likeUsers = users.filter((user) =>
      user.username.match(req.params.username)
    );
    res.status(200).json(likeUsers);
  } catch (err) {
    console.log(err);
  }
});

// Verify a user given a username
router.patch('/verify/:username', async (req, res) => {
  try {
    const user = User.findOneAndUpdate(
      { username: req.params.username },
      { $set: { isVerified: true } }
    );
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

// Toggle a user as an admin given a username
router.patch('/admin/:username', async (req, res) => {
  try {
    const user = User.findOneAndUpdate(
      { username: req.params.username },
      { $set: { isAdmin: true } }
    );
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

// Delete a user from the MongoDB database and all it's connections to other clusters
router.delete('/delete/:username', async (req, res) => {
  try {
    // Delete the user
    const user = await User.findOneAndDelete({ username: req.params.username });

    // Delete the comments
    const comments = await Comment.deleteMany({
      userId: mongoose.Types.ObjectId(user._id),
    });

    // Delete communities that the user is the owner
    await Community.deleteMany({ userId: mongoose.Types.ObjectId(user._id) });

    // Delete the posts from a community
    await Community.updateMany(
      { $in: { members: mongoose.Types.ObjectId(user._id) } },
      { $pull: { members: mongoose.Types.ObjectId(user._id) } }
    );

    // Delete the user's orders
    await Order.deleteMany({ userId: mongoose.Types.ObjectId(user._id) });

    // Delete the posts
    await Post.deleteMany({ userId: mongoose.Types.ObjectId(user._id) });

    // Delete the comments from a post
    comments.forEach((comment) => {
      await Post.updateMany(
        { $in: { comments: mongoose.Types.ObjectId(comment._id) } },
        { $pull: { comments: mongoose.Types.ObjectId(comment._id) } }
      );
    });

    // Delete the ratings
    const ratings = await Rating.deleteMany({ userId: mongoose.Types.ObjectId(user._id) });
    ratings.forEach(rating => {
      Product.updateMany({$in: {'ratings': mongoose.Types.ObjectId(rating._id)}}, {$pull: {'ratings': mongoose.Types.ObjectId(rating._id)}});
    })

    // Delete the sessions
    await Session.deleteMany({ userId: mongoose.Types.ObjectId(user._id) });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
