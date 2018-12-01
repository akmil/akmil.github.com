/* eslint-disable sort-vars */
import $ from 'jquery';
import User from '../../common/js-services/user';
import cookieStorage from '../../common/js-services/cookie';
import viewUtils from '../../common/js-services/view';
import {CONST} from '../../common/js-services/consts';

export function LoginForm() {
    const user = User, // service
        $form = $('#js_login-form'),
        $email = $form.find('input[name="mail"]'),
        $textAreaDescription = $('#description');

    const submitForm = function(formDataObj) {
        const email = $email.val(),
            password = $form.find('input[name="pass"]').val(),
            _formData = formDataObj || {email, password};

        $email.val($email.val().toLocaleLowerCase());

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
                  cookieStorage.set('user_logged', result.data.token);

                  $('.nav-link.js_logOut').parent().show();

                  // retrieve the object in a string form
                  // const customersDataString = cookieStorage.get('user_logged');
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
        cookieStorage.remove('user_logged');
    };

    const bindEvents = function() {
        $('#js_login_btn').on('click', (e) => {
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
