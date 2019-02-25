import viewUtils from '../../common/js-services/view';

export function clearMassagesList($list, stateCfg) {
    stateCfg.pageIncrement = 0;
    $list.empty();
}
export function fillMassagesList({$list, dataArray, isAppendPrevMsg, stateCfg}) {
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
                <a target="_blank" href="${value}">${value}</a></div>`;
                break;
            default: str = `<div class="chat-text ${cssCls}" >${value}</div>`;
        }
        return str;
    };
    const addToList = (isAppendPrevMsg, $li, $list) => {
        if (isAppendPrevMsg) {
            $li.insertBefore($list.find('li:first-child'));
        } else {
            $li.appendTo($list);
        }
    };
    if (isAppendPrevMsg) {
        // console.log('isAppentPrevMsg to', cList);
    } else {
        cList.empty().addClass('border-light-color');
        clearMassagesList(cList, stateCfg);
        // add margin-auto to make masseges on bottom
        $('<li class="mt-auto"></li>').appendTo(cList);
    }
    items.forEach((item) => {
        const message = item;
        const value = message.value.replace(/(?:\r\n|\r|\n)/g, '<br />');
        // const checkpoint = item.checkpoint || item;

        if (message.side.toLowerCase() === 'left') {
            const $li = $(`<li class="chat-item chat-item-left col flex-column-reverse" value="${message.value}">
                <div class="d-flex">
                ${(message['profile_pic_url'])
                ? `<div class="chat-img-box"> 
                            <img src="${message['profile_pic_url']}" alt="User Avatar" class="">
                        </div>`
                : ''
                }
                <div>
                    <p class="chat-username text-muted">${message.username}</p>
                    ${insertMsg(message.value, message.type, 'text-left')}
                </div>
                    <small class="chat-time-text">${viewUtils.getFormattedDateUtil(message.timestamp)}</small>
                </div>
                </div>
            </li>`);
            addToList(isAppendPrevMsg, $li, cList); // toDo refactor me, less DOM manipulation
        } else {
            const $li = $(`<li class="chat-item chat-item-right col flex-column-reverse" value="${message.value}">
                <div class="d-flex justify-content-end">
                    ${insertMsg(value, message.type, 'text-right')}
                    <small class="pull-right chat-time-text">${viewUtils.getFormattedDateUtil(message.timestamp)}</small>
                    </div>
            </li>`);
            addToList(isAppendPrevMsg, $li, cList); // toDo refactor me, less DOM manipulation
        }
    });
}

export function fillUserList($list, dataArray) {
    const items = dataArray.meta;
    const cList = $list;
    let tpl = '';
    const conversationDetail = function(items) {
        let tpl = '';
        items.forEach((item) => {
            if (items.length > 1) {
                tpl += `<img src="${item['profile_pic_url']}" alt='image' class="media-photo mr-1 media-photo--group" style="width: 24px;">`;
            } else {
                tpl += `<img src="${item['profile_pic_url']}" alt='image' class="media-photo mr-1" style="width: 24px;">`;
            }
        });
        return tpl;
    };
    const addConversations = function(conversations) {
        let tpl = '';
        conversations.forEach((item) => {
            tpl += `
            <div class="media p-1" data-conversation-id="${item.id}">
                ${conversationDetail(item.to)}
                <div class="media-body">
                    <h5 class="title">${item.title}</h5>
                    ${(item['last_message'] && (parseInt(item['last_message'].length, 10)) > 0 && item.to.length === 1)
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
        tpl += `<li class="list-group-item" data-toggle="collapse" data-target="#collapse-${idx}" data-username="${item.username}" 
                aria-expanded="true" aria-controls="collapse-${idx}">
            <div class="border-bottom mb-1 media pb-2" id="heading-${idx}">
                <span class="mr-3">
                    <img src="${item.profile_pic_url}" alt="avatar"
                    class="media-photo rounded-circle">
                </span>
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
        </li>`;
    });
    $(tpl).appendTo(cList);
}

export const messageAreaHendler = ($textArea, $sendMessageButton) => {
    $textArea.on('keydown', (e) => {
        if (e.keyCode === 13) {
            if (e.ctrlKey) {
                // console.log('ctrl+enter');
                e.preventDefault();
                e.target.value = `${e.target.value}\n`;
            } else {
                if (e.target.value.trim().length) {
                    $sendMessageButton.trigger('click');
                }
                e.preventDefault();
            }
        }
    });
};
