'use strict';

var webpack = require('webpack');
var path = require('path');
var baseConfig = require('./webpack.config.base');

var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var config = Object.create(baseConfig);

config.entry = [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/index.js')
];

config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        mangle: false
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
];

module.exports = config;
