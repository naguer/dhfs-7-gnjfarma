const path = require('path');

let controller = {
    register: (req,res)=>{
        res.render('users/registry');
    },
    registered: function (req, res) {
        
    },
    login: (req,res)=>{
        res.render('users/login');
    },
    crud: (req,res)=>{
        res.render('users/crud')
    },
    editItem: (req,res)=>{
        res.render('users/editItem')
    },
    addItem: (req,res)=>{
        res.render('users/addItem')
    }
}

module.exports = controller;