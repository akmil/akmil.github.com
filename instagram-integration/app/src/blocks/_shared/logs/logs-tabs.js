import viewUtils from '../../../common/js-services/view';
import * as logs from './logs';
import * as tabs from '../../_shared/tebs-pils/tabs';

function moveInOneRow(userListBox, subTypeBox) {
    if (!subTypeBox.length || !userListBox.length) {
        return;
    }
    userListBox.appendTo(subTypeBox);

    userListBox.addClass('col');
    subTypeBox.addClass('row');
    // add "col-auto" to first column
    subTypeBox.find('.log-subype').addClass('col-auto');
}

/**
 * Cfg
 * @param logsState
 * @param logsSubtypes
 * @param clsConst
 * Cfg-functions
 * @param setUserNameCb
 * @param addDropdown
 */
export function initLogsTab({logsState, logsSubtypes, clsConst, setUserNameCb, textRusArray}) {
    const {selectCls} = logsState;
    const {selectClsLogsTaskType} = logsState;

    function dropdownOnSelectCb(e) {
        clsConst.pathSubType = $(`.${selectClsLogsTaskType} option:selected`).val();
        $('.js_logs-container').addClass('d-block');
        $('option.js_empty-subtype').remove();
    }

    function OnChangeSelect() {
        const usernameSelected = $(`.${selectCls} option:selected`).val();
        const slotIndexSelected = $(`.${selectCls} option:selected`).val();
        setUserNameCb(usernameSelected, slotIndexSelected);
        logs.init(selectCls, clsConst);
    }
    function handleLogsDropdowns() {
        dropdownOnSelectCb();
        OnChangeSelect();
        $(`.${selectClsLogsTaskType}`).on('change', function () {
            dropdownOnSelectCb();
            logs.init(selectCls, clsConst);
        });

        $(`.${selectCls}`).on('change', function () {
            OnChangeSelect();
        });
    }
    viewUtils.addDropdown($(logsState.wrapperSubtype), logsSubtypes, {logsState, isRenderEmptyOption: false, textRusArray});
    tabs.init(handleLogsDropdowns, logsState); // makes double request : OPTION and GET

    const userListBox = $('.log-users-list ');
    const subTypeBox = $('.log-subype--box');
    moveInOneRow(userListBox, subTypeBox);
}
