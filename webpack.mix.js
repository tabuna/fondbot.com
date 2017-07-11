const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.less('./assets/less/app.less', './dist/css/app.css');
mix.copy('./node_modules/bootstrap/dist/fonts/', './dist/fonts');
mix.copy('./node_modules/simple-line-icons/fonts/', './dist/fonts');
mix.js(['./assets/js/app.js'], './dist/js/app.js');
