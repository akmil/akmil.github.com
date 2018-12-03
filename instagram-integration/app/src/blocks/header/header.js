import $ from 'jquery';
import User from '../../common/js-services/user';
import PubSub from 'pubsub-js'; // https://www.npmjs.com/package/pubsub-js
import cookieStorage from '../../common/js-services/cookie';
import {CONST} from '../../common/js-services/consts';

function onLoginSubscribe(msg, data) {
    console.log(data);
    const $main = $('.js_main');
    $(CONST.uiSelectors.headerNavLoginBtn).hide();
    $(CONST.uiSelectors.headerRegBtn).hide();
    $(CONST.uiSelectors.headerLoginBox).hide();
    $('.js_message_logged', $main).empty().prepend('<span class="js_message_logged" style="color: lightcoral"> вы залогинились в Luxgram успешно</span>');
}

function showLogout() {
    // check is logged
    const isLogged = cookieStorage.get(CONST.cookieStorage.token);

    if (isLogged) {
        $('.nav-link.js_logOut').parent().show();
        $('.profile-user')
            .append('<span class="js_message_logged" style="color: lightcoral"> вы залогинились успешно</span>');
        const oldURL = document.referrer;
        // console.log(oldURL);
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
    // console.info('init headere js');
    const $main = $('.js_main');
    const isLogged = user.isLoggedIn();
    if ($main.length && isLogged) {
        $main
            .prepend('<span class="js_message_logged" style="color: lightcoral"> вы залогинились в Luxgram успешно</span>');
    } else {
        $main
            .prepend('<span class="js_message_logged" style="color: lightcoral">Сначало надо залогинится в Luxgram</span>');
    }

   // check other handler in login-form.js
    const $loginBox = $(CONST.uiSelectors.headerLoginBox);
    const $registerBox = $(CONST.uiSelectors.headerRegBox);
    $(CONST.uiSelectors.headerRegBtn).on('click', () => {
        $loginBox.hide();
        $registerBox.css({'top': 0, 'right': 0})
            .addClass('bg-light border mt-5 mx-auto position-absolute px-3')
            .show();
    });

    $(CONST.uiSelectors.headerNavLoginBtn).on('click', () => {
        $loginBox.show();
        $registerBox.hide();
    });

    showLogout();
    PubSub.subscribe(CONST.events.USER_LOGGED, onLoginSubscribe);
}
