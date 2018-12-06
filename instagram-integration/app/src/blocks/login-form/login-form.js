/* eslint-disable sort-vars */
import $ from 'jquery';
import User from '../../common/js-services/user';
import PubSub from 'pubsub-js'; // https://www.npmjs.com/package/pubsub-js
import cookieStorage from '../../common/js-services/cookie';
// import Validator from '../../common/js-services/form-validator';
import viewUtils from '../../common/js-services/view';
import {CONST} from '../../common/js-services/consts';

window.$ = $;

export function LoginForm(selectorCss) {
    // const selectorCss = selectorCssLoginForm || selectorCssLoginFormInstagram;
    const {_formId, _buttonSubmitId, _showLoginBoxBtnId, _loginBox} = selectorCss;
    const user = User, // service
        $form = $(_formId),
        $email = $form.find('input[name="mail"]'),
        $textAreaDescription = $('#description');
    const openedClass = 'd-block';
    const closeClass = 'd-none';

    const userLoginHeader = (_formData) => {
        const cbError = (result) => {
            $(_loginBox).append('<p>result.status.message</p>');
        };

        return user.login(_formData, cbError)
            .then((result) => {
                if (result && result.data && result.data.token) {
                    // save the item
                    cookieStorage.set(CONST.cookieStorage.token, result.data.token);
                    $('.nav-link.js_logOut').parent().show();
                    // console.log('request succeeded with JSON response', result);
                    viewUtils.showInfoMessage($textAreaDescription,
                        result.status.state,
                        result.status.message || 'Login succsess');
                } else if (result.status) {
                    console.log(result);
                    viewUtils.showInfoMessage(this.$textAreaDescription,
                        `<p>status: ${result.status.state}</p><p> message: ${result.status.message}</p>`);
                } else {
                    console.log(result);
                }
            }).then((result) => {
                if (result && result.status) {
                    console.log(result);
                    viewUtils.showInfoMessage($textAreaDescription,
                        result.status.state,
                        result.status.message || 'Login error');
                }
            });
    };

    const addInstagramAccount = (newFormData) => {
        const cbError = (result) => {
            viewUtils.showInfoMessage($textAreaDescription,
                result.status.state,
                result.status.message || 'Login error');
            $(_loginBox).addClass(closeClass).removeClass(openedClass);
        };

        user.addInstagramAccount(newFormData, cbError).then((result) => {
            if (result && result.status) {
                console.log(result);
                viewUtils.showInfoMessage($textAreaDescription,
                    result.status.state,
                    result.status.message || 'Login error');
                $(_loginBox).addClass(closeClass).removeClass(openedClass);
            }
        });

        console.log('submit by ', _buttonSubmitId);
    };

    const submitForm = function(formDataObj) {
        const email = $email.val(),
            password = $form.find('input[name="pass"]').val(),
            _formData = formDataObj || {email, password};

        if (selectorCss.isLoginInstagram) {
            addInstagramAccount({username: $form.find('input[name="username"]').val(), password});
        } else {
            $email.val($email.val().toLocaleLowerCase());
            userLoginHeader(_formData).then(() => {
                PubSub.publish(CONST.events.USER_LOGGED, 'login');
            });
        }
    };

    const logOut = function() {
        cookieStorage.remove(CONST.cookieStorage.token);
        PubSub.publish(CONST.events.USER_LOGOUT);
    };

    const bindEvents = function() {
        const $showLoginBoxBtnId = $(_showLoginBoxBtnId);
        const $loginBox = $(_loginBox);
        const openedClass = 'd-block';
        const closeClass = 'd-none';

        $showLoginBoxBtnId.on('click', () => {
            if (!selectorCss.isLoginInstagram) {
                $loginBox.css({'top': 0, 'right': 0})
                    .addClass('bg-light border mt-5 mx-auto position-absolute');
            }
            $loginBox.addClass(openedClass).removeClass(closeClass);
        });

        const $buttonSubmit = $(_buttonSubmitId),
            cssValidationClass = 'form-validation';
        // console.log($buttonSubmit);
        $buttonSubmit.on('click', (e) => {
            e.preventDefault();
            const form = $form.get(0);
            // const validator = new Validator($form);
            // console.log(validator.validate());
            if (form.checkValidity() && viewUtils.isEmail($email.val())) {
                console.log($email.val());

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
        bindEvents();
    }

    return {
        init
    };
}
