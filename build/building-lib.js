process.env.NODE_ENV = 'production'

const ora = require('ora')
const config = require('../config/config-lib')
const chalk = require('chalk')
const webpack = require('webpack')
const rm = require('rimraf')
const path = require('path')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.prod.lib')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
  })
})
