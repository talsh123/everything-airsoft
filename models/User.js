// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const userSchema = new schema({

})

const user = mongoose.model('Order', userSchema);

module.exports = user;