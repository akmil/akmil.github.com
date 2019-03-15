import {CONST} from '../../common/js-services/consts';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import UserTaskManager from '../../common/js-services/api-task-manager';
import * as tabs from '../_shared/tebs-pils/tabs';
import * as autoanswerStatus from './autoanswer-status';
import * as logs from '../_shared/logs/logs';
import * as imageUpload from '../_shared/image-upload/image-upload';
import {emoji} from '../../common/js-services/emoji';
import {getPosts} from './utils-modal';
import {tplTextField} from './addAnswerTemplate';

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
    const keyWords = $el => $el.val()
        .trim()
        .replace(/ /g, '')
        .split(',')
        .filter(i => i.length > 0);
    const reqBody = [];
    let validation = true;
    const $elementsKeyWord = fields.find(elSelector.keyWord);
    const $elementsAnswer = fields.find(elSelector.answer);

    validateIsEmpty($elementsKeyWord, e);
    validateIsEmpty($elementsAnswer, e);

    fields.each((idx, item) => {
        const keyWord = keyWords($(item).find(elSelector.keyWord));
        const answer = $(item).find(elSelector.answer).val();
        const imageId = $(item).find(elSelector.fileUploadBox).attr('attached-img-id');
        const postImgId = $(item).find(elSelector.addPostBtns).attr('data-post-img-id');
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

        if (postImgId) {
            submitBodyItem.attachment = {
                ...submitBodyItem.attachment,
                post: {
                    id: postImgId,
                    type: 'photo'
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
    UserTaskManager.postStartChatBot(nReqBody, cbError).then((result) => {
        if (result.status.state === 'ok') {
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

function removeExtraTextFields() {
    $(`${elSelector.fields}:not(:first-child)`).remove();
}

/**
 * Init Handlers
 */
function initHandlers() {

    $('.js_add-autoanswer').on('click', (e) => {
        const lastTextField = $(elSelector.fields).last();
        tplTextField().insertAfter(lastTextField);
        initEmojii();
        imageUpload.init();
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-all-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
        removeExtraTextFields();
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
    const modal = $('#postsGridModal');
    modal.on('show.bs.modal', function (event) {
        targetButton = $(event.relatedTarget); // Button that triggered the modal
        // const recipient = button.data('post-info'); // Extract info from data-* attributes
        // console.log(recipient);
        // Update the modal's content.
        const modal = $(this);
        getPosts(modal, {userName: usernameSelected}, {loadMoreHandler, targetButton});
        modal.find('.modal-title').text('Публикации');
    });
}

/* TODO: refactor -> move initModalHandler to separate file END*/

export function init() {
    if ($(clsConst.currentPageCls).length) {
        const wizardCfg = {
            stepReducer,
            onSubmitHandler
        };
        wizardForm.init(wizardCfg);
        initHandlers();
        autoanswerStatus.init();
        window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
            logs.init(selectCls, clsConst);
        });
        window.PubSub.subscribe(CONST.events.autoarnswer.IMAGE_UPLOADED, (e, res) => {
            const {response} = res;
            const result = (response.length) ? JSON.parse(response) : '';
            const imageId = result && result.data && result.data.image_id;
            $(res.el).closest('.file-upload').attr('attached-img-id', imageId);
            console.log('image_loaded', res);
        });
        // window.PubSub.subscribe(CONST.events.autoarnswer.IMAGE_POST_SELECTED, (e, id) => {
        //     console.log('IMAGE_POST_SELECTED', id);
        // });
        initModalHandler();
        initEmojii();
        imageUpload.init();
    }
}
