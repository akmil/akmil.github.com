
/**
 * Init Menu
 */
export function initMenu() {
    const urlToCheck = [
        'instagram-accounts',
        'automessages',
        'stories',
        'autogreeting',
        'autocomments',
        'follow',
        'unfollow',
        'messages',
        'chat-bot'
    ];
    const pathName = window.location.pathname;
    urlToCheck.forEach(item => {
        const isActiveUrl = (pathName === `/instagram-integration/${item}.html` || pathName === `/${item}.html`);
        if (isActiveUrl) {
            $(`nav.aside-burger-menu a[href*="/${item}"]`)
                .addClass('text-info')
                .removeClass('text-light');
            // console.info('item found', item, activeMenuItem);
        }
    });
}
