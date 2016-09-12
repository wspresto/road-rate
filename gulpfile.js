var args = require('yargs').argv;
var del = require('del');
var fs = require('fs');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');
var iife = require('gulp-iife');
var insert = require('gulp-insert');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var templateCache = require('gulp-angular-templatecache');
var ngConstant = require('gulp-ng-constant');
var replace = require('gulp-replace');
var merge = require('merge-stream');
var exec = require('child_process');

var config = require('./config');
gulp.task('build-sass', ['clean'], function() {
  var scssVars = fs.readFileSync(config.src + config.paths.scssVars, 'utf8').toString();
  return gulp.src(config.globs.sass, {cwd: config.src})
    .pipe(concat('app.scss'))
    .pipe(insert.prepend(scssVars))
    .pipe(sass({
      includePaths: [config.src]
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.temp + 'css/'));
});

gulp.task('copy', ['clean'], function () {
  var assets = gulp.src(config.globs.assets, {cwd: config.src}).pipe(gulp.dest(config.temp + 'assets/'));
  var sharepoint = gulp.src(config.globs.sharepoint, {cwd: config.src}).pipe(gulp.dest(config.temp));

  return merge(assets, sharepoint);
});

gulp.task('clean', function() {
  return; //do nothing
});

gulp.task('lib-js', ['clean'], function() {
  var modules = gulp.src(config.libs[config.target], {cwd: './node_modules/'})
    .pipe(concat('lib.js'))
    .pipe(gulp.dest(config.temp + 'js/'));
  return merge(modules);
});
gulp.task('lib-css', ['clean'], function() {
  var modules = gulp.src(config.cssLibs[config.target], {cwd: './node_modules/'})
    .pipe(concat('library.css'))
    .pipe(gulp.dest(config.temp + 'css/'));
  return merge(modules);
});
gulp.task('build-app', ['clean'], function() {
  var ng = gulp.src(config.globs.scripts, {cwd: config.src});
  var constants = ngConstant({
      name: 'sp.synergy.constants',
      constants: config.constants,
      stream: true
  });
  return merge(ng, constants)
    .pipe(iife())
    .pipe(concat('spa.js'))
    .pipe(gulp.dest(config.temp + 'js/'));
});

gulp.task('build-html', function() {
  return gulp.src(config.globs.templates)
    .pipe(templateCache({
      module: 'sp.synergy.templates',
      standalone: true
    }))
    .pipe(gulp.dest(config.temp + 'js/'));
});

gulp.task('build-css', ['build-sass', 'lib-css'], function () {
    var modules = gulp.src('*.css', {cwd: config.temp + 'css/'})
    .pipe(concat(config.out + '.css'))
    .pipe(gulpif(!args.dev, cleanCSS()))
    .pipe(gulp.dest(config.build));
    return merge(modules);
});
gulp.task('build-js', [ 'build-app', 'build-html', 'lib-js'], function () {
    var modules = gulp.src('*.js', {cwd: config.temp + 'js/'})
    .pipe(concat(config.out + '.js'))
    .pipe(gulpif(!args.dev, uglify()))
    .pipe(gulp.dest(config.build));
    return merge(modules);
});
gulp.task('build', ['build-js', 'build-css']);
gulp.task('default', ['build']);
gulp.task('help', function () {
    console.log('Provide the --dev flag if you wish to build an UN-minified application. Good Luck.');
    console.log('available commands: [deploy-js, deploy-css, release]');
});
