var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var async = require('async');
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'contactdb'})

//
//controllers
var contactController = require("./controllers/contactController");

// //Express request pipeline
// var app = express();
// app.use(express.static(path.join(__dirname, "../app/dist")));
// app.use(bodyParser.json())
// app.use("/api", contactController);


var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(7777,function(){
    console.log("Started listening on port", 7777);
})
