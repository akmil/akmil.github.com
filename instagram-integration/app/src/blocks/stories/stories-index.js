/* eslint-disable no-unused-vars */
import {CONST} from '../../common/js-services/consts';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import UserTaskManager from '../../common/js-services/api-task-manager';
import * as tabs from '../_shared/tebs-pils/tabs';
import * as storiesStatus from './stories-status';
import * as logs from '../_shared/logs/logs';
// import * as imageUpload from '../_shared/image-upload/image-upload';
// import {getPosts} from './utils-modal';
// import {tplTextField} from './addAnswerTemplate';
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
    wizardForm: '.wizard-form',
    wizardFormName: 'wizard-form',
    fields: '.autoanswer-text-fields',
    taskMode: '.js_task-mode',
    competitors: 'textarea.stories-competitors'
};
const state = {
    subtype: clsConst.pathSubTypes[0],
    task_mode: 'SAFE'
};
const getCompetitors = $el => $el.val()
    .trim()
    .replace(/ /g, '')
    .split(',')
    .filter(i => i.length > 0);

function onSubmitHandler(e) {
    const {wizardFormName} = elSelector;
    const form = document.forms[wizardFormName];
    // const taskMode = $(e.target).find('.select-task_mode option:selected').val();
    const limit = form['limit'];
    const followings = {
        from: form['have_followings_from'].value,
        to: form['have_followings_to'].value
    };

    if (limit.value === '') {
        limit.focus();
        return false;
    }

    const competitors = getCompetitors($(form).find(elSelector.competitors));

    const body = {
        ...state,
        user_default_config: {
            criteria: {
                max_views: limit.value,
                followings
            }
        },
        type: clsConst.pathType,
        username: usernameSelected,
        user_custom_config: {
            competitors
        }
    };

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

// let defaultCfg = {
//     cfg: {},
//     id: {}
// };

function renderTaskMode(defaultCfg) {
    const {cfg: {task_modes}} = defaultCfg;
    const {taskMode: taskModeSelector} = elSelector;
    viewUtils.fillRadioGroupList($(taskModeSelector), task_modes);
    $(`${taskModeSelector} input[type=radio]`).on('click', (e) => {
        const value = $(e.target).attr('value');
        state.task_mode = value.toUpperCase();
        console.log(state.task_mode);
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

        // defaultCfg = found;
        renderTaskMode(found);
    });
}

function setUserName(state) {
    usernameSelected = state.username;
}

function addTextArea(stepNumber) {
    const {wizardForm} = elSelector;
    if (state.subtype === CONST.url.tmTypes.storiesSubT[0]) {
        const fieldLast = $(`${wizardForm} fieldset`).get(stepNumber + 1);
        const tpl = `<div class="row"><textarea class="form-control stories-competitors" rows="4"
                            placeholder="Введите имена конкурентов, через запятую"
                ></textarea></div>`;
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
