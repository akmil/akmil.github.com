import {CONST} from '../../../common/js-services/consts';

function tabHandler() {
    $('#v-pills-tab').on('click', (e) => {
        const tab = $(e.target);
        const hasId = 'v-pills-logs-tab';
        if (tab.attr('id') === hasId) {
            console.log('stop req');
        }
    });
}
export function init() {
    window.PubSub.subscribe(CONST.events.logs.STOP_LOGS, (eventName, data) => {
        tabHandler();
    });
}