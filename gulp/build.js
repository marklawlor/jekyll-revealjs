var fs = require('fs');
var del = require('del');

gulp.task('clean', function(cb){
 del(['_posts/**'], cb);        
});


gulp.task('prefixPosts', ['clean'], function(){
  return gulp.src("posts/*.md")
    .pipe(gulp.dest("_posts"))
    .pipe($.map(function(file){
      var match = $.match(file.path, /\/\d\d-.*\.md$/);
      var filename = file.path.replace(/^.*[\\\/]/, '');
      var prefix = "/1-1-1-";
      var newPath;

      if(match){
        newPath = file.base + prefix + filename;
      }
      else {
        newPath = file.base + prefix + "0" + filename;
      }

      fs.rename(file.path, newPath, function(err) {
        if ( err ) console.log('ERROR: ' + err);
      });
    }));
});


gulp.task('build', ['prefixPosts'], function(){
  require('child_process').spawn('jekyll', ['build'], {stdio: 'inherit'});
});
