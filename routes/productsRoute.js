var express = require('express');
var productsRouter = express.Router();

productsRouter.route('')
    .get(function(req,res) {
        res.send('Showing the main page... of productsRouter');
    });


    module.exports = productsRouter;