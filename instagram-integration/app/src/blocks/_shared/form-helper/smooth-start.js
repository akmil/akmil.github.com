
export function addSmoothStart(defaultCfg, state) {
    const {config: {smooth_starting}} = defaultCfg;
    if (!smooth_starting) {
        return;
    }
    state.user_default_config.smooth_starting_enabled = true;
    $('.js_smooth-starting').removeClass('d-none');

    $('.js_smooth-starting').on('change', (e) => {
        if (!e.target.checked) {
            $('.js_toast-smooth-start').toast('show');
            e.target.checked = true;
        }
        state.user_default_config.smooth_starting_enabled = e.target.checked;
    });
    $('.js_not-confirm').on('click', (e) => {
        console.log('click');
        console.log(e.target);
        $('.js_smooth-starting #smooth_starting').prop('checked', true);
    });
    $('.js_confirm').on('click', (e) => {
        console.log('click');
        console.log(e.target);
        $('.js_smooth-starting #smooth_starting').prop('checked', false);
    });
}