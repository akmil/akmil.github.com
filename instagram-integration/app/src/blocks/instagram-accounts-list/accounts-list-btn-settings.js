import User from '../../common/js-services/user';
import {CONST} from '../../common/js-services/consts';

export function settingButtonsHandler(classCfg) {
    const {deleteBtnCls} = classCfg;
    // ендпоинт:
    // DELETE blablabla/instagram-accounts/{username}
    // как всегда, токен в хидер
    $(deleteBtnCls).on('click', (e) => {
        const username = $(e.target).closest(deleteBtnCls).data('username');
        console.log();
        User.delInstagramAccount(username).then((result) => {
            console.log(result);
            if (result.status.state === 'ok') {
                window.PubSub.publish(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_NEED_REFRESH);
            }
        });
    });
}
