import UserTaskManager from '../../../common/js-services/api-task-manager';
import viewUtils from '../../../common/js-services/view';
import {CONST} from '../../../common/js-services/consts';

const modeRus = (mode) => {
    switch (mode) {
        case 'AGGRESSIVE':
            return 'Агрессивный';
        case 'MIDDLE':
            return 'Средний';
        case 'SAFE':
            return ' Безопасный';
        default:
            break;
    }
};

function fillListByState(taskState, $list, item) {
    const {progress, created_at, task_id, type, status, username, mode} = item;
    const addItem = (tplStop) => {
        $(`<li class="list-group-item p-0 py-2" data-type="${type}" data-task-id="${task_id}">
                ${tplStop}
            </li>`).appendTo($list);
    };
    const tplPaused = `<div class="card-block">
        <h4 class="card-title">На паузе</h4>
        <div class="text-right">
            ${(progress && progress.timestamp) ? `<span class="text-muted">${viewUtils.getFormattedDateUtil(progress.timestamp)}</span>` : ''}
            ${created_at ? `<span class="text-muted">${viewUtils.getFormattedDateUtil(created_at)}</span>` : ''}
        </div>
        <span class="text-success">10%</span>
        <div class="progress mb-3">
            <div class="progress-bar bg-success" role="progressbar" style="width: 10%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <button class="btn btn-warning js_btn-delete-task">Удалить</button>`;
    const tplProgress = `<div class="no-gutters px-2 row task-progress">
            <div class="col-6 align-items-center d-flex">
                <img src="${sessionStorage.getItem(username)}" class="rounded-circle avatar" alt="аватар"/>
                <h2 class="mt-0 mb-1 ml-2">${username}</h2>
            </div>
            <div class="col-6 col-6--with-borders">
                <p class="pb-1 name"><b>ID:</b> ${task_id}</p>
                ${created_at ? `<p class="pb-1"><b>Запущено:</b> ${viewUtils.getFormattedDateUtil(created_at, 'showFullTime')}</p>` : ''}
                ${mode ? `<p class="pb-1"><b>Режим:</b> ${modeRus(mode)}</p>` : ''}
                <div class="text-center">
                    <button class="btn btn-outline-primary js_btn-stop-task mr-3"><i class="far fa-pause-circle fa-lg"></i></button>
                    <button class="btn btn-warning js_btn-delete-task"><i class="far fa-trash-alt fa-lg"></i></button>
                </div>
            </div>
        </div>`;
    const tplStop = `<div class="no-gutters px-2 row task-stopped">
            <div class="col-6 align-items-center d-flex">
                <img src="${sessionStorage.getItem(username)}" class="rounded-circle avatar" alt="аватар"/>
                <h2 class="mt-0 mb-1 ml-2">${username}</h2>
            </div>
            <div class="col-6 col-6--with-borders">
                <p class="pb-1 name"><b>ID:</b> ${task_id}</p>
                ${(item.status.reason) ? `<p class="my-1">${status.reason}</p>` : ''}
                ${created_at ? `<p class="pb-1"><b>Запущено:</b> ${viewUtils.getFormattedDateUtil(created_at, 'showFullTime')}</p>` : ''}
                ${mode ? `<p class="pb-1"><b>Режим:</b> ${modeRus(mode)}</p>` : ''}
                <div class="text-center">
                    <button class="btn btn-warning js_btn-delete-task"><i class="far fa-trash-alt fa-lg"></i></button>
                </div>
            </div>

        </div>`;
    const tplFinished = `<div class="col task-progress">
                <p class="mt-0 mb-1 name"><b>ID:</b> ${task_id}</p>
            </div>
            <button class="btn btn-warning js_btn-delete-task">Удалить</button>`;
    switch (taskState) {
        case 'PAUSED':
            addItem(tplPaused);
            break;
        case 'IN_PROGRESS':
            addItem(tplProgress);
            break;
        case 'STOPPED':
            addItem(tplStop);
            break;
        case 'FINISHED':
            addItem(tplFinished);
            break;
        default:
            break;
    }
}

function fillListMeta($list, items, isRuns) {
    // const defaultAvatarSrc = CONST.user.defaulAvatar;
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
        getTasksData(holders, _path);
    });
}
