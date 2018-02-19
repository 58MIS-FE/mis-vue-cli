/**
 * @description build测试版
 */

const
    path = require('path'),
    ora = require('ora'),
    rm = require('rimraf');

const config = require('../config');

process.env.NODE_ENV = JSON.parse(config['build:d'].env.NODE_ENV);

const webpackConfig = require('./webpack.prod.config');

let webpackCompile = require('./util').webpackCompile;

let spinner = ora('buildding for production...\n');

spinner.start();

rm(config.build.buildRoot, err => {
    if (err) throw err;

    spinner.text = 'webpack build...';

    webpackCompile(webpackConfig, () => {
        spinner.stop();
    })
});