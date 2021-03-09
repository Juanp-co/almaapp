(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-escuela-escuela-module"],{

/***/ "4xSv":
/*!*************************************************!*\
  !*** ./src/app/views/escuela/escuela.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc2N1ZWxhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "5ABz":
/*!***********************************************!*\
  !*** ./src/app/views/escuela/escuela.page.ts ***!
  \***********************************************/
/*! exports provided: EscuelaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscuelaPage", function() { return EscuelaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_escuela_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./escuela.page.html */ "8Scp");
/* harmony import */ var _escuela_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./escuela.page.scss */ "4xSv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _escuela_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./escuela.service */ "8DCN");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");









let EscuelaPage = class EscuelaPage {
    constructor(globalSer, navCtrl, escuelaServ, router) {
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.escuelaServ = escuelaServ;
        this.router = router;
        this.courses = null;
        this.totals = 0;
        this.pages = 0;
        this.page = 1;
        this.showSearch = false;
        this.queryParams = {
            input: 'title',
            value: 1,
            page: 1,
            limit: 10,
            title: null
        };
        this.handlePage = (page) => {
            this.queryParams.page = page;
            this.courses = [];
            this.getCoursesList();
        };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/']);
    }
    ngOnInit() { }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.globalSer.checkSession())
                this.router.navigate(['/']);
            else
                yield this.getTotals();
        });
    }
    getTotals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.totals = 0;
            this.pages = 0;
            const totals = yield this.escuelaServ.getCoursesTotals(this.queryParams);
            if (!!totals && totals >= 0 && !totals.error) {
                this.totals = totals;
                this.pages = this.globalSer.getPagination(totals, this.queryParams.limit);
                if (totals > 0)
                    yield this.getCoursesList();
                else {
                    this.queryParams.page = 1;
                    this.pages = 0;
                    this.courses = [];
                }
            }
            else if (!!totals && totals.error) {
                this.queryParams.page = 1;
                this.pages = 0;
                this.courses = [];
                if (totals.status && totals.status === 401) {
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.errorSession();
                }
            }
            else {
                this.queryParams.page = 1;
                this.pages = 0;
                this.courses = [];
                yield this.globalSer.dismissLoading();
            }
        });
    }
    getCoursesList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.escuelaServ.getCourses(this.queryParams);
            if (data && !data.error) {
                this.courses = data;
                this.courses.forEach(c => {
                    c.description = Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["setSaltLinesOrBr"])(c.description, true);
                    if (c.description.length > 150) {
                        c.description = `${c.description.substr(0, 150)} ...`;
                    }
                });
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
    // query actions
    setShowSearch() {
        this.showSearch = !this.showSearch;
    }
    findData(closeSearch = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (closeSearch)
                this.setShowSearch();
            this.queryParams.page = 1;
            this.pages = 0;
            this.courses = null;
            yield this.getTotals();
        });
    }
    setSortOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
            this.queryParams.page = 1;
            this.courses = null;
            yield this.getCoursesList();
        });
    }
    setQueryValues() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updated = (selectedValue) => {
                this.queryParams.limit = selectedValue;
                this.queryParams.page = 1;
                this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
                this.courses = null;
                this.getCoursesList();
            };
            yield this.globalSer.alertWithList({
                header: 'Resultados por página',
                inputs: [
                    {
                        name: `results-per-page`,
                        type: 'radio',
                        label: `10`,
                        value: 10,
                        checked: this.queryParams.limit === 10,
                    },
                    {
                        name: `results-per-page`,
                        type: 'radio',
                        label: `20`,
                        value: 20,
                        checked: this.queryParams.limit === 20,
                    },
                    {
                        name: `results-per-page`,
                        type: 'radio',
                        label: `30`,
                        value: 30,
                        checked: this.queryParams.limit === 30,
                    },
                ],
                confirmAction: updated
            });
        });
    }
    goToDetails(slug = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate([`curso/${slug}`]);
        });
    }
};
EscuelaPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _escuela_service__WEBPACK_IMPORTED_MODULE_6__["EscuelaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
EscuelaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-escuela',
        template: _raw_loader_escuela_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_escuela_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EscuelaPage);



/***/ }),

/***/ "8DCN":
/*!**************************************************!*\
  !*** ./src/app/views/escuela/escuela.service.ts ***!
  \**************************************************/
/*! exports provided: EscuelaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscuelaService", function() { return EscuelaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");





let EscuelaService = class EscuelaService {
    constructor(globalSer, navCtrl, axios) {
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.axios = axios;
    }
    getCoursesTotals(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/courses/counters', query);
            if (res && res.success)
                return res.data.totals;
            return this.globalSer.altResponse(res);
        });
    }
    getCourses(query = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/courses', query);
            if (res && res.success)
                return res.data.courses;
            return this.globalSer.altResponse(res);
        });
    }
};
EscuelaService.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_3__["AxiosService"] }
];
EscuelaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EscuelaService);



/***/ }),

/***/ "8Scp":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/escuela/escuela.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Escuela\"></app-minheader>\n  </ion-header>\n\n  <div class=\"ion-margin\">\n    <ion-button color=\"light\" (click)=\"setSortOrder()\">\n      <ion-icon name=\"arrow-up-outline\" *ngIf=\"queryParams.value === 1\"></ion-icon>\n      <ion-icon name=\"arrow-down-outline\" *ngIf=\"queryParams.value === -1\"></ion-icon>&nbsp;\n      <ion-text>{{ queryParams.value === 1 ? 'ASC' : 'DES' }}</ion-text>\n    </ion-button>\n    <ion-button color=\"light\" (click)=\"setQueryValues()\">\n      <ion-icon name=\"filter-outline\"></ion-icon>&nbsp;\n      <ion-text>{{ queryParams.limit }}</ion-text>\n    </ion-button>\n    <ion-button color=\"light\" (click)=\"setShowSearch()\">\n      <ion-icon name=\"search-outline\" slot=\"start\" *ngIf=\"!showSearch\"></ion-icon>\n      <ion-icon name=\"close-outline\" slot=\"start\" *ngIf=\"showSearch\"></ion-icon>\n      <ion-text>Buscar</ion-text>\n    </ion-button>\n  </div>\n\n  <ion-card *ngIf=\"showSearch\">\n    <ion-card-content>\n      <ion-toolbar>\n        <ion-button color=\"light\" (click)=\"queryParams.title = null; findData(true)\" slot=\"start\" *ngIf=\"queryParams.title\">\n          <ion-icon name=\"backspace-outline\"></ion-icon>\n        </ion-button>\n        <ion-item>\n          <ion-label position=\"floating\" color=\"medium\">Buscar por título</ion-label>\n          <ion-input\n            [(ngModel)]=\"queryParams.title\"\n            autocomplete=\"off\"\n            class=\"ion-text-uppercase\"\n          ></ion-input>\n        </ion-item>\n        <ion-button color=\"light\" (click)=\"findData()\" slot=\"end\" [disabled]=\"!queryParams.title\">\n          <ion-icon name=\"search-outline\"></ion-icon>\n        </ion-button>\n      </ion-toolbar>\n    </ion-card-content>\n  </ion-card>\n\n  <div *ngIf=\"courses !== null\">\n\n    <div *ngIf=\"courses && courses.length > 0; else noCourses\" >\n      <ion-list *ngFor='let course of courses'>\n        <ion-card *ngIf=\"course\" button (click)=\"goToDetails(course.slug)\">\n          <ion-img class=\"banner\" [src]=\"course.banner\"></ion-img>\n          <ion-card-header>\n            <ion-card-subtitle>Por: {{ course.speaker }}</ion-card-subtitle>\n            <ion-card-title>{{ course.title }}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-text *ngIf=\"course.description\">{{ course.description }}</ion-text>\n            <ion-button class=\"ion-margin-top\" color=\"primary\" expand=\"block\" (click)=\"goToDetails(course.slug)\">\n              <ion-text>\n                <ion-icon name=\"open-outline\"></ion-icon>\n                Ver detalles\n              </ion-text>\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-list>\n    </div>\n\n    <div class=\"ion-margin-top ion-margin-bottom\" *ngIf=\"courses && courses.length > 0 && pages > 0\">\n      <app-paginator\n        [totalPages]=\"pages\"\n        [currentPage]=\"queryParams.page\"\n        [handlePage]=\"handlePage\"\n      ></app-paginator>\n    </div>\n\n    <ng-template #noCourses>\n      <ion-card class=\"ion-margin-top ion-margin-bottom ion-no-padding\">\n        <ion-text class=\"ion-text-center\">\n          <p *ngIf=\"!queryParams.title\"><ion-icon name=\"alert-circle-outline\"></ion-icon> Por ahora no existen cursos disponibles.</p>\n          <p *ngIf=\"queryParams.title\"><ion-icon name=\"alert-circle-outline\"></ion-icon> No se encontraron resultados.</p>\n        </ion-text>\n      </ion-card>\n    </ng-template>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "CjsL":
/*!*************************************************!*\
  !*** ./src/app/views/escuela/escuela.module.ts ***!
  \*************************************************/
/*! exports provided: EscuelaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscuelaPageModule", function() { return EscuelaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _escuela_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./escuela-routing.module */ "lfKm");
/* harmony import */ var _escuela_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./escuela.page */ "5ABz");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let EscuelaPageModule = class EscuelaPageModule {
};
EscuelaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _escuela_routing_module__WEBPACK_IMPORTED_MODULE_5__["EscuelaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_escuela_page__WEBPACK_IMPORTED_MODULE_6__["EscuelaPage"]]
    })
], EscuelaPageModule);



/***/ }),

/***/ "lfKm":
/*!*********************************************************!*\
  !*** ./src/app/views/escuela/escuela-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EscuelaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscuelaPageRoutingModule", function() { return EscuelaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _escuela_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./escuela.page */ "5ABz");




const routes = [
    {
        path: '',
        component: _escuela_page__WEBPACK_IMPORTED_MODULE_3__["EscuelaPage"]
    }
];
let EscuelaPageRoutingModule = class EscuelaPageRoutingModule {
};
EscuelaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EscuelaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-escuela-escuela-module.js.map