'use strict';
var Rx = require('rx');
var model = require('./router.model.js');
var view = require('./router.view.js');
var actions = require('./router.actions.js');
class routerMain{
    constructor(){
        //wire the view and model
        this.model = model;
        this.view = view;

        model.registerRoute("/routes");

        actions.request$.subscribe((req)=>{
            if (model.matchRoute(req.url)){
                console.log("I got a route");
            }
            else{
                view.render("No Route for here");
            }
        });

        actions.request$.filter((req)=>{
            return req.url == '/routes';
        }).subscribe((req)=>{
            view.render(model.routes);
        });


        model.wire();
        view.wire();
    }
}
module.exports = new routerMain();