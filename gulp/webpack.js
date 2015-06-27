// use our webpack.config.js to 
// build our modules
var gulp = require('gulp');
var webpack = require('gulp-webpack');

var config = {
	devtool: 'sourcemap',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			 { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
       { test: /\.html$/, loader: 'raw' },
			{test: /\.scss$/, loader: "style!css!sass"},
			{ test: /\.css$/, loader: 'style!css' }
		]
	}
};

module.exports = function(options) {
gulp.task('webpack', function(){
	return gulp.src(options.src)
		.pipe(webpack(config))
		.pipe(gulp.dest(options.dist));
});
};
