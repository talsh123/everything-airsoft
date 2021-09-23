// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const commentSchema = new schema({

})

const comment = mongoose.model('Comment', commentSchema);

module.exports = comment;