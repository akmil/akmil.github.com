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
    // let username = '';
    let slotindex = '';
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
        console.log(res);
        const result = JSON.parse(res.response);
        const {profile_pic_url} = result.data.profile;
        if (userOriginal.$li) {
            userOriginal.$li.find('img').attr('src', profile_pic_url);
        }
        console.log('userOriginal', userOriginal);
    });
    // DELETE .../instagram-accounts/{username}
    $(deleteBtnCls).off().on('click', (e) => {
        slotindex = $(e.target).closest(deleteBtnCls).data('slotindex');
        modalConfirm.modal('show');
    });
    $('.js_acc-delete-confirm').on('click', (e) => {
        User.delInstagramAccount(slotindex).then((result) => {
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
        const slotIndex = $(e.target).closest(updateBtnCls).data('slotindex');
        const defaultAvatarSrc = CONST.user.defaulAvatar;
        Spinner.add($li, '');
        User.updateInstagramAccount(slotIndex).then((result) => {
            console.log('updateInstagramAccount', result);
            const {data: {slot}} = result;
            slot.slotIndexLocal = slotIndex;
            $li.replaceWith(renderItem(slot, $li, defaultAvatarSrc));

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
    $(editBtnCls).off().on('click', (e) => {
        const $li = $(e.target).closest('li');
        const $editBtn = $li.find(editBtnCls);
        const username = $editBtn.data('username');
        const slotIndex = $editBtn.data('slotindex');
        const login = $editBtn.data('name');
        const site = $editBtn.data('url');
        const about = $editBtn.data('biography');
        const imgSrc = $editBtn.data('img');
        const isBusiness = $editBtn.data('is_business');
        const isPrivate = $editBtn.data('is_private');
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
            slotIndex,
            site,
            about,
            $li,
            followerC: $editBtn.data('follower_count'),
            followingC: $editBtn.data('following_count'),
            mediaC: $editBtn.data('media_count')
        };
        replaceWithCfg.username = username;
        replaceWithCfg.slotIndex = slotIndex;

        formFields.login.value = login;
        formFields.username.value = username;
        formFields.site.value = site;
        formFields.about.value = about;
        formFields.userAvatarImg.src = imgSrc;
        const $profileBox = modalEdit.find('.bussines-profile');
        if (isBusiness) {
            $profileBox.addClass('d-none').removeClass('d-block');
        } else {
            $profileBox.addClass('d-block');
            // isPrivat, todo:refactor me
            if (isPrivate) {
                $profileBox.find('.js_btn-prof-type-switcher #closed-profile-on').closest('label').addClass('active')
                    .find('#closed-profile-on').attr('checked', 'checked');
                // off - disable
                $profileBox.find('.js_btn-prof-type-switcher #closed-profile-off').closest('label').removeClass('active')
                    .find('#closed-profile-off').attr('checked', false);
            } else {
                $profileBox.find('.js_btn-prof-type-switcher #closed-profile-off').closest('label').addClass('active')
                    .find('#closed-profile-off').attr('checked', 'checked');
                // on - disable
                $profileBox.find('.js_btn-prof-type-switcher #closed-profile-on').closest('label').removeClass('active')
                    .find('#closed-profile-on').attr('checked', false);
            }
        }
        window.PubSub.subscribe('update_data_private_on_acc_list', (e, value) => {
            $editBtn.data('is_private', value !== 'closed-profile-off');
        });
        modalEdit.modal('show');
    });
    $('.js_edit-profile-modify').off().on('click', (e) => {
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

        // toDO !
        User.editInstagramAccount(parseInt(userOriginal.slotIndex, 10), JSON.stringify(body)).then((result) => {
            if (result.status.state === 'ok') {
                console.log('/*UPDATE VIEW HERE*/');
                // toDO !
                const {data: {profile}} = result;
                // profile.info = result.data.profile;
                profile.info = {
                    ...result.data.profile,
                    follower_count: userOriginal.followerC,
                    following_count: userOriginal.followingC,
                    media_count: userOriginal.mediaC
                };
                profile.slotIndexLocal = userOriginal.slotIndex;
                userOriginal.$li.replaceWith(renderItem(profile, userOriginal.$li, false));
                updateButtonsDataAttr(settingButtonsHandler);
                const $editBtn = userOriginal.$li.find(editBtnCls);
                $editBtn.data('slotindex', userOriginal.slotIndex);
                if (updateDataAttrUsername) {
                    // const $editBtn = userOriginal.$li.find(editBtnCls);
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
        // console.log('click', value);
        const isOpen = value === 'closed-profile-off';
        const body = {
            'open': isOpen
        };
        User.editInstagramAccount(userOriginal.username || '', JSON.stringify(body)).then((result) => {
            if (result.status.state === 'ok') {
                console.log('result', result);
                window.PubSub.publish('update_data_private_on_acc_list', value);
            }
        });
    });
}
