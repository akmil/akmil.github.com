import {CONST} from '../../../common/js-services/consts';
import User from '../../../common/js-services/user';

function getMetaLazy($wrapper, cbFillListUsers) {
    User.getMetadataLazy().then((res) => {
        if (res.status.state === 'ok' && res.data && res.data.accounts) {
            cbFillListUsers($wrapper, res.data.accounts);
            window.PubSub.publish(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, res.data.accounts);
        }
    });
}

function tabHandler($wrapper, cbFillListUsers) {
    $('#v-pills-logs-tab').on('click', (e) => {
        getMetaLazy($wrapper, cbFillListUsers);
    });
}

export function init(cbFillListUsers) {
    const $wrapper = $('.log-users-list');
    // getMetaLazy($wrapper, cbFillListUsers);
    tabHandler($wrapper, cbFillListUsers);
    // window.PubSub.subscribe(CONST.events.logs.STOP_LOGS, (eventName, data) => {
    //     tabHandler();
    // });
}