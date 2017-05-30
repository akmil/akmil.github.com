import {ntc} from './nameThatColor.js';
import {ntc_main } from './eventDetectNTC.js';
import {addText , createCustomList} from './extract-colors.js';


$(document).ready(function () {
  ntc.init();

  ntc.names.sort(ntc_main.nameSort);
  ntc_main.init();

  $('.js_btn-add-text').on('click', addText);
  $('.js_btn-set-colors').on('click', createCustomList);
});