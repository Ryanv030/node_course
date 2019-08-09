const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');

const router = express.Router();

let products = [];

// /add-product => GET
router.get('/add-product', (req, res) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    activeAddProduct: true,
    productCSS: true,
  });
});

// /add-product => POST
router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

router.post('/delete-product', (req, res) => {
  const updatedProducts = products.filter(
    product => product.title !== req.body.title,
  );
  products = updatedProducts;
  res.redirect('/');
});

// Default homepage
router.get('/', (req, res) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop', {
    products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
  });
});

exports.routes = router;
exports.products = products;
