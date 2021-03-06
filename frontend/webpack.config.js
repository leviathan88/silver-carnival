const autoprefixer = require('autoprefixer')  //automatically inject vendor prefixes for some styles
const path = require('path')
const config = require('./config')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StringReplacePlugin = require('string-replace-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //this tells webpack to generate source map for our JS, that browser can use to link the generated code back to source code
  devtool: 'eval-source-map',
  //this tells webpack where we want to start assembling our code
  entry: {
    app: [
      './src/app.js'
    ]
  },
  //how and where we want our files written
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/'
  },
  //configures our development server
  devServer: {
    contentBase: './public',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    port: 8000
  },
  //plugins extend standard functions of webpack
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //updates our code on the fly
    new ExtractTextPlugin('[name].css'),  //writes our css to file similar to the output section that does the JS
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new StringReplacePlugin()
  ],
  //we tell postcss what kind of processing we want done
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']   //we want last two versions
    })
  ],
  //eases way of extension 'example' becomes 'example.js'
  resolve: {
    extensions: ['', '.js']
  },
  standard: {
    // config options to be passed through to standard e.g.
    parser: 'babel-eslint'
  },
  module: {
    preLoaders: [
      {
        // set up standard-loader as a preloader
        test: /\.js?$/,
        loader: 'standard',
        exclude: /node_modules/
      }
    ],
    //transform JS with the loader (in this case Babel loader )
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel'],
      exclude: /node_modules/
    },
    {
      test: /config.js$/,
      loader: StringReplacePlugin.replace({
        replacements: [{
          pattern: /@@(\w*?)@@/ig,
          replacement: function (match, p1, offset, string) {
            return config.get(p1)
          }
        }]
      })
    },
    //new loader to handle our css files
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!postcss!sass?includePaths[]=' + (path.resolve(__dirname, './node_modules')))
    },
    //font awseome test loaders
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }]
  }
}
