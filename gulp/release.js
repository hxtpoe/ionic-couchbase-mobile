'use strict';

var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del']
});

gulp.task('clean', function (done) {
    $.del(['onic-couchbase-mobile.min.js', 'ionic-couchbase-mobile.js'], done);
});

gulp.task('release', function () {
    gulp.src(['src/**/*.js'])
        .pipe($.concat('ionic-couchbase-mobile.min.js'))
        .pipe(ngAnnotate())
        .pipe($.uglify())
        .pipe(gulp.dest('.'));
    gulp.src(['src/**/*.js'])
        .pipe($.concat('ionic-couchbase-mobile.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('.'));
});
