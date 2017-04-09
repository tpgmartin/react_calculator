'use strict';

var path = require('path'),
  webpack = require('webpack');

module.exports = {
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  debug: false,
  devtool: false,
  entry: './src/index.js',
  stats: {
    colors: true,
    reasons: false
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.sass/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  }
};
