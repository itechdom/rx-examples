'use strict';
var Rx = require('rx');
var EventEmitter = require('wolfy87-eventemitter');
var dataEmitter = new EventEmitter();

class debuggerModel{

    constructor() {
        this.components = [];
    }
    registerComponent(component,inputEvent,outputEvent){
        this.components.push({component,inputEvent,outputEvent});
    }
    wire(){

    }

}
module.exports = new debuggerModel();
