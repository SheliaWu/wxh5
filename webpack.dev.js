/*
 * @Descripttion: 
 * @version: 
 * @Author: shelia
 * @Date: 2020-08-27 18:26:05
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-27 19:00:04
 */
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entries = {};
const plugins = [];
function getEntry(globPath){
  let dirname, name;
  glob.sync(globPath).forEach(entry => {
    const dirname = path.dirname(entry)
    const name = dirname.slice(dirname.lastIndexOf('/')+1)
    entries[name] = entry
    plugins.push(new HtmlWebpackPlugin({
      filename: `./public/index.html`,
      template: 'index.html',
      // 一定要配置chunks,不然所有页面的js和css都会注入
      chunks:[name]
    }))
  })
}
getEntry('./src/pages/*/main.js')

module.exports = {
  entry: entries,
  module:{
    rules:[
      {
        test:/\.js$/,
        use:['babel-loader', 'comment-require-loader']
      },
    ]
  },
  resolve:{
    modules: ['node_modules']
  },
  plugins:plugins
}