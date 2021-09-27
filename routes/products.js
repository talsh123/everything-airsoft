// Import statements
const express = require('express');
const Product = require('../schemas/Product');

// Define express router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Send back all products if no error occurs, otherwise send back the error
router.get('/all', async (_req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
