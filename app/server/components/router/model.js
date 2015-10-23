'use strict';
var Rx = require('rx');
var EventEmitter = require('wolfy87-eventemitter');
var dataEmitter = new EventEmitter();

class routerModel{

    constructor() {
        this.routes = {};
    }
    registerRoute(){

    }
    //handles different actions
    wire(){
    }
}
module.exports = new routerModel();
