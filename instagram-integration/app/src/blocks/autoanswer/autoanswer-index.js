import {CONST} from '../../common/js-services/consts';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import UserTaskManager from '../../common/js-services/api-task-manager';
// import User from '../../common/js-services/user';
import * as tabs from '../_shared/tebs-pils/tabs';
import * as chatBotStatus from './autoanswer-status';
import * as chatBotLogs from '../_shared/logs/logs';

let usernameSelected = '';
const selectCls = 'js_logs-accounts';
const clsConst = {
    currentPageCls: '.autoanswer-page',
    tasksList: '.log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: CONST.url.tmTypes.autogreetT,
    pathSubType: CONST.url.tmTypes.autogreetSubT[0]
};

function onSubmitHandler(e) {
    const fields = $('.autoanswer-text-fields');
    const keyWords = $el => $el.val()
        .trim()
        .replace(/ /g, '')
        .split(',')
        .filter(i => i.length > 0);
    const reqBody = [];
    fields.each((idx, item) => {
        const keyWord = keyWords($(item).find('textarea.answer-words'));
        const answer = $(item).find('textarea.answer-messages').val();
        reqBody.push({'key_words': keyWord, answer});
    });
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
        // console.log('postBot');
        if (result.status.state === 'ok') {
            // console.log(JSON.stringify(result));
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
        // console.log(usernameSelected);
        chatBotLogs.init(selectCls, clsConst);
    });
}

// function getMetaLazy($wrapper, cbFillListUsers) {
//     User.getMetadataLazy().then((res) => {
//         if (res.status.state === 'ok' && res.data && res.data.accounts) {
//             cbFillListUsers($wrapper, res.data.accounts);
//             chatBotLogs.init(selectCls, clsConst);
//         }
//     });
// }

/**
 * Init header
 */
function initHandlers() {
    const tplTextField = () => $(`<div class="autoanswer-text-fields mt-2">
        <div class="row">
            <div class="col">
                <textarea class="form-control answer-words" rows="4" placeholder="Введите ключевые слова или фразы через запятую, при которых будет срабатывать чат-бот"></textarea>
            </div>
            <div class="col">
                <textarea class="form-control answer-messages" rows="4" placeholder="Введите сообщение, которое будет отправляться, если присутствовали ключ.слова или фразы из столбца слева"></textarea>
            </div>
        </div>
    </div>`);

    $('.js_add-autoanswer').on('click', (e) => {
        const lastTextField = $('.autoanswer-text-fields').last();
        tplTextField().insertAfter(lastTextField);
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

    /*
    $('#v-pills-logs-tab').on('click', (e) => {
        // at this point of time setInterval is working
        const $wrapper = $('.log-users-list');
        getMetaLazy($wrapper, fillListUsers);
        // chatBotLogs.init(selectCls, clsConst);
    });
    */
    tabs.init(fillListUsers);
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
    if ($('.autoanswer-page').length) {
        const wizardCfg = {
            stepReducer,
            onSubmitHandler
        };
        wizardForm.init(wizardCfg);
        initHandlers();
        chatBotStatus.init();
        window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
            // console.log(accounts);
            chatBotLogs.init(selectCls, clsConst);
        });
    }
}
