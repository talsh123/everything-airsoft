// Import Statements
const express = require('express');
const mongoose = require('mongoose')

// Define backend server
const backend = express();

// Define port
const port = 5000;

// Run Server
backend.listen(port, () => console.log(`Server started on port ${port}`));