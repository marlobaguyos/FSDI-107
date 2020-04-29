var http = require('http');
var express = require('express');


/*******************************************************
 *  Configuration section
 ********************************************************/
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Allow CORS policy

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Db connection settings
var mongoose = require('mongoose');
mongoose.connect('');
var db = mongoose.connection;


/*******************************************************
 *  Web Server Functionality
 ********************************************************/

app.get('/', function (req, res) {
    console.log("Req on root page");
    res.send("<h1 style='color:red;'>Hello World!</h1>");
});

app.get('/about', function (req, res) {
    res.send("I'm Marlo Baguyos");
});

app.listen(8080, function () {
    console.log("Server running at localhost:8080");
});

/*******************************************************
 *  API functionality
 ********************************************************/
var catalog = [];

app.get('/api/catalog', function (req, res) {
    // var data = []
    res.json(catalog);
});

app.post('/api/items', function (req, res) {
    var item = req.body;
    item.id = catalog.length + 1;
    catalog.push(item);

    res.json(item);
});

