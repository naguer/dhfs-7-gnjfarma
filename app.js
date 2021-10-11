const express = require("express");
const { dirname } = require("path");
const path = require("path");
const port = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.get('/product', (req,res)=>{
    res.sendFile (path.resolve(__dirname, './views/products/product.html'))
})

app.get('/cart',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/products/cart.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/users/login.html'))
})

app.get('/registry',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/users/registry.html'))
})

app.get('/crud',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/users/crud.html'))
})

app.get('/addItem',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/users/addItem.html'))
})

app.get('/editItem',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/users/editItem.html'))
})

app.listen(port,()=> console.log(`Running on port ${port}`));
app.use(express.static('public'))