// import {CONST} from './consts';

function dropDown() {

    /**
     * cfg ={ logsState, cbFN() }
     */
    function addDropdown($wrapper, items, cfg) {
        // console.log('addDropdown');
        const {textRusArray, logsState} = cfg;
        const {selectClsLogsTaskType} = logsState;
        const getRus = (idx) => {
            const isTextRusArray = textRusArray && !!textRusArray.length;
            switch (idx) {
                case 0 :
                    return (isTextRusArray) ? textRusArray[idx] : 'По списку';
                case 1 :
                    return (isTextRusArray) ? textRusArray[idx] : 'По активной аудитории конкурентов';
                case 2 :
                    return (isTextRusArray) ? textRusArray[idx] : 'default - (3)';
                default: return 'default';
            }
        };
        const label = 'Выберите тип';
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
