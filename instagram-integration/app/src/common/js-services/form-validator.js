import $ from 'jquery';

const Validator = function($form) {

    const cssClassName = {
        error: 'input-error',
        errorMsgSelector: '.error'
    };
    const Elements = {
        name: {
            selector: $('input[type=text]', $form),
            reg: /^[a-zA-Z]{2,20}$/
        },

        email: {
            selector: $('input[type=email]', $form),
            /* eslint-disable */
            reg: /^[a-z-0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,7}$/i
            /* eslint-enable */
        },

        message: {
            selector: $('textarea', $form),
            reg: /^\s+$/
        }
    };

    const handleError = function(element, message, v1) {
        if (v1.selector.length > 1) {
            const ss = v1.selector;

            $(ss).each(function(i, v) {
                $(v).removeClass(cssClassName.error);
                if ($(v).val() === '') {
                    $(v).addClass(cssClassName.error);
                    const $err_msg = $(v).parent('div');
                    let error = {};
                    if ($(v).parent('div').find(cssClassName.errorMsgSelector).length === 0) {
                        error = $('<div class="error"></div>').text(message);
                    } else {
                        $(v).parent('div').find(cssClassName.errorMsgSelector).text('');
                        error = $(v).parent('div').find(cssClassName.errorMsgSelector).text(message);
                        $(cssClassName.errorMsgSelector).show();
                    }
                    error.appendTo($err_msg);
                } else {
                    $(v).siblings(cssClassName.errorMsgSelector).text('');
                }
                $(v).keyup(function() {
                    $(cssClassName.errorMsgSelector).fadeOut(1000, function() {
                        element.removeClass(cssClassName.error);
                    });
                });
            });
        } else {
            element.addClass(cssClassName.error);
            const $err_msg = element.parent('div');
            let error = {};
            if (element.parent('div').find(cssClassName.errorMsgSelector).length === 0) {
                error = $('<div class="error"></div>').text(message);
            } else {
                element.parent('div').find(cssClassName.errorMsgSelector).text('');
                error = element.parent('div').find(cssClassName.errorMsgSelector).text(message);
                $(cssClassName.errorMsgSelector).show();
            }
            error.appendTo($err_msg);
            element.keyup(function() {
                $(error).fadeOut(1000, function() {
                    element.removeClass(cssClassName.error);
                });
            });
        }

    };

    this.validate = function() {

        console.log(Elements);
        for (const i in Elements) {
            if (Object.prototype.hasOwnProperty.call(Elements, i)) {
                const type = i;
                const validation = Elements[i];
                switch (type) {
                    case 'name':
                        if (!validation.reg.test(validation.selector.val())) {
                            handleError(validation.selector, 'Not a valid name.', validation);
                        }
                        break;
                    case 'email':
                        if (!validation.reg.test(validation.selector.val())) {
                            handleError(validation.selector, 'Not a valid e-mail address.', validation);
                        }
                        break;
                    case 'message':
                        if (validation.reg.test(validation.selector.val()) || validation.selector.val() === '') {
                            handleError(validation.selector, 'Message field cannot be empty.', validation);
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        // $form.submit(function(e) {
        //
        //     e.preventDefault();
        // });

    };
};

export default Validator;
