//init all data here
var http = require('http');
var server = http.createServer();
var Rx = require('rx');
var router = require('./router.js');
var EventEmitter = require('events').EventEmitter,
        customEvent = new EventEmitter();
var util = require('util');
var renderer = require('./components/renderer.js');
var request = require('./components/request.js');
var debug = require('./components/debugger.js');

//handle one side of the request, which is initializing the globals
server.on('request',function(req,res){
    //we are making res global so we can render the response down the pipeline
    //TODO: replace this with something that makes more sense, like an object (app ... etc)
    global.res = res;
    global.server = server;

    //I will use this custom event here instead since it will make it very easy to send throught he pipeline insted of using a global routes file;
    customEvent.emit('request',req);
    customEvent.emit('response',res);

});


var source = Rx.Observable.fromEvent(server, 'request');
var requestStream = Rx.Observable.fromEvent(customEvent,'request');
var responseStream = Rx.Observable.fromEvent(customEvent,'response');
request.stream = requestStream;


var inputStream = Rx.Observable.combineLatest(requestStream,responseStream,function(req,res){
	return {request:req,response:res};
});


debug('main',null,source);


//plugin to routes here, or why not make this agnostic and leave it to the dispatcher to do that?
server.listen(4000, '127.0.0.1');

console.log("server is listening on 4000");

module.exports = source;
