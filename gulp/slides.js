//this task is responsible for looking
var gulp = require('gulp');
var inject = require('gulp-inject');
var gutil = require('gulp-util');
var highlight = require('highlight.js');
var data = require("gulp-data");

var injector = require("../gulp-custom/injector/index.js");
var parser = require("../gulp-custom/parser/index.js");

module.exports = function (options) {
    gulp.task('buildSlides', function () {

        //set the marked options to highlight code
        var markedOptions = {
            highlight: function (code) {
                return highlight.highlightAuto(code).value;
            }
        };
        return gulp.src(['../material/**/*.md', '!../material/node_modules/**'])
            .pipe(
            injector(gulp.src(['../material/**/*', '!../material/node_modules/**'], {read: true}), {
                starttag: 'include:{{file}}\n```{{ext}}',
                endtag: '```',
                transform: function (filepath, file, i, length) {
                    return file.contents.toString('utf8');
                }
            })
            )
            .pipe(gutil.buffer())
            .pipe(parser('slides.json', markedOptions))
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

    gulp.task('inject-test', function () {
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

    gulp.task('fm-test', function () {
        return gulp.src('../material/01-intro/00-index.md')
            .pipe(data(function (file) {
                var content = fm(String(file.contents));
                file.contents = new Buffer("what's up");
                //return content.attributes;
                return file;
            }))
            .pipe(gulp.dest('build'));
    });


    gulp.task('mindmap', function () {
        gulp.src('../mindmaps/javascript.json')
            .pipe(data(function (file) {
                content = String(file.contents);
                object = JSON.parse(content)
                return object;
            })).pipe(gulp.dest('./hello'));
    });
}
