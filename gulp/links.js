//Generate links from components folder to assist in generating links
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
var webpackConfig = require("../webpack.config.js");
var util = require('util');
var glob = require('glob');
var componentFiles;
var componentFolders = {};
var path = require('path');
var clone = require('clone');

//delete output and entry
var componentsWebpackConfig = clone(webpackConfig);
delete componentsWebpackConfig.entry;
delete componentsWebpackConfig.output;

module.exports = function(options){

	//make a dev and a build components
	//two entries?
	gulp.task('webpack:components', function() {

		glob("app/**/*.component.js", {}, function (er, files) {

			componentFiles = files;
			//map files to folders
			componentFiles = componentFiles.map(function(file){

				//get the file associated with the component since it has everything ...
				//remove .component from the file name
				file = file.replace(".component","");

				//map files to folders?
				//TODO: separate this into its own function
				var fileName = path.basename(file);
				var dirName = path.dirname(file);
				componentFolders[fileName] = dirName; 
				return file;
			});
			//filter out to build files
			componentFiles = componentFiles.filter(function(file){
				var dirName = path.dirname(file);
				var dirArr = dirName.split(path.sep);
				var parentName = dirArr[dirArr.length-1];
				return parentName != 'build';
			})
			return gulp.src(componentFiles)
			.pipe(named())
			.pipe(webpack(componentsWebpackConfig))
			.pipe(gulp.dest(function(file) {
				var fname = path.basename(file.path);
				return componentFolders[fname]+"/build";
			}));

		})

	});

}
