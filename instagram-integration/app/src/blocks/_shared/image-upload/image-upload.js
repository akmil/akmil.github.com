// import {CONST} from '../../../common/js-services/consts';
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

function handleSubmit(acceptedFile) {
    const data = new FormData();
    data.append('image', acceptedFile);

    // for (const file of acceptedFiles) {
    //     data.append('image', file, file.name);
    // }

    // return fetch('https://example.com/api/upload', {
    //   method: 'POST',
    //   body: data
    // });
    // const body = {
    //     'image': data
    // };
    UserTaskManager.postImageAutoanswer(data).then(res => {
        console.log(res);
    });
}

function readURL(input) {
    if (input.files && input.files[0]) {

        const reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap').hide();
            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
            $('.image-title').html(input.files[0].name);

            handleSubmit(input.files[0]);
        };
        reader.onerror = errorHandler;
        reader.onprogress = updateProgress;

        reader.readAsDataURL(input.files[0]);
        // Read in the image file as a binary string.
        // reader.readAsBinaryString(input.files[0]);

    } else {
        removeUpload();
    }
}

$('.file-upload-btn').on('click', () => {
    console.log('boo');
    $('.file-upload-input').trigger('click');
    // readURL($('.file-upload-input'));
});

$('.file-upload-input').on('change', (e) => {
    console.log('change');
    readURL(e.target);
});

$('.remove-image').on('click', () => {
    removeUpload();
});
