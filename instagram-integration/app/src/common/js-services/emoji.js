import 'emojioneArea';

export const emoji = (clsConst) => {
    if (!$(clsConst.page).length) {
        return;
    }
    // eslint-disable-next-line no-unused-vars
    // const m = new MeteorEmoji();
    // eslint-disable-next-line no-unused-vars
    // const ep = new EmojiPicker();
    // const $picker = $('textarea[data-emoji-picker="true"] ~ div');
    // const style = $picker.attr('style');
    // const styleNew = style.replace(clsConst.styles.old, clsConst.styles.new);
    // $picker.attr('style', styleNew);

    $('textarea[data-emoji-picker="true"]').emojioneArea({
        pickerPosition: 'bottom',
        tonesStyle: 'square',
        filtersPosition: 'bottom',
        search: true,
        events: {
            keyup (editor, event) {
                console.log(editor.html());
                console.log(this.getText());
            }
        }
    });
};
