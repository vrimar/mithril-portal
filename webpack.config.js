var path = require('path');

module.exports = {
	devtool: 'nosources-sourcemap',
	entry: [
		'./src/index'
	],
	output: {
		filename: 'index.js',
		library: 'mithril-portal',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, './dist/')
	},
	externals: {
		mithril: 'mithril'
	},
	module: {
		rules: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, }
		]
	}
};