'use strict';

var webpack = require('webpack');

module.exports = {
  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },
  cache: true,
  // debug: true,
  devtool: false,
  entry: [
      'webpack/hot/only-dev-server',
      './src/index.js'
  ],
  stats: {
    colors: true,
    reasons: true
  },
  // fix for issue with react-hot-loader
  resolve: {
    alias: { 'react/lib/ReactMount': 'react-dom/lib/ReactMount' }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    }, {
      test: /\.sass/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  }
};
0
