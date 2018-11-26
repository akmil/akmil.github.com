import './base.scss';
import $ from 'jquery';
import RegisterForm from './blocks/register-form/register-form';
import {LoginForm} from './blocks/login-form/login-form';
import {confirmationWithRedirect} from './blocks/confirm-reg/confirm-reg';

const init = () => {
    // console.log('init js here', CONST.user);
    (new RegisterForm()).init();
    LoginForm().init();
    confirmationWithRedirect().init();

    // check is logged
    const $header = $('h1');
    const isLogged = sessionStorage.getItem('user_logged');
    if ($header.length && isLogged) {
        $header.append('<span style="color: lightcoral"> вы залогинились успешно</span>');
    }
};

(() => init())();
