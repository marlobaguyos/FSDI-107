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
const { mongo } = require('mongoose');
mongoose.connect('mongodb://ThiIsAPassword:TheRealPassword@cluster0-shard-00-00-euadh.mongodb.net:27017,cluster0-shard-00-01-euadh.mongodb.net:27017,cluster0-shard-00-02-euadh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
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

/*******************************************************
 *  API functionality
 ********************************************************/
var catalog = [];
var ItemDB; //This is model for DB items

app.get('/api/catalog', function (req, res) {
    // var data = []
    res.json(catalog);
});

app.post('/api/items', function (req, res) {
    var itemForMongo = ItemDB(req.body);
    itemForMongo.save(function(error, savedItem){
        
    });
    // item.id = catalog.length + 1;
    // catalog.push(item);

    res.json(item);
});

/** Start the server and DB connection */

db.on('open', function(){
    console.log('Yeeei, connected to DB');

    var itemSchema = mongoose.Schema({
        code: String,
        title: String,
        price: Number,
        description: String,
        category: String,
        image: String,
        user: String
    });

    //create obj constructor
    ItemDB = mongoose.model('itemsCH7', itemSchema);
});

db.on('error', function(details){
    console.log('Error: DB connection error')
    console.log("Error details: " + details);
});

app.listen(8080, function () {
    console.log("Server running at localhost:8080");
});
