// import MeteorEmoji from 'meteor-emoji';
import EmojiPicker from 'vanilla-emoji-picker';

export const emoji = (clsConst) => {
    if (!$(clsConst.page).length) {
        return;
    }
    // eslint-disable-next-line no-unused-vars
    // const m = new MeteorEmoji();
    // console.log('m', m);
    // eslint-disable-next-line no-unused-vars
    const ep = new EmojiPicker();
    // const $textarea = $('textarea[data-meteor-emoji="true"]');
    const $picker = $('textarea[data-emoji-picker="true"] ~ div');
    const style = $picker.attr('style');
    const styleNew = style.replace(clsConst.styles.old, clsConst.styles.new);
    $picker.attr('style', styleNew);
    // $picker.on('click', (e) => {
    //     event.preventDefault();
    //     const cursorPos = $textarea.prop('selectionStart');
    //     console.log('change', cursorPos);
    // });
};