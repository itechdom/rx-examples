'use strict';
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./actions.js');
var model = require('./model.js');


class todoView{

    constructor() {

        actions.request$.subscribe(function(data){
            console.log("HEYYY");
        });
        this.render = function(){

        }

    }
    wire(){

    }
    unWire(){

    }
}

module.exports = new todoView();
