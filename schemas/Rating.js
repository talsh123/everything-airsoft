// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const ratingSchema = new schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: mongoose.Types.Decimal128,
      required: true,
      min: 0,
      max: 5,
    },
    title: {
      type: String,
      trim: true,
      minlength: 3,
      default: undefined,
    },
    text: {
      type: String,
      trim: true,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

const rating = mongoose.model('Rating', ratingSchema);

module.exports = rating;
