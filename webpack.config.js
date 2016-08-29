'use strict';

const loaders = [
  { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
];

module.exports = {
  entry: './index.js',
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: { loaders },
  output: {
    path: './www',
    filename: 'automated-testing-workshop.js'
  },
  devServer: {
    contentBase: './www/',
    historyApiFallback: true
  }
};
