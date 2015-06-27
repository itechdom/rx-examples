'use strict';

var gulp = require('gulp');
var serve = require('browser-sync');


module.exports = function(options) {
gulp.task('watch', function(options){
	console.log("reloading");
	gulp.watch(options.src, ['webpack', serve.reload()]);
});
};
