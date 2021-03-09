(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-padres-padres-module"],{

/***/ "29XD":
/*!*******************************************************!*\
  !*** ./src/app/views/padres/padres-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PadresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadresPageRoutingModule", function() { return PadresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _padres_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./padres.page */ "B5GE");




const routes = [
    {
        path: '',
        component: _padres_page__WEBPACK_IMPORTED_MODULE_3__["PadresPage"]
    }
];
let PadresPageRoutingModule = class PadresPageRoutingModule {
};
PadresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PadresPageRoutingModule);



/***/ }),

/***/ "B5GE":
/*!*********************************************!*\
  !*** ./src/app/views/padres/padres.page.ts ***!
  \*********************************************/
/*! exports provided: PadresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadresPage", function() { return PadresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_padres_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./padres.page.html */ "ChtH");
/* harmony import */ var _padres_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./padres.page.scss */ "zbmQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _padres_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./padres.service */ "CNLz");








let PadresPage = class PadresPage {
    constructor(globalSer, navCtrl, padreService, cookieService) {
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.padreService = padreService;
        this.cookieService = cookieService;
        this.referrals = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getData();
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = this.cookieService.getCookie('token');
            if (token) {
                this.referrals = yield this.padreService.getReferrals();
            }
            else
                yield this.globalSer.errorSession();
        });
    }
};
PadresPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _padres_service__WEBPACK_IMPORTED_MODULE_7__["PadresService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_5__["CookiesService"] }
];
PadresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-padres',
        template: _raw_loader_padres_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_padres_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PadresPage);



/***/ }),

/***/ "CNLz":
/*!************************************************!*\
  !*** ./src/app/views/padres/padres.service.ts ***!
  \************************************************/
/*! exports provided: PadresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadresService", function() { return PadresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");





let PadresService = class PadresService {
    constructor(globalSer, navCtrl, axios) {
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.axios = axios;
    }
    getReferrals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // await this.globalSer.presentLoading();
            const res = yield this.axios.getData('/user/referrals');
            if (res && res.success) {
                return res.data.referrals || [];
            }
            return [];
        });
    }
};
PadresService.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_3__["AxiosService"] }
];
PadresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PadresService);



/***/ }),

/***/ "ChtH":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/padres/padres.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Padres espirituales\"></app-minheader>\n  </ion-header>\n\n\n  <ion-row class=\"ion-no-margin ion-no-padding\">\n    <ion-col size=\"12\" class=\"ion-margin-start ion-margin-end\">\n      <ion-text class=\"\"><h4>Tus hijos espirituales ({{ referrals.length }})</h4></ion-text>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf=\"referrals && referrals.length > 0; else noReferrals\">\n    <app-personcard *ngFor='let referred of referrals' [data]=\"referred\"></app-personcard>\n  </div>\n\n  <ng-template #noReferrals>\n    <ion-card class=\"ion-no-padding\">\n      <ion-text class=\"ion-text-center\">\n        <p><ion-icon name=\"alert-circle-outline\"></ion-icon> No tienes hijos espirituales.</p>\n      </ion-text>\n    </ion-card>\n  </ng-template>\n</ion-content>\n");

/***/ }),

/***/ "vDr/":
/*!***********************************************!*\
  !*** ./src/app/views/padres/padres.module.ts ***!
  \***********************************************/
/*! exports provided: PadresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadresPageModule", function() { return PadresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _padres_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./padres-routing.module */ "29XD");
/* harmony import */ var _padres_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./padres.page */ "B5GE");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let PadresPageModule = class PadresPageModule {
};
PadresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _padres_routing_module__WEBPACK_IMPORTED_MODULE_5__["PadresPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_padres_page__WEBPACK_IMPORTED_MODULE_6__["PadresPage"]]
    })
], PadresPageModule);



/***/ }),

/***/ "zbmQ":
/*!***********************************************!*\
  !*** ./src/app/views/padres/padres.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWRyZXMucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=views-padres-padres-module.js.map