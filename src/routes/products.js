const express = require('express');
const router = express.Router();
const multer  = require('multer');
const path = require ('path');
const controller = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
        const name = `product-${Date.now()}${path.extname(file.originalname)}`
        cb(null, name)
    }
});

const upload = multer ({storage});

router.get('/cart', controller.cart);

router.get('/detail/:id', controller.detail);

router.get('/crud', controller.crud);

router.get('/editItem/:id', controller.editItem);
router.put('/editItem/:id',upload.single('image'), controller.update);

router.get('/addItem', controller.addItem);
router.post('/addItem', upload.single('image'), controller.store);

router.get('/deleteItem/:id', controller.deleteItem);
router.delete('/deleteItem/:id',upload.single('image'), controller.delete);


module.exports = router;