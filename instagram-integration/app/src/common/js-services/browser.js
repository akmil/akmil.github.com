var BX = {};
BX.type = {
    isString: function(e) {
        return e === "" ? true : e ? typeof e == "string" || e instanceof String : false
    },
    isNotEmptyString: function(e) {
        return BX.type.isString(e) ? e.length > 0 : false
    },
    isBoolean: function(e) {
        return e === true || e === false
    },
    isNumber: function(e) {
        return e === 0 ? true : e ? typeof e == "number" || e instanceof Number : false
    },
    isFunction: function(e) {
        return e === null ? false : typeof e == "function" || e instanceof Function
    },
    isElementNode: function(e) {
        return e && typeof e == "object" && "nodeType"in e && e.nodeType == 1 && e.tagName && e.tagName.toUpperCase() != "SCRIPT" && e.tagName.toUpperCase() != "STYLE" && e.tagName.toUpperCase() != "LINK"
    },
    isDomNode: function(e) {
        return e && typeof e == "object" && "nodeType"in e
    },
    isTextNode: function(e) {
        return e && typeof e == "object" && "nodeType"in e && e.nodeType == 3
    },
    isArray: function(e) {
        return e && Object.prototype.toString.call(e) == "[object Array]"
    },
    isDate: function(e) {
        return e && Object.prototype.toString.call(e) == "[object Date]"
    },
    isPlainObject: function(e) {
        if (!e || typeof e !== "object" || e.nodeType) {
            return false
        }
        var t = Object.prototype.hasOwnProperty;
        try {
            if (e.constructor && !t.call(e, "constructor") && !t.call(e.constructor.prototype, "isPrototypeOf")) {
                return false
            }
        } catch (e) {
            return false
        }
        var n;
        for (n in e) {}
        return typeof n === "undefined" || t.call(e, n)
    },
    isNotEmptyObject: function(e) {
        for (var t in e) {
            if (e.hasOwnProperty(t))
                return true
        }
        return false
    },
    stringToInt: function(e) {
        var t = parseInt(e);
        return !isNaN(t) ? t : 0
    },
    isMapKey: function(e) {
        return e && (typeof e === "object" || typeof e === "function")
    }
};
BX.validation = {
    checkIfEmail: function(e) {
        var t = "[=a-z0-9_+~'!$&*^`|#%/?{}-]";
        return new RegExp("^\\s*" + t + "+(\\." + t + "+)*@([a-z0-9-]+\\.)+[a-z0-9-]{2,20}\\s*$","i").test(e)
    },
    checkIfPhone: function(e) {
        var t = new RegExp(typeof BX.PhoneNumber === "undefined" ? BX.PhoneNumber.getValidNumberPattern() : "^\\s*\\+?s*[0-9(-)\\s]+\\s*$","i");
        return t.test(e)
    }
};
BX.browser = {
    IsIE: function() {
        return bIE
    },
    IsIE6: function() {
        return /MSIE 6/i.test(navigator.userAgent)
    },
    IsIE7: function() {
        return /MSIE 7/i.test(navigator.userAgent)
    },
    IsIE8: function() {
        return /MSIE 8/i.test(navigator.userAgent)
    },
    IsIE9: function() {
        return !!document.documentMode && document.documentMode >= 9
    },
    IsIE10: function() {
        return !!document.documentMode && document.documentMode >= 10
    },
    IsIE11: function() {
        return BX.browser.DetectIeVersion() >= 11
    },
    IsOpera: function() {
        return bOpera
    },
    IsSafari: function() {
        return bSafari
    },
    IsFirefox: function() {
        return bFirefox
    },
    IsChrome: function() {
        return bChrome
    },
    IsMac: function() {
        return /Macintosh/i.test(navigator.userAgent)
    },
    IsAndroid: function() {
        return /Android/i.test(navigator.userAgent)
    },
    IsIOS: function() {
        return /(iPad;)|(iPhone;)/i.test(navigator.userAgent)
    },
    IsMobile: function() {
        return /(ipad|iphone|android|mobile|touch)/i.test(navigator.userAgent)
    },
    DetectIeVersion: function() {
        if (BX.browser.IsOpera() || BX.browser.IsSafari() || BX.browser.IsFirefox() || BX.browser.IsChrome()) {
            return -1
        }
        var e = -1;
        if (!!window.MSStream && !window.ActiveXObject && "ActiveXObject"in window) {
            e = 11
        } else if (BX.browser.IsIE10()) {
            e = 10
        } else if (BX.browser.IsIE9()) {
            e = 9
        } else if (BX.browser.IsIE()) {
            e = 8
        }
        if (e == -1 || e == 8) {
            var t;
            if (navigator.appName == "Microsoft Internet Explorer") {
                t = new RegExp("MSIE ([0-9]+[.0-9]*)");
                if (t.exec(navigator.userAgent) != null)
                    e = parseFloat(RegExp.$1)
            } else if (navigator.appName == "Netscape") {
                e = 11;
                t = new RegExp("Trident/.*rv:([0-9]+[.0-9]*)");
                if (t.exec(navigator.userAgent) != null)
                    e = parseFloat(RegExp.$1)
            }
        }
        return e
    },
    DetectAndroidVersion: function() {
        var e = new RegExp("Android ([0-9]+[.0-9]*)");
        if (e.exec(navigator.userAgent) != null)
            return parseFloat(RegExp.$1);
        else
            return 0
    },
    IsDoctype: function(e) {
        e = e || document;
        if (e.compatMode)
            return e.compatMode == "CSS1Compat";
        return e.documentElement && e.documentElement.clientHeight
    },
    SupportLocalStorage: function() {
        return !!BX.localStorage && !!BX.localStorage.checkBrowser()
    },
    addGlobalClass: function() {
        var e = "bx-core";
        if (BX.hasClass(document.documentElement, e)) {
            return
        }
        if (BX.browser.IsIOS()) {
            e += " bx-ios"
        } else if (BX.browser.IsMac()) {
            e += " bx-mac"
        } else if (BX.browser.IsAndroid()) {
            e += " bx-android"
        }
        e += BX.browser.IsMobile() ? " bx-touch" : " bx-no-touch";
        e += BX.browser.isRetina() ? " bx-retina" : " bx-no-retina";
        var t = -1;
        if (/AppleWebKit/.test(navigator.userAgent)) {
            e += " bx-chrome"
        } else if ((t = BX.browser.DetectIeVersion()) > 0) {
            e += " bx-ie bx-ie" + t;
            if (t > 7 && t < 10 && !BX.browser.IsDoctype()) {
                e += " bx-quirks"
            }
        } else if (/Opera/.test(navigator.userAgent)) {
            e += " bx-opera"
        } else if (/Gecko/.test(navigator.userAgent)) {
            e += " bx-firefox"
        }
        BX.addClass(document.documentElement, e)
    },
    isPropertySupported: function(e, t) {
        if (!BX.type.isNotEmptyString(e))
            return false;
        var n = e.indexOf("-") > -1 ? f(e) : e;
        t = !!t;
        var i = n.charAt(0).toUpperCase() + n.slice(1);
        var r = (n + " " + ["Webkit", "Moz", "O", "ms"].join(i + " ") + i).split(" ");
        var o = document.body || document.documentElement;
        for (var s = 0; s < r.length; s++) {
            var a = r[s];
            if (o.style[a] !== undefined) {
                var l = a == n ? "" : "-" + a.substr(0, a.length - n.length).toLowerCase() + "-";
                return t ? l + u(n) : a
            }
        }
        function u(e) {
            return e.replace(/([A-Z])/g, function() {
                return "-" + arguments[1].toLowerCase()
            })
        }
        function f(e) {
            var t = /(\-([a-z]){1})/g;
            if (t.test(e))
                return e.replace(t, function() {
                    return arguments[2].toUpperCase()
                });
            else
                return e
        }
        return false
    },
    addGlobalFeatures: function(e, t) {
        if (!BX.type.isArray(e))
            return;
        var n = [];
        for (var i = 0; i < e.length; i++) {
            var r = !!BX.browser.isPropertySupported(e[i]);
            n.push("bx-" + (r ? "" : "no-") + e[i].toLowerCase())
        }
        BX.addClass(document.documentElement, n.join(" "))
    },
    isRetina: function() {
        return window.devicePixelRatio && window.devicePixelRatio >= 2
    }
};
