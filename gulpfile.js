var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify');// Сообственно Gulp JS

gulp.task('default', function(){
    console.log('hello');
});

gulp.task('compact', function(){
    // Single entry point to browserify
    gulp.src('js/index.js')
        .pipe(browserify())
        .pipe(gulp.dest('./js/runtime/'));

    gulp.src('js/components.js')
        .pipe(browserify())
        .pipe(gulp.dest('./js/runtime/'));
});

gulp.task('libraries', function(){
    gulp.src('js/libraries.js')
        .pipe(browserify())
        .pipe(gulp.dest('./js/runtime/'));
});