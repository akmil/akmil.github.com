import $ from 'jquery';
import PubSub from 'pubsub-js'; // https://www.npmjs.com/package/pubsub-js
import User from '../../common/js-services/user';
import cookieStorage from '../../common/js-services/cookie';
import {CONST} from '../../common/js-services/consts';
import viewUtils from '../../common/js-services/view';

export default class RegisterForm {
    constructor() {
        this.user = User;
        this.$form = $('#js_form');
        this.$email = this.$form.find('input[name="mail"]');
        this.$textAreaDescription = $('#description');
        this.formData = {'email': 'test1_email@m.ru', 'password': 'password'};
    }

    init() {
        this.bindEvents();
    }

    submitForm(formDataObj) {
        const email = this.$email.val();
        const $password = this.$form.find('input[name="pass"]'),
            $passwordConfirm = this.$form.find('input[name="pass-confirm"]'),
            password = this.$form.find('input[name="pass"]').val(),
            passwordConfirm = this.$form.find('input[name="pass-confirm"]').val();

        if (passwordConfirm !== password) {
            $password.addClass('input-error');
            $passwordConfirm.addClass('input-error');
            return;
        }
        this.$email.val(this.$email.val().toLocaleLowerCase());
        this.formData = formDataObj || {email, password};

        this.user.register(this.formData)
            .then((result) => {
                if (result.data && result.data.token) {

                    // save the item
                    cookieStorage.set(CONST.cookieStorage.emailConfirmed, 'false');

                    cookieStorage.set(CONST.cookieStorage.token, result.data.token);
                    // console.log('request succeeded with JSON response', result);
                    PubSub.publish(CONST.events.USER_LOGGED);
                    viewUtils.showInfoMessage(this.$textAreaDescription,
                        result.status.state,
                        result.status.message || 'Register and Login succsess');
                } else {
                    viewUtils.showInfoMessage(this.$textAreaDescription,
                        result.status.state,
                        result.status.message || 'no result.data found');
                }
            }).then((result) => {
                if (result && result.status) {
                    console.log(result);
                    viewUtils.showInfoMessage(this.$textAreaDescription,
                        result.status.state);
                    $('.login-box').show();
                }
            }).catch((error) => {
                console.log('request failed', error);
                viewUtils.showInfoMessage(this.$textAreaDescription,
                    error.message);
                console.log('do something');
            });
    }

    bindEvents() {
        const registerBox = CONST.uiSelectors.headerRegBox; // 'nav .register-box';
        const openedClass = 'd-block';
        const closeClass = 'd-none';
        const $btn = $('#js_feedback_btn'),
            cssValidationClass = 'form-validation';

        $btn.on('click', (e) => {
            const form = this.$form.get(0);
            e.preventDefault();

            if (!$btn.is(':disabled')) {
                if (form.checkValidity()) {
                    // $btn.attr('disabled', true);
                    this.submitForm();
                } else {
                    // Highlight errors
                    if (form.reportValidity) {
                        form.reportValidity();
                    }
                    this.$form.addClass(cssValidationClass);
                }
            }
        });

        $(document).on('click', (event) => {
            const isRegBtnClick = $(event.target).closest('nav.navbar').find('.register-box').length;

            if (!isRegBtnClick && $(registerBox).hasClass(openedClass)) {
                $(registerBox).addClass(closeClass).removeClass(openedClass);
            }
        });
    }
}
