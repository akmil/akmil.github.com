/* eslint-disable sort-vars */
import $ from 'jquery';
import User from '../../common/js-services/user';
import {CONST} from '../../common/js-services/consts';

const parseQueryString = function() {

    const str = window.location.search;
    const objURL = {};

    str.replace(
      new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
        function($0, $1, $2) {
            objURL[$1] = $2;
        }
  );
    return objURL;
};

export function confirmationWithRedirect() {
    const user = User;
    const params = parseQueryString();
    // Example how to use it:

    const sendConfirm = function (token) {
        user.confirm(token).then((result) => {
            if (result.status && result.status.state === 'ok') {
                CONST.user = {
                    // email: _formData.email,
                    // password: _formData.password,
                    // token: result.data.token,
                    email_confirm: true
                };

                // save the item
                sessionStorage.setItem('email_confirm', 'confirmed');

                // window.location = confirm-registration.html?token='from server';

                // retrieve the object in a string form
                const customersDataString = sessionStorage.getItem('customersData');
                console.log(customersDataString);
                console.log('request succeeded with JSON response', result);
                $('.confirm-registration').append(`<p>confirmation status: ${result.status.state}</p>`);
                setTimeout(() => {
                    window.location = './';
                }, 1000);
            } else if (result.status) {
                console.log(result);
            } else {
                console.log(result);
            }
        });
    };

    const redirect = function() {
        // eslint-disable-next-line dot-notation
        const token = params['token'];

        if (!location.pathname.indexOf('confirm-registration')) {
            return;
        }
        if (token) {
            console.log('send req to ', token);
            sendConfirm(token);
        }
    };

    function init() {
        redirect();
    }

    return {
        init
    };
}
