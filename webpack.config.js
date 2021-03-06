const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/public');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
    entry: [
        APP_DIR + '/index.jsx',
    ],
    output: {
        path:       BUILD_DIR,
        filename:   'bundle.js',
        publicPath: '/public/',
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx',
        ],
    },
    module: {
        loaders: [
            {
                test:       /\.jsx?/,
                loader:     'babel',
                include:    APP_DIR,
            },
            {
                test:       /\.css$/,
                loader:     'style!css',
            },
            {
                test:       /\.less$/,
                loader:     'style!css?modules!less',
            },
        ],
    },
    devServer: {
        contentBase: './src/',
    },
};

module.exports = config;
