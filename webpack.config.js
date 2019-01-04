const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/js/index.js'),
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'index.js'
    },
    watch: true,
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    plugins: [

    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};