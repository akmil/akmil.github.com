import $ from 'jquery';
import {EasyAutocomplete} from 'easy-autocomplete';

const searchWrapperCls = '.header-search';
const searchButtonCls = '.header__search-button';
const searchButtonCloseCls = 'header__search-button--close';
const searchOpenedCls = 'header-search--opened';

/**
 * Toggle header scroll class
 */
function toggleScrollClass() {
    const $header = $('.header');
    const headerScrollClass = 'header--scrolled';

    if ($(document).scrollTop() > 30) {
        $header.addClass(headerScrollClass);
        return;
    }

    $header.removeClass(headerScrollClass);
}

/**
 * Toggle search popover
 */
function toggleSearchPopover() {
    const $searchWrapper = $(searchWrapperCls);

    $searchWrapper.toggleClass(searchOpenedCls);
    $(searchButtonCls).toggleClass(searchButtonCloseCls);

    if ($searchWrapper.hasClass(searchOpenedCls)) {
        setTimeout(() => {
            $searchWrapper.find('input[type=search]').focus();
        }, 100);
        return;
    }

    $searchWrapper.find('input[type=search]').val('').blur();
}

/**
 * autoComplete
 */
function autoComplete(suggestionsData) {
    console.info(EasyAutocomplete);

    const options = {
        data: suggestionsData,
        // url: suggestionsUrl,
        getValue: 'value',
        template: {
            type: 'links',
            fields: {
                link: 'link'
            }
        },
        list: {
            maxNumberOfElements: 10,
            match: {
                enabled: true
            }
        }
    };

    $('#autocomplete').easyAutocomplete(options);
}

const entity = /&(?:#x[a-f0-9]+|#[0-9]+|[a-z0-9]+);?/ig;

/**
 * decodeString
 */
function decodeString(str) {
    const element = document.createElement('div');
    const str1 = str.replace(entity, function (m) {
        element.innerHTML = m;
        return element.textContent;
    });
    element.remove();

    return str1;
}

/**
 * Init header
 */
export function init() {
    const suggestionsUrl = $('.header-search').attr('data-suggestions-api');
    toggleScrollClass();

    $(searchButtonCls).on('click', () => {
        if (!$(searchButtonCls).hasClass(searchButtonCloseCls)) {
            toggleSearchPopover();
            $.ajax({
                url: suggestionsUrl
            }).done(function (data) {
                const dataDecode = [];
                data.forEach((item) => {
                    if (item.link && item.value) {
                        dataDecode.push({link: item.link, value: decodeString(item.value)});
                    }
                });
                autoComplete(dataDecode);
                $('.header-search').attr('data-suggestions-recieved', data);
            }).fail(function () {
                console.info('error');
            });
        }
    });


    $(window).scroll(function () {
        toggleScrollClass();
    });

    $(document).on('click', (event) => {
        if (!$(event.target).closest(`${searchWrapperCls}, ${searchButtonCls}`).length &&
            $(searchButtonCls).hasClass(searchButtonCloseCls)) {
            toggleSearchPopover();
        }
    });
}
