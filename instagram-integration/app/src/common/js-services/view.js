import $ from 'jquery';
// import {CONST} from './consts';

function viewUtils() {
    function showInfoMessage(selector, message1, message2) {
        $(selector).empty()
            .append(`<p>status: ${message1}</p>`)
            .append(`<p> message: ${message2} </p>`);
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

    return {
        showInfoMessage,
        fillList,
        isEmail
    };
}

export default viewUtils();
