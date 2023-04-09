var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var productModels = new Schema({
  nome: String,
  descricao: String,
  preco: Number,
  estoque: Number,
  ativo: { type: Boolean, default: true },
});

module.exports = mongoose.model("Product", productModels);

var Product = require("../models/productModels");

var get = function (req, res) {
  Product.find(function (err, products) {
    if (err) {
      res.status(500);
      res.send("Server Internal error ");
    } else {
      res.status(200);
      res.send(products);
    }
  });
};

module.exports = get;

//Here we are creating the data model to represent an product and his informations

//Schema is a class from mongoose to define the schema of the product we are working with

//Every schema tells to mongoose a way of defining the document format inside the collection

//These are the allowed types of schema: String, Number, Date, Buffer, Boolean, Mixed, ObjectId and Array

//For we can use our Schema, we need to convert it to a way the mongoose can receive and work with it,

//for this we pass the schema to module.exports = mongoose.model("modelName", schema)

//and at the code we are exporting it in a way it can be used in the application

//this way, we did our "model" using Mongoose and made a connection with our remote database "restAPI" on MONGODB

//Source: https://macoratti.net/17/04/node_restmgdb3.htm
