//init all data here
var http = require('http');

var count = 0;

count++;

console.log(count);

var server = http.createServer();

var dispatcher = require('./dispatcher');

var router = require('./router');

var Rx = require('rx');

function Renderer(req,res){
    this.res = res;
}

server.on('request',function(req,res){

    //we are making res global so we can render the response down the pipeline
    global.res = res;
    global.server = server;


    //var renderer= new Renderer(req,res);
    //
    //if(!global.myApp) {
    //    global.myApp = {};
    //    global.myApp.renderer = renderer;
    //}
    //dispatcher(source,'router');

});

//pass the request to router?
var source = Rx.Observable.fromEvent(server, 'request');

//this goes to the router and onwards
source.subscribe(router);

//we attach a debugger here to display the stream as we are going through
source.subscribe(function(stream){
    console.log("this is me obtaining parallelly a stream as it goes through");
});


//plugin to routes here, or why not make this agnostic and leave it to the dispatcher to do that?
server.listen(1337, '127.0.0.1');

console.log("server is listening on 1337");