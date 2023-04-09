var express = require('express');
var productsRouter = express.Router();

var productsController = require('../controllers/productsController');

productsRouter.route('')
    .get(productsController);


module.exports = productsRouter;