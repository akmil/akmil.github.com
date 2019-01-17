import './base.scss';
// import 'bootstrap';

import RegisterForm from './blocks/register-form/register-form';
import {LoginForm} from './blocks/login-form/login-form';
import {LoginPage} from './pages/_auth/login-page';
import {confirmationWithRedirect} from './blocks/confirm-reg/confirm-reg';
import {Instagram} from './pages/_instagram/instagram';
import * as header from './blocks/header/header';
import * as burgerMenu from './blocks/header/burger-menu/burger-menu';
import {CONST} from './common/js-services/consts';
import * as instagramAccounts from './blocks/instagram-accounts-list/instagram-accounts-list';

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

const init = () => {
    // console.log('init js here', CONST.user);
    (new RegisterForm()).init();
    LoginForm(selectorCssLoginForm).init();
    LoginForm(selectorCssLoginFormInstagram).init(); // init instagram login form*!/
    LoginPage({
        _loginBox: '.auth.login .card-signin',
        _formId: '.form-signin',
        _buttonSubmitId: '.form-signin [type="submit"]'
    }).init();
    Instagram().init();
    confirmationWithRedirect().init();
    header.initHeader();
    burgerMenu.init();
    instagramAccounts.init();
};

(() => init())();
