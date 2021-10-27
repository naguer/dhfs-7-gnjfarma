const express = require("express");
//const router = express.Router();
const { dirname } = require("path");
const path = require("path");
const port = 3000;
const app = express();
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "views"));
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Routes */
const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.listen(port,()=> console.log(`Running on port ${port}`));
