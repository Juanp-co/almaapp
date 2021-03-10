(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-inicio-inicio-module"],{

/***/ "F/dl":
/*!*********************************************!*\
  !*** ./src/app/views/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio.page.html */ "gbIU");
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.page.scss */ "Y7Th");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global.service */ "4WDQ");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");








let InicioPage = class InicioPage {
    constructor(axios, cookieService, globalSer, navCtrl) {
        this.axios = axios;
        this.cookieService = cookieService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.login = false;
        this.userData = null;
        this.user = 'CC12345678';
        this.pass = 'password';
        this.opciones = [
            { titulo: 'Red padres', imagen: 'assets/icon/red.svg', url: 'padres' },
            { titulo: 'Ofrendas', imagen: 'assets/icon/ofrenda.svg', url: 'ofrenda' },
            { titulo: 'Escuela', imagen: 'assets/icon/escuela.svg', url: 'escuela' },
            { titulo: 'Reportes', imagen: 'assets/icon/reportes.svg', url: 'estadistica' },
            { titulo: 'Eventos', imagen: 'assets/icon/calendario.svg', url: 'eventos' },
            { titulo: 'Salir', imagen: 'assets/icon/logout.svg', url: null }
        ];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // await this.getDataLogin();
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getDataLogin();
        });
    }
    getDataLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = this.cookieService.getCookie('token');
            if (token) {
                this.login = true;
                const data = this.cookieService.getCookie('data');
                if (!data) {
                    const res = yield this.axios.getData('/user');
                    if (res && res.success) {
                        this.cookieService.setCookie('data', res.data.data);
                        this.userData = res.data.data;
                        yield this.globalSer.dismissLoading();
                    }
                    else {
                        if (res.status && res.status === 401) {
                            this.cookieService.removeCookie('token');
                            this.login = false;
                        }
                        yield this.globalSer.dismissLoading();
                        yield this.globalSer.presentAlert('Alerta', res.error);
                    }
                }
                else
                    this.userData = data;
            }
            else
                this.login = false;
        });
    }
    ingresar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.pass && this.user) {
                yield this.globalSer.presentLoading();
                const res = yield this.axios.postData('/login', { document: this.user, password: this.pass });
                if (res && res.success) {
                    const { data, token } = res.data;
                    this.cookieService.setCookie('token', token);
                    this.cookieService.setCookie('data', data);
                    this.userData = data;
                    this.login = true;
                    this.user = null;
                    this.pass = null;
                    yield this.globalSer.dismissLoading();
                    // await this.globalSer.presentAlert('Info', 'Ingreso exitoso!');
                }
                else {
                    this.user = null;
                    this.pass = null;
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.presentAlert('Alerta', res.error);
                }
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Asegúrese de indicar su número de documento y contraseña.');
            }
        });
    }
    irMenu(num) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const opt = this.opciones[num] || null;
            if (opt) {
                if (!opt.url) {
                    yield this.globalSer.alertConfirm({
                        header: 'Salir',
                        message: '¿Está seguro qué desea finalizar la sesión?',
                        confirmAction: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.globalSer.presentLoading();
                            this.userData = null;
                            this.axios.deleteData('/logout');
                            yield this.globalSer.clearAllData();
                            this.login = false;
                            yield this.globalSer.dismissLoading();
                        })
                    });
                }
                else
                    yield this.navCtrl.navigateForward(opt.url);
            }
        });
    }
    goTo(link) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.navigateForward(`/${link}`);
        });
    }
};
InicioPage.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_6__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_7__["CookiesService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioPage);



/***/ }),

/***/ "FYWJ":
/*!*******************************************************!*\
  !*** ./src/app/views/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "F/dl");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "Wtct":
/*!***********************************************!*\
  !*** ./src/app/views/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "FYWJ");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "F/dl");







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "Y7Th":
/*!***********************************************!*\
  !*** ./src/app/views/inicio/inicio.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondoCool {\n  background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"/assets/cruz.png\");\n  background-size: cover;\n  background-position: center center;\n}\n\n.logo {\n  margin-bottom: -190px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUhBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FBREY7O0FBTUE7RUFDRSxnQ0FBQTtBQUhGIiwiZmlsZSI6ImluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmZvbmRvQ29vbHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoXCIvYXNzZXRzL2NydXoucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAvLyAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwLCAxMDAlIDEwMCUsIDUwJSA4NiUsIDAlIDEwMCUpO1xuICAvLyBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCwgMTAwJSAxMDAlLCA1MCUgODYlLCAwJSAxMDAlKTtcbn1cblxuLmxvZ297XG4gIG1hcmdpbi1ib3R0b206IC0xOTBweCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "gbIU":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>inicio</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <ion-row class=\"fondoCool ion-justify-content-end ion-padding \">\n    <ion-col size=\"8\" class=\"ion-margin-top ion-padding-top\">\n      <br><br><br><br>\n      <ion-text color=\"light\" class=\"titulo1\">Bienvenido</ion-text> <br>\n      <ion-text color=\"light\" class=\"titulo2\" *ngIf=\"userData\">\n        {{userData.names}} {{userData.lastNames}}\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"4\">\n      <img src=\"assets/logo.png\" class=\"logo\">\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf=\"!login\" class=\"ion-margin-top ion-padding-top\">\n    <br><br><br>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"auto\">\n        <h4>\n          <ion-text color=\"primary\">\n            Inicio de sesión\n          </ion-text>\n        </h4>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"9\">\n        <ion-item>\n          <ion-label position=\"floating\" color=\"medium\">Nº de documento</ion-label>\n          <ion-input [(ngModel)]=\"user\" class=\"ion-text-uppercase\" maxlength=\"12\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-item>\n          <ion-label position=\"floating\" color=\"medium\">Contraseña</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"pass\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"9\">\n        <p (click)=\"goTo('recuperar-acceso')\">\n          <ion-text color=\"medium\" class=\"ion-text-start\">¿Olvidaste tu contraseña?</ion-text>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center ion-margin-top\">\n      <ion-col size=\"auto\">\n        <ion-button expand=\"block\" color=\"light\" (click)=\"goTo('registro')\">\n          Registro\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"auto\">\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"ingresar()\">\n          Ingresar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"login\"  class=\"ion-margin-top ion-padding-top ion-margin-bottom ion-padding-bottom\">\n    <br/>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"5\"\n        *ngFor=\"let item of opciones; let i = index\"\n        class=\"ion-text-center ion-margin-top ion-padding-top\"\n        style=\"cursor: pointer;\"\n        (click)=\"irMenu(i)\"\n        >\n        <p><img [src]=\"item.imagen\" alt=\"\"/></p>\n        <ion-text color=\"medium\" class=\"ion-padding-top\">{{item.titulo}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <br/>\n  </div>\n\n  <ion-fab class=\"ion-margin-end ion-margin-bottom\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"*ngIf=\"login\">\n    <ion-fab-button color=\"primary\" (click)=\"goTo('perfil')\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=views-inicio-inicio-module.js.map