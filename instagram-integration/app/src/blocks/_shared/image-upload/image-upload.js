import {CONST} from '../../../common/js-services/consts';
import UserTaskManager from '../../../common/js-services/api-task-manager';

const MAX_IMG_FILE_SIZE_BYTE = 1048576;
const fileUploadBox = '.file-upload';
const fileUploadContent = '.file-upload-content';

function removeUpload($uploadContainer) {
    const input = $uploadContainer.find('input');
    input.replaceWith(input.clone());
    $uploadContainer.find(fileUploadContent).hide();
    $uploadContainer.find('.image-upload-wrap').show();
}

const $imgUploadWrap = $('.image-upload-wrap');
$imgUploadWrap.bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$imgUploadWrap.bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});

// function abortRead(reader) {
//     reader.abort();
// }

function errorHandler(evt, reader) {
    switch (evt.target.error.code) {
        case evt.target.error.NOT_FOUND_ERR:
            console.info('File Not Found!');
            break;
        case evt.target.error.NOT_READABLE_ERR:
            console.info('File is not readable');
            break;
        case evt.target.error.ABORT_ERR:
            break; // noop
        default:
            console.info('An error occurred reading this file.');
    }
}

function updateProgress(evt, progress) {
    // evt is an ProgressEvent.
    if (evt.lengthComputable) {
        const percentLoaded = Math.round((evt.loaded / evt.total) * 100);
      // Increase the progress bar length.
        if (percentLoaded % 10 === 0) {
            // progress.style.width = `${percentLoaded}%`;
            // progress.textContent = `${percentLoaded}%`;
            console.log(percentLoaded);
        }
    }
}

function isFileTypeOk(acceptedFile) {
    return acceptedFile.type === 'image/jpeg';
}

function isImgSizeOk(acceptedFile) {
    const imgSize = Math.round(acceptedFile.size);
    return MAX_IMG_FILE_SIZE_BYTE > imgSize;
}

function handleSubmit(input, replaceWithCfg) {
    const url = CONST.getPath('instagramTaskManager_postImageAttachment');
    const token = UserTaskManager.getToken();
    const acceptedFile = input.files[0];
    console.log('handleSubmit');
    // if (!isImgSizeOk(acceptedFile)) {
    //     console.log('show error message, imgSize to big ');
    //     $(fileUploadBox)
    //         .append(`
    //             <p class="msg-max-size-img text-danger">Максимальный допустимый размер картинки ${MAX_IMG_FILE_SIZE_BYTE}MB</p>
    //         `);
    //     setTimeout(() => {
    //         $('.msg-max-size-img').addClass('d-none');
    //     }, 5000);
    //     return;
    // }
    const formData = new FormData();

    const request = new XMLHttpRequest();

    if (replaceWithCfg && replaceWithCfg.replaceWith) {
        // ** edit USER **
        // PUT .../instagram-accounts/{username}/photo
        // form-data: "photo" (jpg)
        formData.append('photo', acceptedFile, acceptedFile.name);
        const {username} = replaceWithCfg;
        request.open('PUT', `${CONST.url.base}instagram-accounts/${username}/photo`);
        // request.withCredentials = true;
        request.setRequestHeader('token', token);
        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader('cache-control', 'no-cache');
        request.send(formData);
        request.addEventListener('readystatechange', function () {
            if (this.readyState === 4) {
                console.log('PUT', this.responseText, this);
                // window.PubSub.publish(CONST.events.autoarnswer.IMAGE_UPLOADED, {'response': this.responseText, 'el': input});
                window.PubSub.publish(CONST.events.autoarnswer.IMAGE_UPLOADED_AVATAR, {'response': this.response});
            }
        });
        return;
    }
    formData.append('image', acceptedFile, acceptedFile.name);
    request.open('POST', url);
    // request.withCredentials = true;
    request.setRequestHeader('token', token);
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('cache-control', 'no-cache');
    request.send(formData);
    request.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            console.log('this', this.responseText, this);
            window.PubSub.publish(CONST.events.autoarnswer.IMAGE_UPLOADED, {'response': this.responseText, 'el': input});
        }
    });
}

function readURL(input, replaceWithCfg, handleSubmitCb) {
    const holderCls = replaceWithCfg && replaceWithCfg.holderCls;
    const replaceWith = replaceWithCfg && replaceWithCfg.replaceWith;
    const holder = (holderCls) ? holderCls : fileUploadBox;
    const $container = $(input).closest(holder);
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        console.log('readURL');
        if (!isImgSizeOk(input.files[0]) || !isFileTypeOk(input.files[0])) {
            console.log('show error message, imgSize to big ');
            $(fileUploadBox).find('warning-image').remove();
            $(fileUploadBox).append(`
                <div class="warning-image text-danger">
                    <p>Доступный формат изображения jpeg или jpg</p>
                    <p class="msg-max-size-img text-danger">Максимальный допустимый размер картинки ${MAX_IMG_FILE_SIZE_BYTE / 1024 / 1024}MB</p>
                </div>
            `);
            setTimeout(() => {
                $('.warning-image').addClass('d-none');
            }, 5000);
            return;
        }

        reader.onload = function(e) {
            if (!replaceWith) {
                $container.find('.image-upload-wrap').hide();
                $container.find('.file-upload-image').attr('src', e.target.result);
                $container.find(fileUploadContent).show();
                $container.find('.image-title').html(input.files[0].name);
            } else {
                const {imageCls} = replaceWithCfg;
                $container.find(imageCls).attr('src', e.target.result);
            }
        };

        reader.onerror = errorHandler;
        reader.onprogress = updateProgress;

        reader.readAsDataURL(input.files[0]);
        setTimeout(() => {
            if (typeof handleSubmitCb === 'function') {
                const token = UserTaskManager.getToken();
                handleSubmitCb(input, token);
            } else {
                handleSubmit(input, replaceWithCfg);
            }
        }, 2000);
        // Read in the image file as a binary string.
        // reader.readAsBinaryString(input.files[0]);

    } else {
        removeUpload($container);
    }
}

export function init(replaceWithCfg, handleSubmitCb) {
    const uploadBtnCls = (!(replaceWithCfg && replaceWithCfg.replaceWith)) ? '.file-upload-btn' : replaceWithCfg.uploadBtnCls;
    const $uploadBtn = $(uploadBtnCls);
    const $uploadInput = $('.file-upload-input');
    const $removeImgBtn = $('.remove-image');

    $uploadBtn.off();
    $uploadInput.off();
    $removeImgBtn.off();

    $uploadBtn.on('click', (e) => {
        const toParentCls = (!(replaceWithCfg && replaceWithCfg.replaceWith)) ? '.col' : replaceWithCfg.holderCls;
        const input = $(e.target).closest(toParentCls).find(fileUploadBox).find('input.file-upload-input');
        input.trigger('click');
        e.stopPropagation();
    });

    $uploadInput.on('change', (e) => {
        readURL(e.target, replaceWithCfg, handleSubmitCb);
    });

    $removeImgBtn.on('click', (e) => {
        const $container = $(e.target).closest('.col').find(fileUploadBox);
        removeUpload($container);
        $container.removeAttr('attached-img-id');
    });
}
