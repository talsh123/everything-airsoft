// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const orderSchema = new schema({

})

const order = mongoose.model('Order', orderSchema);

module.exports = order;