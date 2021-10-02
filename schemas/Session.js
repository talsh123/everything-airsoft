// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const sessionSchema = new schema(
  {
    userIp: {
      type: String,
      trim: true,
      required: true,
      minlength: 10,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const session = mongoose.model('Session', sessionSchema);

module.exports = session;
