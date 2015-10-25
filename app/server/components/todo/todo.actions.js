'use strict';
var Rx = require('rx');
var serverActions = require('../server/server.actions.js');


class actionMain{

    constructor(){
        //All the default actions for this app
        return {
            request$: serverActions['request$'].filter((req)=>{
                return req.url == "/test";
            }),
            response$: serverActions['response$']
       }
    }
    wire(){
    }
}
module.exports = new actionMain();
