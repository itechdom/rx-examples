'use strict';
var Rx = require('rx');
var model = require('./router.model.js');
var view = require('./router.view.js');
var actions = require('./router.actions.js');
var debug = require('../debugger/debugger.js');


class routerMain{
    constructor(){
        //wire the view and model
        this.model = model;
        this.view = view;
        this.actions = actions;

        model.registerRoute("/routes");

        actions.request$.subscribe((req)=>{
            if (model.matchRoute(req.url)){
                console.log("I got a route");
            }
            else{
                view.render("No Route for here");
            }
        });

        debug.model.registerComponent(this);

        model.wire();
        view.wire();
    }
}
module.exports = new routerMain();