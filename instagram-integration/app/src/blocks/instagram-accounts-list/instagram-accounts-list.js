import User from '../../common/js-services/user';
// import Spinner from '../../common/js-services/spinner';
import viewUtils from '../../common/js-services/view';
import {CONST} from '../../common/js-services/consts';
import {settingButtonsHandler} from './accounts-list-btn-settings';
import {addSlotInit} from './accounts-list-slot';

const InstagramAccPageCls = '.instagram-accounts-page';
const isInstagramAccPage = $(InstagramAccPageCls).length;
const $msgList = $('.accounts-list');
const INSTAGRAM_ACCOUNTS_HREF = 'instagram-accounts';
const errMessageFront = 'Не получилось загрузить доступные Instagram аккаунты';

function addListHandler() {
    let checkpointType = '';

    $('.js_pass-checkpoint-btn').on('click', (e) => {
        const $button = $(e.target);
        const username = $button.data('username');
        const slotindex = $button.data('slotindex');
        checkpointType = $button.data('checkpointType') || checkpointType;
        // $('#security-code').data('checkpointType', checkpointType);
        // todo add 'checkpointType' to modal
        const sendTo = (checkpointType === 'PHONE') ? 'телефон' : 'email';
        // Spinner.start($button, 'fa-key');

        if (checkpointType === 'EMAIL_OR_PHONE') {
            e.stopPropagation();

            // инпуты спрятаны,
            // показать серые переключатели (выбрал тип)
            // есть кнопка Запросить код подтверждение
            $('#security-code-phoneOremail').modal({show: true, username});

            // не отправляем реквест
            return;
        }

        User.getSecurityKey(`slot/${slotindex}`, checkpointType).then((result) => {
            console.log('SecurityKey received:', result.status.state);
            if (result.status.state === 'ok') {
                const $modal = $('#security-code');

                // Spinner.stop($button, 'fa-key');
                $('.js_success-feedback', $modal).empty().text(`Ключ подтверждения был отправлен Вам на ${sendTo}`);

                $('#security-code').attr('data-username', username);
            }
        });
    });

    // inside modal
    $('.js_confirm-security-code').on('click', (e) => {
        const btn = $(e.target);
        const username = btn.closest('#security-code').data('username');
        const $keyInput = btn.closest('.modal').find('.modal-dialog form input.js_confirm-key');
        const key = $keyInput.val().trim();
        const $modal = btn.closest('.modal');
        e.stopPropagation();

        if (key.length !== 6) {
            return;
        }
        User.confirmSecurityKey(key, username).then((result) => {
            if (result.status.state !== 'ok') {
                return;
            }
            // console.log('js_confirm:', result.status.state, 'close modal');
            $modal.modal('hide');
        }).catch((err) => {
            console.log('err');
            $('.js_success-feedback', $modal).text('Запрос не отправлен').css('color', 'red');
            console.log(err);
        });
    });

    $('form input[minlength]').on('blur', function () {
        const len = $(this).val().trim().length;
        const minLen = Number($(this).attr('minlength'));
        // const message = minLen <= len ? '' : minLen + ' characters minimum';
        if (minLen !== len) {
            $(this).css('borderColor', 'red');
        } else {
            $(this).css('borderColor', '#ced4da');
        }
        // this.setCustomValidity(message)
    });

    function onHideModal(e) {
        const $modal = $(e.target);
        $modal.find('.first-step').removeClass('d-none');
        $modal.find('.second-step').addClass('d-none');
        $('.js_confirm-key').val('');
        $('.js_success-feedback', $modal).removeAttr('style').empty();
    }
    $('#security-code-phoneOremail').on('hide.bs.modal', onHideModal);
    $('#security-code').on('hide.bs.modal', onHideModal);

    // "PHONE_OR_EMAIL" modal
    $('.js_get-security-code-phoneOremail').on('click', (e) => {
        const $modal = $('#security-code-phoneOremail');
        const typeSelected = $(e.target).closest($modal).find('.js_btn-type-switcher input:checked');
        const checkpointTypeActive = typeSelected.val();
        const sendTo = (checkpointTypeActive === 'PHONE') ? 'телефон' : 'email';
        const modalConfig = $modal.data()['bs.modal']._config;
        const username = modalConfig.username;
        User.getSecurityKey(username, checkpointTypeActive).then((result) => {
            // при нажатии "Запросить код подтверждение" - отпарляется реквест "старт чекпоинт" появляеться инпут и кнопка других типах
            // get selected button

            // переключатель(серый) и кнопка "Запросить код подтверждение" исчезают
            console.log('SecurityKey received:', result.status.state);
            if (result.status.state === 'ok') {
                $('.first-step', $modal).addClass('d-none');
                $('.second-step', $modal).removeClass('d-none');
                $('.js_success-feedback', $modal).empty().text(`Ключ подтверждения был отправлен Вам на ${sendTo}`);
            }
        });
    });
}

const insertItem = (data, text, cssCls) => {
    const liTpl = `${(data)
        ? `<li class="list-inline-item ${cssCls}"><span class="figure">${data}</span><span>${text}</span></li>`
        : `<li class="list-inline-item ${cssCls}"><span class="figure">0</span><span>${text}</span></li>`}`;
    return liTpl;
};

const stats = (info) => {
    const tpl = `<div class="col">
        <ul class="list-inline text-center counts-list">
        ${(info)
          ? `${insertItem(info['media_count'], 'Публикации', 'media-count')}
            ${insertItem(info['follower_count'], 'Подписчики', 'follower-count')}
            ${insertItem(info['following_count'], 'Подписки', 'following-count')}`
          : `${insertItem(false, 'Публикации', 'media-count')}
            ${insertItem(false, 'Подписчики', 'follower-count')}
            ${insertItem(false, 'Подписки', 'following-count')}`
        }
        </ul>
    </div>`;
    return tpl;
};

const checkPointText = (checkpoint, item) => {
    if (item.status.state === 'fail') {
        if (item.status.message === 'it looks like proxy doesn\'t respond') {
            return '<span class="text-danger">Проблема с прокси, проверьте правильность введенных данных</span>';
        } else {
            return '<span class="text-danger">Ошибка при работе с аккаунтом</span>';
        }
    }
    if (checkpoint.status === 'TRIGGERED') {
        return `<button class="btn btn-outline-secondary js_pass-checkpoint-btn d-block mx-auto" 
            data-checkpoint-type="${checkpoint.type || 'EMAIL'}"
            data-username="${item.username || ''}"
            data-slotindex="${item.index || ''}"
            data-toggle="modal" data-target="#security-code">
            <i class="fas fa-key"></i>Пройти чекпоинт</button>`;
    } else {
        return '<span class="text-danger">Ошибка при работе с аккаунтом</span>';
    }
};

const addSettingBtn = (account, isBtnDelOnly) => {
    const {username = '', slotIndex = '-1'} = account;
    if ((isInstagramAccPage || window.location.href.includes(INSTAGRAM_ACCOUNTS_HREF)) && isBtnDelOnly) {
        return `<div class="account-setting col-1 d-flex flex-column">
            <button class="btn btn-outline-danger p-1 js_acc-delete" data-username="${username}" data-slotIndex="${slotIndex}"><i class="fas fa-trash m-0"></i></button>
        </div>`;
    }
    const {info: {
        name = '', email = '', url = '', biography = '', profile_pic_url = '', follower_count, following_count, media_count, is_business, is_private}
    } = account;
    if (isInstagramAccPage || window.location.href.includes(INSTAGRAM_ACCOUNTS_HREF)) {
        return `<div class="account-setting col-1 d-flex flex-column">
            <button class="btn btn-outline-success p-1 mb-1 js_acc-edit" 
                data-username="${username}"
                data-slotIndex="${slotIndex}"
                data-name="${name}"
                data-email="${email}"
                data-url="${url}"
                data-biography="${biography}"
                data-img="${profile_pic_url}"
                data-follower_count="${follower_count}"
                data-following_count="${following_count}"
                data-media_count="${media_count}"
                data-is_business="${is_business}"
                data-is_private="${is_private}"
            ><i class="fas fa-pen m-0"></i></button>
            <button class="btn btn-outline-secondary p-1 mb-1 js_acc-refresh" data-username="${username}" data-slotIndex="${slotIndex}"><i class="fas fa-retweet m-0"></i></button>
            <button class="btn btn-outline-danger p-1 js_acc-delete" data-username="${username}" data-slotIndex="${slotIndex}"><i class="fas fa-trash m-0"></i></button>
        </div>`;
    }
};

export const renderItem = (itemData, cList, _defaultAvatarSrc) => {
    const isUpdateAccFromModal = !!itemData.account;
    const item = itemData.account || itemData;
    const index = (typeof itemData.slotIndexLocal === 'number') ? itemData.slotIndexLocal : itemData.index;
    const info = (isUpdateAccFromModal) ? item.info : itemData.info;
    const checkpoint = (isUpdateAccFromModal) ? item.checkpoint || item : itemData;
    const defaultAvatarSrc = _defaultAvatarSrc || CONST.user.defaulAvatar;
    if (!info) {
        return $(`<li class="media py-3" data-username="${item.username}" data-slotIndex="${index}">
            <img class="ml-3 rounded" alt="default avatar" src="${defaultAvatarSrc}">
            <div class="media-body d-flex">
                <div class="col user-info">
                    ${(item.username) ? `<h4 class="mt-0 mb-1 name">${item.username}</h4>` : ''}
                </div>
                <div class="col user-checkpoint">
                    ${checkPointText(checkpoint, item)}
                </div>
                ${stats()}
                ${addSettingBtn({...item, slotIndex: index}, 'showOnlyDelButton') || ''}
            </div>
        </li>`).appendTo(cList);
    } else {
        return $(`<li class="media py-3" data-username="${item.username}" data-slotIndex="${index}">
        ${(info['profile_pic_url'])
            ? `<img class="ml-3 rounded" alt="User photo" src="${info['profile_pic_url']}">`
            : `<img class="ml-3 rounded" alt="default avatar" src="${defaultAvatarSrc}">`}
        <div class="media-body d-flex">
            <div class="col user-info">
                ${(item.username) ? `<p class="mt-0 mb-1 name lead">${item.username}</p>` : ''}
                ${(info.name) ? `<h4 class="mt-0 mb-1">${info.name}</h4>` : ''}
                ${(info.name) ? '' : ''  /* ${(info.email) ? `<p class="mt-0 mb-1">${info.email}</p>` : ''}
                 ${(info.phone) ? `<p class="mt-0 mb-1">${info.phone}</p>` : ''} */ }

            </div>
            <div class="col user-checkpoint">
                ${(checkpoint.status === 'TRIGGERED')
                ? `<button class="btn btn-outline-secondary js_pass-checkpoint-btn d-block mx-auto"
                        data-checkpoint-type="${checkpoint.type || 'EMAIL'}"
                        data-username="${item.username || ''}"
                        data-slotindex="${index || ''}"
                        data-toggle="modal" data-target="#security-code">
                    <i class="fas fa-key"></i>Пройти чекпоинт</button>`
                : ''}
            </div>
            ${stats(info)}
            ${addSettingBtn({...item, slotIndex: index}) || ''}
        </div>
    </li>`);
    }
};

function fillList($list, dataArray) {
    const items = dataArray.sort((a, b) => parseInt(a.slot_index, 10) - parseInt(b.slot_index, 10));
    // const cList = $list;
    const defaultAvatarSrc = CONST.user.defaulAvatar;
    const dataArrayValidSlots = [];

    $list.empty().addClass('border-light-color');
    console.log('items', items);
    items.forEach((item) => {
        console.log('item', item.index);

        if (!item || !item.account) {
            // show slot withput 'account' field
            if (isInstagramAccPage) {
                addSlotInit($list, item, items);
            }
        } else {
            dataArrayValidSlots.push(item);
            renderItem(item, $list, defaultAvatarSrc).appendTo($list);
        }
    });
    window.PubSub.publish(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, {name, dataArrayValidSlots});
    console.log('INSTAGRAM_ACCOUNS_RENDERED');
}

export function checkResponse (result /* , isResendRequest*/) {

    /*
    if (!result.status.state === 'ok' || !result.data || !$msgList.length || isResendRequest) {
        // проверям один раз наличие result.data.accounts.info
        $msgList.empty();
        $(`<li class="media">
            <div class="media-body">
                <h3 class="mt-0 mb-3">Ни одного Аккаунта не добавлено</h3>
            </div>
        </li>`).appendTo($msgList);
        setTimeout(() => {
            resendRequest().then((result) => {
                checkResponse(result, false);
            });
            console.log('Request resend');
        }, 3500);
        return;
    }
    */
    // вывод результатов (data.accounts.info)
    $('.profile-user .spinner-box').addClass('d-none');
    fillList($msgList, result.data.slots);
    addListHandler();
}

function cbError() {
    viewUtils.showInfoMessage($('.error-msg'),
        '',
        errMessageFront);
}

function reloadList(cfgUpdate) {
    const $msgList = $('.accounts-list');
    // add spinner
    if (!cfgUpdate || !cfgUpdate.isHideSpiner) {
        $('.profile-user .spinner-box').removeClass('d-none');
        return;
    }
    User.getMetadata(cbError).then((result) => {
        // reload list

        // https://stackoverflow.com/questions/32965688/comparing-two-arrays-of-objects-and-exclude-the-elements-who-match-values-into
        // const isSame = cfgUpdate.slotsAll.filter(o1 => result.data.slots.some(o2 => o1.payment_status === o2.payment_status));
        // const oldDataSlots = JSON.stringify(cfgUpdate.slotsAll).length;
        // const newDataSlots = JSON.stringify(result.data.slots).length;
        const arrNew = result.data.slots.map((i) => (i.payment_status === 'IN_PROGRESS' || !!(i.payment_status === 'PAID' && i.account)));
        //  {
        //     console.log(i);
        //     console.log(i.payment_status === 'IN_PROGRESS' && !!(i.payment_status === 'PAID' && i.account));
        //     return (i.payment_status === 'IN_PROGRESS' && !!(i.payment_status === 'PAID' && i.account));
        // });
        // console.log('arrNew', arrNew);
        const oldNew = cfgUpdate.slotsAll.map((i) => (i.payment_status === 'IN_PROGRESS' || !!(i.payment_status === 'PAID' && i.account)));
        // {
        //     console.log(i);
        //     console.log(i.payment_status === 'IN_PROGRESS' || !!(i.payment_status === 'PAID' && i.account));
        //     return (i.payment_status === 'IN_PROGRESS' || !!(i.payment_status === 'PAID' && i.account));
        // });
        // console.log('oldNew', oldNew);

        const isSame = arrNew.every((i, idx) => i === oldNew[idx]);
        console.log('isSame', isSame);
        if (isSame) {
            // console.log('return', oldDataSlots === newDataSlots);
            return;
        }
        $msgList.empty();
        checkResponse(result);
    }).catch((err) => {
        setTimeout(() => {
            viewUtils.showInfoMessage($('.error-msg'),
                err.status || '',
                errMessageFront);
        }, 3000);
        $('.spinner-box').addClass('d-none');
    });
    const cfg = {
        deleteBtnCls: '.js_acc-delete',
        updateBtnCls: '.js_acc-refresh',
        editBtnCls: '.js_acc-edit'
    };
    if (isInstagramAccPage) { // avoid calling image-upload on other pages
        settingButtonsHandler(cfg);
    }
}

export function reloadMetaBySlot(slotIndex, cfgUpdate) {
    const errMessageFront = 'Не получилось загрузить доступные Instagram аккаунты';
    const $msgList = $('.accounts-list');
    // todo: add spinner
    if (!cfgUpdate || !cfgUpdate.isHideSpiner) {
        $('.profile-user .spinner-box').removeClass('d-none');
        return;
    }
    User.updateInstagramAccount(slotIndex, null).then((result) => {
        // reload list
        const arrNew = result.data.slot;
        // console.log('arrNew', arrNew);
        const oldNew = cfgUpdate.slotsAll.map((i) => (i.payment_status === 'IN_PROGRESS'));
        // console.log('oldNew', oldNew);

        const isSame = arrNew.some((i, idx) => i === oldNew[idx]);
        console.log('isSame', isSame);
        if (isSame) {
            // console.log('return', oldDataSlots === newDataSlots);
            return;
        }
        $msgList.empty();
        checkResponse(result);
    }).catch((err) => {
        setTimeout(() => {
            viewUtils.showInfoMessage($('.error-msg'),
                err.status || '',
                errMessageFront);
        }, 3000);
        $('.spinner-box').addClass('d-none');
    });
    const cfg = {
        deleteBtnCls: '.js_acc-delete',
        updateBtnCls: '.js_acc-refresh',
        editBtnCls: '.js_acc-edit'
    };
    if (isInstagramAccPage) { // avoid calling image-upload on other pages
        settingButtonsHandler(cfg);
    }
}

// function addOnLoadHandlers() { }

/**
 * Init header
 */
export function init() {
    // check we are in profile page
    if (!$msgList.length) {
        return;
    }
    let slotsAll = [];
    const metadata = User.getMetadata(cbError);
    // const resendRequest = () => User.getMetadata(token);
    // let isSendReqOnce = false;
    // check we are in profile page
    if (!$msgList.length) {
        return;
    }

    // addOnLoadHandlers();

    // может инфо отсутсвовать - сделать еще раз запрос через 3 сек.
    metadata.then((result) => {

        // test only
        /*
        result.data.slots[2] = {
            ...result.data.slots[2],
            payment_status: 'PAID'
        };
        console.log('reloadList', result);
        */

        // проверям один раз наличие result.data.accounts.info
        /*
        let isResendRequest = false;
        if (result.data && result.data.accounts && !isSendReqOnce) {
            result.data.accounts.forEach((item) => {
                if (!item.info) {
                    isResendRequest = true;
                    isSendReqOnce = true;
                    return;
                }
            });
        }
        */
    // checkResponse(result, isResendRequest);
        slotsAll = result.data.slots;
        checkResponse(result);
        if (isInstagramAccPage) { // avoid calling image-upload on other pages
            const cfg = {
                deleteBtnCls: '.js_acc-delete',
                updateBtnCls: '.js_acc-refresh',
                editBtnCls: '.js_acc-edit'
            };
            settingButtonsHandler(cfg);
        }
    }).catch((err) => {
        setTimeout(() => {
            viewUtils.showInfoMessage($('.error-msg'),
                err.status || '',
                'Не получилось загрузить доступные Instagram аккаунты');
        }, 3000);
        $('.spinner-box').addClass('d-none');
    });

    // window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_NEED_REFRESH_SLOT, (eventName, data) => {
    //     const {slotIndex} = data;
    //     console.log('INSTAGRAM_ACCOUNS_NEED_REFRESH_SLOT', slotsAll);
    //     console.log('INSTAGRAM_ACCOUNS_NEED_REFRESH_SLOT', data);
    //     const defaultAvatarSrc = CONST.user.defaulAvatar;
    //     const slot = slotsAll[slotIndex];
    //     slot.slotIndexLocal = slotIndex;
    //     const liSlot = $msgList.find('>li')[slotIndex];
    //     const $liSlot = $(liSlot);
    //     $liSlot.replaceWith(renderItem(slot, $liSlot, defaultAvatarSrc));
    // });
    window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_NEED_REFRESH, (eventName, data) => {
        if (data && data.isHideSpiner && data.slotsAll) {
            console.log(data.isHideSpiner, data.slotsAll);
            console.log('isReloadAllList', data.isReloadAllList);
            if (data.isReloadAllList) {
                reloadList(data);
            }
        }
        if (data.isReloadAllListAfterDelete) {
            reloadList({isHideSpiner: true, slotsAll});
        }
    });
    window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, (eventName, data) => {
        const {dataArrayValidSlots: dataArray} = data;
        dataArray.forEach(item => {
            if (!item.account || !item.account.info) {
                return;
            }
            const avatar = item.account.info.profile_pic_url || CONST.user.defaulAvatar;
            sessionStorage.setItem(item.account.username, avatar);
        });
    });
}
