/* eslint-disable sort-vars */
import User from '../../common/js-services/user';
import PubSub from 'pubsub-js'; // https://www.npmjs.com/package/pubsub-js
import cookieStorage from '../../common/js-services/cookie';
import viewUtils from '../../common/js-services/view';
import {CONST} from '../../common/js-services/consts';

export function RecoverPage(selectorCss) {
    const {_formId, _buttonSubmitId, _loginBox} = selectorCss;
    const user = User, // service
        $form = $(_formId),
        $email = $form.find('input[name="mail"]'),
        $textAreaDescription = $('#description'),
        $sendMsg = $form.find('.send-done');
    // const openedClass = 'd-block';
    // const closeClass = 'd-none';

    const userLoginHeader = (_formData) => {
        const cbError = (result) => {
            // $(_loginBox).append(`<p>${result.status.message}</p>`);
            const modal = $('#error-modal');
            modal.modal('show');
            if (result.status.message.includes('cannot find a profile by email')) {
                modal.find('.js_account-mail-msg').removeClass('d-none');
                modal.find('.js_account-password-msg').addClass('d-none');
                modal.find('.js_account-mail-invalid-msg').addClass('d-none');
            } else if (result.status.message.includes('incorrect value in \'email\' field')) {
                modal.find('.js_account-mail-invalid-msg').removeClass('d-none');
                modal.find('.js_account-mail-msg').addClass('d-none');
                modal.find('.js_account-password-msg').addClass('d-none');
            } else {
                modal.find('.js_account-mail-msg').addClass('d-none');
                modal.find('.js_account-password-msg').removeClass('d-none');
                modal.find('.js_account-mail-invalid-msg').addClass('d-none');
            }
            console.log(result.status.message);
        };

        return user.recovering(_formData, cbError)
            .then((result) => {
                if (result && result.data && result.data.token) {
                    // save the item
                    cookieStorage.set(CONST.cookieStorage.token, result.data.token);
                    $('.nav-link.js_logOut').parent().show();
                    $('.nav-link.js_profile').parent().show();
                    // console.log('request succeeded with JSON response', result);
                    viewUtils.showInfoMessage($textAreaDescription,
                        result.status.state,
                        result.status.message || 'Пароль отправлен');
                } else if (result.status) {
                    console.log(result);
                    viewUtils.showInfoMessage($textAreaDescription,
                        `<p>status: ${result.status.state}</p><p> message: ${result.status.message}</p>`);
                } else {
                    console.log(result);
                }
            }).then((result) => {
                if (result && result.status) {
                    console.log(result);
                    viewUtils.showInfoMessage($textAreaDescription,
                        result.status.state,
                        result.status.message || 'Пароль отправлен');
                }
            });
    };

    const submitForm = function(formDataObj) {
        const email = $email.val(),
            password = $form.find('input[name="pass"]').val(),
            _formData = formDataObj || {email, password};

        if (selectorCss.isLoginInstagram) {
            // todo: delete me
        } else {
            $email.val($email.val().toLocaleLowerCase());
            userLoginHeader(_formData).then(() => {
                // PubSub.publish(CONST.events.USER_LOGGED, 'login');
                // window.location.href = './instagram-accounts.html';
                $sendMsg.removeClass('d-none');
            });
        }
    };

    const logOut = function() {
        cookieStorage.remove(CONST.cookieStorage.token);
        PubSub.publish(CONST.events.USER_LOGOUT);
    };

    const bindEvents = function() {
        // const $showLoginBoxBtnId = $(_showLoginBoxBtnId);
        const $loginBox = $(_loginBox);
        const openedClass = 'd-block';
        const closeClass = 'd-none';

        const $buttonSubmit = $(_buttonSubmitId),
            cssValidationClass = 'form-validation';

        $buttonSubmit.on('click', (e) => {
            e.preventDefault();
            const form = $form.get(0);
            // const validator = new Validator($form);
            console.log(viewUtils, viewUtils.isEmail($email.val()));

            if (form.checkValidity() && viewUtils.isEmail($email.val())) {
                submitForm();
            } else {
                // Highlight errors
                if (form.reportValidity) {
                    form.reportValidity();
                }
                $form.addClass(cssValidationClass);
            }
        });

        $('.nav-link.js_logOut').on('click', (e) => {
            e.preventDefault();
            logOut();
            $(e.target).parent().hide();
            viewUtils.showInfoMessage($textAreaDescription, 'Logged out');
        });

        PubSub.subscribe(CONST.events.USER_LOGOUT, (msg) => {
            $(CONST.uiSelectors.headerNavLoginBtn).addClass(openedClass).removeClass(closeClass); // .show();
            $(CONST.uiSelectors.headerRegBtn).addClass(openedClass).removeClass(closeClass);
            $('.nav-link.js_logOut').addClass(closeClass).removeClass(openedClass); // .hide();
            $('.nav-link.js_profile').addClass(closeClass).removeClass(openedClass); // .hide();
            const selectorLoginState = '.js_message_logged--text';
            $(selectorLoginState).text('Вы вышли из аккаунта');
        });

        $(document).on('click', (event) => {
            const isLoginBtnClick = $(event.target).closest('nav.navbar').find($loginBox).length;
            const isAddInstagramBtnClicked = $(event.target).attr('id') === CONST.uiSelectors.instagram.addAccountBtnId;

            if (!isLoginBtnClick && $loginBox.hasClass(openedClass) && !isAddInstagramBtnClicked) {
                $loginBox.addClass(closeClass).removeClass(openedClass);
            }
        });
    };

    function init() {
        if ($('.auth.recovering').length) {
            bindEvents();
        }
    }

    return {
        init
    };
}
