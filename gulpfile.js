'use strict'

var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyHtml = require('gulp-minify-html'),
    htmlreplace = require('gulp-html-replace'),
    // clean = require('gulp-clean'),
    // changed = require('gulp-change'),
    // inject = require('gulp-inject'),
    // copy = require('gulp-copy'),
    // del = require('del'),
    // cache = require('gulp-cache'),
    browsersync = require('browser-sync').create();


    // Lint our scripts (NOT VENDOR)
    gulp.task('jslint', function() {
      return gulp.src('assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
    });

    // Compile Our Sass for development (NOT VENDOR)
    gulp.task('sass-dev', function() {
      return gulp.src('assets/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(autoprefixer({
          browser: ['last 2 versions'],
        }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('assets/css'))
    });

    // // Sass build task
    // gulp.task('sass-build', function() {
    //   return gulp.src('assets/scss/*.scss')
    //     .pipe(sass({ errLogToConsole: true }))
    //     .pipe(gulp.dest('dist/stylesheets/css'))
    //     .pipe(autoprefixer({
    //       browser: ['last 2 versions'],
    //     }))
    //     .pipe(cssmin())
    //     .pipe(rename({ suffix: '.min' }))
    //     .pipe(gulp.dest('dist/assets/stylesheets/css'))
    // });

    // // JS build task
    // gulp.task('js-build', function() {
    //   return gulp.src('assets/scripts/*.js')
    //     .pipe(concat('compiled.js'))
    //     .pipe(gulp.dest('dist/assets/js'))          // Saves a non-minified version
    //     .pipe(uglify())
    //     .pipe(rename({ suffix: '.min '}))
    //     .pipe(gulp.dest('dist/assets/js'))          // Saves a minified version
    // });

    // // HTML build task
    // gulp.task('html-build', function() {
    //   return gulp.src('*.html')
    //     .pipe(htmlreplace({
    //       'css': ['assets/stylesheets/css/main.min.css', 'assets/vendor/css/vendor.min.css'],
    //       'js': ['assets/js/compiled.min.js', 'assets/vendor/js/vendor.js']
    //     }))
    //     //.pipe(minifyHtml())
    //     .pipe(gulp.dest('dist'))
    // });

    // // Images Build task
    // gulp.task('img-build', function() {
    //   return gulp.src('assets/img/*')
    //     .pipe(imagemin())
    //     .pipe(gulp.dest('dist/assets/img'))
    // });

    // // VENDOR Styles task
    // gulp.task('vendorcss', function() {
    //   return gulp.src([
    //     'bower_components/animate.css/animate.css',
    //     'bower_components/font-awesome/css/font-awesome.css',
    //     'bower_components/bootstrap/dist/css/bootstrap.css']
    //   )
    //     .pipe(cssmin())
    //     .pipe(concat('vendor.css'))
    //     .pipe(rename({ suffix: '.min '}))
    //     .pipe(gulp.dest('dist/assets/vendor/css'))
    // });

    // VENDOR Script task
    // gulp.task('vendorjs', function() {
    //   return gulp.src([
    //     'bower_components/jquery/dist/jquery.min.js']
    //   )
    //     .pipe(concat('vendor.js'))
    //     .pipe(gulp.dest('dist/assets/vendor/js'))
    // });

    // // Cleans Dist folder for builds
    // gulp.task('dump-build', function() {
    //   return gulp.src('dist', {read: false})
    //     .pipe(clean());
    // });

    //DEVELOPMENT SERVER via browsersync
    gulp.task('server-dev', function() {
      browsersync.init({
        server: './',
        port: 3030
      });
    });

    // // BUILD SERVER via browsersync
    // gulp.task('server-build', function() {
    //   browsersync.init({
    //     server: 'dist',
    //     port: '4040'
    //   })
    // });

    // Browser Reaload task
    gulp.task('reload', function() {
      browsersync.reload()
      return gutil.log('Something changed! Reloading your browser....');
    });

    // Development Task
    gulp.task('dev', ['jslint', 'sass-dev', 'server-dev'], function() {
      gulp.watch('assets/scss/*.scss', ['sass-dev'])
      gulp.watch('assets/js/*.js', ['jslint', 'reload']);
      gulp.watch('assets/css/*.css', ['reload']);
      gulp.watch('*.html', ['reload']);
      return gutil.log('Gulp is running your development server ...watching Javascripts and SCSS for changes.');
    });


    // gulp.task('build', ['js-build', 'sass-build', 'html-build', 'vendorcss', 'vendorjs', 'font-build'], function() {
    //   return gutil.log('Gulp has built your dist folder. Cheers!')
    // })
