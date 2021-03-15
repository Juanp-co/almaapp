(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-estadistica-estadistica-module"],{

/***/ "Mmaj":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/estadistica/estadistica.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Estadística\"></app-minheader>\n  </ion-header>\n\n  <ion-row class=\"ion-no-padding\">\n    <ion-col size=\"12\">\n      <div class=\"ion-margin-bottom\">\n        <ion-button color=\"light\" (click)=\"setShowFilter()\">\n          <ion-icon name=\"filter-outline\" slot=\"start\" *ngIf=\"!showFilter\"></ion-icon>\n          <ion-icon name=\"close-outline\" slot=\"start\" *ngIf=\"showFilter\"></ion-icon>\n          <ion-text>Filtrar</ion-text>\n        </ion-button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" *ngIf=\"showFilter\">\n      <ion-card>\n        <ion-card-content class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">A partir de:</ion-label>\n                <ion-datetime\n                  [(ngModel)]=\"queryParams.initDate\"\n                  displayFormat=\"DD/MM/YYYY\"\n                  [min]=\"minInitDate\"\n                  [max]=\"maxInitDate\"\n                  doneText=\"Listo\"\n                  cancelText=\"Cancelar\"\n                >\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Hasta:</ion-label>\n                <ion-datetime\n                  [(ngModel)]=\"queryParams.endDate\"\n                  displayFormat=\"DD/MM/YYYY\"\n                  [min]=\"minEndDate\"\n                  [max]=\"maxEndDate\"\n                  doneText=\"Listo\"\n                  cancelText=\"Cancelar\"\n                >\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-margin-top ion-text-center\">\n            <ion-col size=\"12\" class=\"ion-justify-content-center\">\n              <ion-button class=\"ion-text-center\" color=\"light\" (click)=\"resetQueryParams()\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n                <ion-text>Limpiar</ion-text>\n              </ion-button>\n              <ion-button class=\"ion-text-center\" color=\"primary\" (click)=\"findData()\">\n                <ion-icon name=\"checkmark-outline\"></ion-icon>\n                <ion-text>Aplicar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" class=\"ion-margin-start ion-margin-end\">\n      <ion-text color=\"medium\">\n        <i>\n          <ion-icon name=\"information-circle-outline\"></ion-icon>\n          Para mejor visualización de las gráficas, le recomendamos girar el dispositivo\n          <ion-icon name=\"phone-portrait-outline\"></ion-icon>\n          <ion-icon name=\"phone-landscape-outline\"></ion-icon>.\n        </i>\n      </ion-text>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-justify-content-center ion-margin-bottom ion-padding-bottom\" *ngIf=\"data\">\n    <ion-col size=\"12\" *ngIf=\"data.courses\">\n      <app-chart\n        [data]=\"data.courses\"\n        title=\"Mis cursos\"\n        typeChart=\"bar\"\n      ></app-chart>\n    </ion-col>\n    <ion-col size=\"12\" *ngIf=\"data.referrals\">\n      <app-chart\n        [data]=\"data.referrals\"\n        title=\"Mis hijos espirituales\"\n        typeChart=\"bar\"\n      ></app-chart>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "NI3+":
/*!**********************************************************!*\
  !*** ./src/app/views/estadistica/estadistica.service.ts ***!
  \**********************************************************/
/*! exports provided: EstadisticaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticaService", function() { return EstadisticaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let EstadisticaService = class EstadisticaService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    getReports(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/user/reports', query);
            if (res && res.success)
                return res.data.reports;
            return this.globalSer.altResponse(res);
        });
    }
};
EstadisticaService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
EstadisticaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EstadisticaService);



/***/ }),

/***/ "T7Tc":
/*!*********************************************************!*\
  !*** ./src/app/views/estadistica/estadistica.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3RhZGlzdGljYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "dOMM":
/*!*******************************************************!*\
  !*** ./src/app/views/estadistica/estadistica.page.ts ***!
  \*******************************************************/
/*! exports provided: EstadisticaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticaPage", function() { return EstadisticaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_estadistica_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./estadistica.page.html */ "Mmaj");
/* harmony import */ var _estadistica_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estadistica.page.scss */ "T7Tc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _estadistica_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estadistica.service */ "NI3+");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");








let EstadisticaPage = class EstadisticaPage {
    constructor(globalSer, estadisticaService, router) {
        this.globalSer = globalSer;
        this.estadisticaService = estadisticaService;
        this.router = router;
        this.data = null;
        this.showFilter = false;
        this.minInitDate = dayjs__WEBPACK_IMPORTED_MODULE_4___default()('2021-01-01').format('YYYY-MM-DD');
        this.maxInitDate = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD');
        this.minEndDate = dayjs__WEBPACK_IMPORTED_MODULE_4___default()('2021-01-01').format('YYYY-MM-DD');
        this.maxEndDate = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD');
        this.queryParams = {
            initDate: null,
            endDate: null,
        };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/']);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getData();
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.estadisticaService.getReports(this.queryParams);
            if (data && !data.error) {
                this.data = data;
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    setShowFilter() {
        this.showFilter = !this.showFilter;
    }
    resetQueryParams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.initDate = null;
            this.queryParams.endDate = null;
            this.showFilter = !this.showFilter;
            this.data = null;
            yield this.getData();
        });
    }
    findData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let find = false;
            if (this.queryParams.initDate) {
                this.queryParams.initDate = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(this.queryParams.initDate).format('YYYY-MM-DD');
                find = true;
            }
            if (this.queryParams.endDate) {
                this.queryParams.endDate = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(this.queryParams.endDate).format('YYYY-MM-DD');
                find = this.queryParams.initDate !== null;
            }
            if (find) {
                this.data = null;
                yield this.getData();
            }
            else
                this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar una fecha inicial');
        });
    }
};
EstadisticaPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _estadistica_service__WEBPACK_IMPORTED_MODULE_6__["EstadisticaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
EstadisticaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-estadistica',
        template: _raw_loader_estadistica_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estadistica_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EstadisticaPage);



/***/ }),

/***/ "nMey":
/*!*****************************************************************!*\
  !*** ./src/app/views/estadistica/estadistica-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: EstadisticaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticaPageRoutingModule", function() { return EstadisticaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _estadistica_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estadistica.page */ "dOMM");




const routes = [
    {
        path: '',
        component: _estadistica_page__WEBPACK_IMPORTED_MODULE_3__["EstadisticaPage"]
    }
];
let EstadisticaPageRoutingModule = class EstadisticaPageRoutingModule {
};
EstadisticaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EstadisticaPageRoutingModule);



/***/ }),

/***/ "zWYb":
/*!*********************************************************!*\
  !*** ./src/app/views/estadistica/estadistica.module.ts ***!
  \*********************************************************/
/*! exports provided: EstadisticaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticaPageModule", function() { return EstadisticaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _estadistica_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estadistica-routing.module */ "nMey");
/* harmony import */ var _estadistica_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estadistica.page */ "dOMM");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let EstadisticaPageModule = class EstadisticaPageModule {
};
EstadisticaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _estadistica_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstadisticaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_estadistica_page__WEBPACK_IMPORTED_MODULE_6__["EstadisticaPage"]]
    })
], EstadisticaPageModule);



/***/ })

}]);
//# sourceMappingURL=views-estadistica-estadistica-module.js.map