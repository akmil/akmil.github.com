export const tplTextField = () => $(`<div class="autoanswer-text-fields mt-2">
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
