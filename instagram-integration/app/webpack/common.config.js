const path = require('path');
const glob = require('glob');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
// webpack plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {

    entry: {
        'index': [
            './src/bootstrap.js'
        ]
    // 'vendor': './src/vendor.js'
    },
    node: {fs: 'empty'},

    resolve: {
        extensions: ['.js', '.scss'],
        modules: ['node_modules']
    },

    module: {

        rules: [
            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader',
                query: {
                    partialDirs: [path.resolve(__dirname, '../src')].concat(glob.sync('**/', {cwd: path.resolve(__dirname, '../src'), realpath: true}))
                }
            },

            {
                test: /\.js$/,
                exclude: /node_modules|static/,
                use: ['babel-loader', 'eslint-loader']
            },

            {
                test: /\.json$/,
                loader: 'json-loader'
            },

            {
                test: /\.(jpg|png|gif|eot|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },

            {
                test: /\.(mp4|webm)$/,
                loader: 'url-loader?limit=10000'
            },

            {
                test: /\.svg$/,
                exclude: /static/,
                use: {
                    loader: 'svg-url-loader'
                }
            }

        ]

    },

    plugins: [
        new CopyWebpackPlugin([{from: './static'}, {from: './src/assets', to: './assets'}]),
    // new CommonsChunkPlugin({
    //   name: ['app', 'vendor'],
    //   minChunks: Infinity
    // })
        new ProvidePlugin({ /* $: 'jquery',
        jQuery: 'jquery',*/
        // Popper: ['popper.js', 'default']
        })

    ]

};
