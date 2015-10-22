var gulp = require('gulp');
var gutil = require('gulp-util');
var _ = require('lodash');
var wrench = require('wrench');
var sync = require('run-sequence');

var options = {
  src: './app/client/main.js',
  dist: './dist/',
  main:'./app/',
  components:'app/**/*.component.js',
  tmp: '.tmp',
  test:'app/**/*.spec.js',
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  }
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', function(done){
  sync('webpack:build-dev', 'serve:client','serve:server', 'watch', done);
});
