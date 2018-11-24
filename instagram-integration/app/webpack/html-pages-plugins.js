const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
    {
        title: 'List of pages',
        name: 'index',
        source: 'index'
    },
    {
        title: 'Confirm registration',
        name: 'confirm-registration',
        source: '_confirm-registration/confirm-registration'
    },
    {
        title: 'Instagram integration',
        name: 'instagram-integration',
        source: '_instagram-integration/instagram-integration'
    },
    {
        title: 'User profile',
        name: 'profile',
        source: '_profile/profile-page'
    }
];

const getHtmlPagesPlugins = (isMinify = false) => {
    const minify = isMinify ? {
        removeComments: true,
        collapseWhitespace: false,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
    } : null;

    return pages.map((page) => new HtmlWebpackPlugin({
        title: page.title,
        inject: true,
        filename: `${page.name}.html`,
        template: path.resolve(__dirname, `../src/pages/${page.source}.handlebars`),
        minify
    }));
};

module.exports = {
    dev: getHtmlPagesPlugins(),
    prod: getHtmlPagesPlugins(true)
};
