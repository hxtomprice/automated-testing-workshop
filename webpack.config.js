'use strict';

const loaders = [
  { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
];

module.exports = {
  entry: './tasks/index.js',
  module: { loaders },
  output: {
     path: './www',
     publicPath: '/www',
     filename: 'automated-testing-workshop.js'
  }
};
