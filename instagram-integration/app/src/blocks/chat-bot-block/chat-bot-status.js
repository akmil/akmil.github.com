import {CONST} from '../../common/js-services/consts';
import {getTasksData} from '../follow/follow-status';
import * as chatBotLogs from './bot-logs';

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
        window.PubSub.subscribe(CONST.events.tasks.NEW_TASK_CREATED, (eventName, data) => {
            getTasksData(wrappers, path);
        });
        chatBotLogs.init();
    }
}

/*
GET http://api.luxgram.ru/v1/instagram-task-manager/logs/type/{type}/subtype/{subtype}/account/{username}
Необязательный параметр “page”
 */
