//init all data here
var http = require('http');

var server = http.createServer();

var dispatcher = require('./dispatcher');

//now we can listen to events and then call the dispatcher?
dispatcher(server,'request','router');

server.on('request',function(req,res){
	//pass the request to router?
	//what about the response?
});

//plugin to routes here, or why not make this agnostic and leave it to the dispatcher to do that?
server.listen(1337, '127.0.0.1');
