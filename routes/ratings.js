// Import statements
const express = require('express');
const mongoose = require('mongoose');
const Rating = require('../schemas/Rating');
const Product = require('../schemas/Product');
const rating = require('../schemas/Rating');

// Define router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Send back a rating according to a given rating ID
router.get('/getRating/:ratingId', async (req, res) => {
  try {
    res.status(200).json(Rating.findById(req.params.ratingId));
  } catch (err) {
    console.log(err);
  }
});

// Save a new Rating into the MongoDB database
router.post('/new', async (req, res) => {
  try {
    const { userId, productId, rating, title, text } = req.body;
    const newRating = new Rating({
      userId,
      productId,
      rating,
      title,
      text,
    });
    const newRatingDocument = newRating.save();

    // Find the product that has been rated by the user
    const product = Product.findById(newRatingDocument.productId);
    // update it's ratings array and rating number accordingly
    product.updateOne({
      $push: { ratings: new mongoose.Types.ObjectId(newRatingDocument._id) },
      $set: {
        rating:
          (parseFloat(product.rating.toJSON().$numberDecimal) +
            parseFloat(rating)) /
          2,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Delete a rating
router.delete('/delete/:ratingId', async (req, res) => {
  try {
    //   Fill in later
  } catch (err) {}
});

module.exports = router;
