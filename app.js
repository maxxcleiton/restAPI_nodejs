var express = require("express");
var mongoose = require("mongoose");

var app = express();

var url =
  "mongodb+srv://gamatesu123:9naXlNX9H6ZUV3Dh@restapi.q0azbva.mongodb.net/test";

var db = mongoose.connection;

db.on("error", console.error);

db.once("open", function () {
  console.log("Connected to restAPI database from MongoDB");
});

mongoose.connect(url);

app.listen(5000, function () {
  console.log("Server listening on port 5000");
});

// the var express requires (calls) the express framework to the actual document and the "express" var

// the var app calls the express function to the ¨app" var

// app.get is the GET method, app is the express framework

// listen makes it works on port 5000

// app.get("/", function (req, res) {
//   res.send("Bem-vindo ao express!");
// });
