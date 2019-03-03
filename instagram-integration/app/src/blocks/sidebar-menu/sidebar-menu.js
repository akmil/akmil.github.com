
/**
 * Init Menu
 */
export function initMenu() {
    const urlToCheck = ['autoanswer', 'stories', 'autogreeting', 'follow', 'messages', 'chat-bot'];
    urlToCheck.forEach(item => {
        if (window.location.href.includes(item)) {
            $(`nav.aside-burger-menu a[href*="${item}"]`)
                .addClass('text-info')
                .removeClass('text-light');
            // console.info('item found', item, activeMenuItem);
        }
    });
}
