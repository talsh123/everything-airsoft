// Import statements
const express = require('express');
const mongoose = require('mongoose');
const Community = require('../schemas/Community');

// Define router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Send back all communities
router.get('/all', async (_req, res) => {
  try {
    const communities = await Community.find();
    res.status(200).json(communities);
  } catch (err) {
    console.log(err);
  }
});

// Save new community into the MongoDB database
router.post('/new', async (req, res) => {
  const { name, userId, info, members, posts } = req.body;
  try {
    const newCommunity = new Community({
      name,
      userId,
      info,
      members,
      posts,
    });
    res.status(200).json(await newCommunity.save());
  } catch (err) {
    console.log(err);
  }
});

// Send back a community according to a given communityId
router.get('/get/:communityId', async (req, res) => {
  try {
    res.status(200).json(await Community.findById(req.params.communityId));
  } catch (err) {
    console.log(err);
  }
});

// Join a community given a community ID and a user ID
router.patch('/join/:communityId/:userId', async (req, res) => {
  try {
    const communtiy = await Community.findOneAndUpdate(
      {
        _id: req.params.communityId,
        members: { $nin: [mongoose.Types.ObjectId(req.params.userId)] },
      },
      {
        $push: { members: new mongoose.Types.ObjectId(req.params.userId) },
      }
    );
    res.status(200).json(communtiy);
  } catch (err) {
    console.log(err);
  }
});

// Leave a community given a community ID and a user ID
router.patch('/leave/:communityId/:userId', async (req, res) => {
  try {
    const community = await Community.findOneAndUpdate(
      {
        _id: req.params.communityId,
        members: { $in: [mongoose.Types.ObjectId(req.params.userId)] },
      },
      {
        $pull: { members: mongoose.Types.ObjectId(req.params.userId) },
      }
    );

    res.status(200).json(community);
  } catch (err) {
    console.log(err);
  }
});

// Check if a user given a user ID is the owner of a given community ID
router.get('/isOwner/:communityId/:userId', async (req, res) => {
  try {
    const flag = await Community.exists({
      _id: req.params.communityId,
      userId: mongoose.Types.ObjectId(req.params.userId),
    });
    res.status(200).json(flag);
  } catch (err) {
    console.log(err);
  }
});

// Return true if a given user is a member of a community, given a user ID and a community ID
router.get('/isMember/:communityId/:userId', async (req, res) => {
  try {
    const flag = await Community.exists({
      _id: req.params.communityId,
      members: { $in: [mongoose.Types.ObjectId(req.params.userId)] },
    });
    res.status(200), json(flag);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
