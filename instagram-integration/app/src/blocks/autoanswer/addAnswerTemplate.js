export const tplTextField = (mainCls) =>
$(`<div class="${mainCls} mt-2">
    <div class="row">
        <div class="col">
            <textarea class="form-control answer-words" rows="4" placeholder="Введите ключевые слова на которые будет срабатывать автоответ"></textarea>
        </div>
        <div class="col">
            <textarea class="form-control answer-messages" rows="4"
                data-emoji-picker="true" style="padding: 0.25rem 1.75rem 0.25rem 0.25rem; width: 100%;min-height: 42px;"
                placeholder="Введите сообщение, которое будет отправлено"
            ></textarea>
            <button class="file-upload-btn btn btn-success" type="button"
                    data-toggle="tooltip" data-placement="top" title="Добавить изображение">
                <i class="far fa-image fa-lg"></i>
            </button>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-success post-upload-btn js_autoanswer-add-post"
                title="Добавить публикацию"
                data-toggle="tooltip"
                data-placement="top"
                data-post-info="todo: get req to user: ">
                <span class="js_open-posts-gridModal"
                    data-container="body" data-toggle="popover" data-placement="bottom" data-content="У текущего аккаунта нет ни одного поста">
                <i class="far fa-images fa-lg"></i>
                </span>
            </button>

            <div class="mt-2">
                <div class="file-upload">
                    <div class="image-upload-wrap">
                        <input class="file-upload-input" type='file' accept=".jpg, .jpeg" />
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
