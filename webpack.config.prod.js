const path = require('path');
const ClearPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: './src/app.js',
  mode: 'production',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/',
  },
  plugins: [new ClearPlugin.CleanWebpackPlugin()],
};
