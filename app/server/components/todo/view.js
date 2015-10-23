'use strict';
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./actions.js');
var model = require('./model.js');
var renderer = require('../renderer/renderer.js');


class todoView{

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

module.exports = new todoView();
