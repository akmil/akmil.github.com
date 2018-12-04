/* eslint-disable sort-vars */
import $ from 'jquery';
import User from '../../common/js-services/user';
import PubSub from 'pubsub-js'; // https://www.npmjs.com/package/pubsub-js
import cookieStorage from '../../common/js-services/cookie';
import viewUtils from '../../common/js-services/view';
import {CONST} from '../../common/js-services/consts';

export function LoginForm(selectorCss) {
    // const selectorCss = selectorCssLoginForm || selectorCssLoginFormInstagram;
    const {_formId, _buttonSubmitId, _showLoginBoxBtnId, _loginBox} = selectorCss;
    const user = User, // service
        $form = $(_formId),
        $email = $form.find('input[name="mail"]'),
        $textAreaDescription = $('#description');

    const userLoginHeader = (_formData) => {
        user.login(_formData)
            .then((result) => {
                if (result && result.data && result.data.token) {
                    // save the item
                    cookieStorage.set(CONST.cookieStorage.token, result.data.token);

                    $('.nav-link.js_logOut').parent().show();

                    // retrieve the object in a string form
                    // const customersDataString = cookieStorage.get(CONST.cookieStorage.token);
                    // console.log(customersDataString);
                    console.log('request succeeded with JSON response', result);
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
        // const username = 'pasha.oliinyk';
        // const password = 'leacin47';
        // const newFormData = {username, password};
        const cbError = (result) => {
            viewUtils.showInfoMessage($textAreaDescription,
                result.status.state,
                result.status.message || 'Login error');
        };

        user.addInstagramAccount(newFormData, cbError).then((result) => {
            if (result && result.status) {
                console.log(result);
                viewUtils.showInfoMessage($textAreaDescription,
                    result.status.state,
                    result.status.message || 'Login error');
            }
            if (result && result.status) {
                console.log(result);
                viewUtils.showInfoMessage($textAreaDescription,
                    result.status.state,
                    result.status.message || 'Login error');
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
            userLoginHeader(_formData);
            PubSub.publish(CONST.events.USER_LOGGED, 'login');
        }
    };

    const logOut = function() {
        cookieStorage.remove(CONST.cookieStorage.token);
        PubSub.publish(CONST.events.USER_LOGOUT);
    };

    const bindEvents = function() {
        const $showLoginBoxBtnId = $(_showLoginBoxBtnId);
        const $loginBox = $(_loginBox);
        $showLoginBoxBtnId.on('click', () => {
            if (!selectorCss.isLoginInstagram) {
                $loginBox.css({'top': 0, 'right': 0})
                    .addClass('bg-light border mt-5 mx-auto position-absolute');
            }
            $loginBox.show();
        });

        const $buttonSubmit = $(_buttonSubmitId);
        // console.log($buttonSubmit);
        $buttonSubmit.on('click', (e) => {
            e.preventDefault();
            submitForm();
        });
        $('.nav-link.js_logOut').on('click', (e) => {
            e.preventDefault();
            logOut();
            viewUtils.showInfoMessage($textAreaDescription, 'Logged out');
        });
        PubSub.subscribe(CONST.events.USER_LOGOUT, (msg) => {
            $(CONST.uiSelectors.headerNavLoginBtn).show();
            $(CONST.uiSelectors.headerRegBtn).show();
            $('.nav-link.js_logOut').hide();
            const selectorLoginState = '.js_message_logged--text';
            $(selectorLoginState).text('Вы вышли из аккаунта');
        });
    };

    function init() {
        bindEvents();
    }

    return {
        init
    };
}
