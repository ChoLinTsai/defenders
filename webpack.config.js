const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, 'docs/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './src/resources/*.scss'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          },
          {
            loader: "image-webpack-loader"
          }
        ]
      },
    ]
  },
  devServer: {
    stats: "errors-only",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    // new ExtractTextPlugin("styles.css")
  ]
}
