'use strict';
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./todo.actions.js');
var model = require('./todo.model.js');
var renderer = require('../renderer/renderer.js');
var dispatcher = require('../dispatcher/dispatcher.js');


class todoView{

    constructor() {
    }
    wire(){
        actions.request$.subscribe((data)=>{
            this.render("<h1>message here ...</h1>")
        });
        this.render = function(message){
            dispatcher.customEvent.emit("todo.view.rendered$",message);
            renderer(message);
        }
    }
    unWire(){

    }
}

module.exports = new todoView();
