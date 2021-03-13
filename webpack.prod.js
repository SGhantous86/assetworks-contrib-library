const config = require('./webpack.config.js');
config.mode = 'production';
config.output.filename = 'assetworks-contrib.min.js',
module.exports = config;