const path = require('path')
const config = require('../config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  module:{
    rules:utils.styleLoaders({sourceMap:config.dev.cssSourceMap})
  },
  devtool:'#cheap-eval-source-map',
  devServer: {
    inline:true,
    hot: true,
    contentBase: path.join(__dirname, "dist"), // since we use CopyWebpackPlugin.
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename:path.resolve(__dirname,'../dist/index.html'),
      template:path.resolve(__dirname,'../src/index.html'),
      inject:true
    }),
    new FriendlyErrorsPlugin()
  ]
})

