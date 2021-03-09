(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-estadistica-estadistica-module"],{

/***/ "Mmaj":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/estadistica/estadistica.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Estadística\"></app-minheader>\n  </ion-header>\n</ion-content>\n");

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




let EstadisticaPage = class EstadisticaPage {
    constructor() { }
    ngOnInit() {
    }
};
EstadisticaPage.ctorParameters = () => [];
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