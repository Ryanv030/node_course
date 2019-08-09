const express = require('express');
// const path = require('path');
const adminData = require('./admin');
// const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res) => {
  // console.log(adminData.products);
  const { products } = adminData;
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop', { products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;
