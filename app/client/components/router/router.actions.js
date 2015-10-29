'use strict';
var $ = require('jquery');
var Rx = require('rx');
var serverActions = require('../server/server.actions.js');

class actionMain{

    constructor(){
        //All the default actions for this app
        var request$ = serverActions['changeRoute$'].subscribe((req)=>{
            console.log("route Requested=====>",req)
        });
        return {
            request$: request$,
            input$:request$
        }
    }
}
module.exports = new actionMain();
