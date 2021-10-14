const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.get('/register', controller.register);

router.get('/login', controller.login);

router.get('/crud', controller.crud);

router.get('/editItem', controller.editItem);

router.get('/addItem', controller.addItem);

module.exports = router;