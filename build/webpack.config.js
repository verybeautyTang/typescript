import {outputPath} from './config/paths'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports  = {
  entry: '../src/index.ts',
  output: {
      filename: 'bundle.js',
      path: outputPath,
  },
  resolve: {
    extention: ['.js .ts .tsx .jsx'],
  },
  module: {
    rules:[{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }]
  },
  devtool: process.env.NODE.ENV === 'production' ? '' : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    stats:' errors-only',
    compress: false,
    port: 1234,
    host: 'localhost',
  },
  plugins: [

    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html',
    })
  ]
}