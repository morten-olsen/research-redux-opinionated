const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../shared/index.js'),
  output: {
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      __dirname,
      path.join(__dirname, '../shared'),
      path.join(__dirname, '../helpers'),
      'node_modules',
    ],
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['env', 'stage-1', 'react'],
      },
    }],
  },
};
