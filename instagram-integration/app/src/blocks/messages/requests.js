import UserConversation from '../../common/js-services/api-user-direct';

/*
Endpoint на получение запросов: GET instagram-direct/pending/{username}
Это ендпоинт должен быть вызван только при нажатии на текст с количеством запросов.
*/
// const cfgT = {
//     username: 'your_dieta',
//     getAndFillUserListFn: 'getAndFillUserList_Function'
// };
const confirmUserData = {};
export const addConfirgButtons = (conversationId, username) => {
    console.log('addConfirgButtons proceed', username, conversationId);
    const $confirmBtnBox = $('.js_request-confirm-box');
    $confirmBtnBox.removeClass('d-none');
    confirmUserData.username = username;
    confirmUserData.conversationId = conversationId;
};
const conversationDetail = function(items) {
    let tpl = '';
    items.forEach((item) => {
        const {profile_pic_url: srcImg} = item;
        if (items.length > 1) {
            tpl += `<img src="${srcImg}" alt='image' class="media-photo mr-1 media-photo--group" style="width: 24px;">`;
        } else {
            tpl += `<img src="${srcImg}" alt='image' class="media-photo mr-1" style="width: 24px;">`;
        }
    });
    return tpl;
};

const addConversations = function(conversations) {
    let tpl = '';
    conversations.forEach((item) => {
        const {users, id, title} = item;
        // const isUnread = item['is_unread'];
        // const lastMessage = item['lastMessage'];
        // const isLastMsg = lastMessage && (parseInt(lastMessage.length, 10));
        // const isAddDot = isLastMsg > 0 && users.length > 1 && isUnread;
        tpl += `
                <div class="media p-1 js_messages-request messages-request" data-conversation-id="${id}">
                    ${conversationDetail(users)}
                    <div class="media-body">
                        <h5 class="title">${title}</h5>
                    </div>
                </div>
            `;
    });
    return tpl;
};

const getRequestPending = function(username, elId) {
    // const username = 'your_dieta';
    UserConversation.getRequestPending(username).then((result) => {
        const {data: {requests}} = result;
        console.log('result', requests);
        const tpl = addConversations(requests, elId);
        $(tpl).appendTo($(`#${elId}`));
    });
};

function fillUserList($list, dataArray, loadMoreCbFunction) {
    const items = dataArray;
    const cList = $list;
    let tpl = '';
    // const loadMoreBox = (idx, prev_cursor) => `<div class="list-footer text-center js_load-more-box" data-idx="${idx}" data-cursor="${prev_cursor}">
    //     <button type="button" class="btn btn-outline-secondary btn-sm btn-submit">Загрузить еще</button>
    // </div>`;
    cList.empty().addClass('border-light-color');
    // todo: fix hard-code  img src="https://i.imgur.com/jNNT4LE.png"
    items.forEach((item, idx) => {
        // const {pagination} = item;
        const elId = `collapse-req-${idx}`;
        // const {conversations} = item;
        console.log(item.pending_requests);
        if (item.pending_requests) {
            getRequestPending(item.username, elId);
            tpl += `<li class="list-group-item" data-toggle="collapse" data-target="#${elId}" 
                data-username="${item.username}"
                data-userAvatar="${item.profile_pic_url}"
                aria-expanded="true" aria-controls="collapse-${idx}">
            <div class="conversation-head mb-1 media pb-2" id="heading-${idx}">
                <span class="mr-3">
                    <img src="${item.profile_pic_url}" alt="avatar"
                    class="media-photo rounded-circle">
                </span>
                <div class="media-body">
                    <h4 class="title">
                        ${item.username}
                    </h4>
                </div>
            </div>
            <div id="${elId}" class="collapse" aria-labelledby="heading-${idx}" data-parent="#accordion-requests">
                <!-- getRequestPending(item.username, elId) -->
            </div>
            <!-- {(pagination && pagination.prev_cursor) ? 'loadMoreBox(idx, pagination.prev_cursor)' : ''} -->
        </li>`;
        }
    });
    $(tpl).appendTo(cList);

    // $('.js_load-more-box button').on('click', (e) => {
    //     const $btn = $(e.target);
    //     const $btnBox = $btn.closest('.js_load-more-box');
    //     const section = $btnBox.data('idx');
    //     const cursor = $btnBox.data('cursor');
    //     const username = $btnBox.closest('li').data('username');

    //     console.log('click', section, cursor);
    //     loadMoreCbFunction(cursor, section, username);
    //     e.stopPropagation();
    // });
}

// const token = User.getToken();
function getAndFillUserList(isActiveFirst, userList) {
    const $userList = userList || $('.messages-user-list');
    let prevActiveDialogId = '';
    if (!isActiveFirst) {
        prevActiveDialogId = $userList.find('li .collapse.show').attr('id');
    }

    UserConversation.getMetadata().then((result) => {
        if (!result.data) {
            return;
        }
        const {data} = result;
        data.meta.sort((a, b) => a['username'].localeCompare(b['username']));
        // messages-user-list from utils.js
        fillUserList($userList, data.meta /* getAndFillUserListCursor*/);
        // if (data.settings && data.settings.invoke_in_millis) {
        //     updateInterval = data.settings.invoke_in_millis;
        //     updateInterval = (updateInterval > 6000) ? updateInterval : 10000;
        // }
        if (isActiveFirst) {
            $userList.find('li:first-child .collapse').addClass('show');
        } else {
            $(`#${prevActiveDialogId}`).addClass('show');
        }

        // do it once
        // if (!isTimeOutRunned) {
        //     intervalUserList = setInterval(() => {
        //         console.log('setInterval');
        //         getAndFillUserList();
        //     }, updateInterval);
        //     isTimeOutRunned = true;
        // }
    });
}

function initHandlers() {
    const $confirmBtnBox = $('.js_request-confirm-box');
    const $reqConfirmBtn = $('.js_request-confirm', $confirmBtnBox);
    const $reqRejectBtn = $('.js_request-reject', $confirmBtnBox);

    $reqConfirmBtn.on('click', (e) => {
        // PUT instagram-direct/pending/{username}/{id}
        UserConversation.putRequestPending(confirmUserData).then((result) => {
            if (result.status.state === 'ok') {
                console.info('result: ', result);
                $confirmBtnBox.addClass('d-none');
                $('.js_show-messages-user-list').trigger('click');
            }
        });
    });
    $reqRejectBtn.on('click', (e) => {
        UserConversation.delRequestPending(confirmUserData).then((result) => {
            if (result.status.state === 'ok') {
                console.info('result: ', result);
                $confirmBtnBox.addClass('d-none');
                $('.js_show-messages-user-list').trigger('click');
            }
        });
    });

    const $showUserList = $('.js_show-messages-user-list');
    $showUserList.on('click', (e) => {
        $(e.target).closest('.user-requests-box').removeClass('user-requests-box--show');
        $('.user-list-box').removeClass('user-list-box--hide');
        $('#mainChatPart').addClass('d-none');
    });
}
export function initRequests(cfg) {
    const $list = $('.messages-requests-list');
    getAndFillUserList('setActiveFirst', $list);
    initHandlers();
}
