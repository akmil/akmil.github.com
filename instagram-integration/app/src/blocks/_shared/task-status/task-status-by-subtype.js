import {CONST} from '../../../common/js-services/consts';
import {getTasksData} from '../../_shared/task-status/task-status';
// import viewUtils from '../../../common/js-services/view';
import dropDown from '../../_shared/dropdown/dropdown';

let path = {
    type: '',
    subtype: ''
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

export function init({isInCorrectPage, initialPath, textRusArray}) {
    if (!isInCorrectPage) {
        return;
    }
    path = {
        type: initialPath.type,
        subtype: initialPath.subtype
    };

    // todo: merge with viewUtils.js Dropdown
    dropDown.addDropdown(
        logsStateStatus.wrapperSubtype,
        initialPath.subtypes,
        {logsState: logsStateStatus, dropdownOnSelectCb, textRusArray}
    );

    // getTasksData(wrappers, path);
    window.PubSub.subscribe(CONST.events.tasks.NEW_TASK_CREATED, (eventName, data) => {
        getTasksData(wrappers, path);
    });
}

