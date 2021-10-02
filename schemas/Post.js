// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const postSchema = new schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    communityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Community',
      required: true,
    },
    title: {
      type: String,
      trim: true,
      minlength: 1,
      required: true,
    },
    info: {
      type: String,
      trim: true,
      minlength: 1,
    },
    comments: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Comment',
      default: [],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const post = mongoose.model('Post', postSchema);

module.exports = post;
