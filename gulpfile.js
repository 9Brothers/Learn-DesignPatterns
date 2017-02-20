var gulp = require('gulp');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('default', ['typescript'], function () {
  watch('app/**/*.ts', function() {
    gulp.start('typescript');
  })
});

gulp.task('typescript', function(){
  var tsResult = gulp.src('app/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return tsResult.js
    // .pipe(concat('all.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build'));
});

gulp.task('main', function() {
  var tsResult = gulp.src('Main.ts')
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return tsResult.js
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});