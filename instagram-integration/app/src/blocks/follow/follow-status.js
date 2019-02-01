import UserTaskManager from '../../common/js-services/api-task-manager';
import viewUtils from '../../common/js-services/view';
import {CONST} from '../../common/js-services/consts';

function fillListMeta($list, dataArray, isRuns) {
    const items = dataArray;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty();
    items.forEach((item) => {
        const progress = {
            count: 1,
            index: 0,
            percent: 55,
            timestamp: 1548669507658
        };
        if (item.type !== 'FOLLOWING') {
            return;
        }
        if (item.status.state === 'STOPPED' && !isRuns) {
            $(`<li class="list-group-item p-0" data-username="${item.type}" data-task-id="${item.task_id}">
                <div class="media-body d-flex">
                    <div class="col task-type">
                        ${(item.task_id) ? `<p class="badge badge-secondary my-1">${item.task_id}</p>` : ''}
                        <div class="task-progress">
                            <p class="small my-1">Остановлено</p>
                            <p class="my-1">${item.status.reason}</p>
                        </div>
                    <button class="btn btn-warning js_btn-delete-task">Удалить</button>
                    </div>
                    <!--<div class="col task-subtype">
                        ${(item.subtype) ? `<p class="mt-0 mb-1">${item.subtype}</p>` : ''}
                    </div>-->                    
                </div>
            </li>`).appendTo($list);
        } else if (item.status.state === 'IN_PROGRESS') {
            $(`<li class="list-group-item py-2" data-task-id="${item.task_id}">
                <div class="col task-progress">
                    <p class="mt-0 mb-1 name">В прогрессе : ${item.status.reason}</p>
                </div>
            </li>`).appendTo($list);
        } else if ((item.status.state === 'FINISHED' || item.status.state === 'IN_PROGRESS') && !isRuns) {
            $(`<li class="list-group-item py-2" data-task-id="${item.task_id}">
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
        }
        if (!$('li', $list).length) {
            $(`<li class="list-group-item py-2" data-task-id="${item.task_id}">
                <p>В этом разделе нет ни одной задачи.</p>                
            </li>`).appendTo($list);
        }
    });
}

/* eslint-disable no-use-before-define */
function initHandlers() {
    const $btnStopTask = $('.js_btn-stop-task');
    const $btnDelTask = $('.js_btn-delete-task');
    const getTaskID = (e) => {
        const btn = $(e.target);
        return btn.closest('li').data('task-id');
    };

    $btnStopTask.on('click', (e) => {
        const taskId = getTaskID(e);
        console.log('STOP Task id', taskId);
        UserTaskManager.stopFollowingList(taskId).then((result) => {
            console.log(result);
            getTasksData();
        });
    });

    $btnDelTask.on('click', (e) => {
        const taskId = getTaskID(e);
        console.log('DELETE id', taskId);
        UserTaskManager.deleteFollowingList(taskId).then((result) => {
            console.log(result);
            getTasksData();
        });
    });
}

function getTasksData() {
    const path = {
        type: CONST.url.tmTypes.followingT,
        subType: CONST.url.tmTypes.followingSubT[0]
    };
    UserTaskManager.getMetadata(path).then((result) => {
        // console.log(result);
        if (result.status.state === 'ok') {
            fillListMeta($('.follow-tasks-runs'), result.data.meta, 'isRuns');
            fillListMeta($('.follow-tasks-stopped'), result.data.meta);
            initHandlers();
        }
    });
}

/**
 * Init
 */
export function init() {
    getTasksData();
    window.PubSub.subscribe(CONST.events.tasks.NEW_TASK_CREATED, (eventName, data) => {
        getTasksData();
    });
}
