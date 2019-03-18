// import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../../common/js-services/api-task-manager';

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
            ${(item.type === 'photo')
                ? `<img src="${item.url}" class="img-responsive p-2" alt="image" style="max-height: 200px;"/>`
                : `<div class="${item.type}" 
                    style="background: url(${item.url}) no-repeat;
                    "><i class="fas fa-video fa-2x position-absolute text-white align-self-start"></i>
                    <img src="${item.url}" class="img-responsive p-2 w-100" alt="image" style="max-height: 200px;"/>
                  </div>`
            }
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
        // const uploadedImgFromPosts = $btnLi.find('img').html();
        const imgId = $btnLi.attr('data-img-id');
        targetButton.attr('data-post-img-id', imgId);
        console.log('click', imgId, modal);
        // window.PubSub.publish(CONST.events.autoarnswer.IMAGE_POST_SELECTED, imgId);
        modal.modal('hide');
        if ($('.js_uploaded-img-from-posts').length) {
            $('.js_uploaded-img-from-posts').empty();
        }

        const tplImageBox = $('<div class="js_uploaded-img-from-posts"></div>').append($btnLi.find('img'));
        targetButton.closest('.col').append(tplImageBox);
    });
}

export function getPosts(modal, details, {loadMoreHandler, targetButton}) {
    UserTaskManager.getPostsAutoanswer(details).then((result) => {
        // console.log(result);
        if (result.status.state === 'ok') {
            const {data} = result;
            const modalFooter = modal ? $('.modal-footer', modal) : null;
            const $list = $('.modal-body .posts-list', modal);
            if (!data.posts.length) {
                // show message 'no posts found'
                // $('[data-toggle="popover"]').popover();
                targetButton.popover('show');
                setTimeout(() => {
                    targetButton.popover('hide');
                }, 4000);
                return;
            }

            if (modal) {
                fillPosts($list, data.posts);
                modal.modal('show');
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

        } else {
            // show message error
        }
    });
}
