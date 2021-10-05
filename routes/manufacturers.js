// Import statements
const express = require('express');
const Manufacturer = require('../schemas/Manufacturer');

// Define express router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Send back all the manufacturers
router.get('/all', async (_req, res) => {
  try {
    const manufacturers = await Manufacturer.find();
    res.status(200).json(manufacturers);
  } catch (err) {
    console.log(err);
  }
});

// Save a new manufacturer into the MongoDB database
router.post('/new', async (req, res) => {
  try {
    const manufacturers = await Manufacturer.insertMany(req.body);
    res.status(200).json(manufacturers);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
