const path = require('path');

let controller = {
    cart: function (req, res) {
        res.render('products/cart');
    },
    product: function (req, res) {
        res.render('products/product')
    }
}
module.exports = controller;