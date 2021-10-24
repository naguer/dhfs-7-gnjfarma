const path = require('path');
const fs = require ('fs');

let jsonProducts = fs.readFileSync(path.resolve(__dirname,'../db/products.json'), 'utf-8'); 
let products = JSON.parse(jsonProducts);


module.exports = {
    home: (req, res) => {
        let productsBeauty = [];
        let productsHealthy = [];
        let productsCleaning = [];

        products.forEach(product => {
            if(product.category=="Belleza"){
                productsBeauty.push(product)
            }else if(product.category=='Salud'){
                productsHealthy.push(product)
            }else{
                productsCleaning.push(product)
            }
            
        });
        res.render('home', {productsBeauty,productsHealthy,productsCleaning});
    
    }

}