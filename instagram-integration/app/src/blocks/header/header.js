import $ from 'jquery';

/**
 * Init header
 */
export function initHeader() {
    console.info('init headere js');
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
}
