// TODO: refactor -> delete me, use task-status-by-subtype.js
import {CONST} from '../../common/js-services/consts';
import {getTasksData} from '../_shared/task-status/task-status';
// import viewUtils from '../../common/js-services/view';
import dropDown from '../_shared/dropdown/dropdown';

const path = {
    type: CONST.url.tmTypes.storiesT,
    subtype: CONST.url.tmTypes.storiesSubT[0]
};
const wrappers = {
    $all: $('.tasks-all'),
    $stopped: $('.tasks-stopped')
};
const logsStateStatus = {
    wrapperSubtype: $('.subtype--box')
};

function dropdownOnSelectCb(e) {
    // const {selectClsLogsTaskType} = logsState;
    const subtype = $(e.target).find('option:selected').val();
    const pathUpdated = {...path, subtype};
    $('.js_logs-container').addClass('d-block');
    $('option.js_empty-subtype').remove();
    getTasksData(wrappers, pathUpdated);
}

export function init({isInStoriesPage}) {
    if (!isInStoriesPage) {
        return;
    }
    // toDO : refactor
    // render status dropdown
    const textRusArray = ['По подписчикам', 'По активной аудитории конкурентов', 'По списку'];
    dropDown.addDropdown(logsStateStatus.wrapperSubtype, CONST.url.tmTypes.storiesSubT, {logsState: logsStateStatus, dropdownOnSelectCb, textRusArray});

    // getTasksData(wrappers, path);
    window.PubSub.subscribe(CONST.events.tasks.NEW_TASK_CREATED, (eventName, data) => {
        getTasksData(wrappers, path);
    });
}

