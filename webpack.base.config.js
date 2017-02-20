/**
 * Create by panwenhua on 16/11/1.
 * 
 */
var path = require('path');
var webpack = require('webpack');

//webpack插件
var plugins = [
	new webpack.ProvidePlugin({
		$: 'webpack-zepto'
	})
];

module.exports = {
	// 入口
	entry: {
		main: './src/main',
		vendors: ['vue', 'vue-router']
	},
	// 输出
	output: {
		path: path.join(__dirname, './dist/')
	},
	// 加载器
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style!css!autoprefixer!px2rem?remUnit=65&remPrecision=8'
		}, {
			test: /\.scss$/,
			loaders: ["style-loader", "css-loader", "px2rem?remUnit=65&remPrecision=8", "sass-loader"]
		}, {
			test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
			loader: 'url-loader?limit=8192&name=assets/[name].[ext]?v=[hash:8]'
		}, {
			test: /\.(html|tpl)$/,
			loader: 'html-loader'
		}]
	},
	// 转es5
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		// require时省略的扩展名，如：require('module') 不需要module.js
		extensions: ['', '.js', '.vue'],
		// 别名，可以直接使用别名来代表设定的路径以及其他
		alias: {
			filter: path.join(__dirname, './src/filters'),
			components: path.join(__dirname, './src/components')
		}
	},
	plugins: plugins
};