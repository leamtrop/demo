// var webpack = require('webpack');
var path = require('path');

var config = {
  defaultPath: '/dist',
  path: {
    src: '/src',
    dist: '/dist'
  }
};

module.exports = {
  devtool: 'source-map',

  entry: {
    MyLib: [__dirname + config.path.src]
  },

  output: {
    publicPath: config.defaultPath,
    path: path.join(__dirname, config.path.dist),
    filename: '[name].js',
    libraryTarget: 'umd',
    // `library` 声明全局变量
    library: '[name]'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  // uglify your scriptz
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
};

