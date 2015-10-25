'use strict';
var $ = require('jquery');
var Rx = require('rx');
var serverActions = require('../server/server.actions.js');

class actionMain{

    constructor(){
        //All the default actions for this app
        return {
            request$: serverActions['request$']
        }
    }
}
module.exports = new actionMain();


