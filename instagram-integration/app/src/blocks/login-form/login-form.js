/* eslint-disable sort-vars */
import $ from 'jquery';
import User from '../../common/js-services/user';
import {CONST} from '../../common/js-services/consts';

export function LoginForm() {
    const user = new User(), // service
        $form = $('#js_login-form'),
        $email = $form.find('input[name="mail"]'),
        $textAreaDescription = $('#description');
        // formData = {'email': 'test1_email@m.ru', 'password': 'password'};

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
                  sessionStorage.setItem('user_logged', 'logged');

                  // window.location = confirm-registration.html?token='from server';

                  // retrieve the object in a string form
                  const customersDataString = sessionStorage.getItem('user_logged');
                  console.log(customersDataString);
                  console.log('request succeeded with JSON response', result);
                  $textAreaDescription.empty()
                      .append(`<p>status: ${result.status.state}</p>`)
                      .append(`<p> message: ${result.status.message} </p>`);
              } else if (result.status) {
                  console.log(result);
                  $textAreaDescription
                      .append(`<p>status: ${result.status.state}</p>`)
                      .append(`<p> message: ${result.status.message} </p>`);
              } else {
                  console.log(result);
              }
          }).then((result) => {
              if (result && result.status) {
                  console.log(result);
                  $textAreaDescription.text(`succsess, status ${result.status.state}`);
                  $('.login-box').show();
              }
          }).catch((error) => {
              console.log('request failed', error);
              $textAreaDescription.text(error.message);
              console.log('do something');
          });
    };

    const bindEvents = function() {
        $('#js_login_btn').on('click', (e) => {
            e.preventDefault();
            submitForm();
        });
    };
    function init() {
        bindEvents();
        $('.login-box').show(); // remove me
    }

    return {
        init
    };
}
