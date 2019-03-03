// import $ from 'jquery';
import User from '../../common/js-services/user';
// import Spinner from '../../common/js-services/spinner';
import viewUtils from '../../common/js-services/view';
// import PubSub from 'pubsub-js';
import {CONST} from '../../common/js-services/consts';

// После добавления аккаунта снова дернуть МЕТА и перерисовать список аккаунтов
const addInstagramAccount = (newFormData) => {
    const cbError = (result) => {
        console.log('ERROR', result);
        viewUtils.showInfoMessage($('.error-msg'),
            result.status.state,
            result.status.message || 'Login error');
        // $(_loginBox).addClass(closeClass).removeClass(openedClass);
    };
    User.addInstagramAccount(newFormData, cbError).then((result) => {
        if (result && result.status) {
            console.log(result, result.status);
            // debugger;
            const $msgList = $('.accounts-list');
            $msgList.empty();
            // todo : reload list
            // fillList($msgList, result.data.accounts);
            // addListHandler();

            // viewUtils.showInfoMessage($textAreaDescription,
            //     result.status.state,
            //     result.status.message || 'Login error');
            // $(_loginBox).addClass(closeClass).removeClass(openedClass);
        }
    }).catch((err) => {
        // todo: render for user
        console.log(err);
    });

    console.log('submit', newFormData);
};

function addOnLoadHandlers() {
    // $('.js_repeat-security-code').on('click', (e) => {

    // });

    $('.js_add-instagram-account').on('click', (e) => {
        const btn = $(e.target);
        const $modalBody = btn.closest('.modal').find('.modal-dialog .modal-body');
        const username = $modalBody.find('input[name="username"]').val().trim();
        const password = $modalBody.find('input[name="pass"]').val().trim();
        const $form = $('form', $modalBody);
        const form = $form.get(0);
        const cssValidationClass = 'form-validation';

        e.preventDefault();

        // const validator = new Validator($form);
        // console.log(validator.validate());
        if (form.checkValidity()) {
            addInstagramAccount({username, password});
        } else {
            // Highlight errors
            if (form.reportValidity) {
                form.reportValidity();
            }
            $form.addClass(cssValidationClass);
        }

        if (!username || !password) {
            console.log('not valid - Empty fields');
            return;
        }
    });
}

function addListHandler(/* username*/) {
    // $('#yourModalID').on('show.bs.modal', function(e) {
    //     var yourparameter = e.relatedTarget.dataset.yourparameter;
    //     // Do some stuff w/ it.
    // });
    let checkpointType = '';

    $('.js_pass-checkpoint-btn').on('click', (e) => {
        const $button = $(e.target);
        const username = $button.data('username');
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

        User.getSecurityKey(username, checkpointType).then((result) => {
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
            console.log('js_confirm:', result.status.state, 'close modal');
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

function fillList($list, dataArray) {
    const items = dataArray;
    const cList = $list;
    const defaultAvatarSrc = CONST.user.defaulAvatar;
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
    cList.empty().addClass('border-light-color');
    items.forEach((item) => {
        const info = item.info;
        const checkpoint = item.checkpoint || item;

        if (!info) {
            $(`<li class="media py-3" data-username="${item.username}">
                <img class="ml-3 rounded" alt="default avatar" src="${defaultAvatarSrc}">
                <div class="media-body d-flex">
                    <div class="col user-info">
                        ${(item.username) ? `<h4 class="mt-0 mb-1 name">${item.username}</h4>` : ''}
                    </div>
                    <div class="col user-checkpoint">
                        ${(checkpoint.status === 'TRIGGERED')
                        ? `<button class="btn btn-outline-secondary js_pass-checkpoint-btn d-block mx-auto" 
                            data-checkpoint-type="${checkpoint.type || 'EMAIL'}"
                            data-username="${item.username || ''}"
                            data-toggle="modal" data-target="#security-code">
                            <i class="fas fa-key"></i>Пройти чекпоинт</button>`
                        : `(todo)checkpoint status - ${checkpoint.status}`}
                    </div>
                    ${stats()}
                </div>
            </li>`).appendTo(cList);
        } else {
            $(`<li class="media py-3" data-username="${item.username}">
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
                            data-toggle="modal" data-target="#security-code">
                        <i class="fas fa-key"></i>Пройти чекпоинт</button>`
                    : ''}
                </div>
                ${stats(info)}
            </div>
        </li>`).appendTo(cList);
        }
    });
    window.PubSub.publish(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, {name, dataArray});
    console.log('INSTAGRAM_ACCOUNS_RENDERED');
}

/**
 * Init header
 */
export function init() {
    const $msgList = $('.accounts-list');
    // check we are in profile page
    if (!$msgList.length) {
        return;
    }
    const token = User.getToken(); // upd to: User.getToken()
    const metadata = User.getMetadata();
    const resendRequest = () => User.getMetadata(token);
    let isSendReqOnce = false;
    const checkResponse = (result, isResendRequest) => {
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
        // вывод результатов (data.accounts.info)
        $('.profile-user .spinner-box').addClass('d-none');
        fillList($msgList, result.data.accounts);
        addListHandler();
    };

    // check we are in profile page
    if (!$msgList.length) {
        return;
    }

    addOnLoadHandlers();

    // может инфо отсутсвовать - сделать еще раз запрос через 3 сек.

    metadata.then((result) => {
        // проверям один раз наличие result.data.accounts.info
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
        checkResponse(result, isResendRequest);
    }).catch((err) => {
        setTimeout(() => {
            viewUtils.showInfoMessage($('.error-msg'),
                err.status || '',
                'Не получилось загрузить доступные Instagram аккаунты');
        }, 3000);
        $('.spinner-box').addClass('d-none');
    });

    window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, (eventName, data) => {
        const {dataArray} = data;
        dataArray.forEach(item => {
            const avatar = item.info && item.info.profile_pic_url || CONST.user.defaulAvatar;
            sessionStorage.setItem(item.username, avatar);
        });
    });
}
