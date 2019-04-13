import 'bootstrap-tagsinput';

const tagsinputSelector = '.bootstrap-tagsinput';

export function nextBtnvalidateCompetitorsHandler($input, nextStepBtn, igroreRegexCheck) {
    const englishChars = /^[A-Za-z0-9,._ \n]+$/;
    const checkTextArea = (e, isInit) => {
        const inputvalue = (!isInit) ? $(e.target).closest('div input').val() : '';
        const text = (!isInit) ? `${$(e.target).closest('div').find('.bootstrap-tagsinput input').val()},${inputvalue}` : '';
        const isRemoved = (!isInit && e.type === 'itemRemoved');
        const textOnRemove = (isRemoved) ? inputvalue : '';
        const removeBorder = () => {
            // enable on delete all
            $(e.target).closest('.js_tagsinput-box').find(tagsinputSelector).removeClass('border-danger');
            if (nextStepBtn) {
                // disable on checnge
                nextStepBtn.removeAttr('disabled', 'disabled');
            }
        };
        const addBorder = () => {
            $(e.target).closest('.js_tagsinput-box').find(tagsinputSelector).addClass('border-danger');
        };
        console.log('text', text);
        if (nextStepBtn) {
            // disable on checnge
            nextStepBtn.attr('disabled', 'disabled');
        }
        const isAddedTextValid = text.length && (englishChars.test(text) || !!igroreRegexCheck);
        const isRemovedTextValid = textOnRemove.length && (englishChars.test(textOnRemove) || !!igroreRegexCheck);
        if (true) {
            if ((isAddedTextValid || isRemovedTextValid) && text !== ',') {
                // enable on checnge if lengthText>1
                removeBorder();
            } else if (!isInit) {
                // $(e.target).closest('.js_tagsinput-box').find(tagsinputSelector).addClass('border-danger');
                addBorder();
            }
        }
        if (!textOnRemove.length && isRemoved && !isInit) {
            // enable on delete all
            removeBorder();
        }
    };
    // disable on init
    checkTextArea(null, 'isInit');
    console.log('$competitorsTextArea', $input);

    if (!nextStepBtn) {
        // do not validate anything
        return;
    }

    // event.item: contains the item
    // event.cancel: set to true to prevent the item getting added
    $input.on('beforeItemAdd', checkTextArea);

    // event.item: contains the item
    $input.on('itemRemoved', checkTextArea);
}

export function initTagsInput ($elInput) {
    $elInput.tagsinput('items');
}
