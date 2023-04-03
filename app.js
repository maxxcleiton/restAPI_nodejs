var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Bem-vindo ao express!");
});
app.listen(5000, function () {
  console.log("Servidor escutando na porta 5000");
});


// the var express requires (calls) the express framework to the actual document and the "express" var

// the var app calls the express function to the ¨app" var


// app.get is the GET method, app is the express framework

// listen makes it works on port 5000