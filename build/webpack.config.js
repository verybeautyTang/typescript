const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const outputPath = require('./config/paths')

module.exports  = {
  entry: '../src/index.ts',
  output: {
      filename: 'bundle.js',
      // path: outputPath,
  },
  resolve: {
    extensions: ['.js .ts .tsx .jsx'],
  },
  module: {
    rules:[{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }]
  },
  stats:' errors-only',
  devtool: process.env.NODE.ENV === 'production' ? '' : 'inline-source-map',
  devServer: {
    // contentBase: './dist',
    hot: true,
    
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