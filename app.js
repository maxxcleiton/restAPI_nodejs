var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Bem-vindo ao express!");
});
app.listen(5000, function () {
  console.log("Servidor escutando na porta 5000");
});