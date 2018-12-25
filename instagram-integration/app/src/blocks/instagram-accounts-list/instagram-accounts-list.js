import $ from 'jquery';
import User from '../../common/js-services/user';

function addHandler() {
    $('.js_confirm-security-code').on('click', () => {
        // get http://localhost:8080/v1/instagram-accounts/checkpoint/{username}
        const username = 'some.name';
        User.getSecurityKey(username);
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
            $(`<li class="media">
                <img class="mr-3 rounded" alt="64x64" src="${info['profile_pic_url']}">
                <div class="media-body d-flex">
                    <div class="col">
                        <h3 class="mt-0 mb-2">${info.name}</h3>
                        <p class="mt-0 mb-3">${info.email}</p>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-primary mr-3">Статус</button>
                        <button class="btn btn-outline-danger" data-toggle="modal" data-target="#security-code">
                        <i class="fa fa-plus"></i>Пройти чекпоинт</button>
                        ${(checkpoint.status === 'TRIGGERED') ? '<button type="button" class="btn btn-outline-danger">Пройти чекпоинт</button>' : ''}
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
    const token = '3e321e60029711e99264a0481c8e17d4';
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
        fillList($accountsList, result.data.accounts);
    });

    addHandler();
}
