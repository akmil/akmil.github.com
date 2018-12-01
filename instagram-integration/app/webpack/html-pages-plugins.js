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
    },
    {
        title: 'User profile',
        name: 'profile',
        source: '_autogreeting/autogreeting'
    },
    {
        title: 'User profile',
        name: 'profile',
        source: '_autoposting/autoposting'
    },
    {
        title: 'User profile',
        name: 'profile',
        source: '_bot-cleaner/bot-cleaner'
    },
    {
        title: 'User profile',
        name: '_chat-bot',
        source: '_chat-bot/chat-bot'
    },
    {
        title: 'User _comments',
        name: '_comments',
        source: '_comments/comments'
    },
    {
        title: 'User _messages',
        name: '_messages',
        source: '_messages/messages'
    },
    {
        title: 'User profile',
        name: '_newsletter',
        source: '_newsletter/newsletter'
    },
    {
        title: 'User _notifications',
        name: '_notifications',
        source: '_notifications/notifications'
    },
    {
        title: 'User profile',
        name: '_newsletter',
        source: '_newsletter/newsletter'
    },
    {
        title: 'User profile',
        name: '_sibscribe',
        source: '_sibscribe/sibscribe'
    },
    {
        title: 'User profile',
        name: '_stories',
        source: '_stories/stories'
    },
    {
        title: 'User profile',
        name: '_unsibscribe',
        source: '_unsibscribe/unsibscribe'
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
