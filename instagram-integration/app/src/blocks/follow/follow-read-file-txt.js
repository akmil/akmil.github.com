import {CONST} from '../../common/js-services/consts';
import UserTaskManager from '../../common/js-services/api-task-manager';
import Spinner from '../../common/js-services/spinner';
// import viewUtils from '../../common/js-services/view';

/*
* read file
*/
let fileUploadBox = '';
const MAX_IMG_FILE_SIZE_BYTE = 1048576 * 100;
const FILE_TYPE = 'txt';
function isFileTypeOk(acceptedFile) {
    return acceptedFile.type === 'text/plain';
}

function isImgSizeOk(acceptedFile) {
    const imgSize = Math.round(acceptedFile.size);
    return MAX_IMG_FILE_SIZE_BYTE > imgSize;
}

function handleSubmit(input) {
    const url = CONST.getPath('instagramTaskManager_postTextAttachment');
    const token = UserTaskManager.getToken();
    const acceptedFile = input.files[0];
    console.log('handleSubmit follow');
    const formData = new FormData();
    formData.append('file', acceptedFile, acceptedFile.name);

    const request = new XMLHttpRequest();
    request.open('POST', url);
    // request.withCredentials = true;
    request.setRequestHeader('token', token);
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('cache-control', 'no-cache');
    request.send(formData);
    request.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            console.log('this', this.responseText, this);
            window.PubSub.publish(CONST.events.autoarnswer.TEXT_FILE_UPLOADED, {'response': this.responseText, 'el': input});
        }
    });
    Spinner.add($('.add-file'), '');
}

function readURL(input) {
    const $container = $(input).closest(fileUploadBox);
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        console.log('readURL');
        if (!isImgSizeOk(input.files[0]) || !isFileTypeOk(input.files[0])) {
            console.log('show error message, imgSize to big ');
            $(fileUploadBox).append(`
                <div class="warning-image text-danger">
                    <p>Доступный формат изображения ${FILE_TYPE}</p>
                    <p class="msg-max-size-img text-danger">Максимальный допустимый размер картинки 100 MB</p>
                </div>
            `);
            setTimeout(() => {
                $('.warning-image').addClass('d-none');
            }, 5000);
            return;
        }

        reader.onload = function(e) {
            $container.find('.image-upload-wrap').hide();
            $container.find('.file-upload-image').attr('src', e.target.result);
            // $container.find(fileUploadContent).show();
            $container.find('.image-title').html(input.files[0].name);
        };
        // reader.onerror = errorHandler;
        // reader.onprogress = updateProgress;

        reader.readAsDataURL(input.files[0]);
        setTimeout(() => handleSubmit(input), 2000);
        // Read in the image file as a binary string.
        // reader.readAsBinaryString(input.files[0]);

    } else {
        // removeUpload($container);
    }
}

export function attachTxtFileHandler(_fileUploadBox, onSuccessFileUploadCb) {
    fileUploadBox = _fileUploadBox;
    $('.input-txt-file').change(function() {
        if ($(this).val() !== '') {
            $(this).prev().text(`Выбрано файлов: ${$(this)[0].files.length}`);
            readURL($(this)[0]);
        } else {
            $(this).prev().text('Выберете файл');
        }
    });
    window.PubSub.subscribe(CONST.events.autoarnswer.TEXT_FILE_UPLOADED, (e, res) => {
        const {response} = res;
        const result = (response.length) ? JSON.parse(response) : '';
        const imageId = result && result.data && result.data.list_id;
        $(res.el).closest(fileUploadBox).attr('attached-txt-id', imageId);
        if (onSuccessFileUploadCb && typeof onSuccessFileUploadCb === 'function') {
            onSuccessFileUploadCb();
        }
        Spinner.remove();
        console.log('***TEXT_FILE_UPLOADED, onSuccessFileUploadCb', res);
    });
}
