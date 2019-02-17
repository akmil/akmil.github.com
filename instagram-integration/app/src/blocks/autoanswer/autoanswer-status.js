import {CONST} from '../../common/js-services/consts';
import {getTasksData} from '../_shared/task-status/task-status';

export function init() {
    if ($('.autoanswer-page').length) {
        const path = {
            type: CONST.url.tmTypes.autoanswerT,
            subtype: CONST.url.tmTypes.autoanswerSubT[0]
        };
        const wrappers = {
            $runs: $('.tasks-runs'),
            $stopped: $('.tasks-stopped')
        };
        getTasksData(wrappers, path);
        // window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, (eventName, data) => {
        //     getTasksData(wrappers, path);
        //     console.log('**answer-status', eventName, data);
        // });
        window.PubSub.subscribe(CONST.events.tasks.NEW_TASK_CREATED, (eventName, data) => {
            getTasksData(wrappers, path);
        });
    }
}

