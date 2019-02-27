/* eslint-disable no-unused-vars */
import {CONST} from '../../common/js-services/consts';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import UserTaskManager from '../../common/js-services/api-task-manager';
import * as tabs from '../_shared/tebs-pils/tabs';
import * as autoanswerStatus from './autoanswer-status';
import * as logs from '../_shared/logs/logs';
import * as imageUpload from '../_shared/image-upload/image-upload';
import {getPosts} from './utils-modal';
import {tplTextField} from './addAnswerTemplate';

let usernameSelected = '';
const selectCls = 'js_logs-accounts';
const clsConst = {
    currentPageCls: '.stories-page',
    tasksList: '.log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: CONST.url.tmTypes.storiesT,
    pathSubTypes: CONST.url.tmTypes.storiesSubT
};
const elSelector = {
    fields: '.autoanswer-text-fields',
    keyWord: 'textarea.answer-words',
    answer: 'textarea.answer-messages',
    fileUploadBox: '.file-upload',
    addPostBtns: '.js_autoanswer-add-post'
};
const state = {
    subtype: clsConst.pathSubTypes[0]
};

function onSubmitHandler(e) {
    // const fields = $(elSelector.fields);
    const form = $(e.target);
    const formName = 'wizard-form';

    const taskMode = $(form).find('.select-task_mode option:selected').val();
    state.user_default_config = {
        ...state.user_default_config,
        task_mode: taskMode.toUpperCase(),
        criteria: {}
    };
    const limit = document.forms[formName]['limit'];
    // const have_posts = {
    //     from: document.forms[formName]['have_posts_from'].value,
    //     to: document.forms[formName]['have_posts_to'].value
    // };
    const cycle_pause = {
        from: document.forms[formName]['have_cycle_pause_from'].value,
        to: document.forms[formName]['have_cycle_pause_to'].value
    };
    const followings = {
        from: document.forms[formName]['have_followings_from'].value,
        to: document.forms[formName]['have_followings_to'].value
    };

    if (limit.value === '') {
        limit.focus();
        return false;
    }
    state['user_default_config'].criteria = {
        max_views: limit.value,
        // 'unfollow_then': !!$('#unfollow_then:checked').length,
        // 'follow_on_closed_profiles': !!$('#follow_on_closed_profiles:checked').length,
        // have_posts,
        // have_followers,
        followings
    };

    $(form).find('input[type="text"],input[type="number"],input[type="email"]').each(function () {
        if ($(this).val() === '') {
            e.preventDefault();
            $(this).addClass('input-error');
        } else {
            $(this).removeClass('input-error');
        }
    });

    // state.type = CONST.url.tmTypes.followingT;
    // state.subtype = CONST.url.tmTypes.followingSubT[0];
    console.log('onSubmitHandler **request**  post: StartFollowingList', state);

    UserTaskManager.postStartFollowingList(state).then((result) => {
        if (result.status.state === 'ok') {
            console.log(JSON.stringify(result));
            $('.form-submit-finish').addClass('d-block')
                    .find('.alert').append(`<p>task_id: ${result.data.task_id}</p>`);
        }
    });
}

function fillListUsers($wrapper, accounts) {
    $wrapper.empty().addClass('border-light-color');
    $(`<div class="">Доступные аккаунты</div><select name="task-type" class="${selectCls}"></select>`).appendTo($wrapper);
    accounts.forEach((name) => {
        $(`<option class="list-group-item py-2" value="${name}">
            ${name}
        </option>`).appendTo($(`.${selectCls}`));
    });
    $(`.${selectCls}`).on('change', function () {
        usernameSelected = $(`.${selectCls} option:selected`).val();
        logs.init(selectCls, clsConst);
    });
}

/**
 * Init Handlers
 */
function initHandlers() {

    $('.js_add-autoanswer').on('click', (e) => {
        const lastTextField = $('.autoanswer-text-fields').last();
        tplTextField().insertAfter(lastTextField);
        imageUpload.init();
    });

    // alert close
    $('.form-submit-finish .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    // alert close
    $('.form-submit-finish--error .close').on('click', function () {
        // console.log('alert close');
        $('#v-pills-runned-tab').trigger('click');
        window.PubSub.publish(CONST.events.tasks.NEW_TASK_CREATED);
    });

    tabs.init(fillListUsers);
}

function setUserName(state) {
    // console.log('getTasksData', state.username);
    usernameSelected = state.username;
}

let targetButton = {};

function loadMoreHandler(getPosts) {
    $('#load-more').on('click', (e) => {
        const $btn = $(e.target);
        const cursor = $btn.attr('cursor');
        console.log('load more click');
        getPosts(null, {userName: usernameSelected, cursor}, {loadMoreHandler: this, targetButton});
    });
}

function initModalHandler() {
    const modal = $('#postsGridModal');
    modal.on('show.bs.modal', function (event) {
        targetButton = $(event.relatedTarget); // Button that triggered the modal
        // const recipient = button.data('post-info'); // Extract info from data-* attributes
        // console.log(recipient);
        // Update the modal's content.
        const modal = $(this);
        getPosts(modal, {userName: usernameSelected}, {loadMoreHandler, targetButton});
        modal.find('.modal-title').text(`${usernameSelected} выберите картинку`);
    });
}
function getConfig() {
    const path = {
        type: clsConst.pathType,
        subtype: state.subtype
    };
    const cbError = function(res) {
        const msg = res.status.message;
        $('.form-submit-finish--error').addClass('d-block')
      .find('.alert').append(`<p>${msg}</p>`);
    };

    UserTaskManager.getStoriesConfig(path, cbError).then((result) => {
        if (result.status.state !== 'ok') {
            return;
        }
        const {
            data: {
              found: {
                cfg,
                id
              }
            }
        } = result;

        console.log(id, cfg);
    });
}

function setSubtype(state) {
    // console.log('getTasksData', state.username);
    usernameSelected = state.username;
    getConfig();
}

function stepReducer(stepNumber, state) {
    switch (stepNumber) {
        case 0:
            setUserName(state);
            // console.log(state, stepNumber);
            break;
        case 1:
            setSubtype(state);
            // console.log(state, stepNumber);
            break;
        default:
            console.log('default', stepNumber);
    }
}
export function init() {
    if (!$(clsConst.currentPageCls).length) {
        return;
    }
    console.log(clsConst.currentPageCls);
    // getConfig(0);
    // getConfig(1);
    const addHandlers = () => {
        $('.js_get-stories-type input[type=radio]').on('click', (e) => {
            const value = $(e.target).attr('value');
            state.subtype = value.toUpperCase();
            console.log(state);
        });
    };
    addHandlers();
    const wizardCfg = {
        stepReducer,
        onSubmitHandler
    };
    wizardForm.init(wizardCfg);
    // initHandlers();
    // autoanswerStatus.init();
    // window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
    //     logs.init(selectCls, clsConst);
    // });
    // window.PubSub.subscribe(CONST.events.autoarnswer.IMAGE_UPLOADED, (e, res) => {
    //     const result = JSON.parse(res.response);
    //     const imageId = result && result.data && result.data.image_id;
    //     $(res.el).closest('.file-upload').attr('attached-img-id', imageId);
    //     console.log('image_loaded', res);
    // });
    // initModalHandler();
    // imageUpload.init();

}
