const path = require('path');

let controller = {
    cart: function (req, res) {
        res.render('products/cart');
    },
    product: function (req, res) {
        res.render('products/product')
    },
    crud: (req,res)=>{
        res.render('products/crud')
    },
    editItem: (req,res)=>{
        res.render('products/editItem')
    },
    addItem: (req,res)=>{
        res.render('products/addItem')
    }
}
module.exports = controller;