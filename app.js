const express = require("express");
const { dirname } = require("path");
const path = require("path");
const port = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.send('GNJ Farma')
})

app.listen(port,()=> console.log(`Running on port ${port}`));



