import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';

/*
const state = {
    'text_forms': [
        {
            'key_words': ['цена', 'стоимость'],
            'answer': '100500 рублей'
        },
        {
            'key_words': ['цену', 'ценник'],
            'answer': '1 млн. рублей'
        }
    ]
};*/

/*
function fillListTypes($wrapper, data) {
  const structureObj = data['structure'];

  $wrapper.empty().addClass('border-light-color');
  $('<div class="">Тип задания</div><select name="task-type" id="task-types"></select>').appendTo($wrapper);
  for (const type in structureObj) {
    // console.log('structure: ' + item);
    if (Object.prototype.hasOwnProperty.call(structureObj, type)) {
      $(`<option class="list-group-item py-2" ${(type !== 'FOLLOWING') ? 'disabled="disabled"' : ''}
                value = "${JSON.stringify({type, subtype: structureObj[type]})}">
                ${type}
            </option>`).appendTo($('#task-types'));
    }
  }
}*/

/**
 * Init header
 */
function initSteps() {
    const $form = $('.chat-bot-form');
    const textRow = $('.chat-bot-text-fields');

    $('.js_add-chat-bot').on('click', (e) => {
        console.log('click');
        const texRowClone = $('.chat-bot-text-fields:first-child').clone();
        texRowClone.insertBefore(textRow);
    });
    // submit
    $form.on('submit', function (e) {
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
            'username': 'the_rostyslav',
            'type': 'CHAT_BOT',
            'subtype': 'DEFAULT_CHAT_BOT',
            'user_default_config': {},
            'user_custom_config': {
                'text_forms': reqBody
            }
        };

        console.log('make request here**', nReqBody);

        UserTaskManager.postStartChatBot(nReqBody).then((result) => {
            if (result.status.state === 'ok') {
                console.log(JSON.stringify(result));
                $('.form-submit-finish').addClass('d-block')
                    .find('.alert').append(`<p>task_id: ${result.data.task_id}</p>`);
            }
        });

    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        // $(this).closest('form-submit-finish').removeClass('d-block');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });
}

function getTasksData() {
    UserTaskManager.getMetadata().then((result) => {
        // console.log(result);
        if (result.status.state === 'ok') {
            console.log(result.data.meta);
            // initHandlers();
        }
    });
}

export function init() {
    if ($('.chat-bot-form').length) {
        getTasksData();
        initSteps();
    }
}
