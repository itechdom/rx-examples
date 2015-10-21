/**
 * This is a self-contained module that defines its routes, callbacks, models and views
 * all internally. Such approach to code organization follows the recommendations of TJ:
 *
 * http://vimeo.com/56166857
 *
 */

// Third-party libraries
var express = require('express')
    , exports = module.exports = express()
    , app = exports;

    var directory = {};

//register routes here
exports.registerRoute = function(mount,routes){

    //////attach descriptions
    for (var method in routes) {
    	routes[method].forEach(function(route){
            //add the mounting point to the url
            route.url = mount + route.url;
    	})
    }

    //add the route to the directory
    directory[mount] = routes;
}

exports.directory = directory;

//admin access only
app.get('/',function(req,res,next){

    res.send(directory);

})



