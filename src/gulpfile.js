process.env.DISABLE_NOTIFIER = true

var gulp = require('gulp')
var elixir = require('laravel-elixir')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var tsify = require('tsify')
var sourcemaps = require('gulp-sourcemaps')
var buffer = require('vinyl-buffer')

var paths = {
    bootstrap: "./node_modules/bootstrap-sass/assets/",
    pages: ['resources/assets/typescript/*.html'],
    ts: "resources/assets/typescript/"
}

gulp.task('makeit', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: [paths.ts +'main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform("babelify")
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public'))
});

elixir(function(mix) {

    mix
    .sass('app.scss')
    .copy(paths.bootstrap + "stylesheets/", "resources/assets/sass/vendor/bootstrap")
    .copy(paths.bootstrap + "fonts/", "public/fonts")
    .copy(paths.bootstrap + "javascripts/bootstrap.js", "public/vendor/bootstrap")

    .copy('node_modules/core-js'          , 'public/app/core-js')
    .copy('node_modules/zone.js'          , 'public/app/zone.js')
    .copy('node_modules/systemjs'         , 'public/app/systemjs')
    .copy('node_modules/reflect-metadata' , 'public/app/reflect-metadata')
    .copy('node_modules/es6-shim'         , 'public/app/es6-shim')

    // .browserify(paths.app +"app.js", "public/js/app.js")
    .task('makeit')

})
