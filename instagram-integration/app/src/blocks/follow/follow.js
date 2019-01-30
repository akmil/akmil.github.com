import * as followStatus from './follow-status';
import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';
import 'brutusin-json-forms';

const state = {
    username: '',
    user_default_config: {
        task_mode: 'SAFE'
    }
};

function fillListMeta($list, dataArray) {
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
                        ${(item.task_id) ? `<p class="mt-0 mb-1 name">${item.task_id}</p>` : ''}
                    </div>
                    <div class="col task-subtype">
                        ${(item.subtype) ? `<p class="mt-0 mb-1 name">${item.subtype}</p>` : ''}
                    </div>
                    <div class="col task-progress">
                        ${(item.status.state === 'STOPPED') ? `<p class="mt-0 mb-1 name">Остановлено - ${item.status.reason}</p>` : ''}
                    </div>
                    <!--<div class="col task-progress">
                        ${(item.progress)
                            ? `<p class="mt-0 mb-1 name">Количество - ${item.progress.count}</p>
                                <p class="mt-0 mb-1 name">Процент - ${item.progress.percent}</p>` : ''}
                    </div>-->
                </div>
            </li>`).appendTo($list);
    });
}

function fillListTypes($wrapper, data) {
    const structureObj = data['structure'];

    $wrapper.empty().addClass('border-light-color');
    $('<div class="">Тип задания</div><select name="task-type" id="task-types"></select>').appendTo($wrapper);
    for (const type in structureObj) {
        // console.log('structure: ' + item);
        if (Object.prototype.hasOwnProperty.call(structureObj, type)) {
            $(`<option class="list-group-item py-2" ${(type !== 'FOLLOWING') ? 'disabled="disabled"' : ''}
                value = "${JSON.stringify({type, subtype: structureObj[type]})}">
                ${type}
            </option>`).appendTo($('#task-types'));
        }
    }
}

function getTasksData() {
    UserTaskManager.getMetadata().then((result) => {
        if (result.status.state === 'ok') {
            fillListMeta($('.follow-tasks-list'), result.data.meta);
        }
    });
}

function getDataStep2(usersName) {
    console.log(usersName);
    getTasksData();
}

function getDataStep3() {
    const users = $('#followers').val()
        .trim()
        .replace(/ /g, '')
        .split(',')
        .filter(i => i.length > 0);

    state['user_custom_config'] = {
        users
    };
    const fillSpeedList = function ($wrapper, data) {
        const taskModes = data.cfg && data.cfg.task_modes;
        const radioBtnReducer = function (item) {
            switch (item) {
                case 'AGGRESSIVE':
                    return `<input type="radio" id="${item}" name="customRadio" value="safe" class="custom-control-input">
                    <label class="custom-control-label" for="${item}"><strong>Агрессивный:</strong> 30 подписок в час</label>`;
                // break;
                case 'MIDDLE':
                    return (`<input type="radio" id="${item}" name="customRadio" value="safe" class="custom-control-input">
                    <label class="custom-control-label" for="${item}"><strong>Средний:</strong> 18 подписок в час</label>`);
                // break;
                case 'SAFE':
                    return `<input type="radio" id="${item}" name="customRadio" value="safe" class="custom-control-input" checked>
                    <label class="custom-control-label" for="${item}"><strong>Безопасный:</strong> 9 подписок в час</label>`;
                // break;
                default:
                    console.log('default', item);
            }
        };
        // console.log('draw speed radioBtn');
        $wrapper.empty();
        for (const item in taskModes) {
            // console.log('structure: ' + item);
            if (Object.prototype.hasOwnProperty.call(taskModes, item)) {
                $(`<div class="custom-control custom-radio">
                ${radioBtnReducer(item)}
            </div>`).appendTo($wrapper);
            }
        }
    };

    // draw criteria
    UserTaskManager.getDefaultConfigs().then((result) => {
        // console.log('getDefaultConfigs');
        if (result.status.state === 'ok') {
            // console.log(result);
            fillSpeedList($('.js_follow-speed'), result.data.found);
        }
    });
}

function stepReducer(stepNumber) {
    switch (stepNumber) {
        case 0:
            getDataStep2(state.username); // [...new Set(state.username)]
            // console.log(state);
            break;
        case 1:
            getDataStep3();
            break;
        case 2:
            // console.log(stepNumber);
            // console.log(state);
            break;
        default:
            console.log('default', stepNumber);
    }
}

/**
 * Init header
 */
function initSteps() {
    const $form = $('.follow-form');
    $('.js_profile-user-follow>.container').removeClass('container');

    $form.find('fieldset:first-child').fadeIn('slow');

    $form.find('input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $form.find('.btn-next').on('click', function () {
        const parent_fieldset = $(this).parents('fieldset');
        let next_step = true;
        const radioBtnActive = parent_fieldset.find('input[name="userAccountRadio"]:checked');

        if (radioBtnActive.length > 0) {
            state.username = radioBtnActive.parents('li').data('username');
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
    $form.find('.btn-previous').on('click', function () {
        // state.username = [...new Set(state.username)];
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });

    // speed radio-btn group
    $('.js_follow-speed input[type=radio]').on('click', function () {
        const value = $(this).attr('value');
        state.user_default_config = {
            task_mode: value.toUpperCase()
        };
    });

    // submit
    $form.on('submit', function (e) {
        const genderVal = $(this).find('.select-gender option:selected').val();
        state.user_default_config = {
            ...state.user_default_config,
            criteria: {
                gender: genderVal.toUpperCase()
            }
        };
        const limit = document.forms['follow-form']['limit'];
        const have_posts = {
            from: document.forms['follow-form']['have_posts_from'].value,
            to: document.forms['follow-form']['have_posts_to'].value
        };
        const have_followers = {
            from: document.forms['follow-form']['have_followers_from'].value,
            to: document.forms['follow-form']['have_followers_to'].value
        };
        const have_followings = {
            from: document.forms['follow-form']['have_followings_from'].value,
            to: document.forms['follow-form']['have_followings_to'].value
        };

        if (limit.value === '') {
            limit.focus();
            return false;
        }
        state['user_default_config'].criteria = {
            limit: limit.value,
            'unfollow_then': !!$('#unfollow_then:checked').length,
            'follow_on_closed_profiles': !!$('#follow_on_closed_profiles:checked').length,
            have_posts,
            have_followers,
            have_followings
        };

        $(this).find('input[type="text"],input[type="number"],input[type="email"]').each(function () {
            if ($(this).val() === '') {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

        state.type = 'FOLLOWING';
        state.subtype = 'FOLLOWING_LIST';
        console.log('make request**  post: StartFollowingList', state);

        UserTaskManager.postStartFollowingList(state).then((result) => {
            if (result.status.state === 'ok') {
                console.log(JSON.stringify(result));
                $('.form-submit-finish').addClass('d-block')
                    .find('.alert').append(`<p>task_id: ${result.data.task_id}</p>`);
            }
        });

    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        // $(this).closest('form-submit-finish').removeClass('d-block');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
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
    // const radioBtn = (idx) => `<div class="col custom-control custom-radio js_user-radio">
    //         <input type="radio" name="userAccountRadio" id="customRadio-${idx}" class="custom-control-input" value="">
    //         <label class="custom-control-label" for="customRadio-${idx}">Подписаться</label>
    //     </div>`;
    const radioBtnAppend = (idx) => `<div class="">
            <input type="radio" name="userAccountRadio" id="customRadio-${idx}" class="custom-control-input d-none" value="">
        </div>`;
    const radioBtnWrap = (idx) => `<label class="accounts-list--label-wrapper col mb-0 media py-3" for="customRadio-${idx}"></label>`;
    const $accountsList = $('.accounts-list');
    const $li = $accountsList.find('li.media');
    $li.addClass('js_user-radio').removeClass('py-3 media');

    for (let i = 0; i < $li.length; i++) {
        // $($li[i]).append(radioBtn(i));
        $($li[i]).wrapInner(radioBtnWrap(i)).append(radioBtnAppend(i));
    }
    UserTaskManager.getTaskTypes().then((result) => {
        if (result.status.state === 'ok') {
            // console.log(result);
            fillListTypes($('.js_task-types'), result.data);
        }
    });

    $('.js_user-radio').on('click', 'input[type=radio]', function (e) {
        const $parentFieldset = $(this).parents('fieldset');
        $('li.active', $parentFieldset).removeClass('active');
        $(this).closest('li').addClass('active');
        $('.btn-next', $parentFieldset).prop('disabled', false);
    });

    $('.checkbox-cell').on('change', (e) => {
        console.log('validate');
        // updateStatus();
    });
}

/* working demo : http://brutusin.org/json-forms/#13
function formFromJson() {
    const schema = {
        "type": "object",
        "properties": {
            "prop1": {
                "type": "integer"
            },
            "prop2": {
                "type": "integer",
                "required": true
            },
            "prop3": {
                "type": "integer",
                "required": true
            },
            "composite1": {
                "type": "object",
                "properties": {
                    "nested1": {
                        "type": "number",
                        "required": true
                    },
                    "nested2": {
                        "type": "number",
                        "required": true
                    }
                },
                "required": [
                    "nested1",
                    "nested2"
                ]
            },
            "composite2": {
                "type": "object",
                "properties": {
                    "nested1": {
                        "type": "number",
                        "required": true
                    },
                    "nested2": {
                        "type": "number",
                        "required": true
                    }
                },
                "required": [
                    "nested1",
                    "nested2"
                ]
            }
        },
        "required": [
            "prop1",
            "prop2",
            "composite1"
        ]
    };
    const BrutusinForms = window.brutusin['json-forms'];
    const bf = BrutusinForms.create(schema);
    const container = document.getElementById('form1');
    console.log(window.brutusin);
    bf.render(container, data);
}*/

export function init() {
    if ($('.follow').length) {
        followStatus.init();
        initSteps();
        window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, (eventName, data) => {
            modifyAccList();
        });
    }
}
