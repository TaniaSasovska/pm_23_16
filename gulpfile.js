const { series, parallel, dest, watch, src } = require('gulp');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function html()
{
    return src('src/app/index.html')
        .pipe(fileinclude({ prefix: '@@', basepath: '@file'}))
        .pipe(dest('dist'))
        .pipe(browserSync.stream());
}   
function styles()
{
    return src('src/app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}
function scripts()
{
    return src('src/app/js/**/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}
function images()
{  
    return src('src/app/imgs/**/*', {encoding: false})
        .pipe(dest('dist/imgs'))
        .pipe(browserSync.stream());
}


function browsersync()
{
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        notify: false,
        browser: 'chrome'
    });
}
function watching()
{
    watch(['src/app/index.html', 'src/app/components/**/*.html'], html);
    watch(['src/app/scss/**/*.scss'], styles);
    watch(['src/app/js/**/*.js'], scripts);
    watch(['src/app/imgs/**/*'], images);
}

exports.default = series(
  parallel(html, styles, scripts, images),
  parallel(browsersync, watching)
);