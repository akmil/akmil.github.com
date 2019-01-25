import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';

const state = {
    username: []
};

function fillList($list, dataArray) {
    const items = dataArray;
    // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
    $list.empty().addClass('border-light-color');
    $('<li class="list-group-item py-2"><h3>UserTaskManager -> getMetadata</h3></li>').appendTo($list);
    items.forEach((item) => {
        // const info = item.info;
        // const checkpoint = item.checkpoint || item;
        $(`<li class="list-group-item py-2" data-username="${item.type}">                
                <div class="media-body d-flex">
                    <div class="col task-type">
                        ${(item.type) ? `<h4 class="mt-0 mb-1 name">${item.type}</h4>` : ''}
                    </div>
                    <div class="col task-subtype">
                        ${(item.subtype) ? `<p class="mt-0 mb-1 name">${item.subtype}</p>` : ''}
                    </div>
                    <div class="col task-progress">
                        ${(item.status) ? `<p class="mt-0 mb-1 name">Статус - ${item.status.state}</p>` : ''}
                    </div>  
                    <div class="col task-progress">
                        ${(item.progress)
                            ? `<p class="mt-0 mb-1 name">Количество - ${item.progress.count}</p>
                                <p class="mt-0 mb-1 name">Процент - ${item.progress.percent}</p>` : ''}
                    </div>                                    
                </div>
            </li>`).appendTo($list);
    });
}

function fillListTypes($list, data) {
    $list.empty().addClass('border-light-color');
    $('<li class="list-group-item py-2"><h3>UserTaskManager -> getTaskTypes</h3></li>').appendTo($list);

    const structureObj = data['structure'];
    for (const item in structureObj) {
        // console.log('structure: ' + item);
        if (Object.prototype.hasOwnProperty.call(structureObj, item)) {
            console.log(`obj.${item} = ${structureObj[item]}`);
            $(`<li class="list-group-item py-2">
                <div class="media-body d-flex">                    
                    <div class="col task-progress">
                        ${(structureObj[item]) ? `<p class="mt-0 mb-1 name">${item} -- ${structureObj[item]}</p>` : ''}
                    </div>                                    
                </div>
            </li>`).appendTo($list);
        }
    }

}

function getTasksData() {
    UserTaskManager.getMetadata().then((result) => {
        console.log(result);
        if (result.status.state === 'ok') {
            fillList($('.js_task-meta-list'), result.data.meta);
        }
    });

    UserTaskManager.getTaskTypes().then((result) => {
        console.log('getTaskTypes');
        if (result.status.state === 'ok') {
            console.log(result);
            fillListTypes($('.js_task-types'), result.data);
        }
    });

    // todo: find out URL
    UserTaskManager.getDefaultConfigs().then((result) => {
        console.log('getDefaultConfigs');
        if (result.status.state === 'ok') {
            console.log(result);
        }
    });

    UserTaskManager.postStartFollowingList().then((result) => {
        console.log('postStartFollowingList', result);
        if (result.status.state === 'ok') {
            console.log(JSON.stringify(result));
            fillListTypes($('.js_task-start-following'), result.data);
        }
    });
}

function getDataStep2(usersArr) {
    console.log(usersArr);
    UserTaskManager.getMetadata(usersArr);
    getTasksData();
}

function stepReducer(stepNumbre) {
    console.log('reduce', stepNumbre);
    switch (stepNumbre) {
        case 0:
            console.log(stepNumbre);
            getDataStep2([...new Set(state.username)]);
            break;
        case 1:
            console.log(stepNumbre);
            break;
        case 2:
            console.log(stepNumbre);
            break;
        default:
            console.log('default', stepNumbre);
    }
}

/**
 * Init header
 */
function initSteps() {
    $('.js_profile-user-follow>.container').removeClass('container');

    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $('.registration-form .btn-next').on('click', function () {
        const parent_fieldset = $(this).parents('fieldset');
        let next_step = true;

        const checkBoxes = parent_fieldset.find('div.custom-checkbox input:checked');
        state.username.length = 0;
        if (checkBoxes.length > 0) {
            checkBoxes.each(function () {
                state.username.push($(this).parents('li').data('username'));
            });
        }
        stepReducer(parent_fieldset.index(), state);

        parent_fieldset.find('input[type="text"],input[type="email"]').each(function () {
            if ($(this).val() === '') {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });

    // previous step
    $('.registration-form .btn-previous').on('click', function () {
        state.username = [...new Set(state.username)];
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });

    // submit
    $('.registration-form').on('submit', function (e) {

        $(this).find('input[type="text"],input[type="email"]').each(function () {
            if ($(this).val() === '') {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

    });
}

/*
function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}*/

function modifyAccList() {
    const checkboxCell = (idx) => `<div class="col checkbox-cell">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="check-${idx}">
              <label class="custom-control-label" for="check-${idx}">Подписаться</label>
            </div>
        </div>`;
    const $accountsList = $('.accounts-list');
    const $li = $accountsList.find('.media-body');
    for (let i = 0; i < $li.length; i++) {
        $($li[i]).append(checkboxCell(i));
    }

    // const $parentFieldset = $accountsList.parents('fieldset');
    // function updateStatus() {
    //     if ($('div.custom-checkbox input:checked').length > 0) {
    //         $('.btn-next', $parentFieldset).prop('disabled', false);
    //     } else {
    //         $('.btn-next', $parentFieldset).prop('disabled', true);
    //     }
    // }

    $('.checkbox-cell').on('change', (e) => {
        console.log('validate');
        // updateStatus();
    });
}
// function initHandlers(){}

export function init() {
    initSteps();
    if ($('.follow').length) {
        window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, (eventName, data) => {
            console.log('subscribe');
            modifyAccList();
        });
    }
}
