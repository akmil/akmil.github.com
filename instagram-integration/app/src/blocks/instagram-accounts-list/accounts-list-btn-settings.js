import User from '../../common/js-services/user';

export function settingButtonsHandler(classCfg) {
    // ендпоинт:
    // DELETE blablabla/instagram-accounts/{username}
    // как всегда, токен в хидер
    console.log(classCfg);
    $('.js_acc-delete').on('click', () => {
        User.delInstagramAccount().then((result) => {
            console.log(classCfg);
        });
    });
}