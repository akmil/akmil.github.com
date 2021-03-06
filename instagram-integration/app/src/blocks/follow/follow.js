// import * as followStatus from './follow-status';
import * as followStatusBySubtype from '../../blocks/_shared/task-status/task-status-by-subtype';
import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';
import viewUtils from '../../common/js-services/view';
import {attachTxtFileHandler} from './follow-read-file-txt';
import 'brutusin-json-forms';
import {initLogsTab} from '../_shared/logs/logs-tabs';
import {/* initTagsInput, */nextBtnvalidateCompetitorsHandler} from '../_shared/tags-input/tags-input';
import * as smoothStarting from '../_shared/form-helper/smooth-start';

const state = {
    username: '',
    subtype: CONST.url.tmTypes.followingSubT[0], // default value
    user_default_config: {
        task_mode: 'SAFE'
    }
};

function fillListMeta($list, dataArray) {
    const items = dataArray;
    // const defaultAvatarSrc = CONST.user.defaulAvatar;
    $list.empty().addClass('border-light-color');
    $('<li class="list-group-item py-2"><h3>UserTaskManager</h3></li>').appendTo($list);
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

/*
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
*/

function getTasksData(path) {
    UserTaskManager.getMetadata(path).then((result) => {
        if (result.status.state === 'ok') {
            fillListMeta($('.follow-tasks-list'), result.data.meta);
        }
    });
}

function getDataStep2() {
    const path = {
        type: CONST.url.tmTypes.followingT,
        subtype: state.subtype || CONST.url.tmTypes.followingSubT[0]
    };
    getTasksData(path);
}

function addPostsForActiveCompetitors(defaultCfg) {
    const {config: {posts}} = defaultCfg;
    if (!posts) {
        $('.js_post-count').addClass('d-none');
        return;
    }
    // state.user_default_config.posts = posts;
    $('#post-count').val(posts);
    $('.js_post-count').removeClass('d-none');
}

function getDataStepSpeed(stepNumber) {
    const fillSpeedList = viewUtils.fillRadioGroupList;
    const path = {
        type: CONST.url.tmTypes.followingT,
        subtype: state.subtype || CONST.url.tmTypes.followingSubT[0]
    };
    function toggleAddTextBtn(subtype) {
        if (path.subtype === 'FOLLOWING_BY_LIST') {
            // show txt fileUpload
            $('.add-file').addClass('d-block');
            $('.add-competitors').addClass('d-none').removeClass('d-block');
            const nextStep = $('.js_add-new-task fieldset').get(stepNumber + 1);
            $(nextStep).find('.btn-next').attr('disabled', 'disabled');
            // console.log(nextStepProceedBtn);
        } else {
            // show competitors
            $('.add-competitors').addClass('d-block');
            $('.add-file').addClass('d-none').removeClass('d-block');
            const nextStep = $('.js_add-new-task fieldset').get(stepNumber + 1);
            $(nextStep).find('.btn-next').removeAttr('disabled');
        }
    }
    console.log('path.subtype', path.subtype);

    toggleAddTextBtn(path.subtype);

    // draw criteria
    UserTaskManager.getDefaultConfigs(path).then((result) => {
        console.log('getDefaultConfigs');
        if (result.status.state === 'ok') {
            const {
              data: {
                found: {
                    config: {
                    task_modes
                  }
                }
              }
            } = result;

            // addSmoothStart(result.data.found);
            const defaultCfg = result.data.found;
            state.user_default_config = {
                ...state.user_default_config
            };
            smoothStarting.addSmoothStart(defaultCfg, state);
            fillSpeedList($('.js_follow-speed'), task_modes);
            $('.js_follow-speed input[type=radio]').on('click', function () {
                const value = $(this).attr('value');
                state.user_default_config = {
                    task_mode: value.toUpperCase()
                };
            });

            // Количество публикаций
            addPostsForActiveCompetitors(result.data.found);
        }
    });
}
function setCompetitors() {
    const competitors = viewUtils.getValByCommaSeparator($('.follow-form').find('#followers'));

    state['user_custom_config'] = {
        competitors
    };
}

function stepReducer(stepNumber) {
    const $competitorsTextArea = $('.js_follow-competitors');
    const nextStepBtn = $competitorsTextArea.closest('.add-competitors').find('.btn-next');
    switch (stepNumber) {
        case 0:
            getDataStep2(state.username);
            // console.log(state);
            break;
        case 1:
            getDataStepSpeed(stepNumber);
            nextBtnvalidateCompetitorsHandler($competitorsTextArea, nextStepBtn);
            break;
        case 2:
            setCompetitors();
            break;
        default:
            console.log('default', stepNumber);
    }
}

function cbError(res) {
    const msg = res.status.message;
    $('.form-submit-finish--error').addClass('d-block')
        .find('.alert').append(`<p>${msg}</p>`);
}

/**
 * Init header
 */
function initSteps(formSelector) {
    const $form = $(formSelector);
    $('.js_profile-user-follow>.container').removeClass('container');

    attachTxtFileHandler('.file-upload-container');

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
            state.slot_index = radioBtnActive.parents('li').data('slotindex');
        }
        stepReducer(parent_fieldset.index(), state);

        parent_fieldset.find('input[type="text"],input[type="email"]').each(function () {
            if ($(this).val() === '') {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
            if ($(this).parent().hasClass('bootstrap-tagsinput')) {
                next_step = true;
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

    $('.js_get-follow-type input[type=radio]').on('click', (e) => {
        const value = $(e.target).attr('value');
        state.subtype = value.toUpperCase();
        // console.log(state);
    });

    // submit
    $form.on('submit', function (e) {

        state.user_default_config = {
            ...state.user_default_config,
            criteria: {}
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

        state.type = CONST.url.tmTypes.followingT; // 'FOLLOWING';
        // console.log('----+ state.subtype +----', state.subtype);
        if (state.subtype === 'FOLLOWING_BY_LIST') {
            // text file should be added
            state['user_custom_config'].attachment = {
                'list_id': $('.add-file .file-upload-container').attr('attached-txt-id')
            };
        }
        if (state.subtype === CONST.url.tmTypes.followingSubT[1]) {
            const posts = $('#post-count').val();
            state.user_default_config = {
                ...state.user_default_config,
                posts
            };
            // competitors added before
        }
        console.log('make request**  post: StartFollowingList', state);

        UserTaskManager.postStartFollowingList(state, cbError).then((result) => {
            if (result.status.state === 'ok') {
                console.log(JSON.stringify(result));
                $('.form-submit-finish').find('.alert p').remove();
                $('.form-submit-finish').addClass('d-block')
                    .find('.alert').append(`<p>task_id: ${result.data.task_id}</p>`);
            }
        });

    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        // $(this).closest('form-submit-finish').removeClass('d-block');
        $('#v-pills-all-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    // alert close
    $('.form-submit-finish--error .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-all-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    // prev btn: clear-competitors
    $('.js_follow-clear-competitors').on('click', function () {
        const $competitorsTextArea = $('.js_follow-competitors');
        $competitorsTextArea.val('');
    });
}

// eslint-disable-next-line no-unused-vars
let usernameSelected = '';
// let slotIndexSelected = '';
const clsConst = {
    currentPageCls: '.follow',
    tasksList: '.log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: CONST.url.tmTypes.followingT,
    pathSubType: CONST.url.tmTypes.followingSubT[0]
};

function setUserNameCb(_usernameSelected, _slot_index) {
    usernameSelected = _usernameSelected;
    // slotIndexSelected = _slot_index;
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

// TODO : use from wizard
export function modifyAccList() {
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

    $('.js_user-radio').on('click', 'input[type=radio]', function (e) {
        const $parentFieldset = $(this).parents('fieldset');
        $('li.active', $parentFieldset).removeClass('active');
        $(this).closest('li').addClass('active');
        $('.btn-next', $parentFieldset).prop('disabled', false);
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
    const isInCorrectPage = $('.follow').length;
    if (isInCorrectPage) {
        const initialPath = {
            type: CONST.url.tmTypes.followingT,
            subtype: CONST.url.tmTypes.followingSubT[0],
            subtypes: CONST.url.tmTypes.followingSubT
        };
        followStatusBySubtype.init({isInCorrectPage, initialPath});
        initSteps('.follow-form');
        console.log(clsConst.currentPageCls);
        const textRusArray = ['По списку', 'По активной аудитории конкурентов'];
        initLogsTab({logsState: CONST.logsState, logsSubtypes: initialPath.subtypes, clsConst, setUserNameCb, textRusArray});
        // initTagsInput();

        // TODO : use wizard.init()
        window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED, (eventName, data) => {
            modifyAccList();
            // console.log('modifyAccList');
        });
    }
}
