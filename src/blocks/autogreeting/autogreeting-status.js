import {CONST} from '../../common/js-services/consts';
import {getTasksData} from '../_shared/task-status/task-status';

export function init(cfg) {
    if ($(cfg.currentPageCls).length) {
        const {pathType, pathSubType} = cfg;
        const path = {
            type: pathType,
            subtype: pathSubType};
        const wrappers = {
            $runs: $('.tasks-runs'),
            $all: $('.tasks-all')
        };
        getTasksData(wrappers, path);
        window.PubSub.subscribe(CONST.events.tasks.NEW_TASK_CREATED, (eventName, data) => {
            console.log('getTasksData **NEW_TASK_CREATED**', eventName, data);
            getTasksData(wrappers, path);
        });
    }
}

