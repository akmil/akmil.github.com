// import $ from 'jquery';
import User from '../../common/js-services/user';
import PubSub from 'pubsub-js'; // https://www.npmjs.com/package/pubsub-js
import {CONST} from '../../common/js-services/consts';

const selectorLoginState = '.js_message_logged--text';
const selectorEmailConfirmState = '.js_email-confirm--text';
const closeClass = 'd-none';
const openedClass = 'd-block';

function emailNotConfirmed() {
    const $emailnMsg = $(selectorEmailConfirmState);
    $emailnMsg.text('**emailNotConfirmed** Email не подтвержден.').css('color', 'lightcoral');
}

function onLoginSubscribe(msg, data) {
    // console.log(msg, data);
    $(CONST.uiSelectors.headerNavLoginBtn).addClass(closeClass).removeClass(openedClass);
    $(CONST.uiSelectors.headerRegBtn).addClass(closeClass).removeClass(openedClass);
    $(CONST.uiSelectors.headerLoginBox).addClass(closeClass).removeClass(openedClass);

    $('.nav-link.js_logOut').addClass(openedClass).removeClass(closeClass); // show
    const $loginMsg = $(selectorLoginState);
    $loginMsg.text('**onLoginSubscribe** вы залогинились в Luxgram успешно').css('color', 'lightblue');
    const isEmailConfirmed = User.isEmailConfirmed();
    if (!isEmailConfirmed) {
        emailNotConfirmed();
    }
}

function showLogout() {
    // check is logged
    const isLogged = User.isLoggedIn();
    const isEmailConfirmed = User.isEmailConfirmed();
    if (!isEmailConfirmed) {
        emailNotConfirmed();
    }
    if (isLogged) {
        $('.nav-link.js_logOut').parent().show();
        $('.js_email-confirm--text').text('вы залогинились успешно');
        const oldURL = document.referrer;
        // console.log(oldURL);
        if (oldURL.includes('confirm-registration')) {
            $('.js_message_logged--text').text('вы подтвердили регистрацию');
        }
        onLoginSubscribe();
    } else {
        $(selectorLoginState).text('Привет анонимный пользователь');
        $(selectorEmailConfirmState).empty();
    }
}

/**
 * Init header
 */
export function initHeader() {
   // check other handler in login-form.js
    const $loginBox = $(CONST.uiSelectors.headerLoginBox);
    const $registerBox = $(CONST.uiSelectors.headerRegBox);

    PubSub.subscribe(CONST.events.USER_LOGGED, onLoginSubscribe);

    showLogout();

    $(CONST.uiSelectors.headerRegBtn).on('click', () => {
        $loginBox.hide();
        $registerBox.css({'top': 0, 'right': 0})
            .addClass('bg-light border mt-5 mx-auto position-absolute px-3 d-block')
            .removeClass('d-none');
    });

    $(CONST.uiSelectors.headerNavLoginBtn).on('click', () => {
        $loginBox.addClass('d-block').removeClass('d-none');
        $registerBox.addClass('d-none').removeClass('d-block');
    });
}
