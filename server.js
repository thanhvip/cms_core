var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');// error
var logger = require('morgan');// xử lý log
var cookieParser = require('cookie-parser');// cookie
var cookieSession = require('cookie-session');//section
var server = require('http').createServer(app);
var port = process.env.PORT || 1993;
app.use(express.static(__dirname + '/public'));

var routes =require('./routes');
routes(app);

server.listen(port);
console.log('Server running on '+ port);
exports = module.exports=app;