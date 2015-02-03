gulp.task('serveAndWatch', ['prefixPosts'], function(){
  require('child_process').spawn('jekyll', ['serve', '--watch'], {stdio: 'inherit'});
});


gulp.task('serve', ['prefixPosts'], function(){
  //require('child_process').spawn('jekyll', ['serve'], {stdio: 'inherit'});
});
