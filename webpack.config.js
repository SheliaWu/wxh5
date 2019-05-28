const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output:  {
    filename: '[chunkhash].js',
    path: path.resolve(__dirname,'dist')
  },
  module: {
    rules:  [
      {
        test: /\.js$/,
        loader:'babel-loader',
        include:/src/,
        exclude:/node_modules/
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader','style-loader']
        }) 
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
  resolve: {
    alias: {
      components: path.resolve(__dirname,'src/components/')
    },
    extensions: ['.js','.json'],
    modules: ['node_modules']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: true,
      hash: true,
      chunksSortMode: 'none'
    }),
    new ExtractTextPlugin("css/style.css"),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {removeAll: true}
      },
      canPrint: true
    })
  ],
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    overlay: true
  }
}
