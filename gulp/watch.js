'use strict';

var gulp = require('gulp');
var serve = require('browser-sync');

module.exports = function(options) {
gulp.task('watch', function(){
	var files = options.main+"/*/**";
	gulp.watch(files, ['webpack', 'serve']);
});
};
