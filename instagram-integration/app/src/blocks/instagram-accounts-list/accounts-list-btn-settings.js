import User from '../../common/js-services/user';
import {CONST} from '../../common/js-services/consts';
import {renderItem} from './instagram-accounts-list';
import Spinner from '../../common/js-services/spinner';
import * as imageUpload from '../_shared/image-upload/image-upload';

export function settingButtonsHandler(classCfg) {
    const {deleteBtnCls, updateBtnCls, editBtnCls} = classCfg;
    const modalConfirm = $('#delete-user-promt');
    let username = '';
    const replaceWithCfg = {
        replaceWith: true,
        holderCls: '.modal-image-holder',
        uploadBtnCls: '.js_edit-profile-img-upd',
        imageCls: 'img.user-avatar'
    };
    imageUpload.init(replaceWithCfg);
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
    let usernameOriginal = '';
    $(editBtnCls).on('click', (e) => {
        const $editBtn = $(e.target).closest(editBtnCls);
        const username = $editBtn.data('username');
        const login = $editBtn.data('name');
        const site = $editBtn.data('url');
        const about = $editBtn.data('biography');
        const imgSrc = $editBtn.data('img');

        const $form = modalEdit.find('form').get(0);
        const formFields = {
            login: $form['login'],
            username: $form['username'],
            site: $form['site'],
            about: $form['biography'],
            userAvatarImg: $form['userAvatar']
        };
        usernameOriginal = username;
        replaceWithCfg.username = username;

        formFields.login.value = login;
        formFields.username.value = username;
        formFields.site.value = site;
        formFields.about.value = about;
        formFields.userAvatarImg.src = imgSrc;
        modalEdit.modal('show');
    });
    $('.js_edit-profile-modify').on('click', (e) => {
        const $form = modalEdit.find('form').get(0);
        const formFields = {
            login: $form['login'],
            username: $form['username'],
            site: $form['site'],
            about: $form['biography'],
            userAvatarImg: $form['userAvatar']
        };
        const typeSelected = $(e.target).closest(modalEdit).find('.js_btn-prof-type-switcher input:checked');
        const isOpen = typeSelected.val() === 'closed-profile-on';
        // console.log($form, formFields.login, username, formFields.site);
        const body = {
            'username': formFields.username.value,
            'name': formFields.login.value,
            'biography': formFields.about.value,
            'url': formFields.site.value,
            'open': isOpen
        };
        if (formFields.about.value === '') {
            console.info('about.value is empty');
        }
        User.editInstagramAccount(usernameOriginal || '', JSON.stringify(body)).then((result) => {
            if (result.status.state === 'ok') {
                console.log('result', result);
                modalConfirm.hide();
            }
        });
    });
}
