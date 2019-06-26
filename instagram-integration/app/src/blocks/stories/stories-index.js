import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';
import viewUtils from '../../common/js-services/view';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import * as storiesStatus from './stories-status';
import {initLogsTab} from '../_shared/logs/logs-tabs';
import {attachTxtFileHandler} from '../follow/follow-read-file-txt';
import {/* initTagsInput, */nextBtnvalidateCompetitorsHandler} from '../_shared/tags-input/tags-input';
// import Notification from '../../common/js-services/notification-toast';
import * as smoothStarting from '../_shared/form-helper/smooth-start';

const {getValByCommaSeparator, fillRadioGroupList} = viewUtils;
let usernameSelected = '';
let slotSelected = '';
const logsState = CONST.logsState;
const clsConst = {
    currentPageCls: '.stories-page',
    tasksList: '.log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: CONST.url.tmTypes.storiesT,
    pathSubType: CONST.url.tmTypes.storiesSubT[0]
};
const elSelector = {
    wizardForm: '.wizard-form',
    wizardFormName: 'wizard-form',
    fields: '.automessages-text-fields',
    taskMode: '.js_task-mode',
    competitors: '.js_stories-competitors input[data-role="tagsinput"]'
};
const state = {
    subtype: CONST.url.tmTypes.storiesSubT[0],
    user_default_config: {
        task_mode: 'SAFE'
    }
};

function onSubmitHandler(e) {
    const {wizardFormName} = elSelector;
    const form = document.forms[wizardFormName];
    const limit = form['limit'];

    if (limit.value === '') {
        limit.focus();
        return false;
    }

    const body = {
        ...state,
        user_default_config: {
            ...state.user_default_config,
            criteria: {
                max_views: limit.value
            }
        },
        user_custom_config: {},
        type: clsConst.pathType,
        username: usernameSelected,
        slot_index: slotSelected
    };

    if (body.subtype === CONST.url.tmTypes.storiesSubT[2]) {
        const competitors = getValByCommaSeparator($(form).find(elSelector.competitors));
        const posts = $('#post-count').val();
        body.user_custom_config = {
            competitors
        };
        body.user_default_config = {
            ...body.user_default_config,
            posts
        };
    }
    if (body.subtype === CONST.url.tmTypes.storiesSubT[0]) {
        // text file should be added
        body['user_custom_config'].attachment = {
            'list_id': $('.stories__file-upload-box .file-upload-container').attr('attached-txt-id')
        };
        delete body.user_default_config.criteria.max_views;
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

function setUserNameCb(_usernameSelected, _slotSelected) {
    usernameSelected = _usernameSelected;
    slotSelected = _slotSelected;
}

function setUserNameFirstStep(state) {
    usernameSelected = state.username;
    slotSelected = state.slot_index;
}

// todo: refactor with follow.js -- 'nextBtnvalidateCompetitorsHandler()'
const containerCls = '.js_add-settings-step-4';
const $container = $(containerCls);
const $competitorsTextArea = $container.find('input[data-role="tagsinput"]');
const nextStepBtn = $container.find('.js_stories-competitors-btn');

/**
 * Init Handlers
 */
function initHandlers() {

    attachTxtFileHandler('.file-upload-container');
    nextBtnvalidateCompetitorsHandler($competitorsTextArea, nextStepBtn);

    // radio-group step 2
    $('.js_get-stories-type input[type=radio]').on('click', (e) => {
        const value = $(e.target).attr('value');
        state.subtype = value.toUpperCase();
        if (state.subtype === CONST.url.tmTypes.storiesSubT[1]) {
            nextStepBtn.removeAttr('disabled', 'disabled'); // enable button 'Запустить'
        } else {
            nextStepBtn.attr('disabled', 'disabled');
        }
        console.log(state);
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
}

function renderTaskMode(defaultCfg) {
    const {config: {task_modes}} = defaultCfg;
    const {taskMode: taskModeSelector} = elSelector;

    fillRadioGroupList($(taskModeSelector), task_modes, 'просмотров');

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
        $('#limit').val(limitVal);

        // Плавный старт
        smoothStarting.addSmoothStart(found, state);

        // Количество публикаций
        addPostsForActiveCompetitors(found);
    });
}

function addTextArea(stepNumber) {
    const {wizardForm} = elSelector;
    const fieldLast = $(`${wizardForm} fieldset`).get(stepNumber + 1);
    if (state.subtype === CONST.url.tmTypes.storiesSubT[2]) {
        nextBtnvalidateCompetitorsHandler($competitorsTextArea, nextStepBtn);
        $(fieldLast).find('.js_stories-competitors').removeClass('d-none');
        console.log('end');
    } else {
        $(fieldLast).find('.js_stories-competitors').addClass('d-none');
    }
}

function addFileUploadBox(stepNumber) {
    const {wizardForm} = elSelector;
    const fieldLast = $(`${wizardForm} fieldset`).get(stepNumber + 1);
    const $fileUploadBox = $(fieldLast).find('.stories__file-upload-box');
    const $titleStepBox = $(fieldLast).find('.js_add-file-title');
    const $addSettings = $(fieldLast).find('.js_add-settings-step-4');
    if (state.subtype === CONST.url.tmTypes.storiesSubT[0]) {
        $fileUploadBox.removeClass('d-none');
        $('.js_validate-txt-file-is-uploaded').attr('disabled', 'disabled');
        $titleStepBox.removeClass('d-none');
        $addSettings.addClass('d-none');
    } else {
        $fileUploadBox.addClass('d-none');
        $titleStepBox.addClass('d-none');
        $addSettings.removeClass('d-none');
    }
    console.log('addFileUploadBox done');
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
            addFileUploadBox(stepNumber);
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
    const textRusArray = ['По списку', 'По подписчикам', 'По активной аудитории конкурентов'];
    initLogsTab({logsState, logsSubtypes: CONST.url.tmTypes.storiesSubT, clsConst, setUserNameCb, textRusArray});
    storiesStatus.init({
        isInStoriesPage: isInCurrentPage
    });
    // initTagsInput();

    // window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
    //     console.log('INSTAGRAM_ACCOUNS_RENDERED_LAZY');
    //     console.log('logsSubtypes', logsSubtypes);
    //     console.log('accounts', accounts);
    // });
    window.PubSub.subscribe(CONST.events.autoarnswer.TEXT_FILE_UPLOADED, (e, res) => {
        $('.js_validate-txt-file-is-uploaded').removeAttr('disabled');
    });
}
