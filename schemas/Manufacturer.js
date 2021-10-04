// Import statements
const mongoose = require('mongoose');

// Define schema
const schema = mongoose.Schema;

const manufacturerSchema = new schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
  },
  info: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
});

const manufacturer = mongoose.model('Manufacturer', manufacturerSchema);

module.exports = manufacturer;
