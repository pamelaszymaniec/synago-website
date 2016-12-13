var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var uncss = require('gulp-uncss');
var cleancss = require('gulp-clean-css');

var jsFiles = [
    'assets/js-dev/jquery-3.1.1.min.js',
    'assets/js-dev/bootstrap.min.js',
    'assets/js-dev/custom.js'
];

var dest = 'scripts';

gulp.task('default', function () {

    return gulp.src(jsFiles)
        .pipe(concat('scripts.js')) //konkatenacja plików
        .pipe(rename('scripts.min.js')) //
        .pipe(uglify())
        .pipe(gulp.dest(dest))
});


var cssFiles = [
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/css/style.css'
];

var cssdest = 'styles';


gulp.task('css', function () {

    return gulp.src(cssFiles)
        .pipe(concat('styles.css')) //konkatenacja plików
        .pipe(uncss({
            html: ['index.html'],
            ignore: [
                ".header.scrolled",
                ".header.scrolled .row",
                ".header.scrolled .logo img",
                "#menu.active li"
            ]
        }))
        .pipe(cleancss())
        .pipe(gulp.dest(cssdest))
});