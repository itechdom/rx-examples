'use strict';

var gulp = require('gulp');
var serve = require('browser-sync');


module.exports = function(options) {
gulp.task('watch', function(options){
	gulp.watch(options.src, ['webpack', serve.reload()]);
});
};
