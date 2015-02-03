gulp.task('deploy', function () {
  return gulp.src(['src/_site/**/*'])
    .pipe($.ghPages());
});

gulp.task('deploy-init', $.shell.task([
  'git checkout --orphan gh-pages',
  'git rm -rf .',
  'touch README.md',
  'git add README.md',
  'git commit -m "Init gh-pages"',
  'git push --set-upstream origin gh-pages',
  'git checkout master'
]));
