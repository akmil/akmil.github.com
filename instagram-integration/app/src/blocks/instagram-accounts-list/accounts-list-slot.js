import User from '../../common/js-services/user';
import {CONST} from '../../common/js-services/consts';
import {addInstagramAccount} from './instagram-accounts-list';
// import Spinner from '../../common/js-services/spinner';
// import addInstagramAccount from '../_shared/image-upload/image-upload';
let slotsAll = '';
function addAccount ($list /* , slot*/) {
    const monthCount = (mounthDefaultCount) => `<div class="form-body js_form-count d-none">
            <div class="slidecontainer">
                <input type="range" min="1" max="12" value="${mounthDefaultCount}" class="slider js_mounth-count">
                <p>Количество месяцев: <span class="mounth-count-value">${mounthDefaultCount}</span></p>
            </div>
            <button type="button" class="btn btn-success js_add-mounth-count" data-dismiss="modal">Добавить</button>
        </div>`;
    const timerCountdown = () => `<div class="form-countdown js_time-left-box d-none">
            <span class='js_time-left'></span>
        </div>`;

    const formAddUser = (mounthDefaultCount) => `<div class="col-md-6 form-body js_form-body mx-auto d-none">
        <form>
            <div class="form-group">
                <label class="sr-only">Логин</label>
                <input class="form-control" name="username" placeholder="Логин" required="">
            </div>
            <div class="form-group">
                <label class="sr-only">Пароль</label>
                <input type="password" class="form-control" name="pass" placeholder="Пароль" required="">
            </div>
            <h3 class="mt-4 text-center">Прокси (IPv4)</h3>
            <div class="form-row">
                <div class="form-group col-md-6 col-sm-6">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="use-proxy-fields" checked="checked" disabled>
                        <label class="custom-control-label" for="use-proxy-fields">Использовать прокси</label>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-8">
                    <label class="sr-only">IP (добавить валидацию)</label>
                    <input class="form-control" name="ip" placeholder="IP" pattern="\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}" required="">
                </div>
                <div class="form-group col-4">
                    <label class="sr-only">Порт</label>
                    <input type="number" class="form-control" name="port" min="0" max="9999" placeholder="Порт" required="">
                </div>
            </div>
            <div class="form-group">
                <label class="sr-only">Логин</label>
                <input class="form-control" name="usernameProxy" placeholder="Логин" required="">
            </div>
            <div class="form-group">
                <label class="sr-only">Пароль</label>
                <input type="password" class="form-control" name="passProxy" placeholder="Пароль" required="">
            </div>
            <button type="button" class="btn btn-success js_add-instagram-account-slot">Добавить</button>
        </form>
    </div>`;
    const addSettingBtn = () => {
        const mounthDefaultCount = 1;
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
            return `<div class="col d-flex justify-content-center js_form-add-count">
                <button class="btn btn-success js_add-acc-slot"><i class="fas fa-plus"></i>Добавить аккаунт</button>
            </div>
            ${monthCount(mounthDefaultCount)}
            ${timerCountdown()}
            ${formAddUser()}
            `;
        }
    };

    const renderAddBtn = () => $(`<li class="media" style="min-height: 140px;">${addSettingBtn() || ''}</li>`);
    renderAddBtn().appendTo($list);
}

const myTimer = [];
// const myTimerId = [];

// eslint-disable-next-line max-params
function clock($timeLeft, countDownDate, slotIndex, $liSlot, delta) {
    // eslint-disable-next-line no-use-before-define
    // myTimer.push(setInterval(countD, 1000));

    // eslint-disable-next-line no-use-before-define
    myTimer[slotIndex] = setInterval(countD, 1000);

    // let c = countDownDate; // Initially set to 1 hour

    function countD() {
        // Get today's date and time
        const now = new Date().getTime();

        // const delta = 1000 * 60; // use for test ONLY  // 4000 * 60 * 60;
        // Find the distance between now and the count down date
        const distance = countDownDate + delta - now;

        // Time calculations for days, hours, minutes and seconds
        // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const minutesZero = minutes < 10 ? `0${minutes}` : minutes;

        // If the count down is finished, write some text
        if (distance < 0) {
            // myTimer.forEach((item, idx) => {
            //     clearInterval(item);
            // });
            clearInterval(myTimer[slotIndex]);
            $liSlot.find('>div').addClass('d-none').removeClass('d-flex');
            $liSlot.find('.js_form-add-count').addClass('d-flex');
            // $timeLeft.text('Время для оплаты закончилось');
        } else {
            // Display the result in the element with id="demo"
            $timeLeft.text(`${minutesZero}мин. ${seconds}cек. `);
        }

    }
}

function updateInProgressSlot($list, slotIndex) {
    const isInProgress = slotsAll[slotIndex].payment_status === 'IN_PROGRESS';
    if (isInProgress) {
        const {last_modified_at, settings, index} = slotsAll[slotIndex];
        console.log(last_modified_at, 'IN_PROGRESS');
        const liSlot = $list.find('>li')[index];
        const $liSlot = $(liSlot);
        // console.log($liSlot);
        $liSlot.find('.js_form-add-count').addClass('d-none').removeClass('d-flex');
        $liSlot.find('.js_form-count').addClass('d-none');
        const $activeSlot = $liSlot.find('.js_time-left-box');
        const delta = settings.payment_waiting_dialogue_time_in_millis;
        $activeSlot.removeClass('d-none');
            // .find('.js_time-left')
            // .text(`${secLeft / 60} мин.`);

        const $timeLeft = $activeSlot.find('.js_time-left');
        // const now = new Date(last_modified_at);
        const countDownDate = new Date(last_modified_at).getTime();
        // const n = now.getSeconds();
        clock($timeLeft, countDownDate, index, $liSlot, delta);
    }
    if (slotsAll[slotIndex].payment_status === 'PAID' && !slotsAll[slotIndex].account) {
        console.log(slotsAll[slotIndex].payment_status);
        console.log('show form');
        const {index} = slotsAll[slotIndex];
        const liSlot = $list.find('>li')[index];
        const $liSlot = $(liSlot);
        $liSlot.find('.js_form-add-count').addClass('d-none').removeClass('d-flex');
        $liSlot.find('.js_form-body').removeClass('d-none');
    }
}

function initHandler($list, slot) {

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
        addAccBtn.parent().removeClass('d-flex').addClass('d-none'); // hide current step
        $liParent.find('.js_time-left-box').removeClass('d-none'); // show timer
        const slotIndex = $liParent.index();
        console.log(slotIndex);
        User.postSlotAdd(slotIndex, {months: slotIndex}).then((res) => {
            console.log(res);

            User.getMetadata().then((resultMeta) => {
                console.log(resultMeta);
                slotsAll = resultMeta.data.slots;
                slotsAll[2] = {
                    ...slotsAll[2],
                    payment_status: 'PAID'
                };
                updateInProgressSlot($list, slotIndex);
                // document.location.reload(true);
                window.PubSub.publish(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_NEED_REFRESH);
            });
            window.open(res.data.payment_url, '_blank');
        });
    });
    // submit req login form
    $('.js_add-instagram-account-slot').off().on('click', (e) => {
        const addAccBtn = $(e.target);
        const $liParent = addAccBtn.closest('li');
        const slotIndex = $liParent.index();
        const username = $liParent.find('input[name="username"]').val().trim();
        const password = $liParent.find('input[name="pass"]').val().trim();

        const ip = $liParent.find('input[name="ip"]').val().trim(); // TMP solution
        const port = $liParent.find('input[name="port"]').val().trim(); // TMP solution
        const usernameProxy = $liParent.find('input[name="usernameProxy"]').val().trim(); // TMP solution
        const passwordProxy = $liParent.find('input[name="passProxy"]').val().trim(); // TMP solution
        const $form = $('form', $liParent);
        const form = $form.get(0);
        const cssValidationClass = 'form-validation';

        console.log('send req --username', username);
        console.log('send req --password', password);
        console.log('show account from resp');
        e.preventDefault();
        function isValidIpv4Addr(ip) {
            return (/^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/).test(ip);
        }
        function isValidPort(port) {
            return (/^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/).test(port);
        }
        // const validator = new Validator($form);
        // console.log(validator.validate());
        if (form.checkValidity()) {
            addInstagramAccount({username, password, usernameProxy, passwordProxy, ip, port}, slotIndex);
        } else {
            // Highlight errors
            if (form.reportValidity) {
                form.reportValidity();
            }
            $form.addClass(cssValidationClass);
        }

        if (!username || !password || !ip || !isValidIpv4Addr(ip) || !port || !isValidPort(port) || !usernameProxy || !passwordProxy) {
            e.stopPropagation();
            console.log('not valid fields');
            return;
        }
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
    });
}
function scanUpdates(delay) {
    console.log(delay);
    setInterval(
        () => window.PubSub.publish(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_NEED_REFRESH, {isHideSpiner: 'isHideSpiner', slotsAll}),
        delay
    );
}
let runOnce = true;

export function addSlotInit($list, slot, slots) {
    slotsAll = slots;
    addAccount($list /* , slot*/);
    initHandler($list, slot);
    updateInProgressSlot($list, slot.index);

    const inProgresSlots = slots.filter((item) => item.payment_status === 'IN_PROGRESS');
    const lastIdx = slots[slots.length - 1];
    console.log(inProgresSlots.length, slot.index === lastIdx);
    if (inProgresSlots.length && runOnce) {
        runOnce = false;
        scanUpdates(inProgresSlots[0].settings.invoke_in_millis);
    }
}
