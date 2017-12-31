// This is the webpack config used for unit tests.

var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
const nodeExternals = require('webpack-node-externals')

var webpackConfig = merge(baseConfig, {
  externals: [nodeExternals()],
  module: {
    rules: utils.styleLoaders()
  },
  devtool: 'inline-cheap-module-source-map',
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    })
  ]
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
