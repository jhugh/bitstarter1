var express = require('express');

var app = express.createServer(express.logger());

//var buf = new Buffer(255);
//var fn  = fs.readFileSync('index.html');
//buf.write(fn);

app.get('/', function(request, response) {
  response.send('Hello world 2!');
  //response.send(buf.toString()); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});