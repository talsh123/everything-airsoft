// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const ratingSchema = new schema({

})

const rating = mongoose.model('Rating', ratingSchema);

module.exports = rating;