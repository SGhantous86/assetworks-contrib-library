const path = require('path');

module.exports = {
    entry: path.join(path.resolve(__dirname, 'lib'), 'index.js'),
    output: {
        library: 'AssetWorksContribLibrary',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: 'assetworks-contrib.js'
    },
    mode: 'development',
    performance: { hints: false },
    externals: {
        formiojs: 'Formio'
    }
};
