import 'bootstrap-tagsinput';

const tagsinputSelector = '.bootstrap-tagsinput';

export function nextBtnvalidateCompetitorsHandler($competitorsTextArea, nextStepBtn) {
    const englishChars = /^[A-Za-z0-9,._ \n]+$/;  // /^[A-Za-z0-9]*$/;
    const checkTextArea = (e, isInit) => {
        const inputvalue = (!isInit) ? $(e.target).closest('div input').val() : '';
        const text = (!isInit) ? `${$(e.target).closest('div').find('.bootstrap-tagsinput input').val()},${inputvalue}` : '';
        const isRemoved = (!isInit && e.type === 'itemRemoved');
        const textOnRemove = (isRemoved) ? inputvalue : '';
        console.log('text', text);
        // disable on checnge
        nextStepBtn.attr('disabled', 'disabled');
        const isAddedTextValid = text.length && englishChars.test(text);
        const isRemovedTextValid = textOnRemove.length && englishChars.test(textOnRemove);
        if ((isAddedTextValid || isRemovedTextValid) && text !== ',') {
            $(e.target).closest('div').find(tagsinputSelector).removeClass('border-danger');
            // enable on checnge if lengthText>1
            nextStepBtn.removeAttr('disabled', 'disabled');
        } else if (!isInit) {
            $(e.target).closest('div').find(tagsinputSelector).addClass('border-danger');
        }
    };
    // disable on init
    checkTextArea(null, 'isInit');
    console.log('$competitorsTextArea', $competitorsTextArea);

    // event.item: contains the item
    // event.cancel: set to true to prevent the item getting added
    $('input').on('beforeItemAdd', checkTextArea);

    // event.item: contains the item
    $('input').on('itemRemoved', checkTextArea);
}

export function initTagsInput () {
    $('input[data-role="tagsinput"]').tagsinput('items');
}