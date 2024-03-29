const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  //   mode: 'development',
  entry: {
    src: './client/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  //injects script tags
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
    }),
  ],
  //configures webpack dev server & proxies calls to /api to root of backend
  devServer: {
    host: 'localhost',
    port: 5500,
    historyApiFallback: true,
    hot: true,
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build'),
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api/**': { target: 'http://localhost:3000/', secure: false },
      '/star/**': { target: 'http://localhost:3000/', secure: false },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
