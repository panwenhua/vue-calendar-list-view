/**
 * Create by panwenhua on 16/11/1.
 * 
 */
var webpack = require('webpack');
var config = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

config.output.publicPath = './'; // 资源路径,根据需要可改为cdn地址
config.output.filename = '[name].js?v=[chunkhash:8]'; // 带hash值的入口js名称
config.output.chunkFilename = '[name].chunk.js?v=[chunkhash:8]'; // 带hash值的路由js名称


config.vue = {
	loaders: {
		css: ExtractTextPlugin.extract({
			fallbackLoader: 'style-loader',
			loader: 'css-loader?sourceMap!px2rem?remUnit=65&remPrecision=8',
			publicPath: "./"
					// 特别提醒,如果这里的publicPath是以http://xxx.xxx这样以http://开头的,要写成
					// publicPath: "http:\\xxx.xxx",否则会编译为"http:/xxx.xxx"
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
		filename: '[name].css?v=[chunkhash:8]',
		allChunks: true,
		disable: false,
		resolve: ['modules']
	}), // 提取带hash值的css名称
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendors',
		filename: 'vendors.js?v=[chunkhash:8]'
	}), // 提取带hash值的第三方库名称
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	}),
	new webpack.optimize.UglifyJsPlugin({ // 压缩文件
		compress: {
			warnings: false,
			drop_debugger: true,
			drop_console: true
		}
	}),
	new HtmlWebpackPlugin({ // 构建html文件
		filename: '../dist/index.html',
		template: './src/template/index.ejs',
		inject: false
	})
]);

// 写入环境变量
fs.open('./config/env.js', 'w', function(err, fd) {
	var buf = 'export default "production";';
	fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
});

module.exports = config;