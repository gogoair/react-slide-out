var webpack = require('webpack');
var path = require('path');
var jsLoaders = 'babel-loader?babelrc=true';

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./example/index.jsx'
	],
	output: {
		path: path.resolve(__dirname + '/build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loaders: jsLoaders
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: jsLoaders
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},
	resolve: {
		modules: [path.resolve(__dirname, '/src'), 'node_modules'],
		extensions: ['.js', '.jsx']
	}
};
