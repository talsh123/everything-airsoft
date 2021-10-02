// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const productSchema = new schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  ratings: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Rating',
    required: true,
    default: [],
  },
  rating: {
    type: mongoose.Types.Decimal128,
    required: true,
    min: 0,
    max: 5,
    default: 0,
  },
  properties: {
    type: String,
    minlength: 1,
    required: true,
    trim: true,
  },
  unitsSold: {
    type: Number,
    min: 0,
    required: true,
    default: 0,
  },
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
