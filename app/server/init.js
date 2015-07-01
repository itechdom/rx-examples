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


//var RxNode = require('rx-node');

//handle one side of the request, which is initializing the globals
server.on('request',function(req,res){

    //we are making res global so we can render the response down the pipeline
    global.res = res;
    global.server = server;
    //dispatcher(source,'router');

});

//pass the request to router?
var source = Rx.Observable.fromEvent(server, 'request');

//or we could register them here?
aStream = router(source,'/auth');
a(aStream);
//router(source);

//the router could register all the controllers to that source
hello(source);
//a(source);
b(source);
c(source);

//timeTraveller(source)

//we attach a debugger here to display the stream as we are going through
source.subscribe(function(stream){
    console.log(stream.url+" was requested");
});

//plugin to routes here, or why not make this agnostic and leave it to the dispatcher to do that?
server.listen(1337, '127.0.0.1');

console.log("server is listening on 1337");

module.exports = source;