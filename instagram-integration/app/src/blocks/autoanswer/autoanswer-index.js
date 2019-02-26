import {CONST} from '../../common/js-services/consts';
import * as wizardForm from '../../blocks/wizard-form/wizard-form';
import UserTaskManager from '../../common/js-services/api-task-manager';
import * as tabs from '../_shared/tebs-pils/tabs';
import * as autoanswerStatus from './autoanswer-status';
import * as logs from '../_shared/logs/logs';
import * as imageUpload from '../_shared/image-upload/image-upload';
import {emoji} from '../../common/js-services/emoji';
import {fillPosts} from './utils';

let usernameSelected = '';
const selectCls = 'js_logs-accounts';
const clsConst = {
    currentPageCls: '.autoanswer-page',
    tasksList: '.log-tasks',
    logsTabBtn: '#v-pills-logs-tab',
    pagination: '.logs-pagination',
    paginationPgNumber: '.page-number',
    pathType: CONST.url.tmTypes.autoanswerT,
    pathSubType: CONST.url.tmTypes.autoanswerSubT[0]
};

function initEmojii() {
    emoji({
        page: clsConst.currentPageCls,
        styles: {old: 'bottom: 30px;', new: 'top: -210px;'}
    });
}

function onSubmitHandler(e) {
    const fields = $('.autoanswer-text-fields');
    const keyWords = $el => $el.val()
        .trim()
        .replace(/ /g, '')
        .split(',')
        .filter(i => i.length > 0);
    const reqBody = [];
    fields.each((idx, item) => {
        const keyWord = keyWords($(item).find('textarea.answer-words'));
        const answer = $(item).find('textarea.answer-messages').val();
        const imageId = $(item).find('.file-upload').attr('attached-img-id');
        // console.log(imageId);
        reqBody.push({
            'key_words': keyWord,
            answer,
            'attachment': imageId ? {
                'image_id': imageId
                // 'post': {id: '', type: ''}
            } : undefined
        });
    });
    const nReqBody = {
        'username': usernameSelected,
        'type': clsConst.pathType,
        'subtype': clsConst.pathSubType,
        'user_default_config': {},
        'user_custom_config': {
            'forms': reqBody
        }
    };

    // console.log('make request here**', nReqBody);
    function cbError(res) {
        const msg = res.status.message;
        $('.form-submit-finish--error').addClass('d-block')
        .find('.alert').append(`<p>${msg}</p>`);
    }
    UserTaskManager.postStartChatBot(nReqBody, cbError).then((result) => {
        // console.log('postBot');
        if (result.status.state === 'ok') {
            // console.log(JSON.stringify(result));
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
        // console.log(usernameSelected);
        logs.init(selectCls, clsConst);
    });
}

/**
 * Init header
 */
function initHandlers() {
    const tplTextField = () => $(`<div class="autoanswer-text-fields mt-2">
        <div class="row">
            <div class="col">
                <textarea class="form-control answer-words" rows="4" placeholder="Введите ключевые слова на которые будет срабатывать автоответ"></textarea>
            </div>
            <div class="col">
                <textarea class="form-control answer-messages" rows="4"
                    data-meteor-emoji="true" style="padding: 0.25rem 1.75rem 0.25rem 0.25rem; width: 100%;min-height: 42px;"
                    placeholder="Введите сообщение, которое будет отправлено"
                ></textarea>

                <div class="mt-2">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-success js_autoanswer-add-post" 
                        data-toggle="modal" 
                        data-post-info="todo: get req to user: "
                        data-target="#postsGridModal">
                        post
                    </button>
                    <div class="file-upload">
                        <button class="file-upload-btn btn btn-success" type="button">Добавить картинку</button>

                        <div class="image-upload-wrap">
                            <input class="file-upload-input" type='file' accept="image/*" />
                        </div>
                        <div class="file-upload-content">
                            <img class="file-upload-image" src="#" alt="your image" />
                            <div class="image-title-wrap">
                            <button type="button" class="remove-image btn btn-warning">Удалить <span class="image-title">Загрузить</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`);

    $('.js_add-autoanswer').on('click', (e) => {
        const lastTextField = $('.autoanswer-text-fields').last();
        tplTextField().insertAfter(lastTextField);
        initEmojii();
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

function stepReducer(stepNumber, state) {
    switch (stepNumber) {
        case 0:
            setUserName(state);
            // console.log(state, stepNumber);
            break;
        default:
            console.log('default', stepNumber);
    }
}

function addPagination(modalFooter, cursor) {
    $('#load-more').attr('cursor', cursor);
    modalFooter.removeClass('d-none');
}
function loadMoreHandler(getPosts) {
    $('#load-more').on('click', (e) => {
        const $btn = $(e.target);
        const cursor = $btn.attr('cursor');
        console.log('load more click');
        getPosts(null, {userName: usernameSelected, cursor});
    });
}
function getPosts(modal, details) {
    // eslint-disable-next-line consistent-this
    // const self = this;
    UserTaskManager.getPostsAutoanswer(details).then((result) => {
        console.log(result);
        if (result.status.state === 'ok') {
            const {data} = result;
            const modalFooter = $('.modal-footer', modal);
            const $list = $('.modal-body .posts-list', modal);
            if (modal) {
                fillPosts($list, data.posts);
                modal.modal('handleUpdate');
                if (data.pagination && data.pagination.cursor) {
                    // console.log('add more btn');
                    addPagination(modalFooter, data.pagination.cursor);
                }
            } else if (data.post) {
                // append new data
                fillPosts($list, data.posts, 'appendToList');
                addPagination(null, data.pagination.cursor);
            }
            if (data.pagination && data.pagination.cursor) {
                loadMoreHandler(getPosts);
            }
        }
    });
}

function initModalHandler() {
    const $modalBtn = $('#postsGridModal');
    $modalBtn.on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget); // Button that triggered the modal
        const recipient = button.data('post-info'); // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        const modal = $(this);
        getPosts(modal, {userName: usernameSelected});
        modal.find('.modal-title').text(`New message to ${recipient} ${usernameSelected}`);
        modal.find('.modal-body input').val(recipient);
    });
}

export function init() {
    if ($('.autoanswer-page').length) {
        const wizardCfg = {
            stepReducer,
            onSubmitHandler
        };
        wizardForm.init(wizardCfg);
        initHandlers();
        autoanswerStatus.init();
        window.PubSub.subscribe(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, (e, accounts) => {
            // console.log(accounts);
            logs.init(selectCls, clsConst);
        });
        window.PubSub.subscribe('image_loaded', (e, res) => {
            const result = JSON.parse(res.response);
            const imageId = result && result.data && result.data.image_id;
            $(res.el).closest('.file-upload').attr('attached-img-id', imageId);
            console.log('image_loaded', res);
            // logs.init(selectCls, clsConst);
        });
        initModalHandler();
        initEmojii();
        imageUpload.init();
    }
}