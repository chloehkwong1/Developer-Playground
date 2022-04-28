const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// use urlsencoded to grab information from a html form
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  var result = num1 + num2;

  res.send("The result of your calulation is " + result);
});

app.listen(3000, function (req, res) {
  console.log("Server is running on port 3000.");
});
