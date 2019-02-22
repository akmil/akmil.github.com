/* eslint-disable no-use-before-define */
import UserTaskManager from '../../../common/js-services/api-task-manager';

let clsConst = {
    currentPageCls: '',
    tasksList: '',
    logsTabBtn: '',
    pagination: '',
    paginationPgNumber: ''
};
let $list = '$(clsConst.tasksList)';
let selectCls = 'someClass';
const getUsername = () => $(`.${selectCls} option:selected`).val();
const path = {
    username: getUsername()
};
let currentPage = null;
let intervalId = '';

function initHandlerPagination($previous, $next, dataArray) {
    const $wrapper = $(clsConst.pagination);
    const {pagination} = dataArray.settings;
    // const lastPage = pagination.pages[pagination.pages.length - 1];

    $previous.on('click', (e) => {
        const $liActive = $wrapper.find('li.page-number.active');
        const page = pagination.previous;
        if (!pagination.previous) {
            $previous.addClass('disabled').prop('disabled', 'disabled');
            return;
        }
        currentPage = pagination.previous;
        $liActive.removeClass('active');
        getLogsData($list, path, page);
    });

    $next.on('click', (e) => {
        const $liActive = $wrapper.find('li.page-number.active');
        const currentActiveIdx = $liActive.index();
        const page = pagination.next;
        if (!pagination.next) {
            return;
        }
        currentPage = pagination.next;
        $liActive.removeClass('active');
        // if (lastPage <= currentActiveIdx + 1) {
        //     $(e.target).parent().addClass('disabled');
        // }
        if (currentActiveIdx && $previous.hasClass('disabled')) {
            $previous.removeClass('disabled');
        }
        getLogsData($list, path, page);
    });

    $(clsConst.logsTabBtn).on('click', (e) => {
        // at this point of time setInterval is working
        currentPage = 1;
    });
    $(`${clsConst.pagination} ${clsConst.paginationPgNumber}`).on('click', (e) => {
        e.preventDefault();
        const val = $(e.target).text();
        currentPage = parseInt(val, 10);
        getLogsData($list, path, currentPage);
        console.log(currentPage);
    });
}

function addPagination(dataArray, $wrapper) {
    const {pagination} = dataArray.settings;
    const tplPrevious = $(`<li class="page-item ${(!pagination.previous) ? 'disabled' : ''}"><a class="page-link" href="#" ${(!pagination.previous) ? 'tabindex="-1"' : ''}>Назад</a></li>`);
    const tplNext = $(`<li class="page-item ${(!pagination.next) ? 'disabled' : ''}"><a class="page-link" href="#" ${(!pagination.next) ? 'tabindex="-1"' : ''}>Вперед</a></li>`);

    clearPagination($wrapper);

    if (pagination.next || pagination.pages && (pagination.current === pagination.pages[pagination.pages.length - 1])) {
        $wrapper.append(tplPrevious);
        if (pagination && pagination['pages']) {
            pagination['pages'].forEach((item) => {
                $(`<li class="page-item page-number ${(pagination.current === item) ? 'active' : ''}"><a class="page-link" href="#">${item}</a></li>`).appendTo($wrapper);
            });
        }
        $wrapper.append(tplNext);
    }
    initHandlerPagination(tplPrevious, tplNext, dataArray);
}

function clearPagination($wrapper) {
    $wrapper.empty();
}

function fillListMeta($list, dataArray, isRuns) {
    const $wrapperPagination = $('.logs-pagination');
    const items = dataArray.logs;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty();
    if (!items.length) {
        $(`<li class="list-group-item py-2">
            <p>В этом разделе нет ни одной задачи.</p>
        </li>`).appendTo($list);
        clearPagination($wrapperPagination);
        return;
    }
    addPagination(dataArray, $wrapperPagination);
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

function tabStopReqHandler() {
    $('#v-pills-tab').on('click', 'a', (e) => {
        e.preventDefault();
        const tab = $(e.target);
        if (tab.attr('id') !== 'v-pills-logs-tab') {
            console.log('stop req');
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
    });
}

function getLogsData($list, path, page) {
    path.username = getUsername(selectCls);
    const pathArr = [path.type, `subtype/${path.subtype}`, `account/${path.username}`];
    UserTaskManager.getLogsChatBot(pathArr, page).then((result) => {
        if (result.status.state === 'ok') {
            fillListMeta($list, result.data);
            tabStopReqHandler();
            const updateInterval = result.data.settings.invoke_in_millis;
            // reset Timer request
            if (intervalId) {
                clearInterval(intervalId);
            }
            if (currentPage <= 1) {
                intervalId = setInterval(() => {
                    // eslint-disable-next-line indent
                    getLogsData($list, path, currentPage);
                }, updateInterval);
            }
        } else {
            $(`<li class="list-group-item py-2">
                <p>Нет доступа</p>
            </li>`).appendTo($list);
        }
    });
}

function preConfig(cfg) {
    clsConst = cfg;
    $list = $(clsConst.tasksList);
    path.type = cfg.pathType;
    path.subtype = cfg.pathSubType;
}

export function init(_selectCls, cfg) {
    if ($(cfg.currentPageCls).length) {
        selectCls = _selectCls;
        preConfig(cfg);
        if (getUsername()) {
            console.log(getUsername());
            getLogsData($list, path);
        } else {
            console.log('select user');
        }
    }
}
