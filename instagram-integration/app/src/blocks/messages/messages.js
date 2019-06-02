// import MeteorEmoji from 'meteor-emoji';
// import EmojiPicker from 'vanilla-emoji-picker';
import 'emojioneArea';
// import qq from 'fine-uploader'; // todo: fine-uploade
import User from '../../common/js-services/user';
import UserConversation from '../../common/js-services/api-user-direct';
import {fillMassagesList, fillUserList, /* messageAreaHendler, /* addMoreUsersAccordion,*/ appendUserList} from './utils';
import Spinner from '../../common/js-services/spinner';
// import PubSub from 'pubsub-js';// https://www.npmjs.com/package/pubsub-js
import {CONST} from '../../common/js-services/consts';
import * as imageUpload from '../_shared/image-upload/image-upload';
import {initRequests, addConfirgButtons} from './requests';

const token = User.getToken();
const $msgList = $('.messages-list');
const stateCfg = {
    pageIncrement: 0,
    loadingFlag: false,
    setSingleVal: false
};
let updateInterval = '';
let intervalId = false;
let cursor = '';
let intervalUserList = false;
let initialVal = '';
let flagInitialVal = true;
const currentUserData = {
    useravatar: 'link',
    username: 'name'
};
const scrollLoaderState = {
    cursor: 'pagination.prev_cursor',
    firstLoad: true,
    allMsgLoaded: false
};

const renderResults = function (cfg) {
    const {dataArray: data, $list: ulElement, stateCfg} = cfg;

    function showMessage(element, message, /* optional */clearList) {
        // $btnGET.attr('disabled', false);

        if (clearList) {
            $('li', element).remove();
        }
        element.css({'overflow': 'auto'});
        $('<li/>')
            .addClass('list-group-item text-center')
            .text(message)
            .appendTo(ulElement);
    }

    if (stateCfg.loadingFlag === 'FINAL_PAGE') {
        return false; // exit if has reached last page
    }

    // show fail msg
    if (data === 'FAIL') {
        showMessage(ulElement, 'Failure, possible key not correct.', true);
        return false;
    }

    if (stateCfg.loadingFlag === 'STOP_LOAD' && data.length !== 0) {
        stateCfg.loadingFlag = 'FINAL_PAGE';
        showMessage(ulElement, 'No more results.', false);
        // $liFooter.hide();
        return false;
    }

    if (data === null || !data.length) {
        showMessage(ulElement, 'No results found.', true);
        return false;
    }

    fillMassagesList(cfg);
};

function isInMessagePage() {
    const $msgList = $('.messages-list');
    const $userList = $('.messages-user-list');
    return !!$msgList.length && !!$userList.length;
}

// todo: get from emojii.js
$(document).ready(() => {
    if (!isInMessagePage()) {
        return;
    }
    // eslint-disable-next-line no-unused-vars
    // const ep = new EmojiPicker();
    // // const m = new MeteorEmoji();
    // const $picker = $('textarea[data-emoji-picker="true"] ~ div');
    // const style = $picker.attr('style');
    // const styleNew = style.replace('top: 20px;', 'top: -210px;');
    // $picker.attr('style', styleNew);

    $('textarea[data-emoji-picker="true"]').emojioneArea({
        pickerPosition: 'top',
        tonesStyle: 'square',
        filtersPosition: 'bottom',
        placeholder: 'Введите сообщение',
        autocomplete: true,
        events: {
            keydown (editor, e) {
                // console.log(editor.html());
                // console.log(this.getText());
                const event = jQuery.Event('click');
                if (e.keyCode === 13) {
                    const message = this.getText();
                    if (e.ctrlKey) {
                        console.log('ctrl+enter');
                        if (this.getText().length) {
                            e.target.value = message;
                            $('#sendMessageButton').trigger(event, message);
                        }
                        e.preventDefault();
                    } else {
                        // if (this.getText().length) {
                        //     e.target.value = message;
                        //     $('#sendMessageButton').trigger(event, message);
                        // }
                        // e.preventDefault();
                    }
                }
            }
        }
    });
    // .on('picker.keydown', (button, e) => {
    //     console.log(e.target);
    // }).on('emojibtn.click', function(button, event) {
    //     console.log(`event:emojibtn.click, emoji=${button.children().data('name')}`);
    // });

    const $textArea = $('.js_send-message-box .emojionearea-editor');
    // console.log('$textArea', $textArea);
    // messageAreaHendler('.js_send-message-box .emojionearea-editor', $('#sendMessageButton'));
    $textArea.empty();

    // todo: fine-uploade
    /*
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
            allowedExtensions: ['jpeg', 'jpg'],
            itemLimit: 3,
            sizeLimit: 500 * 1024
        }
    });
    */
});
let isTimeOutRunned = false;
// eslint-disable-next-line max-params
function getAndFillUserListCursor(loadMoreCbArgsCursor, section, username, slotindex) {
    const $userList = $('.messages-user-list');
    if (loadMoreCbArgsCursor) {
        console.log('UserConversation', username, slotindex);
        UserConversation.getMetadataDetailUsers({cursor: loadMoreCbArgsCursor, username, slotindex}).then((result) => {
            if (!result.data) {
                return;
            }
            const {data} = result;
            // data.meta.sort((a, b) => a['username'].localeCompare(b['username']));
            appendUserList($userList, data.meta, {cursor: loadMoreCbArgsCursor, section, username});
            const {pagination} = data;
            if (pagination && pagination.prev_cursor) {
              // make one more req?
                console.error('found more pagination, but list not updated');
                // TODO
            } else {
                // hide show more
                const $collapse = $(`#collapse-${section}`).closest('li');
                $collapse.find('.js_load-more-box').addClass('d-none');
                // stop rerender list
                console.error('stop updating user list');
                clearInterval(intervalUserList);
            }
            console.log('section', section);
        });
    }
}

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
        data.meta.sort((a, b) => parseInt(a['slot_index'], 10) > parseInt(b['slot_index'], 10));
        // messages-user-list from utils.js
        fillUserList($userList, data.meta, getAndFillUserListCursor);
        if (data.settings && data.settings.invoke_in_millis) {
            updateInterval = data.settings.invoke_in_millis;
            updateInterval = (updateInterval > 6000) ? updateInterval : 10000;
        }
        if (isActiveFirst) {
            $userList.find('li:first-child .collapse').addClass('show');
        } else {
            $(`#${prevActiveDialogId}`).addClass('show');
        }
        // if (data.pagination && data.pagination.prev_cursor) {
        //     const conversationToAdd = {
        //         tpl: `<div class="list-footer text-center" style="display: none;" id="load-more-box">
        //                 <button id="js_-accordion-more_btn" type="button" class="btn btn-submit">SHOW MORE</button>
        //             </div>`
        //     };
        //     console.log('start add pagination to accordioin', conversationToAdd);
        //     addMoreUsersAccordion(data.meta, conversationToAdd);
        // }
        // do it once
        if (!isTimeOutRunned) {
            intervalUserList = setInterval(() => {
                console.log('setInterval');
                getAndFillUserList();
            }, updateInterval);
            isTimeOutRunned = true;
        }
    });
}

function addPagination(pagination, cbFn) {
    if (scrollLoaderState.allMsgLoaded) {
        return;
    }
    if (scrollLoaderState.firstLoad) {
        scrollLoaderState.cursor = pagination.prev_cursor;
        scrollLoaderState.firstLoad = false;
    }
    const userData = $msgList.data('conversation');
    const {username, conversationId, slotindex} = userData;
    console.log('addPagination-->slotindex: ', slotindex);
    Spinner.add($('#mainChatPart'), 'my-5 py-5');
    UserConversation.getMetadataDetailConversation(token, {username, conversationId, slotindex, cursor: scrollLoaderState.cursor}).then((result) => {
        // console.log('firstLoad:', scrollLoaderState.firstLoad, result.data.meta);
        const newCursor = result.data.meta.pagination && result.data.meta.pagination.prev_cursor;
        Spinner.remove();
        renderResults({
            $list: $msgList,
            dataArray: result.data.meta.messages,
            isAppendPrevMsg: 'appentPrevMsg',
            stateCfg,
            currentUserData
        });
        // set new cursor
        if (newCursor) {
            // console.log('**', scrollLoaderState.cursor);
            scrollLoaderState.cursor = newCursor;
            $msgList.scrollTop($msgList.scrollTop() + 50);
        } else {
            // all msg loaded
            scrollLoaderState.allMsgLoaded = true;
        }

        // stop update interval
        if (intervalId) {
            clearInterval(intervalId);
            cbFn(newCursor);
        }

    });
}

function scrollHandler(scrollDelay, pagination) {
    let recentScroll = false;
    let makeReqOnce = true;
    cursor = (pagination && pagination.prev_cursor) ? pagination.prev_cursor : null;
    function checkIsOnce(newCursor) {
        if (newCursor !== cursor) {
            cursor = newCursor;
            makeReqOnce = true;
            console.log('prevCursor', newCursor);
        }
    }

    setTimeout(() => {
        $msgList.on('scroll', function() {
            const scrollTop = $(this).scrollTop();
            if (!recentScroll) {
                if (scrollTop + $(this).innerHeight() >= this.scrollHeight) {
                    // $messages.text('end reached');
                } else if (scrollTop <= 45) {
                    // $messages.text('Top reached');
                    // console.log('pagination');
                    if (pagination && makeReqOnce) {
                        makeReqOnce = false;
                        addPagination(pagination, checkIsOnce);
                        // console.log('go');
                    } else {
                        $('.messages-list-box').find('.load-more').remove();
                    }
                } else {
                    // $messages.text('');
                }
                recentScroll = true;
                window.setTimeout(() => {
                    recentScroll = false;
                }, 100);
            }
        });
    }, (scrollDelay + 200));
}

function getAndFillConversation({username, conversationId, useravatar, slotindex}, isScrollDown, isClickFromRequestConfirm) {
    const TIME_SCROLL = 10;
    const scrollHeight = $msgList[0].scrollHeight;
    const scrollBottom = () => $msgList.animate({
        scrollTop: $msgList[0].scrollHeight - $msgList[0].clientHeight
    }, TIME_SCROLL);
    UserConversation.getMetadataDetailConversation(token, {username, conversationId, slotindex}).then((result) => {
        // messages-list from utils
        currentUserData.useravatar = useravatar;
        currentUserData.username = username;
        fillMassagesList({$list: $msgList, dataArray: result.data.meta.messages, stateCfg, currentUserData});
        $('#mainChatPart').removeClass('d-none');

        if (isClickFromRequestConfirm) {
            // clicked on request
            $('.js_send-message-box').addClass('d-none');
        } else {
            // clicked on normal conversation
            $('.js_send-message-box').removeClass('d-none');
        }
        $('.messages-list').attr('data-conversation', JSON.stringify({username, conversationId, slotindex}));
        console.log('scrollHeight', scrollHeight, $($msgList[0]).height());
        const scrollPosition = $($msgList[0]).height() + $($msgList[0]).scrollTop();

        const deferreds = [];
        $('.chat-img img').each(function() {
            if (!this.complete) {
                const deferred = $.Deferred();
                $(this).one('load', deferred.resolve);
                deferreds.push(deferred);
            }
        });
        $.when(...deferreds).done(function() {
            Spinner.remove();

            /* things to do when all images loaded */
            console.log('all img loaded');
            if ((scrollPosition) < 75) {
                scrollBottom();
            }
            if (isScrollDown) {
                setTimeout(() => {
                    scrollBottom();
                }, 200);
                // save first value
                if (flagInitialVal) {
                    initialVal = result.data.meta.messages[result.data.meta.messages.length - 1];
                    console.log(initialVal);
                    flagInitialVal = false;
                }
            }

            scrollHandler(TIME_SCROLL, result.data.meta.pagination);
        });

    });
}

function imageLoadSubmitCb(input, token) {
    const userData = $msgList.data('conversation');
    const {conversationId, slotindex} = userData;
    // send image: /slots/{slotIndex}/photo/{id}
    const url = `${CONST.getPath('instagramDirect_Basic')}/slots/${slotindex}/photo/${conversationId}`;
    const acceptedFile = input.files[0];
    console.log('**handleSubmitCb');
    const formData = new FormData();
    const request = new XMLHttpRequest();

    Spinner.startButtonSpinner($('.file-upload-btn'), 'spinner-box--sendMsg');

    formData.append('file', acceptedFile, acceptedFile.name);
    request.open('POST', url);
    // request.withCredentials = true;
    request.setRequestHeader('token', token);
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('cache-control', 'no-cache');
    request.send(formData);
    request.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            console.log('this', this.responseText, this);
            input.value = '';
            window.PubSub.publish(CONST.events.autoarnswer.IMAGE_UPLOADED, {'response': this.responseText, 'el': input});
        }
    });
}

function addHandlers() {
    let conversationId = '';

    $('#sendMessageButton').on('click', (e, message) => {
        const emojioneareaEditor = $('.js_send-message-box .emojionearea-editor');
        const $textArea = $('#sendMessageTextArea');
        const value = (e.isTrigger) ? message : $textArea.val();
        emojioneareaEditor.empty();
        // const userData = $msgList.data('conversation');
        const _userData = $msgList.attr('data-conversation');
        const userData = JSON.parse(_userData);
        const {username, conversationId, useravatar, slotindex} = userData;
        Spinner.startButtonSpinner($(e.target), 'spinner-box--sendMsg');
        UserConversation.postMetadataDetailConversation(token, {username, conversationId, value, slotindex}).then((result) => {
            if (result && result.status && result.status.state === 'ok') {
                getAndFillConversation({username, conversationId, useravatar, slotindex});
                $textArea.val('');
                Spinner.remove();
                $msgList.scrollTop($msgList[0].scrollHeight);
                // window.PubSub.publish(CONST.events.messages.RECIEVE_NEW_MESSAGE, {username, conversationId, value, result});
            }
        });
    });

    function userShowConversetionHandler(e, userData) {
        const decreaseConversationNumber = (e) => {
            const $conversationHead = $(e.target).closest('li.list-group-item').find('.conversation-head');
            const $badge = $conversationHead.find('.badge');
            const badgeVal = parseInt($badge.text(), 10) - 1;

            if (isNaN(badgeVal)) {
                return;
            }
            $badge.text(badgeVal);

            if (!badgeVal) {
                $badge.remove();
            }
        };
        console.log('click');
        const isClickFromRequestConfirm = userData;
        let userDataFromLiGroup = '';
        if (isClickFromRequestConfirm) {
            $('.js_send-message-box').addClass('d-none');
        } else {
            // clicked on normal conversation
            userDataFromLiGroup = $(e.target).closest('.list-group-item').data();
            $('.confirm-buttons-box').addClass('d-none');
            $('.js_send-message-box').removeClass('d-none');
        }
        const {username, useravatar, slotindex} = userData || userDataFromLiGroup;
        e.stopPropagation();
        const $targetBtn = $(e.target).closest('.media');
        const $title = $targetBtn.find('.title');
        conversationId = $targetBtn.data('conversation-id');
        if ($title.hasClass('font-weight-bold')) {
            $title.removeClass('font-weight-bold');
            $targetBtn.find('.summary-dot').addClass('d-none');
        }
        decreaseConversationNumber(e);
        Spinner.remove();
        Spinner.add($('#mainChatPart'), 'my-5 py-5');
        getAndFillConversation({username, conversationId, useravatar, slotindex}, 'isScrollDown', isClickFromRequestConfirm);
        flagInitialVal = true; // reset first value flag
        // resend request
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(() => {
            conversationId = $(e.target).closest('.media').data('conversation-id');
            console.log(intervalId, conversationId);
            getAndFillConversation({username, conversationId, useravatar, slotindex}, false, isClickFromRequestConfirm);
        }, updateInterval);

    }

    $(document).on('click', '.list-group-item .collapse', userShowConversetionHandler);
    $(document).on('click', '.js_messages-request', function(e) {
        const userData = $(e.target).closest('.list-group-item').data();
        console.log('*******userData', userData);
        userShowConversetionHandler(e, userData);
        console.log('addConfigButtons', conversationId);
        addConfirgButtons(conversationId, userData);
    });

    const $showUserList = $('.js_show-messages-user-list');
    $showUserList.on('click', (e, message) => {
        console.log('clear requests');
        if (intervalId) {
            clearInterval(intervalId);
        }
    });

    window.PubSub.subscribe(CONST.events.messages.RECIEVE_NEW_MESSAGE, (eventName, data) => {
        const {username, conversationId, value, resultFromServer} = data;
        const $dialog = $(`.messages-user-list .list-group-item[data-username="${username}"] div[data-conversation-id="${conversationId}"]`);
        console.log('resultFromServer: ', resultFromServer);
        $dialog.find('.summary').text(value);
    });

    // send image {igUsername}/{id}/photo
    imageUpload.init(false, imageLoadSubmitCb);
}

export function init() {
    // check we are in correct page (messages)
    if (!isInMessagePage()) {
        return;
    }

    getAndFillUserList('setActiveFirst');
    addHandlers();
    const cfg = {
        username: 'username??',
        fillUserListFn: fillUserList
    };
    initRequests(cfg);
}
