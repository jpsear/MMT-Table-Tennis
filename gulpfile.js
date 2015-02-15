 var gulp = require('gulp'),
     sass = require('gulp-ruby-sass'),
     autoprefixer = require('gulp-autoprefixer'),
     rename = require('gulp-rename'),
     minifycss = require('gulp-minify-css'),
     uglify = require('gulp-uglify'),
     concat = require('gulp-concat');

 gulp.task('styles', function() {
    return sass('src/styles/style.scss', { style: 'expanded' })
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('dist/assets/css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(minifycss())
      .pipe(gulp.dest('dist/assets/css'))
 });

 gulp.task('scripts', function() {
  return gulp.src(['src/js/tabletop.js', 'src/js/sheetsee.js', 'src/js/app.js'])
   .pipe(concat('app.js'))
   .pipe(uglify())
   .pipe(gulp.dest('dist/assets/js'));
 });

 gulp.task('default', function() {
    gulp.start('styles');
    gulp.start('scripts');
 });