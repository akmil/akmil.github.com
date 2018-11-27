import './base.scss';
import $ from 'jquery';
import RegisterForm from './blocks/register-form/register-form';
import {LoginForm} from './blocks/login-form/login-form';
import {confirmationWithRedirect} from './blocks/confirm-reg/confirm-reg';
import * as header from './blocks/header/header';

const init = () => {
    // console.log('init js here', CONST.user);
    (new RegisterForm()).init();
    LoginForm().init();
    confirmationWithRedirect().init();

    // check is logged
    const $header = $('.js_main');
    const isLogged = sessionStorage.getItem('user_logged');
    if ($header.length && isLogged) {
        $header
            .prepend('<span class="js_message_logged" style="color: lightcoral"> вы залогинились успешно</span>');
    }
    if (isLogged === 'logged') {
        $('.nav-link.js_logOut').parent().show();
        $('.profile-user')
            .append('<span class="js_message_logged" style="color: lightcoral"> вы залогинились успешно</span>');
        const oldURL = document.referrer;
        console.log(oldURL);
        if (oldURL.includes('confirm-registration')) {
            $('.profile-user')
                .append('<p class="js_message_logged" style="color: #536caf">вы подтвердили регистрацию</p>');
        }
    }

    header.initHeader();
};

(() => init())();
