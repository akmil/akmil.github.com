// import {CONST} from './consts';

function dropDown() {

    /**
     * cfg ={ logsState, cbFN() }
     */
    function addDropdown($wrapper, items, cfg) {
        console.log('addDropdown');
        const {textRusArray, logsState} = cfg;
        const {selectClsLogsTaskType} = logsState;
        const getRus = (idx) => {
            const isTextUnfollow = textRusArray && !!textRusArray.length;
            switch (idx) {
                case 0 :
                    return (isTextUnfollow) ? textRusArray[idx] : 'По подписчикам';
                case 1 :
                    return (isTextUnfollow) ? textRusArray[idx] : 'По активной аудитории конкурентов';
                case 2 :
                    return (isTextUnfollow) ? textRusArray[idx] : 'default - (3)';
                default: return 'default';
            }
        };
        const label = 'Доступные задания';
        $wrapper.empty().addClass('border-light-color');
        $(`<div class="">${label}</div><select name="task-subtype" class="${selectClsLogsTaskType}"></select>`).appendTo($wrapper);
        if (!items.length) {
            return;
        }
        $('<option class="list-group-item py-2 js_empty-subtype" value="---">---</option>').appendTo($(`.${selectClsLogsTaskType}`));
        items.forEach((name, idx) => {
            $(`<option class="list-group-item py-2" value="${name}">
                ${getRus(idx)}
            </option>`).appendTo($(`.${selectClsLogsTaskType}`));
        });
        $(`.${selectClsLogsTaskType}`).on('change', function (e) {
            cfg.dropdownOnSelectCb(e);
        });
    }

    return {
        addDropdown
    };
}

export default dropDown();
