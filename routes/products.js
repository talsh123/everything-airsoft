// Import statements
const express = require('express');
const Product = require('../schemas/Product');

// Define express router
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Send back all products if no error occurs, otherwise send back the error
router.get('/all', async (_req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
  }
});

// Send back the top rated products
router.get('/featured', async (_req, res) => {
  try {
    const products = await Product.find();
    const featured = products.sort((a, b) => b.rating - a.rating);
    res.status(200).json(featured);
  } catch (err) {
    console.log(err);
  }
});

// Send back the products with the most units sold
router.get('/mostUnitsSold', async (_req, res) => {
  try {
    const products = await Product.find();
    const mostUnitsSold = products.sort((a, b) => b.unitsSold - a.unitsSold);
    res.status(200).json(mostUnitsSold);
  } catch (err) {
    console.log(err);
  }
});

// Send back the latest products added to the store
router.get('/newArrivals', async (_req, res) => {
  try {
    const products = await Product.find();
    const newArrivals = products.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    res.status(200).json(newArrivals);
  } catch (err) {
    console.log(err);
  }
});

// Send back the products given a category
router.get('/getCategory/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
  }
});

// Save a new product into the MongoDB database
router.post('/new', async (req, res) => {
  try {
    const {
      name,
      price,
      category,
      ratings,
      properties,
      unitsSold,
      manufacturer,
    } = req.body;
    const newProduct = new Product({
      name,
      price,
      category,
      ratings,
      properties,
      unitsSold,
      manufacturer,
    });
    res.status(200).json(await newProduct.save());
  } catch (err) {
    console.log(err);
  }
});

// Delete a product from the MongoDB database given a product ID
router.delete('/delete/:productId', async (req, res) => {
  try {
    res.status(200).json(await Product.findByIdAndDelete(req.params.productId));
  } catch (err) {
    console.log(err);
  }
});

// Send all the products that are like the given string
router.get('/like/:name', async (req, res) => {
  try {
    const products = Product.find();
    const likeProducts = (await products).filter((product) =>
      product.name.match(req.params.name)
    );
    res.status(200).json(likeProducts);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
