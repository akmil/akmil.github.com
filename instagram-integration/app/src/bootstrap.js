import './base.scss';

// vendor
import 'whatwg-fetch';
import PubSub from 'pubsub-js';
import 'emojioneArea';

// components
// import {CONST} from './common/js-services/consts';
import {LoginForm} from './blocks/login-form/login-form';
import RegisterForm from './blocks/register-form/register-form';
import {LoginPage} from './pages/_auth/login-page';
import {confirmationWithRedirect} from './blocks/confirm-reg/confirm-reg';
import * as header from './blocks/header/header';
import * as sidebarMenu from './blocks/sidebar-menu/sidebar-menu';
import * as burgerMenu from './blocks/header/burger-menu/burger-menu';
import * as instagramAccounts from './blocks/instagram-accounts-list/instagram-accounts-list';
import * as messages from './blocks/messages/messages';
import * as follow from './blocks/follow/follow';
import * as unfollow from './blocks/unfollow/unfollow-index';
import * as automessages from './blocks/automessages/automessages-index';
import * as chatBot from './blocks/chat-bot/chat-bot-index';
import * as autogreeting from './blocks/autogreeting/autogreeting-main';
import * as autocomments from './blocks/autocomments/autocomments-index';
import * as stories from './blocks/stories/stories-index';

// const selectorCssLoginForm = {
//     _loginBox: CONST.uiSelectors.headerLoginBox,
//     _formId: '#js_login-form',
//     _buttonSubmitId: '#js_login_btn',
//     _showLoginBoxBtnId: CONST.uiSelectors.headerNavLoginBtn
// };

/*
* global functions
*/
function setPubSub(PubSub) {
    window.PubSub = PubSub;
}

function initTooltip() {
    $('[data-toggle="tooltip"]').tooltip();
}

const init = () => {
    setPubSub(PubSub);
    initTooltip();
    // console.log('init js here', CONST.user);
    (new RegisterForm()).init();
    // LoginForm(selectorCssLoginForm).init();
    LoginForm({
        _loginBox: 'main .login-box',
        _formId: '#js_instagram-add-account',
        _buttonSubmitId: '#js_instagram-add-account--btn',
        _showLoginBoxBtnId: '#js_show-login-box',
        isLoginInstagram: true
    }).init(); // init instagram login form *!/
    LoginPage({
        _loginBox: '.auth.login .card-signin',
        _formId: '.form-signin',
        _buttonSubmitId: '.form-signin [type="submit"]'
    }).init();

    confirmationWithRedirect().init();
    header.initHeader();
    sidebarMenu.initMenu();
    burgerMenu.init();
    follow.init();
    unfollow.init();
    instagramAccounts.init();
    messages.init();
    automessages.init();
    autogreeting.init();
    autocomments.init();
    chatBot.init();
    stories.init();
};

(() => init())();
