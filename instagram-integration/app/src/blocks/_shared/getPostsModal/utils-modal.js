import {CONST} from '../../../common/js-services/consts';
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
        const {id, type} = item;
        const tpl = $(`<li class="col-4 list-group list-inline-item m-0 p-0" data-post-id="${id}" data-post-type="${type}">
            ${(item.type === 'photo')
                ? `<img src="${item.url}" class="img-responsive p-2" alt="image" style="max-height: 230px;"/>`
                : `<div class="${item.type} h-100">
                    <!--style="background-image: url(${item.url});"-->
                    <img src="${item.url}" class="img-responsive p-2 w-100" alt="video-cover" style="max-height: 200px;"/>
                    <i class="fas fa-video fa-2x position-absolute text-white align-self-start"></i>
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
        const imageBoxCls = 'js_uploaded-img-from-posts';
        const imageDelBtnCls = 'js_delete-post-img';
        const imageBoxSelector = `.${imageBoxCls}`;
        const $btnLi = $(e.target).closest('li');
        const postId = $btnLi.attr('data-post-id');
        const postType = $btnLi.attr('data-post-type');
        const closestCol = targetButton.closest('.col');
        // targetButton.closest('button').attr('data-post-img-id', imgId);
        console.log('click', postType, postId, modal);
        window.PubSub.publish(CONST.events.modal.IMAGE_POST_SELECTED,
            {$btnLi, closestCol});
        modal.modal('hide');
        if (targetButton.closest('.col').find(imageBoxSelector).length) {
            targetButton.closest('.col').find(imageBoxSelector).remove();
        }

        const tplImageBox = $(`<div class="${imageBoxCls} uploaded-img-from-posts" 
                data-post-id="${postId}" data-post-type="${postType}">
                    <button class="btn btn-warning uploaded-img-from-posts--remove-btn ml-2 ${imageDelBtnCls}">Удалить</button>
                </div`).prepend($btnLi.find('img'));
        targetButton.closest('.col').append(tplImageBox);

        $(`.${imageDelBtnCls}`).off().on('click', (e) => {
            const currentImageBox = $(e.target).closest('.col').find(imageBoxSelector);
            currentImageBox.remove();
        });
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
                targetButton.popover({
                    container: 'body',
                    content: 'У текущего аккаунта нет ни одного поста',
                    placement: 'bottom'
                });
                setTimeout(() => {
                    targetButton.popover('destroy');
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
