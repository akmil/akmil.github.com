import {CONST} from '../../common/js-services/consts';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import viewUtils from '../../common/js-services/view';
import UserTaskManager from '../../common/js-services/api-task-manager';
import * as tabs from '../_shared/tebs-pils/tabs';
import * as autoanswerStatus from './autoanswer-status';
import * as logs from '../_shared/logs/logs';
import * as imageUpload from '../_shared/image-upload/image-upload';
import {emoji} from '../../common/js-services/emoji';
import {getPosts} from '../_shared/getPostsModal/utils-modal';
import {tplTextField} from './addAnswerTemplate';

const {getValByCommaSeparator} = viewUtils;
let usernameSelected = '';
const selectCls = 'js_logs-accounts';
const clsConst = {
    currentPageCls: '.autoanswer-page',
    tasksList: '.log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: CONST.url.tmTypes.autoanswerT,
    pathSubType: CONST.url.tmTypes.autoanswerSubT[0]
};
const elSelector = {
    fields: '.autoanswer-text-fields',
    keyWord: 'textarea.answer-words',
    answer: 'textarea.answer-messages',
    fileUploadBox: '.file-upload',
    addPostBtns: '.js_autoanswer-add-post'
};
const logsState = {
    selectCls: 'js_logs-accounts',
    selectClsLogsTaskType: 'js_logs-subtypes',
    wrapperSubtype: '.log-subype'
};

function initEmojii() {
    emoji({
        page: clsConst.currentPageCls,
        styles: {old: 'bottom: 30px;', new: 'top: -210px;'}
    });
}

function validateIsEmpty($elements, e) {
    $elements.each(function () {
        if ($(this).val() === '') {
            e.preventDefault();
            $(this).addClass('input-error');
            // validation = false;
            return;
        } else {
            $(this).removeClass('input-error');
        }
    });
}

function onSubmitHandler(e) {
    const fields = $(elSelector.fields);
    const reqBody = [];
    let validation = true;
    const $elementsKeyWord = fields.find(elSelector.keyWord);
    const $elementsAnswer = fields.find(elSelector.answer);

    validateIsEmpty($elementsKeyWord, e);
    validateIsEmpty($elementsAnswer, e);

    fields.each((idx, item) => {
        const keyWord = getValByCommaSeparator($(item).find(elSelector.keyWord));
        const answer = $(item).find(elSelector.answer).val();
        const imageId = $(item).find(elSelector.fileUploadBox).attr('attached-img-id');
        const $imagePostBox = $(item).find('.js_uploaded-img-from-posts');
        const postItemId = $imagePostBox.data('postId');
        const postItemType = $imagePostBox.data('postType');

        if (!keyWord.length || !answer.length) {
            // console.log('keyWord is empty, not push me to request');
            $(item).append(`
                <p class="msg-empty-field text-danger">Пустое поле не валидно</p>
            `);
            setTimeout(() => {
                $('.msg-empty-field').addClass('d-none');
            }, 5000);
            validation = false;
            return;
        }
        const submitBodyItem = {
            'key_words': keyWord,
            answer,
            'attachment': imageId ? {
                'image_id': imageId
            } : undefined
        };

        if (postItemId) {
            submitBodyItem.attachment = {
                ...submitBodyItem.attachment,
                post: {
                    id: postItemId,
                    type: postItemType || 'type-error'
                }
            };
        }
        reqBody.push(submitBodyItem);
    });
    if (!validation) {
        // console.log('**alarm **', elSelector.keyWord);
        return;
    }

    const nReqBody = {
        'username': usernameSelected,
        'type': clsConst.pathType,
        'subtype': clsConst.pathSubType,
        'user_default_config': {},
        'user_custom_config': {
            'forms': reqBody
        }
    };

    // console.log('make request here**', nReqBody);
    function cbError(res) {
        const msg = res.status.message;
        $('.form-submit-finish--error').addClass('d-block')
        .find('.alert').append(`<p>${msg}</p>`);
    }
    UserTaskManager.postStartTask(nReqBody, cbError).then((result) => {
        if (result.status.state === 'ok') {
            $('.form-submit-finish').find('.alert p').remove();
            $('.form-submit-finish').addClass('d-block')
                .find('.alert').append(`<p>task_id: ${result.data.task_id}</p>`);
        }
    });
}

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

function removeExtraTextFields(e) {
    $(`${elSelector.fields}:not(:first-child)`).removeClass('d-block');
    e.stopPropagation();
}

/* TODO: refactor -> move initModalHandler to separate file, remove initModalHandler in autogreeting-main.js */
let targetButton = {};

function loadMoreHandler(getPosts) {
    $('#load-more').off().on('click', (e) => {
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

/* TODO: refactor -> move initModalHandler to separate file END */

/**
 * Init Handlers
 */
function initHandlers() {
    // TODO: refactor with autogreet.js initHandlers
    // $('[data-toggle="popover"]').popover(); // init
    $('.js_add-autoanswer').on('click', (e) => {
        const lastTextField = $(elSelector.fields).last();
        tplTextField(elSelector.fields.substr(1)).insertAfter(lastTextField);
        initEmojii();
        imageUpload.init();
        // $('[data-toggle="popover"]').popover(); // reinit
        $('[data-toggle="tooltip"]').tooltip(); // reinit
        initModalHandler();
    });

    // alert success close
    $('.form-submit-finish .close').on('click', function (e) {
        // console.log('alert close');
        $('#v-pills-all-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
        // removeExtraTextFields(e);
    });

    // alert close
    $('.form-submit-finish--error .close').on('click', function () {
        // console.log('alert close');
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
}

function stepReducer(stepNumber, state) {
    switch (stepNumber) {
        case 0:
            setUserName(state);
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
        autoanswerStatus.init();
        initModalHandler();
        initEmojii();
        imageUpload.init();

        window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
            logs.init(selectCls, clsConst);
        });
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
