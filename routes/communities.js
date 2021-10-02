// Import statements
const express = require('express');
const Community = require('../schemas/Community');

// Define router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Send back all communities
router.get('/all', async (_req, res) => {
  try {
    const communities = Community.find();
    res.status(200).json(communities);
  } catch (err) {
    console.log(err);
  }
});

// Save new community into the MongoDB database
router.post('/new', async (req, res) => {
  const { name, userId, info, members, numMembers, posts } = req.body;
  try {
    const newCommunity = new Community({
      name,
      userId,
      info,
      members,
      numMembers,
      posts,
    });
  } catch (err) {
    console.log(err);
  }
});

// Send back a community according to a given communityId
router.get('/get/:communityId', async (req, res) => {
  try {
    res.status(200).json(Community.findById(req.params.communityId));
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
