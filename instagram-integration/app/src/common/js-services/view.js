import $ from 'jquery';
// import {CONST} from './consts';

function viewUtils() {
    function showInfoMessage(selector, message1, message2) {
        $(selector).empty()
            .append(`<p>status: ${message1}</p>`)
            .append(`<p> message: ${message2} </p>`);
    }

    return {
        showInfoMessage
    };
}

export default viewUtils();
