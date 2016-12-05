var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 1993;
app.use(express.static(__dirname + '/public'));
server.listen(port);
console.log('Server running on '+ port);
exports = module.exports=app;