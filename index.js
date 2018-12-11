var express = require('express');

var app = express();

app.get('/', function (req, res) {
 // res.send('Hello abhilash branch World!');
 
 
const mongodb = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var uri = "YOUR_URL";
MongoClient.connect(uri, function (err, db) {
//db.close();
if (err) {
res.send(err);
} else {
res.send("Connected success");
}
});

 
});

var port = process.env.PORT || 1337;
var server = app.listen(port,function(){
	
});

console.log("Server running at http://localhost:%d", port);
