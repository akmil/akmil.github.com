const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
    {
        title: 'List of pages',
        name: 'index',
        source: 'index'
    },
    {
        title: 'landing page',
        name: 'landing',
        source: '_landing/landing'
    },
    {
        title: 'Авторизация',
        name: 'login',
        source: '_auth/login'
    },
    {
        title: 'Регистрация',
        name: 'register',
        source: '_auth/register'
    },
    {
        title: 'Автоприветствие',
        name: 'autogreeting',
        source: '_autogreeting/autogreeting'
    },
    {
        title: 'User _autoposting',
        name: 'autoposting',
        source: '_autoposting/autoposting'
    },
    {
        title: 'Чат бот очистка',
        name: 'bot-cleaner',
        source: '_bot-cleaner/bot-cleaner'
    },
    {
        title: 'Автоприветствие',
        name: 'chat-bot--old',
        source: '_chat-bot/chat-bot'
    },
    {
        title: 'Автоответ',
        name: 'autoanswer',
        source: '_autoanswer/autoanswer'
    },
    {
        title: 'Коментарии',
        name: 'comments',
        source: '_comments/comments'
    },
    {
        title: 'Подтверждение регистрации',
        name: 'confirm-registration',
        source: '_confirm-registration/confirm-registration'
    },
    {
        title: 'Instagram аккаунты',
        name: 'instagram-accounts',
        source: '_instagram-accounts/instagram-accounts'
    },
    {
        title: 'Диалоги',
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
        title: 'Подписки',
        name: 'follow',
        source: '_follow-page/follow-page'
    },
    {
        title: 'User profile',
        name: 'stories',
        source: '_stories/stories'
    },
    {
        title: 'Отписки',
        name: 'unsubscribe',
        source: '_unsubscribe/unsubscribe'
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
