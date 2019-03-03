// import $ from 'jquery';
// import {CONST} from './consts';

function viewUtils() {
    function showInfoMessage(selector, message1, message2) {
        $(selector).empty()
            .append(`${(message1) ? `<p>status: ${message1}</p>` : ''}`)
            .append(`<p>${message2} </p>`);
    }

    function fillList($list, dataArray) {
        const items = dataArray;
        const cList = $list;
        cList.empty();
        items.forEach((item, i) => {
            const li = $('<li class="list-group-item"></li>')
                .appendTo(cList);
            $('<a/>').addClass('ui-all')
                .text(item.username)
                .appendTo(li);
        });
    }

    function isEmail(email) {
        /* eslint-disable */
        const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
        /* eslint-enable */
    }

    function getFormattedDateUtil(tStamp, showFullTime) {
        const date = new Date(tStamp);

        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let min = date.getMinutes();
        // let sec = date.getSeconds();

        month = (month < 10 ? '0' : '') + month;
        day = (day < 10 ? '0' : '') + day;
        hour = (hour < 10 ? '0' : '') + hour;
        min = (min < 10 ? '0' : '') + min;
        // sec = (sec < 10 ? '0' : '') + sec;

        let str = '';
        if (!showFullTime) {
            str = `${hour}:${min}`;
        } else {
            // str = `${date.getFullYear()}-${month}-${day} ${hour}:${min}:${sec}`;
            str = `${day}-${month}-${date.getFullYear()} ${hour}:${min}`;
        }

        return str;
    }

    function isEmpty(obj) {
        return !obj || Object.keys(obj).length === 0;
    }

    function fillRadioGroupList($wrapper, taskModes, _actionText) {
        if (isEmpty(taskModes)) {
            console.info('taskModes is empty');
        }
        const actionText = _actionText || 'подписок'; // todo
        const radioBtnReducer = function (item, val) {
            switch (item) {
                case 'AGGRESSIVE':
                    return `<input type="radio" id="${item}" name="customRadio" value="${item}" class="custom-control-input">
                    <label class="custom-control-label" for="${item}"><strong>Агрессивный:</strong> ${val} ${actionText} в час</label>`;
                case 'MIDDLE':
                    return (`<input type="radio" id="${item}" name="customRadio" value="${item}" class="custom-control-input">
                    <label class="custom-control-label" for="${item}"><strong>Средний:</strong> ${val} ${actionText} в час</label>`);
                case 'SAFE':
                    return `<input type="radio" id="${item}" name="customRadio" value="${item}" class="custom-control-input" checked>
                    <label class="custom-control-label" for="${item}"><strong>Безопасный:</strong> ${val} ${actionText} в час</label>`;
                default:
                    console.log('default', item);
            }
        };
    // console.log('draw speed radioBtn');
        $wrapper.empty();
        for (const item in taskModes) {
      // console.log('structure: ' + item);
            if (Object.prototype.hasOwnProperty.call(taskModes, item)) {
                $(`<div class="custom-control custom-radio">
                ${radioBtnReducer(item, taskModes[item])}
            </div>`).appendTo($wrapper);
            }
        }
    }

    /**
     * cfg ={ logsState, cbFN() }
     */
    function addDropdown($wrapper, items, cfg) {
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
        $(`.${selectClsLogsTaskType}`).on('change', function () {
            cfg.dropdownOnSelectCb();

            /* logs.init(selectClsLogsTaskType, clsConst); */
        });
    }

    return {
        showInfoMessage,
        fillList,
        fillRadioGroupList,
        isEmail,
        getFormattedDateUtil,
        addDropdown
    };
}

export default viewUtils();
