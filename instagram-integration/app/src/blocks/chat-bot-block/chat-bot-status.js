import {CONST} from '../../common/js-services/consts';
import {getTasksData} from '../follow/follow-status';
// import * as chatBotLogs from './bot-logs';

export function init() {
    if ($('.chat-bot-page').length) {
        const path = {
            type: CONST.url.tmTypes.chatBotT,
            subtype: CONST.url.tmTypes.chatBotSubT[0]
        };
        const wrappers = {
            $runs: $('.bot-tasks-runs'),
            $stopped: $('.bot-tasks-stopped')
        };
        getTasksData(wrappers, path);
        console.log(path);
        window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, (eventName, data) => {
            getTasksData(wrappers, path);
            console.log('**chat-bot-status', eventName, data);
        });
        window.PubSub.subscribe(CONST.events.tasks.NEW_TASK_CREATED, (eventName, data) => {
            getTasksData(wrappers, path);
        });
    }
}

