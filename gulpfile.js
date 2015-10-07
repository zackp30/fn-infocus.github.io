'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
gulp.task('watch', ['sass:watch']);