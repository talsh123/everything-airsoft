// Import statements
const express = require('express');
const OrderItem = require('../schemas/OrderItem');

// Define express router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Save new order items into the MongoDB database
router.post('/new', async (req, res) => {
  try {
    const orderItems = await OrderItem.insertMany(req.body);
    res.status(200).json(orderItems);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
