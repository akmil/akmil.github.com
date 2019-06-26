import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';
import viewUtils from '../../common/js-services/view';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import * as storiesStatus from './reviever-status';
// import {initLogsTab} from '../_shared/logs/logs-tabs';
import * as tabs from '../_shared/tebs-pils/tabs';
import * as logs from '../_shared/logs/logs';
import {attachTxtFileHandler} from '../follow/follow-read-file-txt';

// import Notification from '../../common/js-services/notification-toast';
import * as smoothStarting from '../_shared/form-helper/smooth-start';
import * as imageUpload from '../_shared/image-upload/image-upload';
import {emoji} from '../../common/js-services/emoji';
import {getPosts} from '../_shared/getPostsModal/utils-modal';
import {tplTextField} from './addAnswerTemplate';

const {/* getValByCommaSeparator, */fillRadioGroupList, fillRadioGroupActionsList} = viewUtils;
let usernameSelected = '';
let slotSelected = '';
const logsState = CONST.logsState;
const clsConst = {
    currentPageCls: '.reviever-page',
    tasksList: '.log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: CONST.url.tmTypes.reviverT,
    pathSubType: CONST.url.tmTypes.reviverSubT[0]
};
const elSelector = {
    wizardForm: '.wizard-form',
    wizardFormName: 'wizard-form',
    fields: '.automessages-text-fields',
    taskMode: '.js_task-mode',
    competitors: '.js_stories-competitors input[data-role="tagsinput"]',
    // addPostBtns
    keyWord: 'input.answer-words',
    answer: 'textarea.answer-messages',
    fileUploadBox: '.file-upload',
    addPostBtns: '.js_automessages-add-post'
};
const state = {
    subtype: CONST.url.tmTypes.reviverSubT[0],
    user_default_config: {
        task_mode: 'SAFE'
    }
};

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
    const {wizardFormName} = elSelector;
    const form = document.forms[wizardFormName];
    const activityDays = form['activity_days'];

    /* */
    const fields = $(elSelector.fields);
    const reqBody = [];
    // let validation = true;
    // const $elementsKeyWord = fields.find(elSelector.keyWord);
    const $elementsAnswer = fields.find(elSelector.answer);

    // validateIsEmpty($elementsKeyWord, e);
    validateIsEmpty($elementsAnswer, e);

    fields.each((idx, item) => {
        // const keyWord = getValByCommaSeparator($(item).find(elSelector.keyWord));
        const answer = $(item).find(elSelector.answer).val();
        const imageId = $(item).find(elSelector.fileUploadBox).attr('attached-img-id');
        const $imagePostBox = $(item).find('.js_uploaded-img-from-posts');
        const postItemId = $imagePostBox.data('postId');
        const postItemType = $imagePostBox.data('postType');
        // const blacklistWords = $(item).find('input.blacklist-words');
        // const blacklistWordsArr = getValByCommaSeparator(blacklistWords);

        // if (!keyWord.length || !answer.length) {
        //     $(item).append(`
        //         <p class="msg-empty-field text-danger">Пустое поле не валидно</p>
        //     `);
        //     setTimeout(() => {
        //         $('.msg-empty-field').addClass('d-none');
        //     }, 5000);
        //     validation = false;
        //     return;
        // }
        const submitBodyItem = {
            // 'key_words': keyWord,
            answer,
            // blacklist: blacklistWordsArr,
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
    // if (!validation) {
        // console.log('**alarm **', elSelector.keyWord);
        // return;
    // }

    /* */
    // const limit = form['limit'];

    if (activityDays.value === '') {
        activityDays.focus();
        return false;
    }

    const body = {
        ...state,
        user_default_config: {
            ...state.user_default_config,
            criteria: {
                // max_views: limit.value
            },
            activity_days: activityDays.value
        },
        user_custom_config: {
            forms: reqBody
        },
        type: clsConst.pathType,
        username: usernameSelected,
        slot_index: slotSelected
    };

    if (body.subtype === CONST.url.tmTypes.reviverSubT[0]) {
        // const competitors = getValByCommaSeparator($(form).find(elSelector.competitors));
        const posts = $('#post-count').val();
        // body.user_custom_config = {
            // competitors
        // };
        body.user_default_config = {
            ...body.user_default_config,
            posts
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

    function cbError(res) {
        const msg = res.status.message;
        $('.form-submit-finish--error').addClass('d-block')
        .find('.alert').append(`<p>${msg}</p>`);
    }

    UserTaskManager.postStartFollowingList(body, cbError).then((result) => {
        if (result.status.state === 'ok') {
            console.log(JSON.stringify(result));
            $('.form-submit-finish').find('.alert p').remove();
            $('.form-submit-finish').addClass('d-block')
                .find('.alert').append(`<p>task_id: ${result.data.task_id}</p>`);
        }
    });
}

// function setUserNameCb(_usernameSelected, _slotSelected) {
//     usernameSelected = _usernameSelected;
//     slotSelected = _slotSelected;
// }

function setUserNameFirstStep(state) {
    usernameSelected = state.username;
    slotSelected = state.slot_index;
}

function initLogsTabByUser() {
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

/* TODO: refactor -> move initModalHandler to separate file, remove initModalHandler in autogreeting-main.js */
let targetButton = {};

function loadMoreHandler(getPosts) {
    $('#load-more').off().on('click', (e) => {
        const $btn = $(e.target);
        const cursor = $btn.attr('cursor');
        console.log('load more click');
        getPosts(null, {userName: usernameSelected, cursor, slotIndex: slotSelected}, {loadMoreHandler: this, targetButton});
    });
}

function initModalHandler() {

    $('.js_open-posts-gridModal').on('click', function (event) {
        targetButton = $(this); // Button that triggered the modal
        // Update the modal's content
        const modal = $('#postsGridModal');
        getPosts(modal, {userName: usernameSelected, slotIndex: slotSelected}, {loadMoreHandler, targetButton});
        modal.find('.modal-title').text('Публикации');
    });
}

/* TODO: refactor -> move initModalHandler to separate file END */

/**
 * Init Handlers
 */
function initHandlers() {
    // const $competitorsInput = $('.automessages-text-fields input.answer-words[data-role="tagsinput"]');
    // const $blackListInput = $('.automessages-text-fields input.blacklist-words[data-role="tagsinput"]');
    // const nextStepBtn = $('form button[type="submit"]');
    // nextBtnvalidateCompetitorsHandler($competitorsInput, nextStepBtn, 'ignoreRegexCheck');
    // nextBtnvalidateCompetitorsHandler($blackListInput, null, 'ignoreRegexCheck');

    attachTxtFileHandler('.file-upload-container');

    $('#like-random').on('change', (e) => {
        state.user_default_config.do_like_random_post = e.target.checked;
        console.log(e.target.checked);
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-all-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    // alert error close
    $('.form-submit-finish--error .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-all-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    // TODO: refactor with autogreet.js initHandlers
    // $('[data-toggle="popover"]').popover(); // init
    $('.js_add-automessages').on('click', (e) => {
        const lastTextField = $(elSelector.fields).last();
        tplTextField(elSelector.fields.substr(1)).insertAfter(lastTextField);
        initEmojii();
        imageUpload.init();
        // $('[data-toggle="popover"]').popover(); // reinit
        $('[data-toggle="tooltip"]').tooltip(); // reinit
        initModalHandler();

        // const $input = $('input[data-role="tagsinput"]', lastTextField);
        // initTagsInput();
        // nextBtnvalidateCompetitorsHandler($input, nextStepBtn);

        // const lastTextFieldAfterInsert = $(elSelector.fields).last();
        // const $inputAnswerWords = $('input.answer-words[data-role="tagsinput"]', lastTextFieldAfterInsert);
        // const $blackListInput = $('input.blacklist-words[data-role="tagsinput"]', lastTextFieldAfterInsert);

        // initTagsInput($inputAnswerWords); // reinit answer-words
        // initTagsInput($blackListInput); // reinit blacklist-words
        // nextBtnvalidateCompetitorsHandler($inputAnswerWords, nextStepBtn, 'ignoreRegexCheck');
        // nextBtnvalidateCompetitorsHandler($blackListInput, null, 'ignoreRegexCheck');
    });

    initLogsTabByUser();
}
function renderActionsMode(defaultCfg) {
    const {config: {actions}} = defaultCfg;
    // const {taskMode: taskModeSelector} = elSelector;
    const taskModeSelector = '.js_action-mode';
    const typesMode = {like: 'LIKE', likeMsg: 'LIKE_AND_MESSAGE', message: 'MESSAGE', remove: 'REMOVE'};

    fillRadioGroupActionsList($(taskModeSelector), actions);

    $(`${taskModeSelector} input[type=radio]`).on('click', (e) => {
        const value = $(e.target).attr('value');
        state.user_default_config.action = value.toUpperCase();
        state.user_default_config.do_like_random_post = false;
        console.log(value);

        if (value === typesMode.like || value === typesMode.likeMsg) {
            // show label 'Лайкать случайную публикацию'
            $('.js_show-like-or-messages').addClass('d-none');
            $('.js_like-random').removeClass('d-none');
        }
        if (value === typesMode.likeMsg || value === typesMode.message) {
            $('.js_like-random').addClass('d-none');
            $('.js_show-like-or-messages').removeClass('d-none');
        }
        if (value === typesMode.likeMsg) {
            $('.js_like-random').removeClass('d-none');
            $('.js_show-like-or-messages').removeClass('d-none');
        }
        if (value === typesMode.remove) {
            $('.js_like-random').addClass('d-none');
            $('.js_show-like-or-messages').addClass('d-none');
        }
    });
}
function renderTaskMode(defaultCfg) {
    const {config: {task_modes}} = defaultCfg;
    const {taskMode: taskModeSelector} = elSelector;

    fillRadioGroupList($(taskModeSelector), task_modes, 'действий');

    $(`${taskModeSelector} input[type=radio]`).on('click', (e) => {
        const value = $(e.target).attr('value');
        state.user_default_config.task_mode = value.toUpperCase();
        console.log(value);
        if (value === 'AGGRESSIVE') {
            $('.js_toast-task-mode').toast('show');
        }
    });
}

function addPostsForActiveCompetitors(defaultCfg) {
    const {config: {posts}} = defaultCfg;
    if (!posts) {
        $('.js_post-count').addClass('d-none');
        return;
    }
    // state.user_default_config.posts = posts;
    $('#post-count').val(posts);
    $('.js_post-count').removeClass('d-none');
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

    UserTaskManager.getDefaultConfigs(path, cbError).then((result) => {
        if (result.status.state !== 'ok') {
            return;
        }
        // console.log('getDefaultConfigs');
        const {
            data: {
                found
            }
        } = result;
        const limitVal = found.config.criteria.max_views;
        renderTaskMode(found);
        renderActionsMode(found);
        $('#limit').val(limitVal);

        // Плавный старт
        smoothStarting.addSmoothStart(found, state);

        // Количество публикаций
        addPostsForActiveCompetitors(found);
    });
}

// function addTextArea(stepNumber) {
//     const {wizardForm} = elSelector;
//     const fieldLast = $(`${wizardForm} fieldset`).get(stepNumber + 1);
//     if (state.subtype === CONST.url.tmTypes.reviverSubT[2]) {
//         nextBtnvalidateCompetitorsHandler($competitorsTextArea, nextStepBtn);
//         $(fieldLast).find('.js_stories-competitors').removeClass('d-none');
//         console.log('end');
//     } else {
//         $(fieldLast).find('.js_stories-competitors').addClass('d-none');
//     }
// }

/*
function addMessageBox(elements) {
    const {$fileUploadBox, $titleStepBox, $addSettings} = elements;
    // $fileUploadBox.removeClass('d-none');
    $('.js_validate-txt-file-is-uploaded').attr('disabled', 'disabled');
    // $titleStepBox.removeClass('d-none');
    // $addSettings.addClass('d-none');
}

function hideMessageBox(elements) {
    const {$fileUploadBox, $titleStepBox, $addSettings} = elements;
    // $fileUploadBox.addClass('d-none');
    // $titleStepBox.addClass('d-none');
    // $addSettings.removeClass('d-none');
}

function addLabelBox(elements) {
    console.log('addLabelBox');
}

function addGenericBox(stepNumber) {
    const {wizardForm} = elSelector;
    const fieldLast = $(`${wizardForm} fieldset`).get(stepNumber + 1);
    const $fileUploadBox = $(fieldLast).find('.stories__file-upload-box');
    const $titleStepBox = $(fieldLast).find('.js_add-file-title');
    const $addSettings = $(fieldLast).find('.js_add-settings-step-4');

    if (state.subtype === CONST.url.tmTypes.reviverSubT[0]) {
        console.log('state.subtype ', state.subtype);
        addMessageBox(stepNumber);
    } else {
        hideMessageBox({$fileUploadBox, $titleStepBox, $addSettings});
        addLabelBox();
    }
    console.log('addMessageBox done');
}
*/

function stepReducer(stepNumber, state) {
    switch (stepNumber) {
        case 0:
            // console.log(state, stepNumber);
            getConfig();
            setUserNameFirstStep(state);
            break;
        case 1:
            // console.log(state, stepNumber);
            // renderActionsMode();
            break;
        case 2:
            console.log(state, stepNumber);
            // addTextArea(stepNumber);
            // addGenericBox(stepNumber);
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
    initModalHandler();
    initEmojii();
    imageUpload.init();
    // const textRusArray = ['По списку', 'По подписчикам', 'По активной аудитории конкурентов'];
    // initLogsTab({logsState, logsSubtypes: CONST.url.tmTypes.reviverSubT, clsConst, setUserNameCb, textRusArray});

    window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
        const selectCls = 'js_logs-accounts';
        logs.init(selectCls, clsConst);
    });

    // const selectCls = 'js_logs-accounts';
    // logs.init(selectCls, clsConst);
    storiesStatus.init({
        isInStoriesPage: isInCurrentPage
    });
    // initTagsInput();

    // window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
    //     console.log('INSTAGRAM_ACCOUNS_RENDERED_LAZY');
    //     console.log('logsSubtypes', logsSubtypes);
    //     console.log('accounts', accounts);
    // });
    // window.PubSub.subscribe(CONST.events.autoarnswer.TEXT_FILE_UPLOADED, (e, res) => {
    //     $('.js_validate-txt-file-is-uploaded').removeAttr('disabled');
    // });

    /* image loaded*/
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
