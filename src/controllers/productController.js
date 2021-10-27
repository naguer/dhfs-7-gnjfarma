const path = require('path');
const fs = require ('fs');

let jsonProducts = fs.readFileSync(path.resolve(__dirname,'../db/products.json'), 'utf-8'); 
let products = JSON.parse(jsonProducts);


const nuevoId = () => {
    let ultimo = 0;
    products.forEach(product => {
        if (product.id > ultimo) {
            ultimo = product.id;
        }
    });
    return ultimo + 1;
}

let controller = {
    cart: (req, res) => {
        res.render('products/cart');
    },
    detail: (req, res) => {
        let id= req.params.id;
        let productDetail= products.find(product=> product.id==id);
        res.render('products/detail', {product:productDetail})
    },
    crud: (req,res)=>{

        res.render('products/crud',{products})
    },
    editItem: (req,res)=>{
        let productEdit = products.find(product => {
            return product.id == req.params.id;
        })
        res.render('products/editItem', {product: productEdit});
    },
    update: (req,res) =>{
        products.forEach(product => {
            if (product.id == req.params.id) {
                product.name = req.body.name;
                product.brand = req.body.brand;
                product.description = req.body.description;
                product.image = 'default-image.png';
                product.category = req.body.category;
                product.color = req.body.color;
                product.stock = req.body.stock;
                product.price = req.body.price;
            }
        })

        let jsonDeProductos = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/products.json'), jsonDeProductos);

        res.redirect('/products/crud');
    },
    addItem: (req, res) =>{
        res.render('products/addItem')
    },

    store: (req,res)=>{
        let product = {
            id: nuevoId(),
            ...req.body,
             image:  'default-image.png',
        }
        products.push(product);

        let jsonDeProductos = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/products.json'), jsonDeProductos);

        res.redirect('/products/crud')
    }
}
module.exports = controller;