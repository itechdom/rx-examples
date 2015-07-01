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
	var routeMaster = require('routeMaster');



	var Model = require('./models/blog');

	var Controller = require('./controllers/blog');
	var acl = require("acl");
	// Don't just use, but also export in case another module needs to use these as well.
	exports.callbacks = Controller;

	//require routes file
	routes = require('./routes')(app,Controller)

	//register my routes with route master
	routeMaster.registerRoute('/blog',routes);
