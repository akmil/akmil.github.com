import User from '../../common/js-services/user';
import {CONST} from '../../common/js-services/consts';
import {renderItem} from './instagram-accounts-list';
import Spinner from '../../common/js-services/spinner';

export function settingButtonsHandler(classCfg) {
    const {deleteBtnCls, updateBtnCls, editBtnCls} = classCfg;
    const modalConfirm = $('#delete-user-promt');
    let username = '';
    // DELETE .../instagram-accounts/{username}
    $(deleteBtnCls).on('click', (e) => {
        username = $(e.target).closest(deleteBtnCls).data('username');
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

    // GET instagram-accounts/meta/{username}
    $(updateBtnCls).on('click', (e) => {
        const $li = $(e.target).closest('li');
        const username = $(e.target).closest(updateBtnCls).data('username');
        const defaultAvatarSrc = CONST.user.defaulAvatar;
        Spinner.add($li, 'my-5 py-5');
        User.updateInstagramAccount(username).then((result) => {
            console.log(result);
            const {data: {account}} = result;
            $li.replaceWith(renderItem(account, $li, defaultAvatarSrc));
            const cfg = {
                deleteBtnCls: '.js_acc-delete',
                updateBtnCls: '.js_acc-refresh',
                editBtnCls: '.js_acc-edit'
            };
            settingButtonsHandler(cfg);
            Spinner.remove();
        });
    });

    // PUT instagram-accounts/{username}
    const modalEdit = $('#edit-user-promt');
    // eslint-disable-next-line no-unused-vars
    let liUserEdit = {};
    $(editBtnCls).on('click', (e) => {
        liUserEdit = $(e.target).closest('li');
        const username = $(e.target).closest(editBtnCls).data('username');
        console.log('editBtnCls', username);
        modalEdit.modal('show');
    });
    $('.js_edit-profile-modify').on('click', (e) => {
        const $form = modalEdit.find('form').get(0);
        // const form = document.forms[wizardFormName];
        const login = $form['login'];
        const username = $form['username'];
        const site = $form['site'];
        const about = $form['about'];
        if (about.value === '') {
            console.error('about.value');
        }
        console.log($form, login, username, site);
        // const body = {
        //     'username': '',
        //     'name': '',
        //     'biography': '',
        //     'url': '',
        //     'open': true
        // };
        // User.delInstagramAccount(username, body).then((result) => {
        //     if (result.status.state === 'ok') {
        //         modalConfirm.hide();
        //     }
        // });
    });
}
