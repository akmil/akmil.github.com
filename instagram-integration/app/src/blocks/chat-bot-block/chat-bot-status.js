import {CONST} from '../../common/js-services/consts';
import {getTasksData} from '../follow/follow-status';

/*
function fillListMeta($wrapper, data) {
    $wrapper.empty().addClass('border-light-color');
    $(`<div class="">${JSON.stringify(data)}</div>`).appendTo($wrapper);
    // for (const type in data['structure']) {
    // console.log('structure: ' + item);
    //     if (Object.prototype.hasOwnProperty.call(structureObj, type)) {
    //         $(`<option class="list-group-item py-2" ${(type !== 'FOLLOWING') ? 'disabled="disabled"' : ''}
    //             value = "${JSON.stringify({type, subtype: structureObj[type]})}">
    //             ${type}
    //         </option>`).appendTo($('#task-types'));
    //     }
    // }
}
*/

export function init() {
    if ($('.chat-bot-page').length) {
        const path = {
            type: CONST.url.tmTypes.chatBotT,
            subType: CONST.url.tmTypes.chatBotSubT[0]
        };
        const wrappers = {
            $runs: $('.bot-tasks-runs'),
            $stopped: $('.bot-tasks-stopped')
        };
        getTasksData(wrappers, path);
        // UserTaskManager.getMetadata(path).then((result) => {
        //     if (result.status.state === 'ok') {
        //         console.log(result.data.meta);
        //         fillListLogs($('.bot-log-tasks'), result.data.meta);
        //     }
        // });
    }
}

/*
GET http://api.luxgram.ru/v1/instagram-task-manager/logs/type/{type}/subtype/{subtype}/account/{username}
Необязательный параметр “page”
 */
