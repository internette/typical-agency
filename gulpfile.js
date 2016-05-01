var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('default', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  gulp.watch('./css/*.scss', ['sass']);
});
gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
//
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });
