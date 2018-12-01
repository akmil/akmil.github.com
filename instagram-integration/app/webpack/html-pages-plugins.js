const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
    {
        title: 'List of pages',
        name: 'index',
        source: 'index'
    },
    {
        title: 'User _autogreeting',
        name: 'autogreeting',
        source: '_autogreeting/autogreeting'
    },
    {
        title: 'User _autoposting',
        name: 'autoposting',
        source: '_autoposting/autoposting'
    },
    {
        title: 'User bot-cleaner',
        name: 'bot-cleaner',
        source: '_bot-cleaner/bot-cleaner'
    },
    {
        title: 'User chat-bot',
        name: 'chat-bot',
        source: '_chat-bot/chat-bot'
    },
    {
        title: 'User comments',
        name: 'comments',
        source: '_comments/comments'
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
        title: 'User messages',
        name: 'messages',
        source: '_messages/messages'
    },
    {
        title: 'User _newsletter',
        name: 'newsletter',
        source: '_newsletter/newsletter'
    },
    {
        title: 'User notifications',
        name: 'notifications',
        source: '_notifications/notifications'
    },
    {
        title: 'User profile',
        name: 'profile',
        source: '_profile/profile-page'
    },
    {
        title: 'User profile',
        name: 'sibscribe',
        source: '_sibscribe/sibscribe'
    },
    {
        title: 'User profile',
        name: 'stories',
        source: '_stories/stories'
    },
    {
        title: 'User profile -- unsibscribe',
        name: 'unsibscribe',
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
