const express = require("express");
const router = express.Router();
const { dirname } = require("path");
const path = require("path");
const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

/* Routes */
const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');


app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

let userController = {
    loginUser: function (req,res){
        res.render('login');
    }
}

// router.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./views/index.html'))
// })

// router.get('/product', (req,res)=>{
//     res.sendFile (path.resolve(__dirname, './views/products/product.html'))
// })

// router.get('/cart',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./views/products/cart.html'))
// })

// router.get('/login',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./views/users/login.html'))
// })

// router.get('/registry',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./views/users/registry.html'))
// })

app.listen(port,()=> console.log(`Running on port ${port}`));