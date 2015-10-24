'use strict';
var $ = require('jquery');
var Rx = require('rx');
var serverActions = require('../server/server.actions.js');

class actionMain{

    constructor(){
        //All the default actions for this app
        var request$ = serverActions['request$'];
        return {
            request$: request$,
            input$:request$
        }
    }
}
module.exports = new actionMain();
