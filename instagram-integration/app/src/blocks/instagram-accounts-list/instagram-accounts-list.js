import $ from 'jquery';
import User from '../../common/js-services/user';
// import viewUtils from '../../common/js-services/view';

const staticResp = {
    "status": {
        "state": "ok"
    },
    "data": {
        "accounts": [{
            "status": "OK",
            "username": "andrey.jakivchyk",
            "checkpoint": {
                "status": "ABSENT",
                "type": "PHONE"
            },
            "tariff": {
                "status": "ABSENT"
            },
            "info": {
                "name": "Андрей Якивчук",
                "biography": "",
                "url": "",
                "email": "nidzuku@inbox.ru",
                "phone": ""
            }
        }, {
            "status": "OK",
            "username": "andrey.jakivchyk",
            "checkpoint": {
                "status": "ABSENT",
                "type": "EMAIL"
            },
            "tariff": {
                "status": "ABSENT"
            },
            "info": {
                "name": "Димон Паралон",
                "biography": "biography text",
                "url": "www.lenengrad.ru",
                "email": "nidzuku@inbox.ru",
                "phone": "011-111-111-11",
                "media_count": 515,
                "follower_count": 32,
                "following_count": 34
            }
        }, {
            "status": "OK",
            "username": "alex.smith",
            "checkpoint": {
                "status": "TRIGGERED",
                "type": "PHONE_OR_EMAIL"
            },
            "tariff": {
                "status": "ABSENT"
            },
        },
            {
                "status": "OK",
                "username": "22andrey.jakivchyk2",
                "checkpoint": {
                    "status": "TRIGGERED",
                    "type": "PHONE"
                },
                "tariff": {
                    "status": "ABSENT"
                },
            }
        ],
        "available_proxy_purchase": true
    }
};

const staticRespWithDelay = {
    "status": {
        "state": "ok"
    }
};

// После добавления аккаунта снова дернуть МЕТА и перерисовать список аккаунтов
const addInstagramAccount = (newFormData) => {
    const cbError = (result) => {
        console.log('ERROR', result);
        // viewUtils.showInfoMessage($textAreaDescription,
        //     result.status.state,
        //     result.status.message || 'Login error');
        // $(_loginBox).addClass(closeClass).removeClass(openedClass);
    };

    User.addInstagramAccount(newFormData, cbError).then((result) => {
        if (result && result.status) {
            console.log(result, result.status);
            // viewUtils.showInfoMessage($textAreaDescription,
            //     result.status.state,
            //     result.status.message || 'Login error');
            // $(_loginBox).addClass(closeClass).removeClass(openedClass);
        }
    });

    console.log('submit', newFormData);
};

function addOnLoadHandlers() {
    $('.js_repeat-security-code').on('click', (e) => {

    });

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

function addListHandler(username) {
    // $('#security-code').on('show.bs.modal', function (e) {
    //     console.log(btn.attr('data-checkpoint-type'));
    // });
    let checkpointType = '';

    $('.js_pass-checkpoint-btn').on('click', (e) => {
        checkpointType = $(e.target).data('checkpointType') || checkpointType;
        // $('#security-code').data('checkpointType', checkpointType);
        //todo add 'checkpointType' to modal
        const sendTo = (checkpointType === 'PHONE') ? 'телефон' : 'email';

        if (checkpointType === 'PHONE_OR_EMAIL') {
            e.stopPropagation();

            // инпуты спрятаны,
            // показать серые переключатели (выбрал тип)
            // есть кнопка Запросить код подтверждение
            $('#security-code-phoneOremail').modal('show');


            console.log('select checkpointType now it\'s:', checkpointType);

            // не отправляем реквест
            return;
        }

        User.getSecurityKey(username, checkpointType).then((result) => {
            console.log('SecurityKey received:', result.status.state);
            if (result.status.state === 'ok') {
                $('#security-code .js_success-feedback').empty().text(`Ключ подтверждения был отправлен Вам на ${sendTo}`);
            }
        });
    });

    // inside modal
    $('.js_confirm-security-code').on('click', (e) => {
        const btn = $(e.target);
        const $keyInput = btn.closest('.modal').find('.modal-dialog form input');
        const key = $keyInput.val().trim();
        if (key.length !== 6) {
            e.stopPropagation();
            return;
        }
        User.confirmSecurityKey(key, username);
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

    //"PHONE_OR_EMAIL" modal
    $('.js_get-security-code-phoneOremail').on('click', (e) => {
        const typeSelected = $(e.target).closest('#security-code-phoneOremail').find('.js_btn-type-switcher [checked="checked"]')
        let checkpointTypeActive = typeSelected.val();
        User.getSecurityKey('username', checkpointTypeActive).then((result) => {
            // при нажатии "Запросить код подтверждение" - отпарляется реквест "старт чекпоинт" появляеться инпут и кнопка других типах
            //get selected button

            // переключатель(серый) и кнопка "Запросить код подтверждение" исчезают
            console.log('SecurityKey received:', result.status.state);
            if (result.status.state === 'ok') {
                $('#security-code .js_success-feedback').empty().text(`Ключ подтверждения был отправлен Вам на ${sendTo}`);
            }
        });
    });
}

function fillList($list, dataArray) {
    const items = dataArray;
    const cList = $list;
    cList.empty();
    items.forEach((item) => {
        // const item = items[key];
        const info = item.info;
        const checkpoint = item.checkpoint;

        if (!info) {
            $(`<li class="media py-3">
                <div class="media-body d-flex">                
                    <div class="col">                        
                        ${(checkpoint.status === 'TRIGGERED')
                ? `<button class="btn btn-outline-danger js_pass-checkpoint-btn d-block mx-auto" data-checkpoint-type="${checkpoint.type}" 
                            data-toggle="modal" data-target="#security-code">
                            <i class="fa fa-plus"></i>Пройти чекпоинт</button>`
                : ''}
                    </div>
                </div>
            </li>`).appendTo(cList);
        } else {
            $(`<li class="media py-3">
            ${(info['profile_pic_url'])
                ? `<img class="mr-3 rounded" alt="64x64" src="${info['profile_pic_url']}">` : ''}
            <div class="media-body d-flex">
                <div class="col">
                    ${(item.username) ? `<h3 class="mt-0 mb-2">${item.username}</h3>` : ''}
                    ${(info.email) ? `<p class="mt-0 mb-3">${info.email}</p>` : ''}
                    ${(info.phone) ? `<p class="mt-0 mb-3">${info.phone}</p>` : ''}
                </div>
                <div class="col">                        
                    ${(checkpoint.status === 'TRIGGERED')
                ? `<button class="btn btn-outline-danger js_pass-checkpoint-btn d-block mx-auto" data-checkpoint-type="${checkpoint.type}" data-toggle="modal" data-target="#security-code"><i class="fa fa-plus"></i>Пройти чекпоинт</button>`
                : ''}
                </div>
                <div class="col">
                    <ul class="list-inline text-center counts-list">
                        ${(info['media_count']) ? `<li class="media-count list-inline-item"><span class="figure">${info['media_count']}</span><span>Публикации</span></li>` : ''}
                        ${(info['follower_count']) ? `<li class="follower-count list-inline-item"><span class="figure">${info['follower_count']}</span><span>подписчики</span></li>` : ''}
                        ${(info['following_count']) ? `<li class="following-count list-inline-item"><span class="figure">${info['following_count']}</span><span>подписки</span></li>` : ''}
                    </ul>
                </div>
                
            </div>
        </li>`).appendTo(cList);
        }
    });
}

/**
 * Init header
 */
export function init() {
    const token = '3e321e60029711e99264a0481c8e17d4'; // upd to: User.getToken()
    let metadata = User.getMetadata(token);
    const $accountsList = $('.accounts-list');
    const resendRequest = () => {
        metadata = User.getMetadata(token);
    };

    // check we are in profile page
    if (!$accountsList.length) {
        return;
    }

    addOnLoadHandlers();

    // Loder
    // если Тригеред - то показать кнопку пройти Чекпоинт, иначе данные с инфо (может инфо отсутсвовать - сделать еще раз запрос через 3 сек.)


    metadata.then((result) => {
        if (!result.status.state === 'ok' || !result.data || !$accountsList.length) {
            $accountsList.empty();
            $(`<li class="media">
                <div class="media-body">
                    <h3 class="mt-0 mb-3">Ни одного Аккаунта не добавлено</h3>
                </div>
            </li>`).appendTo($accountsList);
            setTimeout(() => {
                resendRequest();
                console.log('Request resend');
            }, 3500);
            return;
        }

        fillList($accountsList, staticResp.data.accounts);
        addListHandler('andrey.jakivchyk');
    });
}
