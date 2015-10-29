'use strict';
var Rx = require('rx');
var dispatcher = require('../dispatcher/dispatcher.js');
var clientActions = require('../client/client.actions.js')


class actionMain{

    constructor(){
        //All the default actions for this app
        return {
            request$: clientActions['request$']
        }
    }
}
module.exports = new actionMain();

