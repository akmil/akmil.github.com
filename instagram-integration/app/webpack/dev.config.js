const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');

// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin');

const htmlPagesPlugins = require('./html-pages-plugins');

module.exports = webpackMerge(webpackCommon, {

    devtool: 'inline-source-map',

    output: {

        path: path.resolve(__dirname, '../static/dist'),

        filename: '[name].js',

        sourceMapFilename: '[name].map',

        chunkFilename: '[id]-chunk.js',

        publicPath: '/'

    },

    module: {

        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: false,
                            localIdentName: '[local]',
                            url: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                ]
            }

        ]

    },

    plugins: [
        new DefinePlugin({
            'process.env': {
                NODE_ENV: '\'development\''
            }
        }),
        ...htmlPagesPlugins.dev
    ],

    devServer: {
        host: 'localhost',
        port: 3003,
        open: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }

});
