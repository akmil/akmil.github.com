import {CONST} from '../../common/js-services/consts';
// import 'brutusin-json-forms';
const state = {
    username: ''
};
const wizardFormSelector = '.wizard-form';

/**
 * Init header
 */
function initSteps(formSelector, wizardCfg) {
    const $form = $(formSelector);
    const {stepReducer, onSubmitHandler} = wizardCfg;
    $('.js_profile-user-follow>.container').removeClass('container');

    $form.find('fieldset:first-child').fadeIn('slow');

    $form.find('input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $form.find('.btn-next').on('click', function () {
        const parent_fieldset = $(this).parents('fieldset');
        let next_step = true;
        const radioBtnActive = parent_fieldset.find('input[name="userAccountRadio"]:checked');

        if (radioBtnActive.length > 0) {
            state.username = radioBtnActive.parents('li').data('username');
            state.slot_index = radioBtnActive.parents('li').data('slotindex');
        }

        if (stepReducer) {
            stepReducer(parent_fieldset.index(), state);
        }

        parent_fieldset.find('input[type="text"],input[type="email"]').each(function () {
            if ($(this).val() === '') {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });

    // previous step
    $form.find('.btn-previous').on('click', function () {
        // state.username = [...new Set(state.username)];
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });

    // speed radio-btn group
    $('.js_follow-speed input[type=radio]').on('click', function () {
        // const value = $(this).attr('value');
        // state.user_default_config = {
        //     task_mode: value.toUpperCase()
        // };
    });

    // submit
    $form.on('submit', function (e) {
        $(this).find('input[type="text"],input[type="number"],input[type="email"]').each(function () {
            if ($(this).val() === '') {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (onSubmitHandler) {
            onSubmitHandler(e);
        }

        console.log('SubmitHandler END');
    });

    // alert close
    $('.form-submit-finish .close').on('click', function (e) {
        console.log('form-submit-finish .close');
        $(this).closest('.form-submit-finish').removeClass('d-block');
        e.stopPropagation();
        // $(this).closest('form-submit-finish').removeClass('d-block');
        // $('#v-pills-runned-tab').trigger('click');
        // window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    $('#v-pills-create-task-tab').on('click', (e) => {
        console.log('reset form');
        if ($('fieldset:first-child').css('display') === 'none') {
            $form.find('fieldset').hide('fast', function () {
                $form.find('fieldset:first-child').show('slow');
            });
        }
        $('.form-submit-finish').removeClass('d-block');
        // clear all val in textarea and input (except radio)
        $('fieldset', wizardFormSelector).find('input:not([type="radio"]), textarea').val('');
    });
}

/*
function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}*/

// wrap list as radiogroup
function modifyAccList() {
    const radioBtnAppend = (idx) => `<div class="">
            <input type="radio" name="userAccountRadio" id="customRadio-${idx}" class="custom-control-input d-none" value="">
        </div>`;
    const radioBtnWrap = (idx) => `<label class="accounts-list--label-wrapper col mb-0 media py-3" for="customRadio-${idx}"></label>`;
    const $accountsList = $('.accounts-list');
    const $li = $accountsList.find('li.media');
    $li.addClass('js_user-radio').removeClass('py-3 media');

    for (let i = 0; i < $li.length; i++) {
        const currLi = $($li[i]);
        currLi.wrapInner(radioBtnWrap(i)).append(radioBtnAppend(i));
        if (currLi.find('.user-checkpoint .text-danger').length) {
            currLi.remove();
        }
    }

    $('.js_user-radio').on('click', 'input[type=radio]', function (e) {
        const $parentFieldset = $(this).parents('fieldset');
        $('li.active', $parentFieldset).removeClass('active');
        $(this).closest('li').addClass('active');
        $('.btn-next', $parentFieldset).prop('disabled', false);
    });
}

export function init(wizardCfg) {
    if ($('.wizard-form').length) {
        initSteps(wizardFormSelector, wizardCfg);
        window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, (eventName, data) => {
            modifyAccList();
        });
    }
}
