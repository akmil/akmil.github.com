/* eslint-disable no-unused-vars */
import {CONST} from '../../common/js-services/consts';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import UserTaskManager from '../../common/js-services/api-task-manager';
import * as tabs from '../_shared/tebs-pils/tabs';
import * as storiesStatus from './stories-status';
import * as logs from '../_shared/logs/logs';
import * as imageUpload from '../_shared/image-upload/image-upload';
import {getPosts} from './utils-modal';
import {tplTextField} from './addAnswerTemplate';
import viewUtils from '../../common/js-services/view';

let usernameSelected = '';
const selectCls = 'js_logs-accounts';
const clsConst = {
    currentPageCls: '.stories-page',
    tasksList: '.log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: CONST.url.tmTypes.storiesT,
    pathSubTypes: CONST.url.tmTypes.storiesSubT
};
const elSelector = {
    fields: '.autoanswer-text-fields',
    keyWord: 'textarea.answer-words',
    answer: 'textarea.answer-messages',
    fileUploadBox: '.file-upload',
    addPostBtns: '.js_autoanswer-add-post'
};
const state = {
    subtype: clsConst.pathSubTypes[0]
};

function onSubmitHandler(e) {
    // const fields = $(elSelector.fields);
    const form = $(e.target);
    const formName = 'wizard-form';

    const taskMode = $(form).find('.select-task_mode option:selected').val();
    console.log(state);
    state.user_default_config = {
        ...state.user_default_config,
        task_mode: taskMode.toUpperCase(),
        criteria: {}
    };
    const limit = document.forms[formName]['limit'];
    const cycle_pause = {
        from: document.forms[formName]['have_cycle_pause_from'].value,
        to: document.forms[formName]['have_cycle_pause_to'].value
    };
    const followings = {
        from: document.forms[formName]['have_followings_from'].value,
        to: document.forms[formName]['have_followings_to'].value
    };

    if (limit.value === '') {
        limit.focus();
        return false;
    }
    state['user_default_config'].criteria = {
        max_views: limit.value,
        followings
    };
    state['type'] = clsConst.pathType;
    state['username'] = usernameSelected;
    state['user_custom_config'] = {};

    $(form).find('input[type="text"],input[type="number"],input[type="email"]').each(function () {
        if ($(this).val() === '') {
            e.preventDefault();
            $(this).addClass('input-error');
        } else {
            $(this).removeClass('input-error');
        }
    });

    // state.type = CONST.url.tmTypes.followingT;
    // state.subtype = CONST.url.tmTypes.followingSubT[0];
    console.log('onSubmitHandler **request**  post: StartFollowingList', state);

    UserTaskManager.postStartFollowingList(state).then((result) => {
        if (result.status.state === 'ok') {
            console.log(JSON.stringify(result));
            $('.form-submit-finish').addClass('d-block')
                    .find('.alert').append(`<p>task_id: ${result.data.task_id}</p>`);
        }
    });
}

function fillListUsers($wrapper, accounts) {
    $wrapper.empty().addClass('border-light-color');
    $(`<div class="">Доступные аккаунты</div><select name="task-type" class="${selectCls}"></select>`).appendTo($wrapper);
    accounts.forEach((name) => {
        $(`<option class="list-group-item py-2" value="${name}">
            ${name}
        </option>`).appendTo($(`.${selectCls}`));
    });
    $(`.${selectCls}`).on('change', function () {
        usernameSelected = $(`.${selectCls} option:selected`).val();
        logs.init(selectCls, clsConst);
    });
}

/**
 * Init Handlers
 */
function initHandlers() {

    $('.js_get-stories-type input[type=radio]').on('click', (e) => {
        const value = $(e.target).attr('value');
        state.subtype = value.toUpperCase();
        console.log(state);
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    // alert close
    $('.form-submit-finish--error .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    tabs.init(fillListUsers);
}

function setUserName(state) {
    usernameSelected = state.username;
}

// let defaultCfg = {
//     cfg: {},
//     id: {}
// };

function renderTaskMode(defaultCfg) {
    const {cfg: {task_modes}} = defaultCfg;
    viewUtils.fillRadioGroupList($('.js_task-mode'), task_modes);
}

function getConfig() {
    const path = {
        type: clsConst.pathType,
        subtype: state.subtype
    };
    const cbError = function(res) {
        const msg = res.status.message;
        $('.form-submit-finish--error').addClass('d-block')
      .find('.alert').append(`<p>${msg}</p>`);
    };

    UserTaskManager.getStoriesConfig(path, cbError).then((result) => {
        if (result.status.state !== 'ok') {
            return;
        }
        const {
            data: {
              found
            }
        } = result;

        // defaultCfg = found;
        renderTaskMode(found);
    });
}

function setSubtype(state) {
    usernameSelected = state.username;
}

function stepReducer(stepNumber, state) {
    switch (stepNumber) {
        case 0:
            console.log(state, stepNumber);
            setUserName(state);
            break;
        case 1:
            console.log(state, stepNumber);
            setSubtype(state);
            getConfig();
            break;
        case 2:
            console.log(state, stepNumber);

            break;
        default:
            console.log('default', stepNumber);
    }
}
export function init() {
    const isInCurrentPage = $(clsConst.currentPageCls).length;
    if (!isInCurrentPage) {
        return;
    }
    console.log(clsConst.currentPageCls);
    const wizardCfg = {
        stepReducer,
        onSubmitHandler
    };
    wizardForm.init(wizardCfg);
    initHandlers();
    storiesStatus.init({
        isInStoriesPage: isInCurrentPage
    });
    // window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
    //     logs.init(selectCls, clsConst);
    // });
    // window.PubSub.subscribe(CONST.events.autoarnswer.IMAGE_UPLOADED, (e, res) => {
    //     const result = JSON.parse(res.response);
    //     const imageId = result && result.data && result.data.image_id;
    //     $(res.el).closest('.file-upload').attr('attached-img-id', imageId);
    //     console.log('image_loaded', res);
    // });
    // initModalHandler();
    // imageUpload.init();

}
