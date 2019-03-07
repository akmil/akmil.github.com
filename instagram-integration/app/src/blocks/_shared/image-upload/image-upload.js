import {CONST} from '../../../common/js-services/consts';
import UserTaskManager from '../../../common/js-services/api-task-manager';

const MAX_IMG_FILE_SIZE_MB = 2;
const fileUploadBox = '.file-upload';
const fileUploadContent = '.file-upload-content';

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $(fileUploadContent).hide();
    $('.image-upload-wrap').show();
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
function isImgSizeOk(acceptedFile) {
    const imgSize = Math.round((acceptedFile.size / 1024) / 1024);
    return MAX_IMG_FILE_SIZE_MB > imgSize;
}

function handleSubmit(input) {
    const url = CONST.getPath('instagramTaskManager_postImageAttachment');
    const token = UserTaskManager.getToken();
    const acceptedFile = input.files[0];
    if (!isImgSizeOk(acceptedFile)) {
        console.log('show error message, imgSize to big ');
        $(fileUploadBox)
            .append(`
                <p class="msg-max-size-img text-danger">Максимальный допустимый размер картинки ${MAX_IMG_FILE_SIZE_MB}MB</p>
            `);
        setTimeout(() => {
            $('.msg-max-size-img').addClass('d-none');
        }, 5000);
        return;
    }
    const formData = new FormData();
    formData.append('image', acceptedFile, acceptedFile.name);

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
            window.PubSub.publish(CONST.events.autoarnswer.IMAGE_UPLOADED, {'response': this.responseText, 'el': input});
        }
    });
}

function readURL(input) {
    if (input.files && input.files[0]) {
        const $container = $(input).closest(fileUploadBox);
        const reader = new FileReader();

        reader.onload = function(e) {
            if (!isImgSizeOk(input.files[0])) {
                return;
            }
            $container.find('.image-upload-wrap').hide();
            $container.find('.file-upload-image').attr('src', e.target.result);
            $container.find(fileUploadContent).show();
            $container.find('.image-title').html(input.files[0].name);
        };
        reader.onerror = errorHandler;
        reader.onprogress = updateProgress;

        reader.readAsDataURL(input.files[0]);
        setTimeout(() => handleSubmit(input), 2000);
        // Read in the image file as a binary string.
        // reader.readAsBinaryString(input.files[0]);

    } else {
        removeUpload();
    }
}

export function init() {
    $('.file-upload-btn').on('click', (e) => {
        const input = $(e.target).closest('.col').find(fileUploadBox).find('input');
        input.trigger('click');
    });

    $('.file-upload-input').on('change', (e) => {
        readURL(e.target);
    });

    $('.remove-image').on('click', () => {
        removeUpload();
    });
}
