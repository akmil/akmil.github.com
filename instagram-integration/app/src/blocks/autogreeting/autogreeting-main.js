import {CONST} from '../../common/js-services/consts';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import UserTaskManager from '../../common/js-services/api-task-manager';
import * as tabs from '../_shared/tebs-pils/tabs';
import * as chatBotStatus from './autogreeting-status';
import * as logs from '../_shared/logs/logs';
import {emoji} from '../../common/js-services/emoji';
import * as imageUpload from '../_shared/image-upload/image-upload';
import {getPosts} from '../_shared/getPostsModal/utils-modal';
import {tplTextFieldGreet} from './addGreetTemplate';

let usernameSelected = '';
let slotIndex = '';
const selectCls = 'js_logs-accounts';
const speedType = '.js_autogreeting-speed';
const clsConst = {
    currentPageCls: '.autogreeting-page',
    tasksList: '.log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: CONST.url.tmTypes.autogreetT,
    pathSubType: CONST.url.tmTypes.autogreetSubT[0]
};
const elSelector = {
    fields: '.autogreeting-text-fields',
    fileUploadBox: '.file-upload'
};
const state = {
    user_default_config: {
        task_mode: 'SAFE'
    }
};

function onSubmitHandler(e) {
    const fields = $(elSelector.fields);
    const reqBody = [];
    const getAttachment = (item) => {
        const imageId = $(item).find(elSelector.fileUploadBox).attr('attached-img-id');
        const $imagePostBox = $(item).find('.js_uploaded-img-from-posts');
        const postItemId = $imagePostBox.data('postId');
        const postItemType = $imagePostBox.data('postType');
        const post = {
            id: postItemId,
            type: postItemType || 'type-error'
        };
        let attachment = null;

        if (postItemId) {
            attachment = {post};
        } else if (imageId) {
            attachment = {'image_id': imageId};
        }
        return attachment;
    };
    fields.each((idx, item) => {
        const message = $(item).find('textarea.answer-words').val();
        const attachmentImg = getAttachment(item);
        if (message.length || attachmentImg) {
            reqBody.push({
                'answer': (message.length) ? message : undefined,
                'attachment': (attachmentImg) ? attachmentImg : undefined
            });
        }
    });
    const nReqBody = {
        'username': usernameSelected,
        'slot_index': slotIndex,
        'type': CONST.url.tmTypes.autogreetT,
        'subtype': CONST.url.tmTypes.autogreetSubT[0],
        'user_default_config': {
            ...state.user_default_config,
            'task_mode': state.user_default_config.task_mode
        },
        'user_custom_config': {
            'forms': reqBody
        }
    };
    console.log('make request **', nReqBody);
    function cbError(res) {
        const msg = res.status.message;
        $('.form-submit-finish--error').addClass('d-block')
        .find('.alert').append(`<p>${msg}</p>`);
    }
    UserTaskManager.postStartTask(nReqBody, cbError).then((result) => {
        console.log('postBot');
        if (result.status.state === 'ok') {
            console.log(JSON.stringify(result));
            $('.form-submit-finish').find('.alert p').remove();
            $('.form-submit-finish').addClass('d-block')
                .find('.alert').append(`<p>task_id: ${result.data.task_id}</p>`);
        }
    });
}

const logsState = CONST.logsState;
function initLogsTab() {
    function OnChangeSelect() {
        const {selectCls} = logsState;
        $(`.${selectCls}`).on('change', function () {
            usernameSelected = $(`.${selectCls} option:selected`).val();
            // clsConst.pathSubType = logsState.activeSubType;
            logs.init(selectCls, clsConst);
        });
    }
    // addDropdown($(logsState.wrapperSubtype), logsSubtypes, {logsState, dropdownOnSelectCb});
    tabs.init(OnChangeSelect, logsState); // makes double request : OPTION and GET
}

function initEmojii() {
    emoji({
        page: clsConst.currentPageCls,
        styles: {old: 'bottom: 30px;', new: 'top: -210px;'}
    });
}

function removeExtraTextFields() {
    $(`${elSelector.fields}:not(:first-child)`).remove();
}

/* TODO: refactor -> move initModalHandler to separate file */
let targetButton = {};

function loadMoreHandler(getPosts) {
    $('#load-more').on('click', (e) => {
        const $btn = $(e.target);
        const cursor = $btn.attr('cursor');
        console.log('load more click');
        getPosts(null, {userName: usernameSelected, cursor}, {loadMoreHandler: this, targetButton});
    });
}

function initModalHandler() {
    $('.js_open-posts-gridModal').on('click', function (event) {
        targetButton = $(this); // Button that triggered the modal
        // Update the modal's content
        const modal = $('#postsGridModal');
        getPosts(modal, {userName: usernameSelected}, {loadMoreHandler, targetButton});
        modal.find('.modal-title').text('Публикации');
    });
}

/* TODO: refactor -> move initModalHandler to separate file END*/

/**
 * Init header
 */
function initHandlers() {
    // TODO: refactor with autogreet.js initHandlers
    $('.js_add-automessages').on('click', (e) => {
        const lastTextField = $(elSelector.fields).last();
        tplTextFieldGreet(elSelector.fields.substr(1)).insertAfter(lastTextField);
        initEmojii();
        imageUpload.init();
        $('[data-toggle="tooltip"]').tooltip(); // reinit
        initModalHandler();
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        console.log('alert close');
        $('#v-pills-all-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
        removeExtraTextFields();
    });

    // alert close
    $('.form-submit-finish--error .close').on('click', function () {
        console.log('alert close');
        $('#v-pills-all-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
        removeExtraTextFields();
    });

    // tabs.init(fillListUsers);
    initLogsTab();
}

function setUserName(state) {
    // console.log('getTasksData', state.username);
    usernameSelected = state.username;
    slotIndex = state.slot_index;
}

function addSmoothStart(defaultCfg) {
    const {cfg: {smooth_starting}} = defaultCfg;
    if (!smooth_starting) {
        return;
    }
    state.user_default_config.smooth_starting_enabled = true;
    $('.js_smooth-starting').removeClass('d-none');

    $('.js_smooth-starting').on('change', (e) => {
        // console.log(e.target.checked, smooth_starting);
        state.user_default_config.smooth_starting_enabled = e.target.checked;
    });
}

function getDataStepSpeed() {

    // TODO: refactor get from - view.fillRadioGroupList
    const fillSpeedList = function ($wrapper, data) {
        const taskModes = data.cfg && data.cfg.task_modes;
        const radioBtnReducer = function (item, val) {
            switch (item) {
                case 'AGGRESSIVE':
                    return `<input type="radio" id="${item}" name="customRadio" value="${item}" class="custom-control-input">
                    <label class="custom-control-label" for="${item}"><strong>Агрессивный:</strong> ${val} сообщений в час</label>`;
                case 'MIDDLE':
                    return (`<input type="radio" id="${item}" name="customRadio" value="${item}" class="custom-control-input">
                    <label class="custom-control-label" for="${item}"><strong>Средний:</strong> ${val} сообщений в час</label>`);
                case 'SAFE':
                    return `<input type="radio" id="${item}" name="customRadio" value="${item}" class="custom-control-input" checked>
                    <label class="custom-control-label" for="${item}"><strong>Безопасный:</strong> ${val} сообщений в час</label>`;
                default:
                    break;
            }
        };
        // console.log('draw speed radioBtn');
        $wrapper.empty();
        for (const item in taskModes) {
            // console.log('structure: ' + item);
            if (Object.prototype.hasOwnProperty.call(taskModes, item)) {
                $(`<div class="custom-control custom-radio">
                ${radioBtnReducer(item, taskModes[item])}
            </div>`).appendTo($wrapper);
            }
        }
    };
    const path = {
        type: clsConst.pathType,
        subtype: clsConst.pathSubType
    };
    // draw criteria
    UserTaskManager.getDefaultConfigs(path).then((result) => {
        // console.log('getDefaultConfigs');
        if (result.status.state === 'ok') {
            fillSpeedList($(speedType), result.data.found);
            addSmoothStart(result.data.found);
            // speed radio-btn group
            $(`${speedType} input[type=radio]`).on('click', (e) => {
                const value = $(e.target).attr('value');
                state.user_default_config.task_mode = value.toUpperCase();
                console.log(state);
            });
        }
    });
}

function stepReducer(stepNumber, state) {
    switch (stepNumber) {
        case 0:
            setUserName(state);
            getDataStepSpeed();
            console.log(state, stepNumber);
            break;
        case 1:
            // console.log(state, stepNumber);
            break;
        default:
            console.log('default', stepNumber);
    }
}

export function init() {
    if ($(clsConst.currentPageCls).length) {
        const wizardCfg = {
            stepReducer,
            onSubmitHandler
        };
        wizardForm.init(wizardCfg);
        initHandlers();
        chatBotStatus.init(clsConst);
        window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
            // console.log(accounts);
            logs.init(selectCls, clsConst);
        });

        initModalHandler();
        initEmojii();
        imageUpload.init();
        window.PubSub.subscribe(CONST.events.autoarnswer.IMAGE_UPLOADED, (e, res) => {
            const {response} = res;
            const result = (response.length) ? JSON.parse(response) : '';
            const imageId = result && result.data && result.data.image_id;
            $(res.el).closest('.file-upload').attr('attached-img-id', imageId);
            console.log('image_loaded', res);

            // todo: make as callBack
            const $imageBox = $(res.el).closest('.col').find('.js_uploaded-img-from-posts');
            if ($imageBox.length) {
                $imageBox.remove();
            }
        });
        window.PubSub.subscribe(CONST.events.modal.IMAGE_POST_SELECTED, (e, data) => {
            const $imageBox = $(data.closestCol).find('.file-upload-content');
            console.log('$imageBox', $imageBox);
            if ($imageBox.length) {
                $imageBox.hide();
            }
        });
    }
}
