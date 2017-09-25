const path = require('path');
const extract = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: {
    bundle: ['babel-polyfill', './frontend/src/index.jsx']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash]-chunk.js',
    publicPath: '/'
  },
  devServer: {},
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        use: extract.extract({
          use: ['css-loader', 'sass-loader']
        }),
        test: /\.scss$/
      },
      {
        use: extract.extract({
          use: ['css-loader']
        }),
        test: /\.css$/
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(pdf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new extract('style.css'),
    new HtmlWebpackPlugin({
      template: 'frontend/src/index.html'
    })
  ]
};

module.exports = config;
