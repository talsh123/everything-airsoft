// Import statements
const express = require('express');
const Session = require('../schemas/Session');

// Define express router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Get user session
router.get('/get/:sessionId/:userIp', async (req, res) => {
  try {
    const session = await Session.findOne({
      _id: req.params.sessionId,
      userIp: req.params.userIp,
    });
    res.status(200).json(session);
  } catch (err) {
    console.log(err);
  }
});

// Save a new session into MongoDB
router.post('/new', async (req, res) => {
  try {
    const sessions = await Session.insertMany(req.body);
    res.status(200).json(sessions);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
