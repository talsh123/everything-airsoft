// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const orderItemSchema = new schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    price: {
      type: mongoose.Types.Decimal128,
      min: 0,
      required: true,
    },
    amount: {
      type: Number,
      min: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const orderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = orderItem;
