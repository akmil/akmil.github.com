import $ from 'jquery';
import User from '../../common/js-services/user';
import {CONST} from '../../common/js-services/consts';
// import {CONST} from '../../common/js-services/consts';

export default class RegisterForm {
    constructor() {
        this.user = new User();
        this.$form = $('#js_form');
        this.$email = this.$form.find('input[name="mail"]');
        this.$textAreaDescription = $('#description');
        this.formData = {'email': 'test1_email@m.ru', 'password': 'password'};
    }

    init() {
        this.bindEvents();
    }

    submitForm(formDataObj) {
        const email = this.$email.val(),
            password = this.$form.find('input[name="pass"]').val();

        this.$email.val(this.$email.val().toLocaleLowerCase());
        this.formData = formDataObj || {email, password};

        this.user.register(this.formData)
            .then((result) => {
                if (result.data && result.data.token) {
                    CONST.user = {
                        email: this.formData.email,
                        password: this.formData.password,
                        token: result.data.token
                    };
                    console.log('request succeeded with JSON response', result);
                } else {
                    this.$textAreaDescription
                        .append(`<p>status: ${result.status.state}</p>`)
                        .append(`<p> message: ${result.status.message} </p>`);
                }
            }).then((result) => {
                if (result && result.status) {
                    console.log(result);
                    this.$textAreaDescription.text(`succsess, status ${result.status.state}`);
                    $('.login-box').show();
                }
            }).catch((error) => {
                console.log('request failed', error);
                this.$textAreaDescription.text(error.message);
                console.log('do something');
            });
    }

    bindEvents() {
        // $('.login').on('click', function (e) {
        //     this.submitForm(e, CONST.user, loginUrl);
        // });

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
    }
}
