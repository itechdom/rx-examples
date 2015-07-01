/**
* This is a file where you can define various routes globally. It's better than
* defining those in server.js, but ideally you should be defining routes as part of
* modules. @see example "hello" module to get a taste of how this works.
*/

// Third party libraries
var express = require('express')
  , exports = module.exports = express()
  , app = exports;


//route for the public folder which contains the front end
app.use(express.static(__dirname+"/public"));


// Local includes
//var modHello = require('./hello');

/** Global ROUTES **/
//app.get('/blog', express.static(__dirname+"/blog/public"));
