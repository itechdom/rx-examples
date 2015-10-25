'use strict';
var EventEmitter = require('events').EventEmitter,
    customEvent = new EventEmitter();

class dispatcherMain{
    constructor(){
        this.customEvent = customEvent;
    }
}

module.exports = new dispatcherMain();
