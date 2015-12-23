'use strict';

var webpack = require('webpack');

module.exports = {
  module: {
      loaders:[
          {
              test: /\.js[x]?$/,
              exclude: /node_modules/,
              loader: 'babel'
          }, {
              test: /\.less$/,
              loader: 'style!css!autoprefixer!less'
          }, {
              test: /\.css/,
              loader: 'style!css'
          }, {
              test: /\.(png|jpg)$/,
              loader: 'url?limit=25000'
          }
      ]
  }
  // ,
  // output: {
  //     path: path.resolve(__dirname, 'out'),
  //     publicPath: '/',
  //     filename: './bundle.js'
  // }
};
