// Import statements
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const express = require('express');

// Express server
const backend = express();

// Routes
const communitiesRouter = require('./routes/communities');
const manufacturersRouter = require('./routes/manufacturers');
const ordersRouter = require('./routes/orders');
const postsRouter = require('./routes/posts');
const productsRouter = require('./routes/products');
const ratingsRouter = require('./routes/ratings');
const sessionsRouter = require('./routes/sessions');
const usersRouter = require('./routes/users');
const orderItemsRouter = require('./routes/orderItems');

backend.use('/communities', communitiesRouter);
backend.use('/manufacturers', manufacturersRouter);
backend.use('/orders', ordersRouter);
backend.use('/posts', postsRouter);
backend.use('/products', productsRouter);
backend.use('/ratings', ratingsRouter);
backend.use('/sessions', sessionsRouter);
backend.use('/users', usersRouter);
backend.use('/orderItems', orderItemsRouter);

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
      key: fs.readFileSync('./backend.key'),
      cert: fs.readFileSync('./backend.cert'),
    },
    backend
  )
  .listen(port, () =>
    console.log(`Express backend server is running on port ${port}`)
  );
