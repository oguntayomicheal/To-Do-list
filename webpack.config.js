const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[main].bundle.js',
    path: path.resolve(__dirname, 'dist'),
   clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
  ],

  mode: 'none',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    static: './dist',
  },
};