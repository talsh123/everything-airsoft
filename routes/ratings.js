// Import statements
const express = require('express');
const mongoose = require('mongoose');
const Rating = require('../schemas/Rating');
const Product = require('../schemas/Product');

// Define router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Send back a rating according to a given rating ID
router.get('/getRating/:ratingId', async (req, res) => {
  try {
    res.status(200).json(await Rating.findById(req.params.ratingId));
  } catch (err) {
    console.log(err);
  }
});

// Save a new Rating into the MongoDB database
router.post('/new', async (req, res) => {
  try {
    const { userId, rating, title, text } = req.body;
    const newRating = new Rating({
      userId,
      rating,
      title,
      text,
    });
    const newRatingDocument = await newRating.save();

    // Find the product that has been rated by the user
    const product = await Product.findById(newRatingDocument.productId);
    // update it's ratings array and rating number accordingly
    product.updateOne({
      $push: { ratings: new mongoose.Types.ObjectId(newRatingDocument._id) },
    });
  } catch (err) {
    console.log(err);
  }
});

// Delete a rating and restore the previous product rating after it's deletion
router.patch('/delete/:ratingId', async (req, res) => {
  try {
    const rating = await Rating.findByIdAndDelete(req.params.ratingId);
    const product = Product.findById(rating.productId);
    await Product.findByIdAndUpdate(rating.productId, {
      $pull: { ratings: mongoose.Types.ObjectId(rating._id) },
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
