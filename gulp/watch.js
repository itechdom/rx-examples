'use strict';
var gulp = require('gulp');
var serve = require('browser-sync');

module.exports = function(options) {

gulp.task('reload',function(){
	serve.reload();
});
gulp.task('watch', function(){
	gulp.watch(options.main+"**/*", ['webpack:build-dev', 'reload']);
});
};
