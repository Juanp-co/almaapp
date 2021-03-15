(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-ofrenda-ofrenda-module"],{

/***/ "1caN":
/*!**************************************************!*\
  !*** ./src/app/views/ofrenda/ofrenda.service.ts ***!
  \**************************************************/
/*! exports provided: OfrendaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfrendaService", function() { return OfrendaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let OfrendaService = class OfrendaService {
    constructor(globalSer, axios) {
        this.globalSer = globalSer;
        this.axios = axios;
    }
    getBanksList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/banks`);
            if (res && res.success)
                return res.data.banks || [];
            return this.globalSer.altResponse(res);
        });
    }
};
OfrendaService.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] }
];
OfrendaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OfrendaService);



/***/ }),

/***/ "DEUY":
/*!***********************************************!*\
  !*** ./src/app/views/ofrenda/ofrenda.page.ts ***!
  \***********************************************/
/*! exports provided: OfrendaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfrendaPage", function() { return OfrendaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ofrenda_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ofrenda.page.html */ "rNFW");
/* harmony import */ var _ofrenda_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ofrenda.page.scss */ "qnAe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ofrenda_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ofrenda.service */ "1caN");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");






let OfrendaPage = class OfrendaPage {
    constructor(globalSer, ofrendaService) {
        this.globalSer = globalSer;
        this.ofrendaService = ofrendaService;
        this.banks = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getBanksLists();
        });
    }
    getBanksLists() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.ofrendaService.getBanksList();
            if (data && !data.error) {
                this.banks = data;
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error) {
                this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
};
OfrendaPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ofrenda_service__WEBPACK_IMPORTED_MODULE_4__["OfrendaService"] }
];
OfrendaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ofrenda',
        template: _raw_loader_ofrenda_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ofrenda_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OfrendaPage);



/***/ }),

/***/ "eHMr":
/*!*************************************************!*\
  !*** ./src/app/views/ofrenda/ofrenda.module.ts ***!
  \*************************************************/
/*! exports provided: OfrendaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfrendaPageModule", function() { return OfrendaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ofrenda_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ofrenda-routing.module */ "mNke");
/* harmony import */ var _ofrenda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ofrenda.page */ "DEUY");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let OfrendaPageModule = class OfrendaPageModule {
};
OfrendaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ofrenda_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfrendaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_ofrenda_page__WEBPACK_IMPORTED_MODULE_6__["OfrendaPage"]]
    })
], OfrendaPageModule);



/***/ }),

/***/ "mNke":
/*!*********************************************************!*\
  !*** ./src/app/views/ofrenda/ofrenda-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OfrendaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfrendaPageRoutingModule", function() { return OfrendaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ofrenda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ofrenda.page */ "DEUY");




const routes = [
    {
        path: '',
        component: _ofrenda_page__WEBPACK_IMPORTED_MODULE_3__["OfrendaPage"]
    }
];
let OfrendaPageRoutingModule = class OfrendaPageRoutingModule {
};
OfrendaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OfrendaPageRoutingModule);



/***/ }),

/***/ "qnAe":
/*!*************************************************!*\
  !*** ./src/app/views/ofrenda/ofrenda.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pictureIconBank {\n  width: auto !important;\n  height: 150px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvZnJlbmRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7QUFDRiIsImZpbGUiOiJvZnJlbmRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWN0dXJlSWNvbkJhbmsge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "rNFW":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/ofrenda/ofrenda.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Ofrendas\"></app-minheader>\n  </ion-header>\n\n  <div *ngIf=\"banks && banks.length > 0; else noBanks\">\n    <ion-list *ngFor='let bank of banks'>\n      <ion-card *ngIf=\"bank && bank.description\">\n        <ion-img class=\"pictureIconBank\" [src]=\"bank.picture\"></ion-img>\n        <ion-card-header>\n          <ion-card-title>{{ bank.title }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <div [innerHTML]=\"bank.description\"></div>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </div>\n\n  <ng-template #noBanks>\n    <div class=\"ion-margin-bottom ion-padding-bottom\">\n      <ion-card>\n        <ion-card-content>\n          <ion-text class=\"ion-text-center\" color=\"medium\">\n            <p><ion-icon name=\"alert-circle-outline\"></ion-icon> Disculpe, pero actualmente no disponemos de bancos para realizar donativos.</p>\n          </ion-text>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </ng-template>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=views-ofrenda-ofrenda-module.js.map