import $ from 'jquery';
import User from '../../common/js-services/user';
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

        this.user.register(this.formData).then((result) => {
            console.log(result);
            this.$textAreaDescription.text(`succsess, status ${result.status.state}`);
            $('.login-box').show();
        }).catch(function(error) {
            console.log('request failed', error);
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
