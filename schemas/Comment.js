// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const commentSchema = new schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    info: {
      type: String,
      trim: true,
      minlength: 1,
    },
  },
  {
    timestamps: true,
  }
);

const comment = mongoose.model('Comment', commentSchema);

module.exports = comment;
