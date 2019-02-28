import {CONST} from '../../common/js-services/consts';
import {getTasksData} from '../_shared/task-status/task-status';

export function init({isInStoriesPage}) {
    if (!isInStoriesPage) {
        return;
    }
    const path = {
        type: CONST.url.tmTypes.storiesT,
        subtype: CONST.url.tmTypes.storiesSubT[0]
    };
    const wrappers = {
        $runs: $('.tasks-runs'),
        $stopped: $('.tasks-stopped')
    };
    getTasksData(wrappers, path);
    window.PubSub.subscribe(CONST.events.tasks.NEW_TASK_CREATED, (eventName, data) => {
        getTasksData(wrappers, path);
    });
}

