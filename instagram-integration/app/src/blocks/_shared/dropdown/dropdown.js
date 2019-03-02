// import {CONST} from './consts';

function dropDown() {

    /**
     * cfg ={ logsState, cbFN() }
     */
    function addDropdown($wrapper, items, cfg) {
        console.log('addDropdown');
        const {selectClsLogsTaskType} = cfg.logsState;
        const label = 'Доступные задания';
        $wrapper.empty().addClass('border-light-color');
        $(`<div class="">${label}</div><select name="task-subtype" class="${selectClsLogsTaskType}"></select>`).appendTo($wrapper);
        if (!items.length) {
            return;
        }
        $('<option class="list-group-item py-2 js_empty-subtype" value="---">---</option>').appendTo($(`.${selectClsLogsTaskType}`));
        items.forEach((name, idx) => {
            $(`<option class="list-group-item py-2" value="${name}">
            ${idx === 0 ? 'По подписчикам' : 'По активной аудитории конкурентов'}
        </option>`).appendTo($(`.${selectClsLogsTaskType}`));
        });
        $(`.${selectClsLogsTaskType}`).on('change', function (e) {
            cfg.dropdownOnSelectCb(e);

            /* logs.init(selectClsLogsTaskType, clsConst); */
        });
    }

    return {
        addDropdown
    };
}

export default dropDown();
