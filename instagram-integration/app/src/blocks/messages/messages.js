import MeteorEmoji from 'meteor-emoji';
// import qq from 'fine-uploader'; //todo: fine-uploade
import User from '../../common/js-services/user';
import UserConversation from '../../common/js-services/api-user-direct';
import Spinner from '../../common/js-services/spinner';
import PubSub from 'pubsub-js';
import {CONST} from '../../common/js-services/consts'; // https://www.npmjs.com/package/pubsub-js

const token = User.getToken();
const $msgList = $('.messages-list');
let updateInterval = '';
let intervalId = false;

function isInMessagePage() {
    const $msgList = $('.messages-list');
    const $userList = $('.messages-user-list');
    return !!$msgList.length && !!$userList.length;
}
$(document).ready(() => {
    if (!isInMessagePage()) {
        return;
    }
    // eslint-disable-next-line no-unused-vars
    const m = new MeteorEmoji();
    const $picker = $('textarea[data-meteor-emoji="true"] ~ div');
    const style = $picker.attr('style');
    const styleNew = style.replace('top: 30px;', 'top: -210px;');
    $picker.attr('style', styleNew);

    /*
    //todo: fine-uploade
    // eslint-disable-next-line no-unused-vars
    const restrictedUploader = new qq.FineUploader({
        element: document.getElementById('fine-uploader-validation'),
        template: 'qq-template-validation',
        request: {
            endpoint: '/server/uploads'
        },
        thumbnails: {
            placeholders: {
                waitingPath: 'https://fineuploader.com/source/placeholders/waiting-generic.png', // '/source/placeholders/waiting-generic.png',
                notAvailablePath: 'https://fineuploader.com/server/waiting-generic.png' // '/source/placeholders/not_available-generic.png'
            }
        },
        validation: {
            allowedExtensions: ['jpeg', 'jpg', 'txt'],
            itemLimit: 3,
            sizeLimit: 500 * 1024
        }
    });*/
});

// messages-list
function fillList($list, dataArray, isAppentPrevMsg) {
    const items = dataArray;
    const cList = $list;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    const insertMsg = (value, type, cssCls) => {
        let str = '';
        switch (type.toLowerCase()) {
            case 'photo':
                str = `<div class="chat-img">
                    <img src="${value}" alt="Content Image" class="content-image">
                </div>`;
                break;
            case 'link':
                str = `<div class="chat-img">
                <a target="_blank" href="${value}">${value}</a>`;
                break;
            default: str = `<div class="chat-text" >${value}</div>`;
        }
        return str;
    };
    if (isAppentPrevMsg) {
        console.log('isAppentPrevMsg to', cList);
    } else {
        cList.empty().addClass('border-light-color');
        items.forEach((item) => {
            const message = item;
            // const checkpoint = item.checkpoint || item;

            if (message.side.toLowerCase() === 'left') {
                $(`<li class="chat-item chat-item-left col flex-column-reverse" value="${message.value}">
                <div class="d-flex">
                ${(message['profile_pic_url'])
                    ? `<div class="chat-img-box"> 
                         <img src="${message['profile_pic_url']}" alt="User Avatar" class="">
                        </div>`
                    : ''
                    }
                <div>
                    <p class="chat-username text-muted">${message.username}</p>
                    ${insertMsg(message.value, message.type)}
                </div>
                    <small class="chat-time-text">${UserConversation.getFormattedDateUtil(message.timestamp)}</small>
                </div>
            </li>`).appendTo(cList);
            } else {
                $(`<li class="chat-item chat-item-right col flex-column-reverse" value="${message.value}">
                <div class="d-flex justify-content-end">
                    ${insertMsg(message.value, message.type)}
                    <small class="pull-right chat-time-text">${UserConversation.getFormattedDateUtil(message.timestamp)}</small>
                    </div>
            </li>`).appendTo(cList);
            }
        });
    }
}
function addPagination($wrapper, pagination) {
    const conversationId = pagination.prev_cursor;
    const $button = $(`<button class="btn load-more d-flex position-absolute" style="top: -42px;" 
        data-cursor="${conversationId}">еще давай!</button>`);

    if (!$wrapper.closest('.messages-list-box').find('.load-more').length) {
        $button.insertBefore($wrapper).on('click', (e) => {
            const userData = $('.messages-list').data('conversation');
            const {username} = userData;
            Spinner.startButtonSpinner($button);
            UserConversation.getMetadataDetailConversation(token, {username, conversationId}).then((result) => {
                console.log('receive old msg', result);
                Spinner.stopButtonSpinner($button);
                fillList($msgList, result.data.meta.messages, 'appentPrevMsg');
            });
        });
    }
}
// messages-user-list
function fillUserList($list, dataArray) {
    const items = dataArray.meta;
    const cList = $list;
    const conversationDetail = function(items) {
        let tpl = '';
        items.forEach((item) => {
            if (items.length > 1) {
                tpl += `<img src="${item['profile_pic_url']}" class="media-photo mr-1 media-photo--group" style="width: 24px;">`;
            } else {
                tpl += `<img src="${item['profile_pic_url']}" class="media-photo mr-1" style="width: 24px;">
                <div class="media-body">
                <h5 class="title">
                    ${item.username}
                </h5>`;
            }
        });
        if (items.length > 1) {
            tpl += '<h5 class="title">Груповой чат</h5>';
        }
        return tpl;
    };
    const addConversations = function(conversations) {
        let tpl = '';
        conversations.forEach((item) => {
            tpl += `<div class="media p-1" data-conversation-id="${item.id}">
                    ${conversationDetail(item.to)}
                    ${(item['last_message'] && (parseInt(item['last_message'].length, 10)) > 0)
                        ? `<p class="summary ${item['is_unread'] ? 'font-weight-bold' : 'text-muted'}">${item['last_message']}</p>
                        ${item['is_unread'] ? '<span class="summary-dot"></span>' : ''}`
                        : ''}
                    </div>
            </div>`;
        });
        return tpl;
    };
    cList.empty().addClass('border-light-color');
    // todo: fix hard-code  img src="https://i.imgur.com/jNNT4LE.png"
    items.forEach((item, idx) => {
        $(`<li class="list-group-item" data-toggle="collapse" data-target="#collapse-${idx}" data-username="${item.username}" 
                aria-expanded="true" aria-controls="collapse-${idx}">
            <div class="media" id="heading-${idx}">
                <a href="#" class="mr-3">
                    <img src="https://i.imgur.com/jNNT4LE.png"
                    class="media-photo">
                </a>
                ${(item['unread_conversations'] > 0) ? `<span class="badge badge-secondary position-absolute p-2">${item['unread_conversations']}</span>` : ''}
                <div class="media-body">
                    <h4 class="title">
                        ${item.username}
                    </h4>
                </div>
            </div>
            <div id="collapse-${idx}" class="collapse" aria-labelledby="heading-${idx}" data-parent="#accordion">
                ${addConversations(item.conversations, idx)}
            </div>
            </li>`).appendTo(cList);
    });
}

function getAndFillUserList(isActiveFirst) {
    const $userList = $('.messages-user-list');
    const metadata = UserConversation.getMetadata(token);
    let prevActiveDialogId = '';
    if (!isActiveFirst) {
        prevActiveDialogId = $userList.find('li .collapse.show').attr('id');
    }
    metadata.then((result) => {
        if (!result.data) {
            return;
        }
        result.data.meta.sort((a, b) => a['username'].localeCompare(b['username']));
        fillUserList($userList, result.data);
        if (result.data.settings && result.data.settings.invoke_in_millis) {
            updateInterval = result.data.settings.invoke_in_millis;
        }
        if (isActiveFirst) {
            $userList.find('li:first-child .collapse').addClass('show');
        } else {
            // console.log('ttt', prevActiveDialogId);
            $(`#${prevActiveDialogId}`).addClass('show');
        }
    });
}

function getAndFillConversation(username, conversationId, isScrollDown) {
    UserConversation.getMetadataDetailConversation(token, {username, conversationId}).then((result) => {
        fillList($msgList, result.data.meta.messages);
        Spinner.remove();
        $('.js_send-message-box').removeClass('d-none');
        $('.messages-list').attr('data-conversation', JSON.stringify({username, conversationId}));

        if (isScrollDown) {
            $msgList.animate({
                scrollTop: $msgList[0].scrollHeight - $msgList[0].clientHeight
            }, 1000);
            if (result.data.meta.pagination) {
                addPagination($msgList, result.data.meta.pagination);
            } else {
                $('.messages-list-box').find('.load-more').remove();
            }
        }
    });
}

function addHandlers() {
    let conversationId = '';

    $('#sendMessageButton').on('click', (e) => {
        const $textArea = $('#sendMessageTextArea');
        const value = $textArea.val();
        const userData = $('.messages-list').data('conversation');
        const {username, conversationId} = userData;
        Spinner.add($(e.target), 'spinner-box--sendMsg');
        UserConversation.postMetadataDetailConversation(token, {username, conversationId, value}).then((result) => {
            if (result && result.status && result.status.state === 'ok') {
                getAndFillConversation(username, conversationId);
                $textArea.val('');
                Spinner.remove();
                PubSub.publish(CONST.events.messages.RECIEVE_NEW_MESSAGE, {username, conversationId, value, result});
            }
        });
    });
    $(document).on('click', '.list-group-item .collapse', function(e) {
        e.stopPropagation();
        const username = $(e.target).closest('.list-group-item').data('username');
        conversationId = $(e.target).closest('.media').data('conversation-id');
        Spinner.add($('#mainChatPart'), 'my-5 py-5');
        getAndFillConversation(username, conversationId, 'isScrollDown');
        updateInterval = (updateInterval > 6000) ? updateInterval : 6000;
        // resend request
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(() => {
            conversationId = $(e.target).closest('.media').data('conversation-id');
            console.log(intervalId, conversationId);
            getAndFillConversation(username, conversationId);
            getAndFillUserList();
        }, updateInterval);
    });

    PubSub.subscribe(CONST.events.messages.RECIEVE_NEW_MESSAGE, (eventName, data) => {
        const {username, conversationId, value, resultFromServer} = data;
        const $dialog = $(`.messages-user-list .list-group-item[data-username="${username}"] div[data-conversation-id="${conversationId}"]`);
        console.log('set val from text-area', value);
        console.log('resultFromServer: ', resultFromServer);
        $dialog.find('.summary').text(value);

        // metadata.then((result) => {
        //     fillUserList($userList, result.data);
        //     if (result.data.settings && result.data.settings.invoke_in_millis) {
        //         updateInterval = result.data.settings.invoke_in_millis;
        //     }
        // });
    });
}

export function init() {
    // check we are in correct page (messages)
    if (!isInMessagePage()) {
        return;
    }

    getAndFillUserList('setActiveFirst');
    addHandlers();
}
