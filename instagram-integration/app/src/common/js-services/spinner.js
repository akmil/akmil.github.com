// import $ from 'jquery';
// import {CONST} from './consts';
// import Network from './network';
// import CookieStorage from './cookie';
// import PubSub from 'pubsub-js'; // https://www.npmjs.com/package/pubsub-js

// const SPINNER_BASE_TEMPALATE = 'js/ui/tpl/spinner.hbs';
const classes = {
    inline: 'global-inline-spinner',
    overlay: 'global-overlay-spinner',
    fixed: 'global-fixed-spinner',
    button: 'global-form-button--load'
};
// const handlebarsTpl = function (name, data, $target) {
//     // var html = this.getTemplate(name)(data);
//     var html = Handlebars.compile(template);
//
//     if ($target) {
//         //for preventing xss
//         $target[0].innerHTML = html;
//     }
//
//     return html;
// };
// const handlebars = this.getService('core.templating.handlebars');

class Spinner {

    constructor(_cfg) {
        this.cfg = _cfg || {};
        // this.$defaultContainer = $('body');
        $.extend(classes, this.cfg.classes);
        // this._mediator.subscribe(CONST.events.STOP_FIXED_SPINNER, this.stopFixedSpinner.bind(this));
    }
    // _mediator = PubSub;

    start($el, prewCls) {
        // if (addOrRemove) {
        //     $('#foo').addClass(className);
        // }
        // else {
        //     $('#foo').removeClass(className);
        // }
        $el.find('i').toggleClass(prewCls).addClass('fa-spin fa-spinner');
    }

    stop($el, newCls) {
        $el.find('i').toggleClass(newCls).removeClass('fa-spin fa-spinner');
    }

    /**
     * Finds spinners
     * @param {string} type
     * @param {string} $container
     * @return {?jQuery} spinners
     */
    // _findSpinner = function (type, $container) {
    //     const selector = '.' + type;
    //     let $el = this.$defaultContainer;
    //     if ($container) {
    //         $el = $container;
    //     }
    //
    //     if ($el.find(selector).length > 0) {
    //         return $el.find(selector);
    //     }
    // };

    /**
     *
     * @param {string} $el
     */
    /*
    startContentSpinner = function ($el) {
        const html = handlebarsTpl(
            SPINNER_BASE_TEMPALATE, {
                imgSrc: CTC.URLS.WAITING_IMAGE,
                'class': classes.overlay
            });
        $el.prepend(html);
    };

    startInlineContentSpinner = function ($el) {
        const html = handlebarsTpl(
            SPINNER_BASE_TEMPALATE, {
                imgSrc: CTC.URLS.WAITING_IMAGE,
                'class': classes.inline
            });
        $el.prepend(html);
    };
    */

    /**
     * Starts global full page fixed spinner
     */
    /*
    startFixedSpinner = function () {
        const spinners = this._findSpinner(classes.fixed);
        if (!(CTC.isEdit() || CTC.isDesign()) && !spinners) {
            const html = handlebarsTpl(
                SPINNER_BASE_TEMPALATE, {
                    imgSrc: CTC.URLS.WAITING_IMAGE,
                    'class': classes.fixed
                });
            this.$defaultContainer.prepend(html);
        }
    };
    */

    /**
     * Adds spinner icon on button before the button text
     * @param {jQuery} $el
     */
    // startButtonSpinner = function ($el) {
    //     $el.addClass(classes.button);
    // };

    /**
     * Stops spinners
     * @param {string} type
     * @param {string} $container
     */
    // _stopSpinner = function (type, $container) {
    //     const spinners = this._findSpinner(type, $container);
    //     if (spinners) {
    //         spinners.remove();
    //     }
    // };

    /**
     *
     * @param {string} $el
     */
    // stopContentSpinner = function ($el) {
    //     $el.find('.' + classes.overlay).remove();
    // };

    /**
     *
     * @param {string} $el
     */
    // stopInlineContentSpinner = function ($el) {
    //     $el.find('.' + classes.inline).remove();
    // };

    /**
     * Stops global full page fixed spinner
     */
    // stopFixedSpinner = function () {
    //     this._stopSpinner(classes.fixed);
    // };

    /**
     * Removes spinner icon from button
     * @param {jQuery} $el
     */
    // stopButtonSpinner = function ($el) {
    //     $el.removeClass(classes.button);
    // };
}

let spinnerInstance = null;

if (!spinnerInstance) {
    spinnerInstance = new Spinner();
}

export default spinnerInstance;
