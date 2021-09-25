// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const orderSchema = new schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price: {
        type: mongoose.Types.Decimal128,
        min: 0,
        required: true
    },
    products: {
        type: [mongoose.Types.ObjectId],
        ref: 'Product',
        required: true,
        default: []
    }
}, {
    timestamps: true
})

const order = mongoose.model('Order', orderSchema);

module.exports = order;