import 'bootstrap-tagsinput';

const tagsinputSelector = '.bootstrap-tagsinput';

export function nextBtnvalidateCompetitorsHandler($competitorsTextArea, nextStepBtn, stopValidateNextButton) {
    const englishChars = /^[A-Za-z0-9,._ \n]+$/;  // /^[A-Za-z0-9]*$/;
    const checkTextArea = (e, isInit) => {
        const inputvalue = (!isInit) ? $(e.target).closest('div input').val() : '';
        const text = (!isInit) ? `${$(e.target).closest('div').find('.bootstrap-tagsinput input').val()},${inputvalue}` : '';
        const isRemoved = (!isInit && e.type === 'itemRemoved');
        const textOnRemove = (isRemoved) ? inputvalue : '';
        const removeBorder = () => {
            // enable on delete all
            $(e.target).closest('.js_tagsinput-box').find(tagsinputSelector).removeClass('border-danger');
            if (!stopValidateNextButton) {
                // disable on checnge
                nextStepBtn.removeAttr('disabled', 'disabled');
            }
        };
        const addBorder = () => {
            $(e.target).closest('.js_tagsinput-box').find(tagsinputSelector).addClass('border-danger');
        };
        console.log('text', text);
        if (!stopValidateNextButton) {
            // disable on checnge
            nextStepBtn.attr('disabled', 'disabled');
        }
        const isAddedTextValid = text.length && englishChars.test(text);
        const isRemovedTextValid = textOnRemove.length && englishChars.test(textOnRemove);
        if ((isAddedTextValid || isRemovedTextValid) && text !== ',') {
            // enable on checnge if lengthText>1
            removeBorder();
        } else if (!isInit) {
            // $(e.target).closest('.js_tagsinput-box').find(tagsinputSelector).addClass('border-danger');
            addBorder();
        }
        if (!textOnRemove.length && isRemoved && !isInit) {
            // enable on delete all
            removeBorder();
        }
    };
    // disable on init
    checkTextArea(null, 'isInit');
    console.log('$competitorsTextArea', $competitorsTextArea);

    // event.item: contains the item
    // event.cancel: set to true to prevent the item getting added
    $('input').on('beforeItemAdd', checkTextArea.bind(stopValidateNextButton));

    // event.item: contains the item
    $('input').on('itemRemoved', checkTextArea.bind(stopValidateNextButton));
}

export function initTagsInput (sel) {
    $(sel).tagsinput('items');
}
