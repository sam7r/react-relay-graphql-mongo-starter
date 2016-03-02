const Webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src/app/index'),
  build: path.join(__dirname, 'public', 'assets'),
  node_modules: path.join(__dirname, 'node_modules')
};

const config = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: PATHS.node_modules,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
