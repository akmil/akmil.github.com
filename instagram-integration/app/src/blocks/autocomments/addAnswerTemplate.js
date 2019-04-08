export const tplTextField = (mainCls) =>
$(`<div class="${mainCls} mt-2">
    <div class="row">
        <div class="col">
            <textarea class="form-control answer-words" rows="4" placeholder="Введите ключевые слова"></textarea>
        </div>
        <div class="col">
            <textarea class="form-control answer-messages" rows="4"
                data-emoji-picker="true" style="padding: 0.25rem 1.75rem 0.25rem 0.25rem; width: 100%;min-height: 42px;"
                placeholder="Введите сообщение"
            ></textarea>
            
        </div>
    </div>
</div>`);
