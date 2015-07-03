//init all data here
var http = require('http');
var server = http.createServer();

var dispatcher = require('./dispatcher');

var Rx = require('rx');

var router = require('./router.js');

var hello = require('./helloController');
var a = require('./controllers/a');
var b = require('./controllers/b');
var c = require('./controllers/c');

var renderer = require('./renderer.js');

//var RxNode = require('rx-node');

//handle one side of the request, which is initializing the globals
server.on('request',function(req,res){
    //we are making res global so we can render the response down the pipeline
    global.res = res;
    global.server = server;
    //dispatcher(source,'router');
    
    //check to see if the route belongs to us?


});


//pass the request to router?
var source = Rx.Observable.fromEvent(server, 'request');


//or we could register them here?
aStream = router(source,'/auth');
a(aStream);

//router(source);

//the router could register all the controllers to that source
hello(router(source,'/hello'));


//a(source);
b(router(source,'/b'));
c(router(source,'/c'));

//timeTraveller(source)

//we attach a debugger here to display the stream as we are going through
source.subscribe(function(req){

    index = global.myRoutes.indexOf(req.url);

    console.log(index);

    if(index == -1){
	console.log('route aint here');
	renderer("route aint here body");
    }

});

//plugin to routes here, or why not make this agnostic and leave it to the dispatcher to do that?
server.listen(3000, '127.0.0.1');

console.log("server is listening on 1337");

module.exports = source;
