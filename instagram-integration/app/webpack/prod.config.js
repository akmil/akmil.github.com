const path = require('path');
const webpackMerge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const webpackCommon = require('./common.config');

// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const htmlPagesPlugins = require('./html-pages-plugins');

module.exports = webpackMerge(webpackCommon, {

  bail: true,

  devtool: 'inline-source-map',

  output: {

    path: path.resolve(__dirname, '../../'),

    filename: '[name]-app.js', // -[hash].min

    sourceMapFilename: '[name]-app.map', // -[hash]

    // chunkFilename: '[id]-[chunkhash].js'

  },

  module: {

    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules=false&localIdentName=[local]&minimize&importLoaders=2&url=true', // &sourceMap
            'postcss-loader',
            'sass-loader?outputStyle=expanded' //&sourceMap&sourceMapContents'
          ]
        })
      }

    ]

  },

  plugins: [
    ...htmlPagesPlugins.prod,
    new CleanWebpackPlugin(['Prototype_dist'], {
      root: path.resolve(__dirname, '..'),
      exclude: '.gitignore'
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin('[name].css'), // -[chunkhash].min
    /* todo: turnOn UglifyJsPlugin for production */
    new UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      minimize: false,
      output: {
        comments: false,
        screw_ie8: true
      },
      sourceMap: false // todo: set to FALSE for production
    }),
    new LoaderOptionsPlugin({
      options: {
        context: '/',
        sassLoader: {
          includePaths: [path.resolve(__dirname, '../src')]
        },
        postcss: function () {
          return [autoprefixer];
        }
      }
    })
  ]

});
