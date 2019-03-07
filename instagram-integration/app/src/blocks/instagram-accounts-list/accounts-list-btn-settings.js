import User from '../../common/js-services/user';
import {CONST} from '../../common/js-services/consts';

export function settingButtonsHandler(classCfg) {
    const {deleteBtnCls} = classCfg;
    const modalConfirm = $('#delete-user-promt');
    let username = '';
    // DELETE .../instagram-accounts/{username}
    $(deleteBtnCls).on('click', (e) => {
        username = $(e.target).closest(deleteBtnCls).data('username');
        console.log();
        modalConfirm.modal('show');
    });
    $('.js_acc-delete-confirm').on('click', (e) => {
        User.delInstagramAccount(username).then((result) => {
            console.log(result);
            if (result.status.state === 'ok') {
                modalConfirm.hide();
                window.PubSub.publish(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_NEED_REFRESH);
            }
        });
    });
}
