const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/cart', controller.cart);

router.get('/product', controller.product);

module.exports = router;