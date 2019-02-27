// import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';

/* ---- modal*/
export function fillPosts($list, items, isAppendToList) {
    const addToList = (isAppendPrevMsg, $li, $list) => {
        if (isAppendPrevMsg) {
            $li.insertAfter($list.find('li:last-child'));
        } else {
            $li.appendTo($list);
        }
    };
    if (!isAppendToList) {
        $list.empty();
    }
    items.forEach((item, idx) => {
        const tpl = $(`<li class="col-4 list-group list-inline-item m-0 p-0" data-img-id="${item.id}">
            <img src="${item.url}" class="img-responsive p-2" alt="image" style="max-height: 200px;"/>
        </li>`);
        addToList(isAppendToList, tpl, $list); // toDo refactor me, less DOM manipulation
    });
}

function addPagination(modalFooter, cursor) {
    $('#load-more').attr('cursor', cursor);
    modalFooter.removeClass('d-none');
}

function hidePagination(modalFooter) {
    modalFooter.addClass('d-none');
}

function imageSelectHandler($list, modal, targetButton) {
    $('li', $list).on('click', (e) => {
        const $btnLi = $(e.target).closest('li');
        const imgId = $btnLi.attr('data-img-id');
        targetButton.attr('data-post-img-id', imgId);
        console.log('click', imgId, modal);
        // window.PubSub.publish(CONST.events.autoarnswer.IMAGE_POST_SELECTED, imgId);
        modal.modal('hide');
    });
}

export function getPosts(modal, details, {loadMoreHandler, targetButton}) {
    UserTaskManager.getPostsAutoanswer(details).then((result) => {
        // console.log(result);
        if (result.status.state === 'ok') {
            const {data} = result;
            const modalFooter = modal ? $('.modal-footer', modal) : null;
            const $list = $('.modal-body .posts-list', modal);
            if (modal) {
                fillPosts($list, data.posts);
                modal.modal('handleUpdate');
                imageSelectHandler($list, modal, targetButton);
            } else if (data.posts) {
                fillPosts($list, data.posts, 'appendToList');
                imageSelectHandler($list, $('#postsGridModal'), targetButton);
            }

            if (data.pagination && data.pagination.cursor) {
                addPagination(modalFooter, data.pagination.cursor);
                loadMoreHandler(getPosts);
            } else {
                hidePagination($('.modal-footer', modal));
            }
        }
    });
}
