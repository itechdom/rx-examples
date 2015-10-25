'use strict';
var Rx = require('rx');
var actions = require('./debugger.actions.js');
var model = require('./debugger.model.js');
var renderer = require('../renderer/renderer.js');


class debuggerView{

    constructor() {

    }
    wire(){

        actions.request$.subscribe((data)=>{
            this.render("message here ...")
        });
        this.render = function(message){
            renderer(message);
        }
    }
    unWire(){

    }
}

module.exports = new debuggerView();
