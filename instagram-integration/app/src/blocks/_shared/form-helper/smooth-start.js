
export function addSmoothStart(defaultCfg, state) {
    const {cfg: {smooth_starting}} = defaultCfg;
    if (!smooth_starting) {
        return;
    }
    state.user_default_config.smooth_starting_enabled = true;
    $('.js_smooth-starting').removeClass('d-none');

    $('.js_smooth-starting').on('change', (e) => {
        // console.log(e.target.checked, smooth_starting);
        state.user_default_config.smooth_starting_enabled = e.target.checked;
        if (!e.target.checked) {
            $('.js_toast-smooth-start').toast('show');
        }
    });
    $('.js_not-confirm').on('click', (e) => {
        console.log('click');
        console.log(e.target);
        $('.js_smooth-starting').prop('checked', true);
    });
}