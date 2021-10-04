// Import statements
const express = require('express');
const Order = require('../schemas/Order');

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

// Send back all order given a user ID
router.get('/get/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
