'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
const webpack = require('webpack-stream');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['babel', 'sass'], function () {

  browserSync.init({
    server: '.',
    notify: false
  });

  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch(['./*.html','./src/js/*.js']).on('change', browserSync.reload);
});

gulp.task('babel', function () {
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('index.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets'))
    .pipe(browserSync.stream());
});

gulp.task('webpack', function () {
  return gulp.src('src/js/index.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('assets'));
});

gulp.task('sass', function () {
  return gulp.src('src/scss/index.scss')
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(gulp.dest('assets'))
    .pipe(browserSync.stream());
});

gulp.task('build', ['babel', 'sass']);
gulp.task('default', ['serve', 'webpack']);
