import * as data from './dataServer';
// import User from '../../common/js-services/user';
// import Spinner from '../../common/js-services/spinner';
/*
import viewUtils from '../../common/js-services/view';

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
            // addInstagramAccount({username, password});
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

function addListHandler(/!* username*!/) {
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
            }
        });
    });

    // inside modal
    $('.js_confirm-security-code').on('click', (e) => {
        const btn = $(e.target);
        const username = btn.data('username');
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

*/

/**
 * Init header
 */
/*
export function initOld() {
    const $msgList = $('.messages-list');
    // check we are in profile page
    if (!$msgList.length) {
        return;
    }
    const token = User.getToken(); // upd to: User.getToken()
    const metadata = User.getMetadata(token);
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

    addOnLoadHandlers();

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
        // может инфо отсутсвовать - сделать еще раз запрос через 3 сек.
        setTimeout(() => {
            viewUtils.showInfoMessage($('.error-msg'),
                err.status || '',
                'Не получилось загрузить доступные Instagram аккаунты');
        }, 3000);
        $('.spinner-box').addClass('d-none');
    });
}
*/

function fillList($list, dataArray) {
    const items = dataArray;
    const cList = $list;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    // const insertItem = (data, text, cssCls) => {
    //     const liTpl = `${(data)
    //         ? `<li class="list-inline-item ${cssCls}"><span class="figure">${data}</span><span>${text}</span></li>`
    //         : `<li class="list-inline-item ${cssCls}"><span class="figure">-</span><span>${text}</span></li>`}`;
    //     return liTpl;
    // };
    /*
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
    */
    cList.empty().addClass('border-light-color');
    items.forEach((item) => {
        const message = item;
        // const checkpoint = item.checkpoint || item;

        if (message.side === 'left') {
            $(`<li class="chat-item justify-content-end" value="${message.value}">
                <div class="d-flex">
                ${(message['profile_pic_url'])
                     ? `<div class="chat-text" style="text-align: right;">
                        <img src="https://instagram.fhel2-1.fna.fbcdn.net/vp/6daa223fedcadbcf0dee1ef2ddb827f9/5CC90090/t51.2885-15/fr/e15/s1080x1080/47693476_789469761430631_4313731441826823090_n.jpg?_nc_ht=instagram.fhel2-1.fna.fbcdn.net&amp;ig_cache_key=Mjg1NDQ4MDkzNjg2NTcyMDMyNDY3OTM5NDYxMTc5NjM3NzY%3D.2"
                            alt="Content Image" class="content-image">                        
                    </div>`
                     : `<div class="chat-text" >${message.value}</div>`
                }
                    <small class="chat-time-text">${message.timestamp}</small>
                </div>
            </li>`).appendTo(cList);
        } else {
            $(`<li class="chat-item chat-item-right" value="${message.value}">
                <div class="d-flex">
                    <div class="chat-img">
                        <a target="_blank"
                            href="https://www.instagram.com/your_dieta/">
                        ${(message['profile_pic_url'])
                        ? `<div class="chat-text" style="text-align: right;">
                                <img src="https://instagram.fhel2-1.fna.fbcdn.net/vp/6daa223fedcadbcf0dee1ef2ddb827f9/5CC90090/t51.2885-15/fr/e15/s1080x1080/47693476_789469761430631_4313731441826823090_n.jpg?_nc_ht=instagram.fhel2-1.fna.fbcdn.net&amp;ig_cache_key=Mjg1NDQ4MDkzNjg2NTcyMDMyNDY3OTM5NDYxMTc5NjM3NzY%3D.2"
                                    alt="Content Image" class="content-image">                        
                            </div>`
                        : `<div class="chat-text" >${message.value}</div>`
                        }
                            </a>                    
                    </div>
                    <div class="chat-text oponent">
                        <a href="http://google.com" target="_blank">Заходи сюда: google.com</a>
                    </div>
                        <small class="pull-right chat-time-text">17:40</small>
                    </div>
            </li>`).appendTo(cList);
        }
    });
}

export function init() {
    const {conversation, userList} = data;
    console.log('test', userList, conversation);
    const $msgList = $('.messages-list');
    // check we are in profile page
    if (!$msgList.length) {
        return;
    }
    fillList($msgList, conversation.data.meta.messages);
}
