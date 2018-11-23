import './base.scss';
import RegisterForm from './blocks/register-form/register-form';

const init = () => {
    const registerForm = new RegisterForm();
    registerForm.init();
    console.log('init js here');
};

(() => init())();
