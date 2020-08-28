/*
 * @Descripttion:
 * @version:
 * @Author: shelia
 * @Date: 2020-08-06 14:59:23
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-28 18:23:58
 */
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');
module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    overlay: {
      errors: true,
    },
  },
});
