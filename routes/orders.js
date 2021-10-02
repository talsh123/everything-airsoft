// Import statements
const express = require('express');
const mongoose = require('mongoose');
const Order = require('../models/Order');

// Define router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Save an order into the MongoDB database
router.post('/new', async (req, res) => {
  try {
    const { userId, price, products } = req.body;
    const newOrder = new Order({
      userId,
      price,
      products,
    });
    res.status(200).json(newOrder.save());
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
