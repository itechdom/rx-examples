'use strict';
var Rx = require('rx');
var EventEmitter = require('wolfy87-eventemitter');
var dataEmitter = new EventEmitter();

class debuggerModel{

    constructor() {
        this.components = [];
    }
    registerComponent(component){
        this.components.push(component);
    }
    wire(){

    }

}
module.exports = new debuggerModel();
