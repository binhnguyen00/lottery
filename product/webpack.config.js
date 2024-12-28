const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "/src/lottery/index.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "lottery.js"
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin("MofiFone Khu vực 5 Quay số trúng thưởng"),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
      filename: "./index.html",
      minify: {
        removeEmptyAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true
      },
      hash: true,
      inject: true
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/css",
          to: "./css",
        },
        {
          from: "./src/data",
          to: "./data",
        },
        {
          from: "./src/img",
          to: "./img",
        },
        {
          from: "./src/lib",
          to: "./lib",
        },
      ],
    }),
  ]
};
