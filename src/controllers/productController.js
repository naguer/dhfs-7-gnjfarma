const path = require('path');
const fs = require ('fs');

let jsonProducts = fs.readFileSync(path.resolve(__dirname,'../db/products.json'), 'utf-8'); 
let products = JSON.parse(jsonProducts);

let controller = {
    cart: function (req, res) {
        res.render('products/cart');
    },
    detail: function (req, res) {
        let id= req.params.id;
        let productDetail= products.find(product=> product.id==id);
        res.render('products/detail', {product:productDetail})
    },
    crud: (req,res)=>{

        res.render('products/crud',{products})
    },
    editItem: (req,res)=>{
        res.render('products/editItem')
    },
    addItem: (req,res)=>{
        res.render('products/addItem')
    }
}
module.exports = controller;