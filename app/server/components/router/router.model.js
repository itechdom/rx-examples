'use strict';
var Rx = require('rx');
var EventEmitter = require('wolfy87-eventemitter');
var dataEmitter = new EventEmitter();

class routerModel{
    constructor() {
        this.routes = {};
    }
    registerRoute(route){
        this.routes[route] = route;
    }
    matchRoute(route){
        if(this.routes[route] || route == '/favicon.ico'){
            return true;
        }
        else{
            return false;
        }
    }
}
module.exports = new routerModel();
