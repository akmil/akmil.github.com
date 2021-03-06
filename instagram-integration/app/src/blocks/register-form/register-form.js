// import $ from 'jquery';
import PubSub from 'pubsub-js'; // https://www.npmjs.com/package/pubsub-js
import User from '../../common/js-services/user';
import cookieStorage from '../../common/js-services/cookie';
import {CONST} from '../../common/js-services/consts';
import viewUtils from '../../common/js-services/view';

const selectorCls = {
    form: '.auth.register .form-signin',
    submitBtn: '[type="submit"]'
};
export default class RegisterForm {
    constructor() {
        this.user = User;
        this.$form = $(selectorCls.form);
        this.$email = this.$form.find('input[name="mail"]');
        this.$textAreaDescription = $('.register--confirm');
        this.formData = {'email': 'test1_email@m.ru', 'password': 'password'};
    }

    init() {
        if ($('.auth.register').length) {
            this.bindEvents();
        }
    }

    submitForm(formDataObj) {
        const email = this.$email.val();
        const borderDangerCls = 'border-danger';
        const $password = this.$form.find('input[name="pass"]'),
            $passwordConfirm = this.$form.find('input[name="pass-confirm"]'),
            password = this.$form.find('input[name="pass"]').val(),
            passwordConfirm = this.$form.find('input[name="pass-confirm"]').val();

        // Highlight errors
        if (passwordConfirm !== password) {
            $password.addClass(borderDangerCls);
            $passwordConfirm.addClass(borderDangerCls);
            return;
        } else {
            $password.removeClass(borderDangerCls);
            $passwordConfirm.removeClass(borderDangerCls);
        }
        this.$email.val(this.$email.val().toLocaleLowerCase());
        this.formData = formDataObj || {email, password};

        this.user.register(this.formData)
            .then((result) => {
                if (result.data && result.data.token) {

                    // save the item
                    cookieStorage.set(CONST.cookieStorage.emailConfirmed, 'false');
                    cookieStorage.set(CONST.cookieStorage.token, result.data.token);
                    PubSub.publish(CONST.events.USER_LOGGED);
                    // viewUtils.showInfoMessage(this.$textAreaDescription,
                    //     result.status.state,
                    //     result.status.message || 'Register and Login succsess');
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
                const modal = $('#register-error-modal');
                modal.modal('show');

                console.log('request failed', error);
                // viewUtils.showInfoMessage(this.$textAreaDescription,
                //     error.message);
            });
    }

    bindEvents() {
        const registerBox = CONST.uiSelectors.headerRegBox; // 'nav .register-box';
        const openedClass = 'd-block';
        const closeClass = 'd-none';
        const $btn = $(selectorCls.submitBtn),
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

        PubSub.subscribe(CONST.events.USER_LOGGED, () => {
            // $('.register--confirm').removeClass('d-none');
            window.location.href = './registration-success.html';
        });

        $(document).on('click', (event) => {
            const isRegBtnClick = $(event.target).closest('nav.navbar').find('.register-box').length;

            if (!isRegBtnClick && $(registerBox).hasClass(openedClass)) {
                $(registerBox).addClass(closeClass).removeClass(openedClass);
            }
        });
    }
}
