const path = require('path');
const ClearPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/',
  },
  plugins: [new ClearPlugin.CleanWebpackPlugin()],
};
