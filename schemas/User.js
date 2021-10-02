// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      unique: true,
    },
    hash: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    communities: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Community',
      default: [],
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model('User', userSchema);

module.exports = user;
