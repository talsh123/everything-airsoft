// Import statements
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const express = require('express');

// Express server
const backend = express();

// Routes
const productsRouter = require('./routes/products');

backend.use('/products', productsRouter);

// Environment variables
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
    else console.log('A connection to MongoDB has been established!');
  }
);

// Backend port
const port = process.env.PORT || 5000;

// Run HTTPS backend server
https
  .createServer(
    {
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.cert'),
    },
    backend
  )
  .listen(port, () =>
    console.log(`Express backend server is running on port ${port}`)
  );
