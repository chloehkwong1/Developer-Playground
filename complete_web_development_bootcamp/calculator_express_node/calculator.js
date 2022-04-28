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

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = req.body.weight;
  var height = req.body.height;

  var bmi = weight / ((height / 100) ^ 2);

  res.send("Your BMI is " + bmi);
});

app.listen(3000, function (req, res) {
  console.log("Server is running on port 3000.");
});
