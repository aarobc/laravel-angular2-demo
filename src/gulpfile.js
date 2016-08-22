/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

process.env.DISABLE_NOTIFIER = true

var elixir = require('laravel-elixir')
var gulp = require('gulp')
var shell = require('gulp-shell')

var paths = {
    bootstrap: "./node_modules/bootstrap-sass/assets/"
}

// Runs the php unit tests.
gulp.task("php-unit-test", function() {
    return gulp.src("")
        .pipe(shell("vendor/bin/phpunit"));
})

gulp.task("build", function() {
    return gulp.src("")
        .pipe(shell("gulp copy && gulp sass && gulp browserify"))
})


elixir(function(mix) {

    mix
    .copy(paths.bootstrap + "stylesheets/", "resources/assets/sass/vendor/bootstrap")
    .copy(paths.bootstrap + "fonts/", "public/fonts")
    .copy(paths.bootstrap + "javascripts/bootstrap.js", "public/vendor/bootstrap")

    .sass('app.scss')

})
