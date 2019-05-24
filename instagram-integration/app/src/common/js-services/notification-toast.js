// import {CONST} from './consts';
// import Network from './network';
// import CookieStorage from './cookie';
const classes = {
    toastBox: 'body'
    // inline: 'global-inline-toast',
    // overlay: 'global-overlay-toast',
    // fixed: 'global-fixed-toast',
    // button: 'button--load'
};

class NotificationToast {

    constructor(_cfg) {
        this.cfg = _cfg || {};
        this.defaulEl = $(classes.toastBox);
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

    add(newCls, $el) {
        this.$el = $el || this.defaulEl;
        $el.prepend(`<div class="spinner-box justify-content-center ${newCls}">
            <div class="spin-animation">
                <svg aria-hidden="true" data-prefix="far" data-icon="sync-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sync-alt fa-w-16 fa-fw fa-2x"><path fill="currentColor" d="M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h28.045c6.353 0 11.613-4.952 11.973-11.294C66.161 141.649 151.453 60 256 60c54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486zM491.699 256h-28.045c-6.353 0-11.613 4.952-11.973 11.294C445.839 370.351 360.547 452 256 452c-54.163 0-103.157-21.923-138.614-57.386l54.128-54.129c7.56-7.56 2.206-20.485-8.485-20.485H20c-6.627 0-12 5.373-12 12v143.029c0 10.691 12.926 16.045 20.485 8.485L80.65 431.35C125.525 476.233 187.516 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507z" class=""></path></svg>
            </div>
        </div>`);
    }

    remove() {
        if (this.$el && this.$el.length) {
            this.$el.find('.spinner-box').remove();
        }
    }

    /**
     * Adds spinner icon on button before the button text
     * @param {jQuery} $el
     */
    startButtonSpinner = function ($el, newCls) {
        $el.addClass(classes.button);
        if ($el.find('.spinner-box--button').length) {
            return;
        }
        $el.prepend(`<div class="spinner-box spinner-box--button justify-content-center position-relative p-0 m-0 bg-transparent ${newCls}">
            <div class="spin-animation">
                <svg aria-hidden="true" data-prefix="far" data-icon="sync-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 
                    class="fa-fw">
                    <path fill="currentColor" d="M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h28.045c6.353 0 11.613-4.952 11.973-11.294C66.161 141.649 151.453 60 256 60c54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486zM491.699 256h-28.045c-6.353 0-11.613 4.952-11.973 11.294C445.839 370.351 360.547 452 256 452c-54.163 0-103.157-21.923-138.614-57.386l54.128-54.129c7.56-7.56 2.206-20.485-8.485-20.485H20c-6.627 0-12 5.373-12 12v143.029c0 10.691 12.926 16.045 20.485 8.485L80.65 431.35C125.525 476.233 187.516 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507z" class=""></path></svg>
            </div>
        </div>`);
    }

    /**
     * Removes spinner icon from button
     * @param {jQuery} $el
     */
    stopButtonSpinner = function ($el) {
        $el.removeClass(classes.button);
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
}

let notificationInstance = null;

if (!notificationInstance) {
    notificationInstance = new NotificationToast();
}

export default notificationInstance;
