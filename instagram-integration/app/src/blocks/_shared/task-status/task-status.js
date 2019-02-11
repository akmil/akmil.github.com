import UserTaskManager from '../../../common/js-services/api-task-manager';
import viewUtils from '../../../common/js-services/view';
import {CONST} from '../../../common/js-services/consts';

function fillListByState(taskState, $list, item) {
    const {progress, task_id, type, status} = item;
    const addItem = (tplStop) => {
        $(`<li class="list-group-item p-0 py-2" data-type="${type}" data-task-id="${task_id}">
                ${tplStop}
            </li>`).appendTo($list);
    };
    const tplPaused = `<div class="card-block">
        <h4 class="card-title">На паузе</h4>
        <div class="text-right">
            <span class="text-muted">${viewUtils.getFormattedDateUtil(progress.timestamp)}</span>
        </div>
        <span class="text-success">10%</span>
        <div class="progress mb-3">
            <div class="progress-bar bg-success" role="progressbar" style="width: 10%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <button class="btn btn-warning js_btn-delete-task">Удалить</button>`;
    const tplPregress = `<div class="col task-progress">
            <p class="mt-0 mb-1 name">В прогрессе : ${task_id}</p>
        </div>
        <button class="btn btn-outline-primary js_btn-stop-task">Остановить</button>
        <button class="btn btn-warning js_btn-delete-task">Удалить</button>`;
    const tplStop = `<div class="media-body d-flex">
            <div class="col task-type">
                ${(task_id) ? `<p class="badge badge-secondary my-1">${task_id}</p>` : ''}
                <div class="task-progress">
                    <p class="small my-1">Остановлено</p>
                    ${(item.status.reason) ? `<p class="my-1">${status.reason}</p>` : ''}
                </div>
            <button class="btn btn-warning js_btn-delete-task">Удалить</button>
            </div>
        </div>`;
    const tplFinished = `<div class="col task-progress">
                <p class="mt-0 mb-1 name">В прогрессе : ${task_id}</p>
            </div>
            <button class="btn btn-outline-primary js_btn-stop-task">Остановить</button>
            <button class="btn btn-warning js_btn-delete-task">Удалить</button>`;
    switch (taskState) {
        case 'STOPPED':
            addItem(tplStop);
            break;
        case 'IN_PROGRESS':
            addItem(tplPregress);
            break;
        case 'FINISHED':
            addItem(tplFinished);
            break;
        case 'PAUSED':
            addItem(tplPaused);
            break;
        default:
            break;
    }
}

function fillListMeta($list, items, isRuns) {
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty();
    if (!items.length) {
        $(`<li class="list-group-item py-2">
                <p>В этом разделе нет ни одной задачи.</p>
            </li>`).appendTo($list);
        return;
    }
    items.forEach((item) => {
        if ((item.status.state === 'STOPPED' || item.status.state === 'FINISHED') && !isRuns) {
            fillListByState(item.status.state, $list, item);
        } else if ((item.status.state === 'IN_PROGRESS' || item.status.state === 'PAUSED') && isRuns) {
            fillListByState(item.status.state, $list, item);
        }
    });
    if (!$('li', $list).length) {
        $(`<li class="list-group-item py-2">
            <p>В этом разделе нет ни одной задачи.</p>
        </li>`).appendTo($list);
    }
}

/* eslint-disable no-use-before-define */
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
            getTasksData(holders, _path, 'excludeAddingSubtype');
        });
    });

    $btnDelTask.on('click', (e) => {
        const taskId = getTaskID(e);
        console.log('DELETE id', taskId);
        UserTaskManager.deleteTaskByID(taskId).then((result) => {
            console.log(result);
            getTasksData(holders, _path, 'excludeAddingSubtype');
        });
    });
}

export function getTasksData(holders, path, excludeAddingSubtype) {
    const {$runs, $stopped} = holders;
    const _path = {
        ...path
    };
    if (excludeAddingSubtype) {
        _path.excludeAddingSubtype = excludeAddingSubtype;
    }
    UserTaskManager.getMetadata(_path).then((result) => {
        // console.log('getMetadata & fillListMeta', result);
        if (result.status.state === 'ok') {
            fillListMeta($runs, result.data.meta, 'isRuns');
            fillListMeta($stopped, result.data.meta);
            initHandlers(holders, path);
        }
    });
}

/**
 * Init
 */
export function init() {
    const holders = {
        $runs: $('.follow-tasks-runs'),
        $stopped: $('.follow-tasks-stopped')
    };
    getTasksData(holders);
    window.PubSub.subscribe(CONST.events.tasks.NEW_TASK_CREATED, (eventName, data) => {
        const _path = {
            type: CONST.url.tmTypes.followingT,
            subtype: CONST.url.tmTypes.followingSubT[0]
        };
        getTasksData(holders, _path, 'excludeAddingSubtype');
    });
}
