var path = require("path");
var webpack = require("webpack");
module.exports = {
	entry:{
		      docs:'./app/client/app.js'
	      },
	output: {
			path: __dirname + "/dist",
			publicPath: "/dist/",
			filename: '[name].js'
		},
	resolve: {
			modulesDirectories : ['app','node_modules','base_modules']
		 },
	module: {
			loaders: [
			{ test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
			{ test: /\.html$/, loader: 'raw' },
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{
				test   : /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				loader : 'file-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]'
					]
			},
			]
		},
	plugins: [
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: "jquery",
		$: "jquery"
		})
	]
};
