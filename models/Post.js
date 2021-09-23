// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const postSchema = new schema({

})

const post = mongoose.model('Post', postSchema);

module.exports = post;