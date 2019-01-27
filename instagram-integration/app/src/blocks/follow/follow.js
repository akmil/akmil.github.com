import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';

const state = {
    username: '',
    user_default_config: {
        task_mode: 'SAFE'
    }
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

function getDataStep2(usersName) {
    console.log(usersName);
    UserTaskManager.getMetadata();
    getTasksData();
}

function getDataStep3(usersArr) {
    const users = $('#followers').val()
        .trim()
        .replace(/ /g, '')
        .split(',')
        .filter(i => i.length > 0);

    state['user_custom_config'] = {
        users
    };
}

function stepReducer(stepNumbre) {
    console.log('reduce', stepNumbre);
    switch (stepNumbre) {
        case 0:
            getDataStep2(state.username); // [...new Set(state.username)]
            console.log(state);
            break;
        case 1:
            getDataStep3();
            console.log(state);
            break;
        case 2:
            console.log(stepNumbre);
            console.log(state);
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

        const radioBtnActive = parent_fieldset.find('input[name="userAccountRadio"]:checked');
        // const value = $(this).attr('value');
        // state.username.length = 0;
        if (radioBtnActive.length > 0) {
            state.username = radioBtnActive.parents('li').data('username');
            // radioBtnActive.each(function () {
            //     state.username.push($(this).parents('li').data('username'));
            // });
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
        // if ($(this).is(':checked')) {
        //     console.log('its checked');
        // }
    });

    // submit
    $('.registration-form').on('submit', function (e) {
        const genderVal = $(this).find('.select-gender option:selected').val();
        state.user_default_config = {
            ...state.user_default_config,
            following_criteria: {
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
        state['user_default_config'].following_criteria = {
            limit: limit.value,
            'unfollow_then': true,
            'follow_on_closed_profiles': true,
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

        // state.id = {
        //     type: 'FOLLOWING',
        //     subtype: 'FOLLOWING_LIST'
        // };
        state.type = 'FOLLOWING';
        state.subtype = 'FOLLOWING_LIST';
        console.log('make request**  post: StartFollowingList', state);

        UserTaskManager.postStartFollowingList(state).then((result) => {
            if (result.status.state === 'ok') {
                console.log(JSON.stringify(result));
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
    const radioBtn = (idx) => `<div class="col custom-control custom-radio js_user-radio">
            <input type="radio" name="userAccountRadio" id="customRadio-${idx}" class="custom-control-input" value="">
            <label class="custom-control-label" for="customRadio-${idx}">Подписаться</label>
        </div>`;
    const $accountsList = $('.accounts-list');
    const $li = $accountsList.find('.media-body');
    for (let i = 0; i < $li.length; i++) {
        $($li[i]).append(radioBtn(i));
    }

    $('.js_user-radio input[type=radio]').on('click', function () {
        const $parentFieldset = $(this).parents('fieldset');
        // const $parentFieldset = $accountsList.parents('fieldset');
        $('.btn-next', $parentFieldset).prop('disabled', false);
        // if ($('div.custom-checkbox input:checked').length > 0) {
        //     $('.btn-next', $parentFieldset).prop('disabled', false);
        // } else {
        //     $('.btn-next', $parentFieldset).prop('disabled', true);
        // }
    });

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
