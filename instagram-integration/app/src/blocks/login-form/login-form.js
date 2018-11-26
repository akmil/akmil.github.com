/* eslint-disable sort-vars */
import $ from 'jquery';
import User from '../../common/js-services/user';
import viewUtils from '../../common/js-services/view';
import {CONST} from '../../common/js-services/consts';

export function LoginForm() {
    const user = User, // service
        $form = $('#js_login-form'),
        $email = $form.find('input[name="mail"]'),
        $textAreaDescription = $('#description');
        // formData = {'email': 'test1_email@m.ru', 'password': 'password'};

    const submitForm = function(formDataObj) {
        const email = $email.val(),
            password = $form.find('input[name="pass"]').val(),
            _formData = formDataObj || {email, password};

        $email.val($email.val().toLocaleLowerCase());

        // console.log('viewUtils', viewUtils);

        user.login(_formData)
          .then((result) => {
              if (result && result.data && result.data.token) {
                  CONST.user = {
                      // email: _formData.email,
                      // password: _formData.password,
                      token: result.data.token,
                      logged: true
                  };

                  // test
                  // CONST.setUser({
                  //     email: _formData.email,
                  //     token: result.data.token,
                  //     logged: true
                  // });

                  // save the item
                  sessionStorage.setItem('user_logged', 'logged');

                  $('.nav-link.js_logOut').parent().show();

                  // retrieve the object in a string form
                  // const customersDataString = sessionStorage.getItem('user_logged');
                  // console.log(customersDataString);
                  console.log('request succeeded with JSON response', result);
                  viewUtils.showInfoMessage($textAreaDescription,
                      result.status.state,
                      result.status.message || 'Login succsess');
              } else if (result.status) {
                  console.log(result);
                  $textAreaDescription
                      .append(`<p>status: ${result.status.state}</p><p> message: ${result.status.message} </p>`);
              } else {
                  console.log(result);
              }
          }).then((result) => {
              if (result && result.status) {
                  console.log(result);
                  viewUtils.showInfoMessage($textAreaDescription,
                      result.status.state,
                      result.status.message || 'Login error');
                  $('.login-box').show();
              }
          }).catch((error) => {
              console.log('request failed', error);
              $textAreaDescription.text(error.message);
              console.log('do something');
          });
    };

    const logOut = function() {
        sessionStorage.removeItem('user_logged');
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
