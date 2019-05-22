import {CONST} from '../../../common/js-services/consts';
import User from '../../../common/js-services/user';

const fillDropdownUsersCfg = {};

function fillDropdownUsers({$wrapper, logsState, OnChangeSelectCb}, accountsObj) {
    const {selectCls} = logsState;
    const label = 'Выберите аккаунт';
    $wrapper.empty().addClass('border-light-color');
    $(`<div class="">${label}</div><select name="task-type" class="${selectCls}"></select>`).appendTo($wrapper);
    // accounts.forEach((name) => {
    //     $(`<option class="list-group-item py-2" value="${name}">
    //         ${name}
    //     </option>`).appendTo($(`.${selectCls}`));
    // });
    const addOptionEl = (key, accountsObj) => {
        $(`<option class="list-group-item py-2" value="${key}">
            ${accountsObj[key]}
        </option>`).appendTo($(`.${selectCls}`));
    };
    for (const key in accountsObj) {
        if (Object.prototype.hasOwnProperty.call(accountsObj, key)) {
            addOptionEl(key, accountsObj);
        }
    }
    OnChangeSelectCb();
}

function getMetaLazy() {
    User.getMetadataLazy().then((res) => {
        if (res.status.state === 'ok' && res.data && res.data.slots) {
            const cfg = fillDropdownUsersCfg;
            const {slots} = res.data;
            fillDropdownUsers(cfg, slots);
            window.PubSub.publish(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, res.data.slots);
        }
    });
}

function tabHandler(isComputeMultyDropdown) {
    $('#v-pills-logs-tab').on('click', (e) => {
        getMetaLazy();
    });
}

export function init(OnChangeSelect, logsState) {
    const $wrapper = $('.log-users-list');
    Object.assign(fillDropdownUsersCfg, {$wrapper, OnChangeSelectCb: OnChangeSelect, logsState});
    tabHandler();
}
