//load express as a dependency
var express = require('express');

// Invoking express
var app = express();

// Registering an event handler for a GET request
// to the root of the application
app.get('/', function(req, res) {
  res.end('Hello, world!');
});

// server and port
var server = app.listen(3000, function() {
  console.log('Example app has started listening at http:localhost:3000');
});
