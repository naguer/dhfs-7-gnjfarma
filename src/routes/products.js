const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/cart', controller.cart);

router.get('/detail/:id', controller.detail);

router.get('/crud', controller.crud);

router.get('/editItem', controller.editItem);

router.get('/addItem', controller.addItem);



module.exports = router;