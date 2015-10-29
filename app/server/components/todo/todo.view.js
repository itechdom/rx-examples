'use strict';
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./todo.actions.js');
var model = require('./todo.model.js');
var renderer = require('../renderer/renderer.js');
var dispatcher = require('../dispatcher/dispatcher.js');
var util = require("util");


class todoView{

    constructor() {
        actions.request$.subscribe((data)=>{
            this.render([{'name':"hello"}])
        });
        this.render = function(message){
            dispatcher.customEvent.emit("todo.output$",message);
            var d = JSON.stringify(message);
            renderer(d);
        }
    }
}

module.exports = new todoView();
