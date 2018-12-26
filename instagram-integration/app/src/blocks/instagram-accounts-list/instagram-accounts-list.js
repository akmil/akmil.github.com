import $ from 'jquery';
import User from '../../common/js-services/user';
const staticResp = {
    'status': {
        'state': 'ok'
    },
    'data': {
        'accounts': {
            'andrey.jakivchyk': {
                'status': 'OK',
                'checkpoint': {
                    'status': 'ABSENT',
                    'type': 'EMAIL_OR_PHONE'
                },
                'tariff': {
                    'status': 'ABSENT'
                },
                'info': {
                    'name': 'Андрей Якивчук',
                    'biography': '',
                    'url': '',
                    'email': 'nidzuku@inbox.ru',
                    'phone': '',
                    'profile_pic_url': 'https://scontent-ber1-1.cdninstagram.com/vp/7116b5ba2b7967af0c7bdd9452248157/5CB5EE4F/t51.2885-19/s150x150/46841228_385962198812347_2321083919706882048_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com',
                    'is_verified': false,
                    'is_private': true,
                    'media_count': 11,
                    'follower_count': 95,
                    'following_count': 585
                }
            },
            'andrey.jakivchyk2': {
                'status': 'OK',
                'checkpoint': {
                    'status': 'TRIGGERED',
                    'type': 'PHONE'
                },
                'tariff': {
                    'status': 'ABSENT'
                },
                'info': {
                    'name': 'Андрей Якивчук',
                    'biography': '',
                    'url': '',
                    'email': '2nidzuku@inbox.ru',
                    'phone': '',
                    'profile_pic_url': 'https://scontent-ber1-1.cdninstagram.com/vp/7116b5ba2b7967af0c7bdd9452248157/5CB5EE4F/t51.2885-19/s150x150/46841228_385962198812347_2321083919706882048_n.jpg?_nc_ht=scontent-ber1-1.cdninstagram.com',
                    'is_verified': false,
                    'is_private': true,
                    'media_count': 5,
                    'follower_count': 45,
                    'following_count': 82
                }
            }
        },
        'available_proxy_purchase': true
    }
};

function addHandler(username) {
    // $('#security-code').on('show.bs.modal', function (e) {
    //     const btn = $(this);
    //     console.log(btn);
    //     console.log(btn.prop('checkpoint-type'));
    //     console.log(btn.attr('data-checkpoint-type'));
    // });
    let checkpointType = '';

    $('.js_pass-checkpoint-btn').on('click', (e) => {
        // get http://localhost:8080/v1/instagram-accounts/checkpoint/{username}
        // const username = 'pavlo.oliinyk';
        // const btn = $(e.target);
        checkpointType = $(e.target).data('checkpointType');
        const sendTo = (checkpointType === 'PHONE') ? 'телефон' : 'email';

        if (checkpointType !== 'PHONE' && checkpointType !== 'EMAIL') {
            console.log('select checkpointType now it\'s:', checkpointType);
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
            // $keyInput.css('borderColor', 'red');
            // $keyInput.get(0).setCustomValidity('key.length not correct');
            // console.log('key.length not correct');
            return;
        }
        User.confirmSecurityKey(key, username);
    });

    $('form input[minlength]').on('blur', function() {
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
}

function fillList($list, dataArray) {
    const items = dataArray;
    const cList = $list;
    cList.empty();
    for (const key in items) {
        if (Object.prototype.hasOwnProperty.call(items, key)) {
            const item = items[key];
            const info = item.info;
            const checkpoint = item.checkpoint;
            $(`<li class="media my-3">
                <img class="mr-3 rounded" alt="64x64" src="${info['profile_pic_url']}">
                <div class="media-body d-flex">
                    <div class="col">
                        <h3 class="mt-0 mb-2">${info.name} <span class="badge badge-info badge-pill">${checkpoint.status}</span></h3>
                        <p class="mt-0 mb-3">${info.email}</p>
                    </div>
                    <div class="col">                        
                        ${(checkpoint.status === 'TRIGGERED')
                         ? `<button class="btn btn-outline-danger js_pass-checkpoint-btn" data-checkpoint-type="${checkpoint.type}" data-toggle="modal" data-target="#security-code"><i class="fa fa-plus"></i>Пройти чекпоинт</button>`
                         : ''}
                    </div>
                    <div class="col">
                        <ul class="list-inline text-center counts-list">
                            <li class="media-count list-inline-item"><span class="figure">${info['media_count']}</span><span>Публикации</span></li>
                            <li class="follower-count list-inline-item"><span class="figure">${info['follower_count']}</span><span>подписчики</span></li>
                            <li class="following-count list-inline-item"><span class="figure">${info['following_count']}</span><span>подписки</span></li>
                        </ul>
                    </div>
                    
                </div>
            </li>`).appendTo(cList);
        }
    }
}

/**
 * Init header
 */
export function init() {
    const token = '3e321e60029711e99264a0481c8e17d4'; // upd to: User.getToken()
    const metadata = User.getMetadata(token);
    const $accountsList = $('.accounts-list');

    // check we are in profile page
    if (!$accountsList.length) {
        return;
    }

    metadata.then((result) => {
        if (!result.status.state === 'ok' || !result.data || !$accountsList.length) {
            $accountsList.empty();
            $(`<li class="media">
                <div class="media-body">
                    <h3 class="mt-0 mb-3">Ни одного Аккаунта не добавлено</h3>
                </div>
            </li>`).appendTo($accountsList);
            return;
        }

        fillList($accountsList, staticResp.data.accounts);

        addHandler('andrey.jakivchyk');
    });
}
