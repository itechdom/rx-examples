'use strict';
var Rx = require('rx');
var serverActions = require('../server/server.actions.js');
var dispatcher = require('../dispatcher/dispatcher.js');


class actionMain{

    constructor(){
        //All the default actions for this app
        var request = serverActions['request$'].filter((req)=>{
            return req.url == "/todo";
        });
        return {
            request$:request,
            get$:request.filter((req)=>{
                return req.method == 'GET';
            }),
            post$:request.filter((req)=>{
                return req.method == 'POST';
            }),
	    update$:request.filter((req)=>{
		    return req.method == 'UPDATE';
	    }),
            delete$:request.filter((req)=>{
                return req.method == 'DELETE';
            }),
            input$:Rx.Observable.fromEvent(dispatcher.customEvent,'todo.input$'),
            output$:Rx.Observable.fromEvent(dispatcher.customEvent,'todo.output$')
       }
    }
}
module.exports = new actionMain();
