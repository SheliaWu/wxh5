const path = require('path')
const config = require('../config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const env = config.build.env

var webpackConfig = merge(baseWebpackConfig,{
  mode:'production',
  module:{
    rules:utils.styleLoaders({sourceMap:config.build.productionSourceMap, extract:true})
  },
  devtool:config.build.productionSourceMap?'#source-map':false,
  output:{
    path:config.build.assetsRoot,
    filename:utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename:utils.assetsPath('js/[id].[chunkhash].js')
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                name: "commons",
                chunks: "initial",
                minChunks: 2
            }
        }
    },
    minimizer: [new UglifyJsPlugin()],
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':env
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin(utils.assetsPath('css/[name].[hash].css')),
    new HtmlWebpackPlugin({
      filename:path.resolve(__dirname,'../dist/index.html'),
      template:path.resolve(__dirname,'../src/index.html'),
      inject:true,
      minify:{
        removeComments:true,
        collapseWhitespace:true,
        removeAttributeQuotes:true
      },
      chunksSortMode:'dependency'
    })
  ]
})

if(config.build.productionGzip){
  var CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset:'[path].gz[query]',
      algorithm:'gzip',
      test: new RegExp(
        '\\.'+
        config.build.productionGzipExtensions.join('|')+
        ')$'
      ),
      threshold:10240,
      minRatio:0.8
    })
  )
}
module.exports= webpackConfig