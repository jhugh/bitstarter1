var express = require('express');
var fs      = require('fs');

var app = express.createServer(express.logger());

var buf = new Buffer(15000);
var fn  = fs.readFileSync('index.html','utf8');
var len = buf.write(fn,0,'utf8');



app.get('/', function(request, response) {
  //response.send('Hello world 2!');
  //response.send(fn);
  response.send(buf.toString('utf8',0,len)); 

});

//var port = process.env.PORT || 5000;
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
