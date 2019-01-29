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
        let sec = date.getSeconds();

        month = (month < 10 ? '0' : '') + month;
        day = (day < 10 ? '0' : '') + day;
        hour = (hour < 10 ? '0' : '') + hour;
        min = (min < 10 ? '0' : '') + min;
        sec = (sec < 10 ? '0' : '') + sec;

        let str = '';
        if (!showFullTime) {
            str = `${hour}:${min}`;
        } else {
            str = `${date.getFullYear()}-${month}-${day}_${hour}:${min}:${sec}`;
        }

        return str;
    }

    return {
        showInfoMessage,
        fillList,
        isEmail,
        getFormattedDateUtil
    };
}

export default viewUtils();
