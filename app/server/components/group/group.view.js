'use strict';
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./group.actions.js');
var model = require('./group.model.js');
var renderer = require('../renderer/renderer.js');
var dispatcher = require('../dispatcher/dispatcher.js');


class groupView{

    constructor() {

        actions.request$.subscribe((data)=>{
            this.render("<h1>message here ...</h1>")
        });
        this.render = function(message){
            dispatcher.customEvent.emit("group.output$",message);
            renderer(message);
        }
    }
}

module.exports = new groupView();
