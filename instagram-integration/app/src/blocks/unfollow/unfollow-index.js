import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';
import viewUtils from '../../common/js-services/view';
const {addDropdown, fillRadioGroupList} = viewUtils;

import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import * as tabStatus from './unfollow-status';
import * as tabs from '../_shared/tebs-pils/tabs';
import * as logs from '../_shared/logs/logs';

let usernameSelected = '';
const logsState = CONST.logsState;
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
        // user_default_config: {
        //     ...state.user_default_config,
        //     criteria: {
        //     }
        // },
        // state['user_custom_config'].attachment = {
        //     'list_id': $('.add-file .file-upload-container').attr('attached-txt-id')
        // };
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
        state['user_custom_config'].attachment = {
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

const logsSubtypes = CONST.url.tmTypes.unfollowingSubT;
function initLogsTab() {
    function dropdownOnSelectCb(e) {
        const {selectClsLogsTaskType} = logsState;
        clsConst.pathSubType = $(`.${selectClsLogsTaskType} option:selected`).val();
        // logsState.activeSubType = clsConst.pathSubType;
        $('.js_logs-container').addClass('d-block');
        $('option.js_empty-subtype').remove();
    }
    function OnChangeSelect() {
        const {selectCls} = logsState;
        $(`.${selectCls}`).on('change', function () {
            usernameSelected = $(`.${selectCls} option:selected`).val();
            // clsConst.pathSubType = logsState.activeSubType;
            logs.init(selectCls, clsConst);
        });
    }
    const textRusArray = ['По списку', 'От всех', 'От невзаимных'];
    addDropdown($(logsState.wrapperSubtype), logsSubtypes, {logsState, dropdownOnSelectCb, textRusArray});
    tabs.init(OnChangeSelect, logsState); // makes double request : OPTION and GET
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
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    // alert close
    $('.form-submit-finish--error .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });
}

function addUploadButton() {
    console.log('addUploadButton', CONST.url.tmTypes.unfollowingSubT[0]);
}

function renderTaskMode(defaultCfg) {
    const {cfg: {task_modes}} = defaultCfg;
    const {taskMode: taskModeSelector} = elSelector;

    fillRadioGroupList($(taskModeSelector), task_modes, 'отписок');
    if (defaultCfg.id.subtype === CONST.url.tmTypes.unfollowingSubT[0]) {
        addUploadButton();
    }

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

function setUserName(state) {
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
            setUserName(state);
            break;
        case 1:
            // console.log(state, stepNumber);
            // setSubtype(state);
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
    initLogsTab();
    tabStatus.init({
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

}
