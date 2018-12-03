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

    return {
        showInfoMessage,
        fillList
    };
}

export default viewUtils();
