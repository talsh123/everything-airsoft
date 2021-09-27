// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const communitySchema = new schema({});

const community = mongoose.model('Community', communitySchema);

module.exports = community;
