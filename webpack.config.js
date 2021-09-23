//как видишь твой файл был можно сказать не заполнен совсем
//в тренажере весь этот код был полностью выложен, нужно было просто скопировать
//за исключением пары строк.

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    },
    {
      test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
      type: 'asset/resource',
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
        'postcss-loader'
      ]
    },
    {
      test: /\.html$/,
      loader: 'html-loader',
      options: {
        sources: true,
      },
      exclude: '/node_modules/'
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
};