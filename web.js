var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(255);
var fn  = fs.readFileSync('index.html');
var len = buf.write(fn,0);

app.get('/', function(request, response) {
  response.send('Hello world 2!');
  //response.send(buf.toString('utf8',0,len)); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});