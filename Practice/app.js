var express = require('express');
var bodyParser  = require("body-parser");
var app = express();
var mongoose = require('mongoose');

var indexRoutes = require("./routes/index");

var url = "mongodb://localhost/practice";
mongoose.connect(url);



app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use("/", indexRoutes);


app.listen(3000);