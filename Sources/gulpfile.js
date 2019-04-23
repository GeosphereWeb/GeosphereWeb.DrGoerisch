/*jshint esversion: 6 */

// var {gulp, src, dest, watch, series} = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
// var    inject         = require('gulp-inject');
// var    uglify         = require('gulp-uglify');
// var    concat         = require('gulp-concat');
// var    plumber        = require('gulp-plumber');
// var    babel          = require('gulp-babel');
// var    browserify     = require('gulp-browserify');
// var    clean          = require('gulp-clean');
// var    htmlmin        = require('gulp-html-minifier');
// var    minify         = require('gulp-minify');
// var    sass-inline-svg = require('gulp-sass-inline-svg');
// var    refresh         = require('gulp-refresh');


var sourcePath = './WebSiteDesign/source';
var destinationPath = '../Resources/Public';

// var path2NeosPackages = './Packages/Sites/Geosphere.ApexEng/Resources/Public';

gulp.task('sass', function (done) {
    return gulp.src(sourcePath + '/Sass/custom_style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            basename: 'style'
        }))
        .pipe(gulp.dest(destinationPath + '/Styles'))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destinationPath + '/Styles'));
    // done();
});

// gulp.task('copyStyles', function (done) {
//     gulp.src(destinationPath + '/Css' + '/style.css')
//         .pipe(rename({basename: 'styling'}))
//         .pipe(gulp.dest(path2NeosPackages + '/Styles'));
//
//     done();
// });

// gulp.task('htmlSync', function (done) {
//     gulp.src(destinationPath + '/index.html')
//         .pipe(browserSync.stream());
//     done();
// });

// gulp.task('cssSync', function (done) {
//     gulp.src(destinationPath + '/Css/style.css')
//         .pipe(browserSync.stream());
//     done();
// });

gulp.task('default', function () {
    gulp.watch([sourcePath + '/Sass' + '/**/*'], gulp.parallel(['sass']));

    //      browserSync.init({
    //            server: [path2Web] // Ordner in dem der Server starten soll
    //      });
    // gulp.watch([sourcePath + '/Css' + '/**/*'], gulp.parallel('sass'));
    // gulp.watch([sourcePath + '/Css' + '/**/*'], gulp.parallel('sass', 'copyStyles' ));
    // gulp.watch([path2Sass + '/*.*'], gulp.parallel('sass', 'cssSync'));
    // gulp.watch([path2Web + '/index.html'], gulp.parallel('htmlSync'));
    // done();
});
