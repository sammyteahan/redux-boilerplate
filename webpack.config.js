const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  entry: [
    './src/app.js',
  ],
  output: {
    path: path.resolve(`${__dirname}/build`),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.tpl.html'),
      showErrors: true,
      title: 'Redux Scaffold',
      publicPath: '/',
    }),
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass'
        )
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
      {
        test: /\.html$/,
        exclude: /index\.tpl\.html$/,
        loader: 'html',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  }
};
