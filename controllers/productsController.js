var express = require('express');
var productsRouter = express.Router();

var get = function (res, res){
    res.send("Showing main page");
}

module.exports = get;