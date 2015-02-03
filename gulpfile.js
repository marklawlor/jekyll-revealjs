gulp = require('gulp');
$ = require('gulp-load-plugins')();

require('require-dir')('./gulp');


gulp.task('default', ['clean', 'build']);
