// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const communitySchema = new schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      trim: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    info: {
      type: String,
      trim: true,
    },
    members: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
      required: true,
      default: [],
    },
    posts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Post',
      default: [],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const community = mongoose.model('Community', communitySchema);

module.exports = community;
