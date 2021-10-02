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

// Send back the top rated products
router.get('/featured', async (_req, res) => {
  try {
    const products = await Product.find();
    const featured = products.sort((a, b) => b.rating - a.rating);
    res.status(200).json(featured);
  } catch (err) {
    console.log(err);
  }
});

// Send back the products with the most units sold
router.get('/mostUnitsSold', async (_req, res) => {
  try {
    const products = await Product.find();
    const mostUnitsSold = products.sort((a, b) => b.unitsSold - a.unitsSold);
    res.status(200).json(mostUnitsSold);
  } catch (err) {
    console.log(err);
  }
});

// Send back the latest products added to the store
router.get('/newArrivals', async (_req, res) => {
  try {
    const products = await Product.find();
    const newArrivals = products.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    res.status(200).json(newArrivals);
  } catch (err) {
    console.log(err);
  }
});

// Send back the latest products added to the store
router.get('/categories', async (_req, res) => {
  try {
    const products = await Product.find();
    const categories = products.filter((x, i, a) => a.indexOf(x) == i);
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
