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
        items.forEach((item, i) => {
            const li = $('<li/>')
                .addClass('ui-menu-item')
                .attr('role', 'menuitem')
                .appendTo(cList);
            const aaa = $('<a/>')
                .addClass('ui-all')
                .text(i + ': ' + item.name)
                .appendTo(li);
            });
    }

    return {
        showInfoMessage,
        fillList
    };
}

export default viewUtils();
