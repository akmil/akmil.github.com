import User from '../../common/js-services/user';
import {CONST} from '../../common/js-services/consts';
import {renderItem} from './instagram-accounts-list';
import Spinner from '../../common/js-services/spinner';
import * as imageUpload from '../_shared/image-upload/image-upload';

function updateButtonsDataAttr (settingButtonsHandlerCb) {
    const cfg = {
        deleteBtnCls: '.js_acc-delete',
        updateBtnCls: '.js_acc-refresh',
        editBtnCls: '.js_acc-edit'
    };
    // $(cfg.editBtnCls).off();
    $(cfg.updateBtnCls).off(); // Reload button clear listener
    // $(cfg.deleteBtnCls).off();
    settingButtonsHandlerCb(cfg);
}

export function settingButtonsHandler(classCfg) {
    const {deleteBtnCls, updateBtnCls, editBtnCls} = classCfg;
    const modalConfirm = $('#delete-user-promt');
    let username = '';
    let userOriginal = {};
    const replaceWithCfg = {
        replaceWith: true,
        holderCls: '.modal-image-holder',
        uploadBtnCls: '.js_edit-profile-img-upd',
        imageCls: 'img.user-avatar'
    };
    imageUpload.init(replaceWithCfg);
    // image-upload subscriber
    window.PubSub.subscribe(CONST.events.autoarnswer.IMAGE_UPLOADED_AVATAR, (e, res) => {
        const result = JSON.parse(res.response);
        const {profile_pic_url} = result.data.profile;
        userOriginal.$li.find('img').attr('src', profile_pic_url);
        console.log('userOriginal', userOriginal);
    });
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
        Spinner.add($li, '');
        User.updateInstagramAccount(username).then((result) => {
            console.log(result);
            const {data: {account}} = result;
            $li.replaceWith(renderItem(account, $li, defaultAvatarSrc));

            /*
            const cfg = {
                deleteBtnCls: '.js_acc-delete',
                updateBtnCls: '.js_acc-refresh',
                editBtnCls: '.js_acc-edit'
            };
            // $(cfg.editBtnCls).off();
            $(cfg.updateBtnCls).off(); // Reload button clear listener
            // $(cfg.deleteBtnCls).off();
            settingButtonsHandler(cfg);
            */
            updateButtonsDataAttr(settingButtonsHandler);
            Spinner.remove();
        });
    });

    // PUT instagram-accounts/{username}
    const modalEdit = $('#edit-user-promt');
    $(editBtnCls).on('click', (e) => {
        const $li = $(e.target).closest('li');
        const $editBtn = $li.find(editBtnCls);
        const username = $editBtn.data('username');
        const login = $editBtn.data('name');
        const site = $editBtn.data('url');
        const about = $editBtn.data('biography');
        const imgSrc = $editBtn.data('img');
        const isBusiness = $editBtn.data('is_business');
        // 'is_business'=true

        const $form = modalEdit.find('form').get(0);
        const formFields = {
            login: $form['login'],
            username: $form['username'],
            site: $form['site'],
            about: $form['biography'],
            userAvatarImg: $form['userAvatar']
        };
        userOriginal = {
            login,
            username,
            site,
            about,
            $li,
            followerC: $editBtn.data('follower_count'),
            followingC: $editBtn.data('following_count'),
            mediaC: $editBtn.data('media_count')
        };
        replaceWithCfg.username = username;

        formFields.login.value = login;
        formFields.username.value = username;
        formFields.site.value = site;
        formFields.about.value = about;
        formFields.userAvatarImg.src = imgSrc;
        if (isBusiness) {
            modalEdit.find('.bussines-profile').addClass('d-none').removeClass('d-block');
        } else {
            modalEdit.find('.bussines-profile').addClass('d-block');
        }
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
        const body = {
            // 'username': (userOriginal.username !== formFields.username.value) ? formFields.username.value : '',
            // 'name': formFields.login.value,
            // 'biography': formFields.about.value,
            // 'url': formFields.site.value,
            // 'open': isOpen
        };
        let updateDataAttrUsername = false;
        if (userOriginal.username !== formFields.username.value) {
            body['username'] = formFields.username.value;
            updateDataAttrUsername = true;
        }
        if (userOriginal.login !== formFields.login.value) {
            body['name'] = formFields.login.value;
        }
        if (userOriginal.about !== formFields.about.value) {
            body['biography'] = formFields.about.value;
        }
        if (userOriginal.site !== formFields.site.value) {
            body['url'] = formFields.site.value;
        }
        // ----validate
        if (formFields.about.value === '') {
            console.info('about.value is empty');
        }

        User.editInstagramAccount(userOriginal.username || '', JSON.stringify(body)).then((result) => {
            if (result.status.state === 'ok') {
                console.log('/*UPDATE VIEW HERE*/');
                const {data: {profile}} = result;
                profile.info = result.data.profile;
                profile.info = {
                    ...profile.info,
                    follower_count: userOriginal.followerC,
                    following_count: userOriginal.followingC,
                    media_count: userOriginal.mediaC
                };
                userOriginal.$li.replaceWith(renderItem(profile, userOriginal.$li, false));
                updateButtonsDataAttr(settingButtonsHandler);
                if (updateDataAttrUsername) {
                    const $editBtn = userOriginal.$li.find(editBtnCls);
                    $editBtn.data('username', profile.info.username);
                    updateDataAttrUsername = false;
                }
                modalConfirm.hide();
            }
        });
    });
    // const modeSelector = $('.js_btn-prof-type-switcher');
    $('.js_btn-prof-type-switcher label').on('click', (e) => {
        const value = $(e.target).find('input[type=radio]').attr('value');
        console.log('click', value);
        const isOpen = value === 'closed-profile-off';
        const body = {
            'open': isOpen
        };
        User.editInstagramAccount(userOriginal.username || '', JSON.stringify(body)).then((result) => {
            if (result.status.state === 'ok') {
                console.log('result', result);
                modalConfirm.hide();
            }
        });
    });
}
