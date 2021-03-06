var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var minifyInline = require('gulp-minify-inline');
var del = require('del');

// Lint JavaScript
gulp.task('lint', function() {
    return gulp.src('dev/assets/js/*.js')
               .pipe(jshint())
               .pipe(jshint.reporter('default'));
});

// Minify HTML and inline scripts and CSS
gulp.task('minifyhtml', function() {
  return gulp.src('dev/**/*.html')
             .pipe(minifyHTML())
             .pipe(minifyInline({jsSelector: 'script[type!="text/x-handlebars-template"]'}))
             .pipe(gulp.dest('dist'));
});

// Compile Sass
gulp.task('sass', function () {
  return gulp.src('dev/assets/scss/*.scss')
             .pipe(sass({outputStyle: 'compressed'}))
             .pipe(gulp.dest('dist/assets/css'));
});

// Minify JavaScript
gulp.task('minifyjs', function() {
  return gulp.src('dev/assets/js/**/*.js')
             .pipe(uglify())
             .pipe(gulp.dest('dist/assets/js/'));
});

// Move images with PNG or JPG extension
gulp.task('moveimages', function() {
  return gulp.src('dev/img/**/*.+(png|jpg)')
             .pipe(gulp.dest('dist/img/'));
});

// Move lib css files; don't need to do this every time
gulp.task('movelibcss', function() {
  return gulp.src('dev/assets/css/lib/*.css')
             .pipe(gulp.dest('dist/css/lib/'));
});

// Move lib js files; don't need to do this every time
gulp.task('movelibjs', function() {
  return gulp.src('dev/assets/js/lib/*.js')
  .pipe(gulp.dest('dist/assets/js/lib/'));
});

gulp.task('movedata', function() {
  return gulp.src('dev/assets/data/*.json')
    .pipe(gulp.dest('dist/assets/data/'));
});

// Move js files because we don't want to minify when developing
gulp.task('movejs', function() {
  return gulp.src('dev/assets/js/**/*.js')
  .pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('clean', function(cb) {
  del(['dist/*'], cb);
});

// Move all lib files
gulp.task('movelib', ['movelibcss', 'movelibjs']);

// Do everything by default
gulp.task('default', ['lint', 'sass', 'minifyhtml', 'minifyjs', 'moveimages', 'movedata']);

// Watch HTML, Sass, JavaScript files and update on change
// Since this is for dev, we don't minify the js for debugging
gulp.task('watch', function() {
  // Watch Sass files and update
  gulp.watch('dev/assets/scss/*.scss', ['sass']);

  // Watch HTML files and minify output
  gulp.watch('dev/*.html', ['minifyhtml']);

  // Watch js files and lint and move output
  gulp.watch('dev/assets/js/**/*.js', ['movejs']);
});

// Prepare for actual dist, clean the directory, then build and minify
// everything.
gulp.task('build', ['clean'], function() {
  gulp.start('moveimages', 'movelibcss', 'movelibjs', 'minifyhtml', 'movedata',
              'sass', 'minifyjs');
});
