import './base.scss';

// vendor
import 'whatwg-fetch';
import PubSub from 'pubsub-js';

// components
import {CONST} from './common/js-services/consts';
import RegisterForm from './blocks/register-form/register-form';
import {LoginForm} from './blocks/login-form/login-form';
import {LoginPage} from './pages/_auth/login-page';
import {confirmationWithRedirect} from './blocks/confirm-reg/confirm-reg';
import * as header from './blocks/header/header';
import * as burgerMenu from './blocks/header/burger-menu/burger-menu';
import * as instagramAccounts from './blocks/instagram-accounts-list/instagram-accounts-list';
import * as messages from './blocks/messages/messages';
import * as follow from './blocks/follow/follow';
import * as autoanswer from './blocks/autoanswer/autoanswer-index';
import * as chatBot from './blocks/chat-bot/chat-bot-index';
import * as autogreeting from './blocks/autogreeting/autogreeting-main';
import * as stories from './blocks/stories/stories-index';

const selectorCssLoginForm = {
    _loginBox: CONST.uiSelectors.headerLoginBox,
    _formId: '#js_login-form',
    _buttonSubmitId: '#js_login_btn',
    _showLoginBoxBtnId: CONST.uiSelectors.headerNavLoginBtn
};

const selectorCssLoginFormInstagram = {
    _loginBox: 'main .login-box',
    _formId: '#js_instagram-add-account',
    _buttonSubmitId: '#js_instagram-add-account--btn',
    _showLoginBoxBtnId: '#js_show-login-box',
    isLoginInstagram: true
};

function setPubSub(PubSub) {
    window.PubSub = PubSub;
}

const init = () => {
    setPubSub(PubSub);
    // console.log('init js here', CONST.user);
    (new RegisterForm()).init();
    LoginForm(selectorCssLoginForm).init();
    LoginForm(selectorCssLoginFormInstagram).init(); // init instagram login form*!/
    LoginPage({
        _loginBox: '.auth.login .card-signin',
        _formId: '.form-signin',
        _buttonSubmitId: '.form-signin [type="submit"]'
    }).init();

    confirmationWithRedirect().init();
    header.initHeader();
    burgerMenu.init();
    follow.init();
    instagramAccounts.init();
    messages.init();
    autoanswer.init();
    autogreeting.init();
    chatBot.init();
    stories.init();
};

(() => init())();
