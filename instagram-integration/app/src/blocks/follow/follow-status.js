/**/
import {CONST} from '../../common/js-services/consts';
import {getTasksData} from '../_shared/task-status/task-status';

export function init() {
    const path = {
        type: CONST.url.tmTypes.followingT,
        subtype: CONST.url.tmTypes.followingSubT[0]
    };
    const wrappers = {
        // $runs: $('.follow-tasks-runs'),
        // $stopped: $('.follow-tasks-stopped'),
        $all: $('.follow-tasks-all')
    };
    getTasksData(wrappers, path);
    window.PubSub.subscribe(CONST.events.tasks.NEW_TASK_CREATED, (eventName, data) => {
        getTasksData(wrappers, path);
    });
}

/*
import UserTaskManager from '../../common/js-services/api-task-manager';
import viewUtils from '../../common/js-services/view';
import {CONST} from '../../common/js-services/consts';

function fillListMeta($list, dataArray, isRuns) {
    const items = dataArray;
    // const defaultAvatarSrc = CONST.user.defaulAvatar;
    $list.empty();
    if (!items.length) {
        $(`<li class="list-group-item py-2">
                <p>В этом разделе нет ни одной задачи.</p>
            </li>`).appendTo($list);
        return;
    }
    items.forEach((item) => {
        const {progress, task_id, type, subtype} = item;
        if (item.status.state === 'STOPPED' && !isRuns) {
            $(`<li class="list-group-item p-0 py-2" data-username="${type}" data-task-id="${task_id}">
                <div class="media-body d-flex">
                    <div class="col task-type">
                        ${(task_id) ? `<p class="badge badge-secondary my-1">${task_id}</p>` : ''}
                        <div class="task-progress">
                            <p class="small my-1">Остановлено</p>
                            ${(item.status.reason) ? `<p class="my-1">${item.status.reason}</p>` : ''}
                        </div>
                    <button class="btn btn-warning js_btn-delete-task">Удалить</button>
                    </div>
                    <!--<div class="col task-subtype">
                        ${(subtype) ? `<p class="mt-0 mb-1">${subtype}</p>` : ''}
                    </div>-->
                </div>
            </li>`).appendTo($list);
        } else if (item.status.state === 'IN_PROGRESS' && isRuns) {
            $(`<li class="list-group-item py-2" data-task-id="${task_id}">
                <div class="col task-progress">
                    <p class="mt-0 mb-1 name">В прогрессе : ${task_id}</p>
                </div>
                <button class="btn btn-outline-primary js_btn-stop-task">Остановить</button>
                <button class="btn btn-warning js_btn-delete-task">Удалить</button>
            </li>`).appendTo($list);
        } else if (item.status.state === 'FINISHED' && !isRuns) {
            $(`<li class="list-group-item py-2" data-task-id="${task_id}">
                 <div class="card-block">
                    <h4 class="card-title">Выполненно</h4>
                    <div class="text-right">
                        <span class="text-muted">${viewUtils.getFormattedDateUtil(progress.timestamp)}</span>
                    </div>
                    <span class="text-success">100%</span>
                    <div class="progress mb-3">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button class="btn btn-warning js_btn-delete-task">Удалить</button>
                </div>
            </li>`).appendTo($list);
        } else if (item.status.state === 'PAUSED' && isRuns) {
            $(`<li class="list-group-item py-2" data-task-id="${task_id}">
                <div class="card-block">
                    <h4 class="card-title">На паузе</h4>
                    <div class="text-right">
                        <span class="text-muted">${viewUtils.getFormattedDateUtil(progress.timestamp)}</span>
                    </div>
                    <span class="text-success">10%</span>
                    <div class="progress mb-3">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 10%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button class="btn btn-warning js_btn-delete-task">Удалить</button>
                </div>
            </li>`).appendTo($list);
        }
        if (!$('li', $list).length) {
            $(`<li class="list-group-item py-2" data-task-id="${task_id}">
                <p>В этом разделе нет ни одной задачи.</p>
            </li>`).appendTo($list);
        }
    });
}

function initHandlers(holders, path) {
    const _path = path || {
        type: CONST.url.tmTypes.followingT,
        subtype: CONST.url.tmTypes.followingSubT[0]
    };
    const $btnStopTask = $('.js_btn-stop-task');
    const $btnDelTask = $('.js_btn-delete-task');
    const getTaskID = (e) => {
        const btn = $(e.target);
        return btn.closest('li').data('task-id');
    };

    $btnStopTask.on('click', (e) => {
        const taskId = getTaskID(e);
        console.log('STOP Task id', taskId);
        UserTaskManager.stopTaskByID(taskId).then((result) => {
            console.log(result);
            getTasksData(holders, _path);
        });
    });

    $btnDelTask.on('click', (e) => {
        const taskId = getTaskID(e);
        console.log('DELETE id', taskId);
        UserTaskManager.deleteTaskByID(taskId).then((result) => {
            console.log(result);
            getTasksData(holders, _path);
        });
    });
}

export function getTasksData(holders, path) {
    const {$runs, $stopped} = holders;
    const _path = path || {
        type: CONST.url.tmTypes.followingT,
        subtype: CONST.url.tmTypes.followingSubT[0]
    };
    UserTaskManager.getMetadata(_path).then((result) => {
        // console.log('getMetadata & fillListMeta', result);
        if (result.status.state === 'ok') {
            fillListMeta($runs, result.data.meta, 'isRuns');
            fillListMeta($stopped, result.data.meta);
            initHandlers(holders, path);
        }
    });
}

export function init() {
    const holders = {
        $runs: $('.follow-tasks-runs'),
        $stopped: $('.follow-tasks-stopped')
    };
    getTasksData(holders);
    window.PubSub.subscribe(CONST.events.tasks.NEW_TASK_CREATED, (eventName, data) => {
        getTasksData(holders);
    });
}
*/

