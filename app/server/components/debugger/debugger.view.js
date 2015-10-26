'use strict';
var Rx = require('rx');
var actions = require('./debugger.actions.js');
var model = require('./debugger.model.js');
var renderer = require('../renderer/renderer.js');


class debuggerView{

    constructor() {

    }
    formatOutput(){


        model.components.forEach((component)=> {
            console.log(component.constructor.name);
        })
    }
    wire(){

        actions.request$.subscribe(()=>{
            this.render("hello");
        });

        this.render = function(message){
            this.formatOutput();
            renderer( model.components[0].constructor.name);
        }

    }
    unWire(){

    }
}

module.exports = new debuggerView();
