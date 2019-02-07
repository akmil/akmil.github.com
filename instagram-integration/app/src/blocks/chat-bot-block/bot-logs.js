/* eslint-disable no-use-before-define */
import UserTaskManager from '../../common/js-services/api-task-manager';
import {CONST} from '../../common/js-services/consts';

const $list = $('.bot-log-tasks');
const path = {
    type: CONST.url.tmTypes.chatBotT,
    subtype: CONST.url.tmTypes.chatBotSubT[0],
    username: () => $('li.active').data('username')
};
let currentPage = null;
let intervalId = '';

function initHandlerPagination($previous, $next, dataArray) {
    const $wrapper = $('.logs-pagination');
    const {pagination} = dataArray.settings;
    const lastPage = pagination.pages[pagination.pages.length - 1];
    const updateButtons = function (e, currentActiveIdx) {
        $wrapper.find('li.page-number.active').removeClass('active');
        $($wrapper.find('li.page-number')[pagination.current]).addClass('active');
    };
    $previous.on('click', (e) => {
        const currentActiveIdx = $wrapper.find('li.page-number.active').index();
        const page = pagination.previous;
        if (!pagination.previous) {
            $previous.addClass('disabled').prop('disabled', 'disabled');
            return;
        }
        currentPage = pagination.previous;
        updateButtons(e, currentActiveIdx - 1);
        getLogsData($list, path, page);
    });

    $next.on('click', (e) => {
        const currentActiveIdx = $wrapper.find('li.page-number.active').index();
        const page = pagination.next;
        if (!pagination.next) {
            // $previous.addClass('disabled').prop('disabled', 'disabled');
            return;
        }
        currentPage = pagination.next;
        updateButtons(e, currentActiveIdx);
        if (lastPage <= currentActiveIdx + 1) {
            $(e.target).parent().addClass('disabled');
        }
        if (currentActiveIdx && $previous.hasClass('disabled')) {
            $previous.removeClass('disabled');
        }
        getLogsData($list, path, page);
    });

    $('#v-pills-logs-tab').on('click', (e) => {
        // at this point of time setInterval is working
        currentPage = 1;
    });
    $('.page-number').on('click', (e) => {
        const val = $(e.target).text();
        currentPage = parseInt(val, 10);
        console.log(currentPage);
    });
}

function addPagination(dataArray) {
    const $wrapper = $('.logs-pagination');
    const {pagination} = dataArray.settings;
    const tplPrevious = $(`<li class="page-item ${(!pagination.previous) ? 'disabled' : ''}"><a class="page-link" href="#" ${(!pagination.previous) ? 'tabindex="-1"' : ''}>Назад</a></li>`);
    const tplNext = $(`<li class="page-item ${(!pagination.next) ? 'disabled' : ''}"><a class="page-link" href="#" ${(!pagination.next) ? 'tabindex="-1"' : ''}>Вперед</a></li>`);
    $wrapper.empty();

    $wrapper.append(tplPrevious);
    pagination['pages'].forEach((item) => {
        $(`<li class="page-item page-number ${(pagination.current === item) ? 'active' : ''}"><a class="page-link" href="#">${item}</a></li>`).appendTo($wrapper);
    });
    $wrapper.append(tplNext);
    initHandlerPagination(tplPrevious, tplNext, dataArray);
}

function fillListMeta($list, dataArray, isRuns) {
    const items = dataArray.logs;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty();
    if (!items.length) {
        $(`<li class="list-group-item py-2">
            <p>В этом разделе нет ни одной задачи.</p>
        </li>`).appendTo($list);
        return;
    }
    addPagination(dataArray);
    items.forEach((item) => {
        const {level, value} = item;
        $(`<li class="list-group-item p-0 py-2">
              <div class="media-body d-flex">
                  <div class="col task-type ${(level === 'ERROR') ? 'text-danger' : ''}">
                      ${(value) ? `${value}` : ''}
                  </div>
              </div>
          </li>`).appendTo($list);

        if (!$('li', $list).length) {
            $(`<li class="list-group-item py-2" >
                <p>В этом разделе нет ни одной задачи.</p>
            </li>`).appendTo($list);
        }
    });
}

function getLogsData($list, path, page) {
    UserTaskManager.getLogsChatBot(path, page).then((result) => {
        // console.log('getLogsChatBot');
        if (result.status.state === 'ok') {
            fillListMeta($list, result.data);
            const updateInterval = result.data.settings.invoke_in_millis;
            // reset Timer request
            if (intervalId) {
                clearInterval(intervalId);
            }
            intervalId = setInterval(() => {
              // eslint-disable-next-line indent
                getLogsData($list, path, currentPage);
            }, updateInterval);
        } else {
            $(`<li class="list-group-item py-2">
                <p>Нет доступа</p>
            </li>`).appendTo($list);
        }
    });
}

export function init() {
    if ($('.chat-bot-page').length) {
        if (path.username()) {
            console.log(path.username());
            getLogsData($list, path);
        } else {
            console.log('select user');
        }
    }
}
