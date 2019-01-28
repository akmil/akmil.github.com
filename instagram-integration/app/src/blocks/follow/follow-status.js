// import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';

const $btnShowRuns = $('.js_btn-show-task-runs');
const $btnShowStopped = $('.js_btn-show-task-stopped');
const $taskListRuns = $('.follow-tasks-runs');
const $taskListStopped = $('.follow-tasks-stopped');
const hideCls = 'd-none';
const showCls = 'd-block';

function fillListMeta($list, dataArray, isRuns) {
    const items = dataArray;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty().addClass('border-light-color');
    $(`<li class="list-group-item py-2"><h3>${(isRuns) ? 'Запущеные' : 'Остановленные'}</h3></li>`).appendTo($list);
    items.forEach((item) => {
        if (item.type !== 'FOLLOWING') {
            return;
        }
        if (item.status.state === 'STOPPED' && !isRuns) {
            $(`<li class="list-group-item p-0" data-username="${item.type}">
                <div class="media-body d-flex">
                    <div class="col task-type">
                        ${(item.task_id) ? `<p class="badge badge-secondary">${item.task_id}</p>` : ''}
                    </div>
                    <!--<div class="col task-subtype">
                        ${(item.subtype) ? `<p class="mt-0 mb-1">${item.subtype}</p>` : ''}
                    </div>-->
                    <div class="col task-progress">
                        <p class="small mb-2">reason</p>
                        <p class="mb-1">${item.status.reason}</p>
                    </div>
                </div>
            </li>`).appendTo($list);
        } else if (item.status.state !== 'STOPPED' && isRuns) {
            $(`<li class="list-group-item py-2" data-username="${item.type}">
                <div class="col task-progress">
                    <p class="mt-0 mb-1 name">Runs - ${item.status.reason}</p>
                </div>
            </li>`).appendTo($list);
        }
    });
}

function getTasksData() {
    UserTaskManager.getMetadata().then((result) => {
        console.log(result);
        if (result.status.state === 'ok') {
            fillListMeta($('.follow-tasks-runs'), result.data.meta, 'isRuns');
            fillListMeta($('.follow-tasks-stopped'), result.data.meta);
        }
    });
}
function initHandlers() {
    $btnShowRuns.on('click', () => {
        console.log('$btnShowRuns');
        $taskListStopped.addClass(hideCls).removeClass(showCls);
        $taskListRuns.addClass(showCls).removeClass(hideCls);
    });

    $btnShowStopped.on('click', () => {
        console.log('$btnShowStopped');
        $taskListRuns.addClass(hideCls).removeClass(showCls);
        $taskListStopped.addClass(showCls).removeClass(hideCls);
    });
}

/**
 * Init
 */
export function init() {
    $taskListStopped.addClass(hideCls);
    $taskListRuns.addClass(hideCls);
    getTasksData();
    initHandlers();
}
