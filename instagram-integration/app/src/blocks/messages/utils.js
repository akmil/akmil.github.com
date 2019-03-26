import viewUtils from '../../common/js-services/view';
// import UserConversation from '../../common/js-services/api-user-direct';

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
        // const value = message.value;

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
                    ${insertMsg(value, message.type, 'text-left')}
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
        const isUnread = item['is_unread'];
        const lastMessage = item['last_message'];
        const isLastMsg = lastMessage && (parseInt(lastMessage.length, 10));
        const isAddDot = isLastMsg > 0 && item.to.length > 1 && isUnread;
        tpl += `
                <div class="media p-1" data-conversation-id="${item.id}">
                    ${conversationDetail(item.to)}
                    <div class="media-body">
                        ${(isAddDot || isUnread)
            ? '<span class="summary-dot"></span>'
            : ''
            }
                        <!-- {isUnread ? '<span class="summary-dot"></span>' : ''} -->
                        <h5 class="title ${isUnread ? 'font-weight-bold' : ''} ${(isAddDot) ? 'mr-2' : ''}">${item.title}</h5>
                        ${(isLastMsg > 0 && item.to.length === 1)
            ? `<p class="summary text-muted">${lastMessage}</p>`
            : ''
            }
                    </div>
                </div>
            `;
    });
    return tpl;
};

export function appendUserList($list, item, details) {
    const {cursor, section, username} = details;
    const $collapse = $(`#collapse-${section}`);
    console.log(cursor, username);
    $collapse.append(addConversations(item.conversations));
    // ${addConversations(item.conversations, idx)}
}

export function fillUserList($list, dataArray, loadMoreCbFunction) {
    const items = dataArray.meta;
    const cList = $list;
    let tpl = '';
    const loadMoreBox = (idx, prev_cursor) => `<div class="list-footer text-center js_load-more-box" data-idx="${idx}" data-cursor="${prev_cursor}">
        <button type="button" class="btn btn-submit">Загрузить еще</button>
    </div>`;
    cList.empty().addClass('border-light-color');
    // todo: fix hard-code  img src="https://i.imgur.com/jNNT4LE.png"
    items.forEach((item, idx) => {
        const {pagination} = item;
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
                ${addConversations(item.conversations)}
            </div>
            ${(pagination && pagination.prev_cursor) ? loadMoreBox(idx, pagination.prev_cursor) : null}
        </li>`;
    });
    $(tpl).appendTo(cList);
    $('.js_load-more-box button').on('click', (e) => {
        const $btn = $(e.target);
        const $btnBox = $btn.closest('.js_load-more-box');
        const section = $btnBox.data('idx');
        const cursor = $btnBox.data('cursor');
        const username = $btnBox.closest('li').data('username');

        console.log('click', section, cursor);
        loadMoreCbFunction(cursor, section, username);
        e.stopPropagation();
    });
}

export const messageAreaHendler = ($textArea, $sendMessageButton) => {
    $textArea.on('keydown', (e) => {
        if (e.keyCode === 13) {
            if (e.ctrlKey) {
                // console.log('ctrl+enter');
                e.preventDefault();
                e.target.value += '\n';
            } else {
                if (e.target.value.trim().length) {
                    $sendMessageButton.trigger('click');
                }
                e.preventDefault();
            }
        }
    });
};

export const addMoreUsersAccordion = (conversations, conversationToAdd) => {
    // const $btnMoreBox = $('#load-more-box');
    // const $btnMore = $('button', $btnMoreBox);
    // $btnMoreBox.show();
    console.log('start add pagination to accordioin', conversationToAdd);
    // conversations.forEach((item, idx) => {
    //     if (item.pagination && item.pagination.prev_cursor) {
    //         console.log('conversation - >', item.pagination);
    //         $btnMore.on('click', () => {
    //             console.log('click - >', item.pagination);
    //             const details = {
    //                 username: '',
    //                 cursor: item.pagination.prev_cursor
    //             };
    //             UserConversation.getMetadataDetailUsers(details).then((result) => {
    //                 if (!result.data) {
    //                     return;
    //                 }
    //                 console.log('**getMetadataDetailUsers** result - >', result);
    //             });
    //         });
    //     }
    // });
};
