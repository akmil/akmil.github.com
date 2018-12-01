import $ from 'jquery';
import User from '../../common/js-services/user';
import cookieStorage from '../../common/js-services/cookie';

function showLogout() {
    // check is logged
    const isLogged = cookieStorage.get('user_logged');
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
}

/**
 * Init header
 */
export function initHeader() {
    const user = User;
    console.info('init headere js');
    const $main = $('.js_main');
    const isLogged = user.isLoggedIn();
    if ($main.length && isLogged) {
        $main
            .prepend('<span class="js_message_logged" style="color: lightcoral"> вы залогинились успешно</span>');
    }

    const $loginBox = $('.login-box');
    const $registerBox = $('.register-box');
    $('.js_register').on('click', () => {
        $loginBox.hide();
        $registerBox.show();
    });

    $('.js_login').on('click', () => {
        $loginBox.show();
        $registerBox.hide();
    });

    showLogout();
}