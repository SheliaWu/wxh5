/*
 * @Descripttion:
 * @version:
 * @Author: shelia
 * @Date: 2020-08-06 14:59:23
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-28 18:24:07
 */
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]/index.[hash:8].js',
    chunkFilename: '[name]/index.[hash:8].js',
    // 配置发布到线上资源的URL前缀
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 打包业务中的公共代码
        common: {
          name: 'common',
          chunks: 'initial',
          minSize: 1,
          priority: 0,
          minChunks: 2,
        },
        // 打包第三方库的文件
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 10,
          minChunks: 2,
        },
      },
    },
    // 运行时代码
    // runtimeChunk: {name: "mainfest"}
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: '[name]/index.[hash:8].css',
    }),
    // 打包分析
    // new BundleAnalyzerPlugin()
  ],
});
