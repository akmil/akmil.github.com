import './base.scss';
// import $ from 'jquery';

import RegisterForm from './blocks/register-form/register-form';
import {LoginForm} from './blocks/login-form/login-form';
import {confirmationWithRedirect} from './blocks/confirm-reg/confirm-reg';
import {Instagram} from './pages/_instagram/instagram';
import * as header from './blocks/header/header';

const init = () => {
    // console.log('init js here', CONST.user);
    (new RegisterForm()).init();
    LoginForm().init();
    const loginSelectorCSS = {
        _formId: 'js_instagram-add-account',
        _showLoginBoxBtnId: 'js_show-login-box',
        _buttonSubmitId: '#js_instagram-add-account--btn'
    };
    LoginForm(loginSelectorCSS).init(); // init instagram login form
    Instagram().init();
    confirmationWithRedirect().init();
    header.initHeader();
};

(() => init())();
