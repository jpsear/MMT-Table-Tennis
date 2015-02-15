 var gulp = require('gulp'),
     sass = require('gulp-ruby-sass'),
     autoprefixer = require('gulp-autoprefixer'),
     rename = require('gulp-rename'),
     minifycss = require('gulp-minify-css');

 // gulp.task('styles', function() {
 //   return gulp.src('src/styles/style.scss')
 //    .pipe(sass({ style: 'expanded' }))
 //    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
 //    .pipe(gulp.dest('dist/assets/css'))
 //    .pipe(rename({suffix: '.min'}))
 //    .pipe(minifycss())
 //    .pipe(gulp.dest('dist/assets/css'))
 //    .pipe(notify({ message: 'Styles task complete' }));
 // });

 gulp.task('styles', function() {
     return sass('src/styles/style.scss', { style: 'expanded' })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/assets/css'))
 });

 gulp.task('default', function() {
     gulp.start('styles');
 });