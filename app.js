/*var http = require('http');

var myServer = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write('<h1>Roux Meetup</h1>');
    res.end();
});

myServer.listen(3000, function() {
    console.log('Server is running on port 3000...');
});*/

var express = require('express');
var app = express();

app.get('/',function(req, res) {
    res.send('<h1>Roux Academy Meetup</h1>');
});

app.listen(3000, function() {
    console.log('Server is running on port 3000...');
});