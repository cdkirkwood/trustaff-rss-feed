'use strict';

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // query: {
        //   presets: ['react']
        // }
      }
    ]
  }
};
