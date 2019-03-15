import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';
import viewUtils from '../../common/js-services/view';
const {fillRadioGroupList} = viewUtils;
import {attachTxtFileHandler} from '../follow/follow-read-file-txt';

import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import * as tabStatus from './unfollow-status';
import {initLogsTab} from '../_shared/logs/logs-tabs';

let usernameSelected = '';
const logsSubtypes = CONST.url.tmTypes.unfollowingSubT;
const clsConst = {
    currentPageCls: '.unfollow-page',
    tasksList: '.log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: CONST.url.tmTypes.unfollowingT,
    pathSubType: CONST.url.tmTypes.unfollowingSubT[0]
};
const elSelector = {
    wizardForm: '.wizard-form',
    wizardFormName: 'wizard-form',
    fields: '.autoanswer-text-fields',
    taskMode: '.js_task-mode',
    typeRadioGroup: '.js_get-unfollow-type',
    competitors: 'textarea.stories-competitors'
};
const state = {
    subtype: CONST.url.tmTypes.unfollowingSubT[0],
    user_default_config: {
        task_mode: 'SAFE'
    }
};

function onSubmitHandler(e) {
    const {wizardFormName} = elSelector;
    const form = document.forms[wizardFormName];

    const body = {
        ...state,
        user_custom_config: {
            attachment: {
                'list_id': 'id_static'
            }
        },
        type: clsConst.pathType,
        username: usernameSelected
    };

    if (state.subtype === CONST.url.tmTypes.unfollowingSubT[0]) {
        // text file should be added
        body['user_custom_config'].attachment = {
            'list_id': $('.add-file .file-upload-container').attr('attached-txt-id')
        };
    }

    $(form).find('input[type="text"],input[type="number"],input[type="email"]').each(function () {
        if ($(this).val() === '') {
            e.preventDefault();
            $(this).addClass('input-error');
        } else {
            $(this).removeClass('input-error');
        }
    });

    console.log('onSubmitHandler **request**  post: StartFollowingList', body);

    UserTaskManager.postStartFollowingList(body).then((result) => {
        if (result.status.state === 'ok') {
            console.log(JSON.stringify(result));
            $('.form-submit-finish').addClass('d-block')
                .find('.alert').append(`<p>task_id: ${result.data.task_id}</p>`);
        }
    });
}

/**
 * Init Handlers
 */
function initHandlers() {

    $(`${elSelector.typeRadioGroup} input[type=radio]`).on('click', (e) => {
        const value = $(e.target).attr('value');
        state.subtype = value.toUpperCase();
        console.log(state);
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-all-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    // alert close
    $('.form-submit-finish--error .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-all-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });
}

function onSuccessFileUploadCb() {
    const {wizardForm} = elSelector;

    $(wizardForm).find('button[type="submit"]').attr('disabled', false);
}

function addUploadButton(subtype) {
    function toggleAddTextBtn(subtype) {
        if (subtype === CONST.url.tmTypes.unfollowingSubT[0]) {
            // show txt fileUpload
            $('.add-file').addClass('d-block');
            // $('.add-competitors').addClass('d-none').removeClass('d-block');
        } else {
            // hide txt fileUpload
            // $('.add-competitors').addClass('d-block');
            $('.add-file').addClass('d-none').removeClass('d-block');
            onSuccessFileUploadCb();
        }
    }
    toggleAddTextBtn(subtype);
    // console.log('addUploadButton', CONST.url.tmTypes.unfollowingSubT[0]);
}

function renderTaskMode(defaultCfg) {
    const {cfg: {task_modes}} = defaultCfg;
    const {taskMode: taskModeSelector} = elSelector;

    fillRadioGroupList($(taskModeSelector), task_modes, 'отписок');
    addUploadButton(defaultCfg.id.subtype);

    $(`${taskModeSelector} input[type=radio]`).on('click', (e) => {
        const value = $(e.target).attr('value');
        state.user_default_config.task_mode = value.toUpperCase();
    });
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
        // $('#limit').val(limitVal);
        // const limitVal = found.cfg.criteria.max_views;
        renderTaskMode(found);
    });
}

function setUserNameCb(_usernameSelected) {
    usernameSelected = _usernameSelected;
}

function setUserNameFirstStep(state) {
    usernameSelected = state.username;
}

function addTextArea(stepNumber) {
    const {wizardForm} = elSelector;
    if (state.subtype === CONST.url.tmTypes.unfollowingSubT[1]) {
        const fieldLast = $(`${wizardForm} fieldset`).get(stepNumber + 1);
        const tpl = `<div class="row">
            <label class="">Конкуренты</label>
            <textarea class="form-control stories-competitors mb-2" rows="1"></textarea></div>`;
        $(fieldLast).find('.form-bottom>.row').after(tpl);
        console.log('end');
    }
}

function stepReducer(stepNumber, state) {
    switch (stepNumber) {
        case 0:
            // console.log(state, stepNumber);
            setUserNameFirstStep(state);
            break;
        case 1:
            // console.log(state, stepNumber);
            getConfig();
            break;
        case 2:
            console.log(state, stepNumber);
            addTextArea(stepNumber);
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
    attachTxtFileHandler('.file-upload-container', onSuccessFileUploadCb);
    const textRusArray = ['По списку', 'От всех', 'От невзаимных'];
    initLogsTab({logsState: CONST.logsState, logsSubtypes, clsConst, setUserNameCb, textRusArray});
    tabStatus.init({
        isInStoriesPage: isInCurrentPage
    });
    // window.PubSub.subscribe(CONST.events.autoarnswer.IMAGE_UPLOADED, (e, res) => {
    //     const result = JSON.parse(res.response);
    //     const imageId = result && result.data && result.data.image_id;
    //     $(res.el).closest('.file-upload').attr('attached-img-id', imageId);
    //     console.log('image_loaded', res);
    // });

}
