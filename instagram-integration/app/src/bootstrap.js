import './base.scss';
import RegisterForm from './blocks/register-form/register-form';
import {LoginForm} from './blocks/login-form/login-form';
import {confirmationWithRedirect} from './blocks/confirm-reg/confirm-reg';

const init = () => {
    const registerForm = new RegisterForm();
    registerForm.init();
    // const loginForm = new LoginForm();
    console.log('init js here', LoginForm());
    LoginForm().init();
    confirmationWithRedirect().init();
};

(() => init())();
