// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const orderSchema = new schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    total: {
      type: mongoose.Types.Decimal128,
      min: 0,
      required: true,
    },
    items: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'OrderItem',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const order = mongoose.model('Order', orderSchema);

module.exports = order;
