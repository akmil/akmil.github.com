
/**
 * Init Menu
 */
export function initMenu() {
    const urlToCheck = [
        'instagram-accounts',
        'autoanswer',
        'stories',
        'autogreeting',
        'follow',
        'unfollow',
        'messages',
        'chat-bot'
    ];
    urlToCheck.forEach(item => {
        if (window.location.pathname === `/${item}.html`) {
            $(`nav.aside-burger-menu a[href*="/${item}"]`)
                .addClass('text-info')
                .removeClass('text-light');
            // console.info('item found', item, activeMenuItem);
        }
    });
}
