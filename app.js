const express = require("express");
const { dirname } = require("path");
const path = require("path");
const port = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

app.get('/product', (req,res)=>{
    res.sendFile (path.resolve(__dirname, './views/product.html'))
})

app.get('/cart',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/cart.html'))
})

app.listen(port,()=> console.log(`Running on port ${port}`));
app.use(express.static('public'))


