import MeteorEmoji from 'meteor-emoji';

export const emoji = (clsConst) => {
    if (!$(clsConst.page).length) {
        return;
    }
    // eslint-disable-next-line no-unused-vars
    const m = new MeteorEmoji();
    const $picker = $('textarea[data-meteor-emoji="true"] ~ div');
    const style = $picker.attr('style');
    const styleNew = style.replace(clsConst.styles.old, clsConst.styles.new);
    $picker.attr('style', styleNew);
};