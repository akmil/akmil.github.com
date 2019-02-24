import {CONST} from '../../../common/js-services/consts';
import UserTaskManager from '../../../common/js-services/api-task-manager';

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
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

function handleSubmit(input) {
    const url = CONST.getPath('instagramTaskManager_postImageAttachment');
    const token = UserTaskManager.getToken();
    const acceptedFile = input.files[0];
    const formData = new FormData();
    formData.append('image', acceptedFile, acceptedFile.name);

    const request = new XMLHttpRequest();
    request.open('POST', url);
    // request.withCredentials = true;
    request.setRequestHeader('token', token);
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('cache-control', 'no-cache');
    request.send(formData);
    console.log(acceptedFile);
    request.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            window.PubSub.publish('image_loaded', {'response': this.responseText, 'el': input});
        }
    });
}

function readURL(input) {
    if (input.files && input.files[0]) {
        const $container = $(input).closest('.file-upload');
        const reader = new FileReader();

        reader.onload = function(e) {
            $container.find('.image-upload-wrap').hide();
            $container.find('.file-upload-image').attr('src', e.target.result);
            $container.find('.file-upload-content').show();
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
        const input = $(e.target).closest('.file-upload').find('input');
        input.trigger('click');
    });

    $('.file-upload-input').on('change', (e) => {
        readURL(e.target);
    });

    $('.remove-image').on('click', () => {
        removeUpload();
    });
}