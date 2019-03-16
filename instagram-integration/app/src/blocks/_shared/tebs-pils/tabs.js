import {CONST} from '../../../common/js-services/consts';
import User from '../../../common/js-services/user';

// function initCfg() {
//     this.$wrapper = '';
//     this.OnChangeSelect = '';
//     this.logsState = {};
//
//     function setCfg($wrapper, OnChangeSelect, logsState) {
//         this.$wrapper = $wrapper;
//         this.OnChangeSelect = OnChangeSelect;
//         this.logsState = logsState;
//     }
//     function getCfg() {
//         return {
//             $wrapper: this.$wrapper,
//             logsState: this.logsState,
//             OnChangeSelect: this.OnChangeSelect
//         };
//     }
//
//     return {
//         setCfg,
//         getCfg
//     };
// }

const fillDropdownUsersCfg = {};

function fillDropdownUsers({$wrapper, logsState, OnChangeSelectCb}, accounts) {
    const {selectCls} = logsState;
    const label = 'Выберите аккаунты';
    $wrapper.empty().addClass('border-light-color');
    $(`<div class="">${label}</div><select name="task-type" class="${selectCls}"></select>`).appendTo($wrapper);
    accounts.forEach((name) => {
        $(`<option class="list-group-item py-2" value="${name}">
            ${name}
        </option>`).appendTo($(`.${selectCls}`));
    });
    OnChangeSelectCb();
}

function getMetaLazy() {
    User.getMetadataLazy().then((res) => {
        if (res.status.state === 'ok' && res.data && res.data.accounts) {
            const cfg = fillDropdownUsersCfg;
            const {accounts} = res.data;
            fillDropdownUsers(cfg, accounts);
            window.PubSub.publish(CONST.events.instagramAccouns.INSTAGRAM_ACCOUNS_RENDERED_LAZY, res.data.accounts);
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
