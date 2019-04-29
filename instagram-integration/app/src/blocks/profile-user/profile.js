import {CONST} from '../../common/js-services/consts';
import UserProfileManager from '../../common/js-services/api-profile-manager';

const clsConst = {
    currentPageCls: '.profile-user'
};

/**
 * Init header
 */
function initSteps(formSelector, wizardCfg) {
    const $form = $(formSelector);

    function cbError(res) {
        const msg = res.status.message;
        $('.form-submit-finish--error').addClass('d-block')
        .find('.alert').append(`<p>${msg}</p>`);
    }
    // submit
    $form.on('submit', function (e) {
        e.preventDefault();
        // $(this).find('input[type="text"],input[type="number"],input[type="email"]').each(function () {
        //     if ($(this).val() === '') {
        //         e.preventDefault();
        //         $(this).addClass('input-error');
        //     } else {
        //         $(this).removeClass('input-error');
        //     }
        // });
        const fields = $('input[type="password"]', $(this));
        const old_value = fields.get(0).value;
        const new_value_1 = fields.get(1).value;
        const new_value_2 = fields.get(2).value;

        if (new_value_1 !== new_value_2) {
            $(fields.get(2)).addClass('input-error');
            return;
        } else {
            $(fields.get(2)).removeClass('input-error');
        }

        const body = {
            password: {
                old_value,
                new_value_1,
                new_value_2
            }
        };

        UserProfileManager.updatePassword(body, cbError).then((result) => {
            if (result.status.state === 'ok') {
                console.log(JSON.stringify(result));
                // "incorrect password in 'old_value' field"
                if (result.data) {
                    console.log(result.data);
                }
            }
        });
        console.log('SubmitHandler END');
    });
}
export function init() {
    const isInCurrentPage = $(clsConst.currentPageCls).length;
    if (!isInCurrentPage) {
        return;
    }
    console.log(clsConst.currentPageCls);
    initSteps('form.password-change-form');
    window.PubSub.subscribe(CONST.events.autoarnswer.TEXT_FILE_UPLOADED, (e, res) => {
        $('.js_validate-txt-file-is-uploaded').removeAttr('disabled');
    });
}
