const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
	.webpackConfig({
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules(?!\/foundation-sites)|bower_components/,
					use: [
						{
							loader: 'babel-loader',
							options: Config.babel()
						}
					]
				}
			]
		},
		resolve: {
			alias: {
				'@': path.resolve('resources/sass')
			}
		}
	})
	.sass('resources/sass/app.scss', 'public/css');
