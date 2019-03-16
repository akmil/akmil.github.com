import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';
import viewUtils from '../../common/js-services/view';
// import {addDropdown, getValByCommaSeparator, fillRadioGroupList} from '../../common/js-services/view';
const {getValByCommaSeparator, fillRadioGroupList} = viewUtils;

import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import * as storiesStatus from './stories-status';
// import * as tabs from '../_shared/tebs-pils/tabs';
// import * as logs from '../_shared/logs/logs';
import {initLogsTab} from '../_shared/logs/logs-tabs';

let usernameSelected = '';
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
    fields: '.autoanswer-text-fields',
    taskMode: '.js_task-mode',
    competitors: 'textarea.stories-competitors'
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
        username: usernameSelected
    };

    if (body.subtype === CONST.url.tmTypes.storiesSubT[1]) {
        const competitors = getValByCommaSeparator($(form).find(elSelector.competitors));
        body.user_custom_config = {
            competitors
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

function setUserNameCb(_usernameSelected) {
    usernameSelected = _usernameSelected;
}

function setUserNameFirstStep(state) {
    usernameSelected = state.username;
}

/**
 * Init Handlers
 */
function initHandlers() {

    // radio-group step 2
    $('.js_get-stories-type input[type=radio]').on('click', (e) => {
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

    // alert error close
    $('.form-submit-finish--error .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-all-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });
}

function renderTaskMode(defaultCfg) {
    const {cfg: {task_modes}} = defaultCfg;
    const {taskMode: taskModeSelector} = elSelector;

    fillRadioGroupList($(taskModeSelector), task_modes, 'просмотров');

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
        const limitVal = found.cfg.criteria.max_views;
        renderTaskMode(found);
        $('#limit').val(limitVal);
    });
}

function addTextArea(stepNumber) {
    const {wizardForm} = elSelector;
    if (state.subtype === CONST.url.tmTypes.storiesSubT[1]) {
        const fieldLast = $(`${wizardForm} fieldset`).get(stepNumber + 1);
        const tpl = `<div class="row">
            <label class="">Конкуренты</label>
            <textarea class="form-control stories-competitors mb-2" rows="1"></textarea></div>`;
        if (!$('.stories-competitors').length) {
            $(fieldLast).find('.form-bottom>.row').after(tpl);
        }
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
    initLogsTab({logsState, logsSubtypes: CONST.url.tmTypes.storiesSubT, clsConst, setUserNameCb});
    storiesStatus.init({
        isInStoriesPage: isInCurrentPage
    });
    // window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
    //     console.log('INSTAGRAM_ACCOUNS_RENDERED_LAZY');
    //     console.log('logsSubtypes', logsSubtypes);
    //     console.log('accounts', accounts);
    // });
}
