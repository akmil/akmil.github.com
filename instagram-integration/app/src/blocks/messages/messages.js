import * as data from './dataServer';
import MeteorEmoji from 'meteor-emoji';
import qq from 'fine-uploader';
import User from '../../common/js-services/user';
import UserConversation from '../../common/js-services/api-user-direct';

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
    });
});

function fillList($list, dataArray) {
    const items = dataArray;
    const cList = $list;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    const insertMsg = (value, type, cssCls) => {
        let str = '';
        switch (type) {
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
    cList.empty().addClass('border-light-color');
    items.forEach((item) => {
        const message = item;
        // const checkpoint = item.checkpoint || item;

        if (message.side === 'left') {
            $(`<li class="chat-item chat-item-left" value="${message.value}">
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
                    <small class="chat-time-text">${message.timestamp}</small>
                </div>
            </li>`).appendTo(cList);
        } else {
            $(`<li class="chat-item justify-content-end chat-item-right" value="${message.value}">
                <div class="d-flex">
                    ${insertMsg(message.value, message.type)}
                    <small class="pull-right chat-time-text">${message.timestamp}</small>
                    </div>
            </li>`).appendTo(cList);
        }
    });
}
function fillUserList($list, dataArray) {
    const items = dataArray.meta;
    const cList = $list;
    const conversationDetail = function(items) {
        let tpl = '';
        items.forEach((item) => {
            tpl += `<img src="${item['profile_pic_url']}" class="media-photo" style="width: 24px;">
                <div class="media-body">
                <h5 class="title">
                    ${item.username}
                </h5>`;
        });
        return tpl;
    };
    const addConversations = function(conversations, idx) {
        let tpl = '';
        conversations.forEach((item) => {
            tpl += `<div id="collapse-${idx}" class="collapse" aria-labelledby="heading-${idx}" data-parent="#accordion">
                <div class="media">
                        ${conversationDetail(item.to)}
                        <p class="summary">${item['last_message']}</p>
                    </div>
                </div>
            </div>`;
        });
        return tpl;
    };
    cList.empty().addClass('border-light-color');
    items.forEach((item, idx) => {
        $(`<li class="list-group-item" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">
            <div class="media" id="heading-${idx}">
                <a href="#" class="mr-3">
                    <img src="https://i.imgur.com/jNNT4LE.png"
                    class="media-photo">
                </a>
                <span class="badge badge-secondary position-absolute p-2">${item['unread_conversations']}</span>
                <div class="media-body">
                    <h4 class="title">
                        ${item.username}
                    </h4>
                </div>
            </div>
            ${addConversations(item.conversations, idx)}
            </li>`).appendTo(cList);
    });
}

function addHandlers() {
    // let checkpointType = '';

    $('#sendMessageButton').on('click', (e) => {
        // const $button = $(e.target);
        const userMsg = $('#sendMessageTextArea').val();
        console.log(userMsg);
        // eslint-disable-next-line no-alert
        alert(userMsg);
        // console.log($button);
    });
    $(document).on('click', '.list-group-item', function(e) {
        // e.preventDefault();
        console.log('click');
        const $msgList = $('.messages-list');
        const {conversation} = data;
        // User.getMetadata(token);
        fillList($msgList, conversation.data.meta.messages);
    });
}

export function init() {
    const {/* conversation,*/userList} = data;
    // const $msgList = $('.messages-list');
    const $userList = $('.messages-user-list');
    // check we are in correct page (messages)
    if (!isInMessagePage()) {
        return;
    }
    const token = User.getToken(); // upd to: User.getToken()
    const metadata = UserConversation.getMetadata(token);
    metadata.then((result) => {
        fillUserList($userList, result.data || userList.data);
    }).then((result) => {
        console.log('add onClick');
        UserConversation.getMetadata(token);
        // fillList($msgList, result.data.meta.messages || conversation.data.meta.messages);
        // addHandlers();
    });
    addHandlers();

}
