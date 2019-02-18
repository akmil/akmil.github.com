import {CONST} from '../../common/js-services/consts';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import UserTaskManager from '../../common/js-services/api-task-manager';
import * as tabs from '../_shared/tebs-pils/tabs';
import * as chatBotStatus from './autogreeting-status';
import * as chatBotLogs from '../_shared/logs/logs';

let usernameSelected = '';
// let userListInstagram = [];
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
const state = {
    user_default_config: {
        task_mode: 'SAFE'
    }
};

function onSubmitHandler(e) {
    const fields = $('.autoanswer-text-fields');
    // const keyWords = $el => $el.val()
    //     .trim()
    //     .replace(/ /g, '')
    //     .split(',')
    //     .filter(i => i.length > 0);
    const reqBody = [];
    fields.each((idx, item) => {
        const message = $(item).find('textarea.answer-words').val();
        // const answer = $(item).find('textarea.chat-messages').val();
        // reqBody.push({'key_words': keyWord, answer});
        reqBody.push(message);
    });
    const nReqBody = {
        'username': usernameSelected || 'the_rostyslav',
        'type': CONST.url.tmTypes.autogreetT,
        'subtype': CONST.url.tmTypes.autogreetSubT[0],
        'user_default_config': {
            'task_mode': state.user_default_config.task_mode // todo
        },
        'user_custom_config': {
            'messages': reqBody
        }
    };
    console.log('make request here**', nReqBody, JSON.stringify(nReqBody));
    function cbError(res) {
        const msg = res.status.message;
        $('.form-submit-finish--error').addClass('d-block')
        .find('.alert').append(`<p>${msg}</p>`);
    }
    UserTaskManager.postStartChatBot(nReqBody, cbError).then((result) => {
        console.log('postBot');
        if (result.status.state === 'ok') {
            console.log(JSON.stringify(result));
            $('.form-submit-finish').addClass('d-block')
                .find('.alert').append(`<p>task_id: ${result.data.task_id}</p>`);
        }
    });
}

function fillListUsers($wrapper, data) {
    $wrapper.empty().addClass('border-light-color');
    $(`<div class="">Доступные аккаунты</div><select name="task-type" class="${selectCls}"></select>`).appendTo($wrapper);
    data.forEach((name) => {
        $(`<option class="list-group-item py-2" value="${name}">
            ${name}
        </option>`).appendTo($(`.${selectCls}`));
    });
    $(`.${selectCls}`).on('change', function () {
        usernameSelected = $(`.${selectCls} option:selected`).val();
        console.log(usernameSelected);
        chatBotLogs.init(selectCls, clsConst);
    });
}

/**
 * Init header
 */
function initHandlers() {
    const tplTextField = (msg) => $(`<div class="autoanswer-text-fields mt-2">
        <div class="row">
            <div class="col">
                <textarea class="form-control answer-words" rows="4" placeholder="${msg}"></textarea>
            </div>
        </div>
    </div>`);

    $('.js_add-autoanswer').on('click', (e) => {
        const lastTextField = $('.autoanswer-text-fields').last();
        const msg = 'Введите приветствие';
        tplTextField(msg).insertAfter(lastTextField);
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        console.log('alert close');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    // alert close
    $('.form-submit-finish--error .close').on('click', function () {
        console.log('alert close');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });
    // $('#v-pills-logs-tab').on('click', (e) => {
        // at this point of time setInterval is working
        // const $wrapper = $('.log-users-list');
        // fillListUsers($wrapper, userListInstagram);
    // });
    tabs.init(fillListUsers);
}

function setUserName(state) {
    // console.log('getTasksData', state.username);
    usernameSelected = state.username;
}

function getDataStepSpeed() {
    // const users = $('#followers').val()
    //     .trim()
    //     .replace(/ /g, '')
    //     .split(',')
    //     .filter(i => i.length > 0);

    // state['user_custom_config'] = {
    //     users
    // };
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
        // window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, (e, dataObj) => {
        //     console.log('INSTAGRAM_ACCOUNS_RENDERED', dataObj);
        //     userListInstagram = dataObj.dataArray;
        //     chatBotStatus.init(clsConst);
        // });
        window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
            // console.log(accounts);
            chatBotLogs.init(selectCls, clsConst);
        });
    }
}
