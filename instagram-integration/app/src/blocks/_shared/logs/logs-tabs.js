import viewUtils from '../../../common/js-services/view';
import * as logs from './logs';
import * as tabs from '../../_shared/tebs-pils/tabs';

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
        setUserNameCb(usernameSelected);
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
}
