var fs = require ('fs');
var indexHtml= fs.readFileSync('index.html');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(indexHtml.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
