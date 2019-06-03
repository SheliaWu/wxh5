const path = require('path')
const config = require('../config')
const utils = require('./utils')
const projectRoot = path.resolve(__dirname, '../')
const vueLoaderConfig = require('./vue-loader.conf')
const VueLoaderConfig = require('vue-loader/lib/plugin')
const projectConfig = require('../config/project')

var env = process.env.NODE_ENV
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd
module.exports = {
  entry:{
    app: path.resolve(__dirname,'../','src/'+projectConfig.name+'/main.js')
  },
  output:{
    path:config.build.assetsRoot,
    publicPath:env==='production'?config.build.assetsPublicPath:config.dev.assetsPublicPath,
    filename:'[name].js'
  },
  resolve:{
    extensions:['.js','.vue','.json'],
    alias:{
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname,'../src'),
      'assets':path.resolve(__dirname,'../src/assets'),
      'components':path.resolve(__dirname,'../src/components')
    }
  },
  module: {
    rules:  [
      {
        test: /\.vue$/,
        loader:'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader:'babel-loader',
        include:/src/,
        exclude:/node_modules/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [{
          loader: 'url-loader',
          options:{
            limit:10000,
            name:'assets/[name].[ext]?[hash]',
            publicPath:'../'
          }
        }]
      },
      {
        test: /\.(woff|woff2|ttf|eof|otf)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderConfig()
  ]
}

