//init all data here
var http = require('http');
var server = http.createServer();
var dispatcher = require('./dispatcher');
var Rx = require('rx');
var router = require('./router.js');
var a = require('./controllers/a');
var b = require('./controllers/b');
var c = require('./controllers/c');
var EventEmitter = require('events').EventEmitter,
        customEvent = new EventEmitter();

var renderer = require('./renderer.js');
var request = require('./request.js');

//var RxNode = require('rx-node');

//handle one side of the request, which is initializing the globals
server.on('request',function(req,res){
    //we are making res global so we can render the response down the pipeline
    global.res = res;
    global.server = server;

    //I will use this custom event here instead since it will make it very easy to send throught he pipeline insted of using a global routes file;
    customEvent.emit('request',req);
    customEvent.emit('response',res);

    //dispatcher(source,'router');
    //check to see if the route belongs to us?
});

//pass the request to router?
//
var source = Rx.Observable.fromEvent(server, 'request');
var requestStream = Rx.Observable.fromEvent(customEvent,'request');
var responseStream = Rx.Observable.fromEvent(customEvent,'response');
request.stream = requestStream;

//combines both of them at once
var inputStream = Rx.Observable.combineLatest(requestStream,responseStream,function(req,res){
	return {request:req,response:res};
});


/*inputStream.subscribe(function(res){
	//console.log(req,"--------Request--------------");
});
*/


//figure out a way to register these routes in the router memory and then look them up and assign to the right observable instead of filtering through every request
a(router(source,'/a'));
b(router(source,'/b'));
c(router(source,'/c'));



//we attach a debugger here to display the stream as we are going through
//final resort is here
source.subscribe(function(req){
    index = global.myRoutes.indexOf(req.url);
    if(index == -1){
	renderer("route aint here body");
    }
});

//plugin to routes here, or why not make this agnostic and leave it to the dispatcher to do that?
server.listen(3000, '127.0.0.1');

console.log("server is listening on 1337");

module.exports = source;
