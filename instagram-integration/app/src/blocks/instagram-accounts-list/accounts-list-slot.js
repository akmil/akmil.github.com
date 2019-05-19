import User from '../../common/js-services/user';
// import {CONST} from '../../common/js-services/consts';
// import {renderItem} from './instagram-accounts-list';
// import Spinner from '../../common/js-services/spinner';
// import * as imageUpload from '../_shared/image-upload/image-upload';

function addAccount ($list) {
    const monthCount = (mounthDefaultCount) => `<div class="form-body js_form-count d-none">
            <div class="slidecontainer">
                <input type="range" min="1" max="12" value="${mounthDefaultCount}" class="slider js_mounth-count">
                <p>Количество месяцев: <span class="mounth-count-value">${mounthDefaultCount}</span></p>
            </div>
            <button type="button" class="btn btn-success js_add-mounth-count" data-dismiss="modal">Добавить</button>
        </div>`;

    const formAddUser = (mounthDefaultCount) => `<div class="form-body js_form-body d-none">
        <form>
            <div class="form-group">
                <label class="sr-only">Логин</label>
                <input type="text" class="form-control" name="username" placeholder="Логин" required>
            </div>
            <div class="form-group">
                <label class="sr-only">Пароль</label>
                <input type="password" class="form-control" name="pass" placeholder="Пароль" required>
            </div>
            
            <button type="button" class="btn btn-success js_add-instagram-account-slot" data-dismiss="modal">Добавить</button>            
        </form>
    </div>`;
    const addSettingBtn = () => {
        const mounthDefaultCount = 3;
        const editBtn = `<! --
        <button class="btn btn-outline-success p-1 mb-1 js_acc-edit" 
            data-username="{username}"
            data-name="{name}"
            data-email="{email}"
            data-url="{url}"
            data-biography="{biography}"
            data-img="{profile_pic_url}"
            data-follower_count="{follower_count}"
            data-following_count="{following_count}"
            data-media_count="{media_count}"
            data-is_business="{is_business}"
            data-is_private="{is_private}"
        ><i class="fas fa-pen m-0"></i></button> -->`;
        if (editBtn) {
            return `<div class="col d-flex justify-content-center">                
                <button class="btn btn-success js_add-acc-slot"><i class="fas fa-plus"></i>Добавить аккаунт</button>
            </div>
            ${monthCount(mounthDefaultCount)}
            ${formAddUser()}
            `;
        }
    };

    const renderAddBtn = () => $(`<li class="media" style="min-height: 140px;">${addSettingBtn() || ''}</li>`);
    renderAddBtn().appendTo($list);
}

function initHandler() {
    // const newWnd = window.open();
    // console.log('newWnd.opener');
    // newWnd.opener = null;
    // console.log(newWnd.opener);

    // show month count
    $('.js_add-acc-slot').on('click', (e) => {
        const addAccBtn = $(e.target);
        const $liParent = addAccBtn.closest('li');
        addAccBtn.parent().removeClass('d-flex').addClass('d-none');
        $liParent.find('.js_form-count').removeClass('d-none');
        console.log('hide me, show month count');
    });
    // show login form
    $('.js_add-mounth-count').off().on('click', (e) => {
        const addAccBtn = $(e.target);
        const $liParent = addAccBtn.closest('li');
        addAccBtn.parent().removeClass('d-flex').addClass('d-none');
        $liParent.find('.js_form-body').removeClass('d-none');
        const slotIndex = $liParent.index();
        console.log(slotIndex);
        // http://localhost:8081/v1/instagram-accounts/slots/{slotIndex}
        // console.log(instagram-accounts/slots/{slotIndex});
        User.postSlotAdd(slotIndex, {months: slotIndex}).then((res) => {
            console.log(res);
            window.open(res.data.payment_url, '_blank');
        });
    });
    // submit req login form
    $('.js_add-instagram-account-slot').on('click', (e) => {
        const addAccBtn = $(e.target);
        const $liParent = addAccBtn.closest('li');
        const username = $liParent.find('input[name="username"]').val().trim();
        const password = $liParent.find('input[name="pass"]').val().trim();
        console.log('send req --username', username);
        console.log('send req --password', password);
        console.log('show account from resp');
    });
    // mounth count slider
    $('.js_mounth-count').on('input change', function(e) {
        const $input = $(e.target);
        const $liParent = $input.closest('li');
        const count = $input.val();
        console.log('$input.val()', $input.val());
        $liParent.find('.mounth-count-value').text(count);
        if (count > 3) {
            $liParent.find('.mounth-count-value').append('<span></span>');
        }
        // do something
    });
}

export function addSlotInit($list) {
    addAccount($list);
    initHandler();
}
