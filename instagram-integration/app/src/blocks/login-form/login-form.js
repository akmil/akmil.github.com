/* eslint-disable sort-vars */
import $ from 'jquery';
import User from '../../common/js-services/user';
import cookieStorage from '../../common/js-services/cookie';
import viewUtils from '../../common/js-services/view';
import {CONST} from '../../common/js-services/consts';

export function LoginForm(selectorCSS = {}) {
    const {_formId, _buttonSubmitId, _showLoginBoxBtnId} = selectorCSS;
    const user = User, // service
        $form = (!_formId) ? $('#js_login-form') : $(`#${_formId}`),
        $email = $form.find('input[name="mail"]'),
        $textAreaDescription = $('#description');

    const submitForm = function(formDataObj) {
        const email = $email.val(),
            password = $form.find('input[name="pass"]').val(),
            _formData = formDataObj || {email, password};

        $email.val($email.val().toLocaleLowerCase());

        if (_buttonSubmitId) {
            const username = 'pasha.oliinyk';
            const password = 'leacin47';
            const newFormData = {username, password};

            user.addInstagramAccount(newFormData).then((result) => {
                if (result && result.status) {
                    console.log(result);
                    viewUtils.showInfoMessage($textAreaDescription,
                        result.status.state,
                        result.status.message || 'Login error');
                }
            });

            console.log('submit by ', _buttonSubmitId);
            return;
        }

        user.login(_formData)
          .then((result) => {
              if (result && result.data && result.data.token) {
                  CONST.user = {
                      // email: _formData.email,
                      // password: _formData.password,
                      token: result.data.token,
                      logged: true
                  };

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
                    `<p>status: ${result.status.state}</p><p> message: ${result.status.message} </p>`);
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
          }).catch((error) => {
              console.log('request failed', error);
              viewUtils.showInfoMessage($textAreaDescription, error.message);
              console.log('do something');
          });
    };

    const logOut = function() {
        cookieStorage.remove(CONST.cookieStorage.token);
    };

    const bindEvents = function() {
        if (_showLoginBoxBtnId) {
            const $showLoginBoxBtnId = $(`#${_showLoginBoxBtnId}`);
            const $loginBox = $('.login-box');
            $showLoginBoxBtnId.on('click', () => {
                $loginBox.show();
            });
        }
        const $buttonSubmit = (!_buttonSubmitId) ? $('#js_login_btn') : $(_buttonSubmitId);
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
    };

    function init() {
        bindEvents();
    }

    return {
        init
    };
}
