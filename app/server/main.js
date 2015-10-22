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

console.log("gfgfgfg")

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


var source = Rx.Observable.fromEvent(server, 'request');
var requestStream = Rx.Observable.fromEvent(customEvent,'request');
var responseStream = Rx.Observable.fromEvent(customEvent,'response');
request.stream = requestStream;

//combines both of them at once
var inputStream = Rx.Observable.combineLatest(requestStream,responseStream,function(req,res){
	return {request:req,response:res};
});

//add the information of the output here
source['from'] = 'main';


//we attach a debugger here to display the stream as we are going through
//final resort is here
//source.subscribe(function(req){
//    index = global.myRoutes.indexOf(req.url);
//    if(index == -1){
//	renderer("route aint here buddy");
//    }
//});

debug('main',null,source);


//plugin to routes here, or why not make this agnostic and leave it to the dispatcher to do that?
server.listen(4000, '127.0.0.1');

console.log("server is listening on 4000");

module.exports = source;
