import './base.scss';
// import $ from 'jquery';

import RegisterForm from './blocks/register-form/register-form';
import {LoginForm} from './blocks/login-form/login-form';
import {confirmationWithRedirect} from './blocks/confirm-reg/confirm-reg';
import * as header from './blocks/header/header';

const init = () => {
    // console.log('init js here', CONST.user);
    (new RegisterForm()).init();
    LoginForm().init();
    confirmationWithRedirect().init();
    header.initHeader();
};

(() => init())();
