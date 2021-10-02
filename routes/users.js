// Import statements
const express = require('express');
const User = require('../schemas/User');

// Define express router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Send all users
router.get('/all', async (_req, res) => {
  try {
    const users = User.find();
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
      isVerifies: false,
      isAdmin: false,
    });

    res.status(200).json(newUser.save());
  } catch (err) {
    console.log(err);
  }
});

// Delete a user from the MongoDB database
router.delete('/delete/:username', async (req, res) => {
  // Fill this later
});

module.exports = router;
