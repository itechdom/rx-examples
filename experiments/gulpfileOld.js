var gulp	 		= require('gulp'),
	webpack		= require('gulp-webpack'),
	path			= require('path'),
	sync			= require('run-sequence'),
	serve			= require('browser-sync'),
	rename		= require('gulp-rename'),
	template	= require('gulp-template'),
	fs				= require('fs'),
	yargs			= require('yargs').argv,
	lodash 		= require('lodash'),
	reload		= function () { return serve.reload()},
	data = require('gulp-data'),
	gutil = require('gulp-util'),
	browserify = require('browserify'),
	util = require('util'),
	 swig = require('gulp-swig'),
	inject = require('gulp-inject'),
	path = require('path');
//my own markdown parser here ...
	injector = require('zpresent-injector'),
		parser = require('zpresent-parser'),

		through = require('through2'),

// markdown will parse markdown file, and then it will look for code tags and replace them with appropriate file?
	markdown = require('gulp-markdown-to-json'),

	highlight = require('highlight.js'),

	fm = require('front-matter'),
	flatten = require('flat'),
	shell = require('gulp-shell');


// helper method to resolveToApp paths
var resolveToApp = function(glob){
	glob = glob || '';
	return path.join( 'app', glob); // app/{glob}
};

var resolveToComponents = function(glob){
	glob = glob || '';
	return path.join('app/components', glob); // app/components/{glob}
};


// map of all our paths
var paths = {
	js: resolveToComponents('**/*!(.spec.js).js'), // don't include spec files
	all: resolveToApp('**/*.js'),
	styl: resolveToApp('**/*.styl'), // our stylus files
	html: [
		resolveToApp('**/*.html'),
		path.join('index.html')
	],
	server:'./server.js',
	entry: path.join('app/app.js'),
	output: "./",
	blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

//this task is responsible for looking
gulp.task('buildSlides',function(){

	//set the marked options to highlight code
	var markedOptions = {
		highlight: function (code) {
			return highlight.highlightAuto(code).value;
		}
	};

	return gulp.src(['../material/**/*.md','!../material/node_modules/**'])
		//include examples for concepts
		.pipe(
		inject(gulp.src('../material/**/example/*', {read: true}),{
			starttag: 'include:example\n```{{ext}}',
			endtag: '```',
			transform: function (filepath, file, i, length) {
				return file.contents.toString('utf8');
			}
		})
		)
		//include exercises for concepts
		//.pipe(inject(gulp.src(['../material/**/exercise/*'], {read: true}), {
		//	starttag: 'include:exercise\n```{{ext}}',
		//	endtag: '```',
		//	transform: function (filepath, file, i, length) {
		//		if(file.path.indexOf(currentDir) > -1)
		//			return file.contents.toString('utf8');
		//	}
		//}))
		.pipe(gutil.buffer())
		.pipe(parser('slides.json',markedOptions))
		//todo: move this to another file
		//.pipe(data(function(file){
        //
		//	//var st = file.contents.toString();
		//	//var slides = JSON.parse(st);
         //   //
		//	////let me pass it here to my own module so I can get
         //   //
		//	//var b = browserify();
		//	////GOT IT!
		//	//b.add("../material/01-intro/example.js");
        //
		//	//we use vinyl files, so we need to change the content of a file
		//	//file.contents = new Buffer("what's up");
        //
		//	return file;
		//	//b.bundle();
        //
		//	//now, we need to split the code into two parts
		//	// One is going to be a script embedded in the page, the other is going to be a text for display ...
        //
		//	//return file;
		//}))
		.pipe(gulp.dest('../'))
		.pipe(gulp.dest('./'));
});

gulp.task('inject-test', function() {
	return gulp.src('../material/01-intro/00-index.md')
		.pipe(inject(gulp.src(['../material/01-intro/*.js'], {read: true}), {
			starttag: 'include:{{ext}}```',
			endtag: '```',
			transform: function (filepath, file, i, length) {
				console.log(filepath);
				return file.contents.toString('utf8');
				//return '  "' + filepath + '"' + (i + 1 < length ? ',' : '');
			}
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('fm-test', function() {
	return gulp.src('../material/01-intro/00-index.md')
		.pipe(data(function(file) {
			var content = fm(String(file.contents));
			file.contents = new Buffer("what's up");
			//return content.attributes;
			return file;
		}))
		.pipe(gulp.dest('build'));
});



gulp.task('mindmap',function(){
	gulp.src('../mindmaps/javascript.json')
		.pipe(data(function(file){
			content = String(file.contents);
			object = JSON.parse(content)
			return object;
		})).pipe(gulp.dest('./hello'));
});
// use our webpack.config.js to 
// build our modules
gulp.task('webpack', function(){
	return gulp.src(paths.entry)
		.pipe(webpack(require('./webpack.config')))
		.pipe(gulp.dest(paths.output));
});


gulp.task('serve', function(){
	serve({
		port: process.env.PORT || 3000,
		open: false,
		server: {
			baseDir: "./"
		}
	});

	//start the express server
	shell.task('node server.js');

});

gulp.task('express', shell.task('node server.js')
);


gulp.task('watch', function(){
	var allPaths = [].concat(
		[paths.js],
		[paths.all],
		paths.html,
		[paths.styl]
	);
	gulp.watch(allPaths, ['webpack', reload]);
});

//todo: add a generator for different slides?
//gulp.task('component', function(){
//	var cap = function(val){
//		return val.charAt(0).toUpperCase() + val.slice(1);
//	};
//
//	var name = yargs.name;
//	var parentPath = yargs.parent || '';
//	var destPath = path.join(resolveToComponents(), parentPath, name);
//
//	return gulp.src(paths.blankTemplates)
//		.pipe(template({
//			name: name,
//			upCaseName: cap(name)
//		}))
//		.pipe(rename(function(path){
//			path.basename = path.basename.replace('temp', name);
//		}))
//		.pipe(gulp.dest(destPath));
//});

gulp.task('default', function(done){
	sync('webpack', 'serve','express', 'watch', done);
});
