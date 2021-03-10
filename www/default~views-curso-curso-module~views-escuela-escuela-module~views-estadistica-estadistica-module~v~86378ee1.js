(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-curso-curso-module~views-escuela-escuela-module~views-estadistica-estadistica-module~v~86378ee1"],{

/***/ "4WDQ":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookies.service */ "QTu/");




let GlobalService = class GlobalService {
    constructor(alertCtrl, loadingCtrl, navCtrl, cookieService, modalController) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.cookieService = cookieService;
        this.modalController = modalController;
    }
    presentAlert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header,
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentLoading(message = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({ message: message || 'Cargando...' });
            return this.loading.present();
        });
    }
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        });
    }
    /*
      ALERTS
     */
    /**
     * @param header Title
     * @param message Message
     * @param confirmAction Function confirm
     * @param rejectAction Function reject
     * @return Promise<void>
     */
    alertConfirm({ header, message, confirmAction, rejectAction }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: header || 'Confirme',
                message: message || '¿Está seguro?',
                buttons: [
                    { text: 'Cancelar', role: 'cancel', handler: () => { if (!!rejectAction)
                            rejectAction(); } },
                    { text: 'Sí', handler: () => { if (!!confirmAction)
                            confirmAction(); } }
                ]
            });
            yield alert.present();
        });
    }
    alertWithList({ header, inputs, confirmAction, rejectAction }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: header || 'Seleccione',
                inputs,
                buttons: [
                    { text: 'Cancelar', role: 'cancel', handler: () => { if (!!rejectAction)
                            rejectAction(); } },
                    { text: 'Ok', handler: (selectedValue) => { if (!!confirmAction)
                            confirmAction(selectedValue); } }
                ]
            });
            yield alert.present();
        });
    }
    /*
      GLOBAL ACTION MODAL
     */
    /**
     * @param component Page to show.
     * @param componentProps Data pass to component.
     * @param backdropDismiss Click out modal to close.
     * @param actionUpdatedData Function to do action with data returned when the modal is closed.
     * @return Promise void return
     */
    loadModal(component, componentProps = {}, backdropDismiss = true, actionUpdatedData = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (component) {
                const modal = yield this.modalController.create({
                    component,
                    componentProps,
                    backdropDismiss
                });
                modal.present();
                if (!!actionUpdatedData) {
                    const { data } = yield modal.onWillDismiss();
                    if (data)
                        actionUpdatedData(data);
                    else
                        actionUpdatedData();
                }
            }
        });
    }
    /*
      COOKIES ACTIONS, SESSION AND RESPONSE AXIOS REDUCE
     */
    checkSession() {
        const token = this.cookieService.getCookie('token');
        if (!token)
            this.clearAllData();
        return !!token;
    }
    getRole() {
        const data = this.cookieService.getCookie('data');
        return data && data.role !== null && data.role !== undefined ? data.role : null;
    }
    clearAllData() {
        this.cookieService.removeCookie('token');
        this.cookieService.removeCookie('data');
    }
    altResponse(res) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (res && res.status && res.status === 401) {
                this.clearAllData();
                return { error: 401 };
            }
            yield this.presentAlert('Alerta', res && res.error ? res.error : 'Error desconocido.');
            return null;
        });
    }
    errorSession() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
            yield this.navCtrl.navigateBack(['/']);
        });
    }
    /*
      PAGINATION
     */
    getPagination(totalElements, perPage) {
        let pages = totalElements > 0 ? (Math.trunc((totalElements / perPage))) : 0;
        const extraPage = totalElements > 0 ? (totalElements % perPage) > 0 : false;
        if (extraPage)
            pages += 1;
        return pages;
    }
};
GlobalService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ "QTu/":
/*!*********************************************!*\
  !*** ./src/app/services/cookies.service.ts ***!
  \*********************************************/
/*! exports provided: CookiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesService", function() { return CookiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "p46w");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



let CookiesService = class CookiesService {
    constructor() { }
    getCookie(key) {
        const data = js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"](key);
        if (data && data.indexOf('{') > -1)
            return JSON.parse(data);
        return js_cookie__WEBPACK_IMPORTED_MODULE_2__["get"](key) || null;
    }
    removeCookie(key) {
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["remove"](key, { expires: 1 });
    }
    setCookie(key, value) {
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["set"](key, value, {
            expires: 1,
            path: '/'
        });
    }
};
CookiesService.ctorParameters = () => [];
CookiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CookiesService);



/***/ }),

/***/ "p46w":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ })

}]);
//# sourceMappingURL=default~views-curso-curso-module~views-escuela-escuela-module~views-estadistica-estadistica-module~v~86378ee1.js.map