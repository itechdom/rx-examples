'use strict';
var Rx = require('rx');
var dispatcher = require('../dispatcher/dispatcher.js');
var clientActions = require('../client/client.actions.js')


class actionMain{


    constructor(){
        //All the default actions for this app
        return {
            request$: clientActions['request$'].filter((d)=> {
                return d.srcElement.URL == "http://localhost:3000/#/todo";
            }),
            viewLoaded$: Rx.Observable.fromPromise($.get('./app/client/components/todo/todo.html'))
        }
    }
    wire(){
    }
}
module.exports = new actionMain();

