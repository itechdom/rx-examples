'use strict';

var $ = require('jquery');
var Rx = require('rx');
var fromEvent = Rx.Observable.fromEvent;
/**
 * Created by osama on 10/22/2015.
 */
var EventEmitter = require('events').EventEmitter,
	customEvent = new EventEmitter();
var server = require("./server.js");


//handle one side of the request, which is initializing the globals
server.on('request',function(req,res){
	//I will use this custom event here instead since it will make it very easy to send throught he pipeline insted of using a global routes file;
	global.res = res;
	global.reg = req;
	customEvent.emit('request',req);
	customEvent.emit('response',res);
});


class actionMain{

	constructor(){
		//All the default actions for this app
		return {
			request$: Rx.Observable.fromEvent(customEvent,'request'),
			response$: Rx.Observable.fromEvent(customEvent,'response')
		}
	}
}
module.exports = new actionMain();

