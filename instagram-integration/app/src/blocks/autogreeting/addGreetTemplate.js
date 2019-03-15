export const tplTextFieldGreet = (mainCls) =>
$(`<div class="${mainCls}">
        <div class="row">
            <div class="col">
                <div>                
                    <textarea class="form-control answer-words" rows="4" 
                        data-emoji-picker="true" placeholder="Введите текст, который будет отправлен новому подписчику"></textarea>    
                </div>

                <button class="file-upload-btn btn btn-success" type="button" data-toggle="tooltip" data-placement="top" 
                    title="" data-original-title="Добавить изображение"><i class="far fa-image fa-lg"></i></button>

                <button type="button" class="btn btn-success post-upload-btn js_autoanswer-add-post" 
                  title=""
                  data-toggle="tooltip"
                  data-placement="top" 
                  data-post-info="todo: get req to user: " 
                  data-original-title="Добавить публикацию">
                    <span data-toggle="modal" data-target="#postsGridModal">
                    <i class="far fa-images fa-lg"></i>
                    </span>
                </button>
                
                <div class="mt-2">
                    <div class="file-upload">
                    
                      <div class="image-upload-wrap">
                        <input class="file-upload-input" type="file" accept=".jpg, .jpeg">
                      </div>
                      <div class="file-upload-content">
                        <img class="file-upload-image" src="#" alt="your image">
                        <div class="image-title-wrap">
                          <button type="button" class="remove-image btn btn-warning">Удалить <span class="image-title">Загрузить</span></button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
