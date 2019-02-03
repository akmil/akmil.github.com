import {CONST} from '../../common/js-services/consts';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import UserTaskManager from '../../common/js-services/api-task-manager';
import * as chatBotStatus from './chat-bot-status';

let usernameSelected = '';

function onSubmitHandler(e) {
    const fields = $('.chat-bot-text-fields');
    const keyWords = $el => $el.val()
        .trim()
        .replace(/ /g, '')
        .split(',')
        .filter(i => i.length > 0);
    const reqBody = [];
    fields.each((idx, item) => {
        const keyWord = keyWords($(item).find('textarea.chat-words'));
        const answer = $(item).find('textarea.chat-messages').val();
        reqBody.push({'key_words': keyWord, answer});
    });
    const nReqBody = {
        'username': usernameSelected,
        'type': CONST.url.tmTypes.chatBotT, // 'CHAT_BOT',
        'subtype': CONST.url.tmTypes.chatBotSubT[0], // 'DEFAULT_CHAT_BOT',
        'user_default_config': {},
        'user_custom_config': {
            'text_forms': reqBody
        }
    };

    console.log('make request here**', nReqBody);
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

/**
 * Init header
 */
function initChatMsg() {
    const tplTextField = () => $(`<div class="chat-bot-text-fields mt-2">
        <div class="row">
            <div class="col">
                <textarea class="form-control chat-words" rows="4" placeholder="Введите ключевые слова или фразы через запятую, при которых будет срабатывать чат-бот"></textarea>
            </div>
            <div class="col">
                <textarea class="form-control chat-messages" rows="4" placeholder="Введите сообщение, которое будет отправляться, если присутствовали ключ.слова или фразы из столбца слева"></textarea>
            </div>
        </div>
    </div>`);

    $('.js_add-chat-bot').on('click', (e) => {
        const lastTextField = $('.chat-bot-text-fields').last();
        tplTextField().insertAfter(lastTextField);
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
    if ($('.chat-bot-page').length) {
        const wizardCfg = {
            stepReducer,
            onSubmitHandler
        };
        wizardForm.init(wizardCfg);
        initChatMsg();
        chatBotStatus.init();
    }
}
