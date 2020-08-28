/*
 * @Descripttion:
 * @version:
 * @Author: shelia
 * @Date: 2020-08-27 18:25:57
 * @LastEditors: shelia
 * @LastEditTime: 2020-08-28 18:23:43
 */
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

const entries = {};
const plugins = [];
function getEntry(globPath) {
  let dirname, name;
  glob.sync(globPath).forEach(entry => {
    const dirname = path.dirname(entry);
    const name = dirname.slice(dirname.lastIndexOf('/') + 1);
    entries[name] = entry;
    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${name}/index.html`,
        template: 'index.html',
        // 一定要配置chunks,不然所有页面的js和css都会注入
        chunks: [name],
      }),
    );
  });
}
getEntry('./src/*/index.js');

module.exports = {
  entry: entries,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'comment-require-loader'],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
  plugins: plugins.concat([
    /*
    // 告诉 Webpack 使用了哪些动态链接库
    new DllReferencePlugin({
      // 描述 react 动态链接库的文件内容
      mainfest: require('./dist/react.manifest.json'),
    }),
    new DllReferencePlugin({
      // 描述 polyfill 动态链接库的文件内容
      mainfest: require('./dist/polyfill.manifest.json'),
    }),
    */
  ]),
};
