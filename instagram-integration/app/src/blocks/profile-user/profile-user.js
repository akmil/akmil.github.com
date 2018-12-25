import $ from 'jquery';
import User from '../../common/js-services/user';
// import viewUtils from '../../common/js-services/view';
// import PubSub from 'pubsub-js'; // https://www.npmjs.com/package/pubsub-js
// import {CONST} from '../../common/js-services/consts';

// const selectorLoginState = '.js_message_logged--text';
// const selectorEmailConfirmState = '.js_email-confirm--text';
// const closeClass = 'd-none';
// const openedClass = 'd-block';

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
                <div class="media-body">                
                    <h3 class="mt-0 mb-3">${info.name}</h3>
                    <h3 class="mt-0 mb-3">${info.name}</h3>
                    <button type="button" class="btn btn-primary mr-3">Статус: ${item.status}</button>
                    <button class="btn btn-outline-danger" data-toggle="modal" data-target="#security-code">
                        <i class="fa fa-plus"></i>Пройти чекпоинт11</button>
                    ${(checkpoint.status === 'TRIGGERED') ? '<button type="button" class="btn btn-outline-danger">Пройти чекпоинт</button>' : ''}

                    <ul class="list-inline text-center">
                        <li class="media-count"><span class="figure">231</span><span>Публикации</span></li>
                        <li class="follower-count"><span class="figure">5</span><span>подписчики</span></li>
                        <li class="following-count"><span class="figure">0</span><span>подписки</span></li>
                    </ul>
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
