/* eslint-disable sort-vars */
import $ from 'jquery';
import User from '../../common/js-services/user';
// import cookieStorage from '../../common/js-services/cookie';
import viewUtils from '../../common/js-services/view';
// import {CONST} from '../../common/js-services/consts';

export function Instagram(selectorCSS = {}) {
    const $buttonSubmit = $('#js_instagram-get-accounts--btn');
    const user = User, // service
        $list = $('.instagram-accounts-list');

    const submitForm = function(formDataObj) {
        if ($buttonSubmit.length) {
            user.getInstagramAccount().then((result) => {
                if (result && result.status) {
                    console.log(result);
                    viewUtils.fillList($list,
                        result.data.accounts || 'Login error');
                }
            });

            console.log('getInstagramAccount ', $buttonSubmit);
            return;
        }
    };

    const bindEvents = function() {
        $buttonSubmit.on('click', (e) => {
            e.preventDefault();
            submitForm();
        });
    };

    function init() {
        bindEvents();
    }

    return {
        init
    };
}
