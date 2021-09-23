// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const sessionSchema = new schema({

})

const session = mongoose.model('Session', sessionSchema);

module.exports = session;