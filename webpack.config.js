const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/build';

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, '/build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {minimize: true}
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // template: SRC_DIR + '/index.html',
      // filename: './index.html'
    })
  ],
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    port: 9000,
    overlay: true
  }
};