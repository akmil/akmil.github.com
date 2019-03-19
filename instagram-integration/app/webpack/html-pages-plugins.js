const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
    {
        title: 'Instagram аккаунты',
        name: 'index',
        source: 'index'
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
        title: 'Автоответ',
        name: 'autoanswer',
        source: '_autoanswer/autoanswer'
    },
    {
        title: 'Завершение регистрации',
        name: 'confirm-registration',
        source: '_confirm-registration/confirm-registration'
    },
    {
        title: 'Подтверждение регистрации',
        name: 'registration-success',
        source: '_registration-success/registration-success'
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
        title: 'Подписки',
        name: 'follow',
        source: '_follow-page/follow-page'
    },
    {
        title: 'Отписки',
        name: 'unfollow',
        source: '_unfollow/unfollow'
    },
    {
        title: 'Просмотр Stories',
        name: 'stories',
        source: '_stories/stories'
    }
// unused
/*
    {
        title: 'Автоприветствие(bot-old)',
        name: 'chat-bot--old',
        source: '_chat-bot/chat-bot'
    },
    {
        title: 'Чат бот очистка',
        name: 'bot-cleaner',
        source: '_bot-cleaner/bot-cleaner'
    },
    {
        title: 'User _autoposting',
        name: 'autoposting',
        source: '_autoposting/autoposting'
    },
    {
        title: 'Коментарии',
        name: 'comments',
        source: '_comments/comments'
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
    }
*/
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
