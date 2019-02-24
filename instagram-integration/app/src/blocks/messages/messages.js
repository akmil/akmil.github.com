import MeteorEmoji from 'meteor-emoji';
// import qq from 'fine-uploader'; //todo: fine-uploade
import User from '../../common/js-services/user';
import UserConversation from '../../common/js-services/api-user-direct';
import {fillMassagesList, fillUserList} from './utils';
import Spinner from '../../common/js-services/spinner';
// import PubSub from 'pubsub-js';// https://www.npmjs.com/package/pubsub-js
import {CONST} from '../../common/js-services/consts';

const token = User.getToken();
const $msgList = $('.messages-list');
const stateCfg = {
    pageIncrement: 0,
    loadingFlag: false,
    setSingleVal: false
};
let updateInterval = '';
let intervalId = false;

const renderResults = function (cfg) {
    // let items;
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
        // messages-user-list from utils.js
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
const scrollLoaderState = {
    cursor: 'pagination.prev_cursor',
    firstLoad: true,
    allMsgLoaded: false
};
function addPagination(pagination, cbFn) {
    if (scrollLoaderState.allMsgLoaded) {
        return;
    }
    if (scrollLoaderState.firstLoad) {
        scrollLoaderState.cursor = pagination.prev_cursor;
        scrollLoaderState.firstLoad = false;
    }
    const userData = $msgList.data('conversation');
    const {username, conversationId} = userData;
    // console.log('cursor: ', scrollLoaderState.cursor);
    Spinner.add($('#mainChatPart'), 'my-5 py-5');
    UserConversation.getMetadataDetailConversation(token, {username, conversationId, cursor: scrollLoaderState.cursor}).then((result) => {
        console.log('firstLoad:', scrollLoaderState.firstLoad, result.data.meta);
        Spinner.remove();
        renderResults({
            $list: $msgList,
            dataArray: result.data.meta.messages,
            isAppendPrevMsg: 'appentPrevMsg',
            stateCfg
        });
        // set new cursor
        if (result.data.meta.pagination && result.data.meta.pagination.prev_cursor) {
            scrollLoaderState.cursor = result.data.meta.pagination.prev_cursor;
            $msgList.scrollTop($msgList.scrollTop() + 30);
        } else {
            // all msg loaded
            scrollLoaderState.allMsgLoaded = true;
        }

        // stop update interval
        if (intervalId) {
            clearInterval(intervalId);
        }
        cbFn();
    });
}

function scrollHandler(scrollDelay, pagination) {
    // const $messages = $('.messages-info');
    let recentScroll = false;
    let makeReqOnce = true;
    function checkIsOnce() {
        makeReqOnce = true;
    }
    setTimeout(() => {
        $msgList.on('scroll', function() {
            const scrollTop = $(this).scrollTop();
            if (!recentScroll) {
                if (scrollTop + $(this).innerHeight() >= this.scrollHeight) {
                    // $messages.text('end reached');
                } else if (scrollTop <= 30) {
                    // $messages.text('Top reached');
                    // $(this).scrollTop(70);
                    console.log('pagination');
                    if (pagination && makeReqOnce) {
                        makeReqOnce = false;
                        addPagination(pagination, checkIsOnce);
                        console.log('go');
                    } else {
                        $('.messages-list-box').find('.load-more').remove();
                    }
                } else {
                    // $messages.text('');
                }
                recentScroll = true;
                window.setTimeout(() => {
                    recentScroll = false;
                }, 50);
            }
        });
    }, (scrollDelay + 200));
}
let initialVal = '';
let flagInitialVal = true;

function getAndFillConversation(username, conversationId, isScrollDown) {
    const TIME_SCROLL = 10;
    UserConversation.getMetadataDetailConversation(token, {username, conversationId}).then((result) => {
        // messages-list from utils
        fillMassagesList({$list: $msgList, dataArray: result.data.meta.messages, stateCfg});
        Spinner.remove();
        $('.js_send-message-box').removeClass('d-none');
        $('.messages-list').attr('data-conversation', JSON.stringify({username, conversationId}));

        if (isScrollDown) {
            $msgList.animate({
                scrollTop: $msgList[0].scrollHeight - $msgList[0].clientHeight
            }, TIME_SCROLL);
            // save first value
            if (flagInitialVal) {
                initialVal = result.data.meta.messages[result.data.meta.messages.length - 1];
                console.log(initialVal);
                flagInitialVal = false;
            }
        }

        scrollHandler(TIME_SCROLL, result.data.meta.pagination);
    });
}

function addHandlers() {
    let conversationId = '';
    const $textArea = $('#sendMessageTextArea');

    $('#sendMessageButton').on('click', (e) => {
        const value = $textArea.val();
        const userData = $msgList.data('conversation');
        const {username, conversationId} = userData;
        Spinner.add($(e.target), 'spinner-box--sendMsg');
        UserConversation.postMetadataDetailConversation(token, {username, conversationId, value}).then((result) => {
            if (result && result.status && result.status.state === 'ok') {
                getAndFillConversation(username, conversationId);
                $textArea.val('');
                Spinner.remove();
                window.PubSub.publish(CONST.events.messages.RECIEVE_NEW_MESSAGE, {username, conversationId, value, result});
            }
        });
    });

    $textArea.on('keydown', (e) => {
        if (e.keyCode === 13) {
            if (e.ctrlKey) {
                console.log('ctrl+enter');
                e.preventDefault();
                e.target.value = `${e.target.value}\n`;
            } else {
                if (e.target.value.trim().length) {
                    $('#sendMessageButton').trigger('click');
                }
                e.preventDefault();
            }
        }
    });

    $(document).on('click', '.list-group-item .collapse', function(e) {
        e.stopPropagation();
        const username = $(e.target).closest('.list-group-item').data('username');
        conversationId = $(e.target).closest('.media').data('conversation-id');
        Spinner.add($('#mainChatPart'), 'my-5 py-5');
        getAndFillConversation(username, conversationId, 'isScrollDown');
        flagInitialVal = true; // reset first value flag
        updateInterval = (updateInterval > 6000) ? updateInterval : 10000;
        // resend request
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(() => {
            conversationId = $(e.target).closest('.media').data('conversation-id');
            console.log(intervalId, conversationId);
            getAndFillConversation(username, conversationId);
        }, updateInterval);

        setInterval(() => {
            getAndFillUserList();
        }, updateInterval);
    });

    window.PubSub.subscribe(CONST.events.messages.RECIEVE_NEW_MESSAGE, (eventName, data) => {
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
