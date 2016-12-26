/**
 * Create by panwenhua on 16/11/1.
 * 
 */
var webpack = require('webpack');
var config = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

config.devtool = 'inline-source-map'; // source-map
config.output.publicPath = '/dist/'; // 资源路径
config.output.filename = '[name].js'; // 入口js命名
config.output.chunkFilename = '[name].chunk.js'; // 路由js命名

config.vue = {
	loaders: {
		css: ExtractTextPlugin.extract({
			fallbackLoader: 'style-loader',
			loader: 'css-loader?sourceMap!px2rem?remUnit=65&remPrecision=8'
		}),
		less: ExtractTextPlugin.extract({
			fallbackLoader: 'vue-style-loader',
			loader: 'css-loader!px2rem?remUnit=65&remPrecision=8!less-loader'
		}),
		sass: ExtractTextPlugin.extract({
			fallbackLoader: 'vue-style-loader',
			loader: 'css-loader!px2rem?remUnit=65&remPrecision=8!sass-loader'
		})
	}
};

config.plugins = (config.plugins || []).concat([
	new ExtractTextPlugin({
		filename: '[name].css',
		allChunks: true,
		disable: false,
		resolve: ['modules']
	}), // 提取CSS
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendors',
		filename: 'vendors.js'
	}),
	// 提取第三方库
	new HtmlWebpackPlugin({ // 构建html文件
		filename: '../index.html',
		template: './src/template/index.ejs',
		inject: false
	})
]);
// 写入环境变量
fs.open('./config/env.js', 'w', function(err, fd) {
	var buf = 'export default "development";';
	fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
});

module.exports = config;