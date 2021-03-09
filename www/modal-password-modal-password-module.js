(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-password-modal-password-module"],{

/***/ "/brl":
/*!******************************************************************************!*\
  !*** ./src/app/views/perfil/modal-password/modal-password-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ModalPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPasswordPageRoutingModule", function() { return ModalPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-password.page */ "xXQh");




const routes = [
    {
        path: '',
        component: _modal_password_page__WEBPACK_IMPORTED_MODULE_3__["ModalPasswordPage"]
    }
];
let ModalPasswordPageRoutingModule = class ModalPasswordPageRoutingModule {
};
ModalPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalPasswordPageRoutingModule);



/***/ }),

/***/ "G6Bd":
/*!**********************************************************************!*\
  !*** ./src/app/views/perfil/modal-password/modal-password.module.ts ***!
  \**********************************************************************/
/*! exports provided: ModalPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPasswordPageModule", function() { return ModalPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-password-routing.module */ "/brl");
/* harmony import */ var _modal_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-password.page */ "xXQh");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let ModalPasswordPageModule = class ModalPasswordPageModule {
};
ModalPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalPasswordPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_modal_password_page__WEBPACK_IMPORTED_MODULE_6__["ModalPasswordPage"]]
    })
], ModalPasswordPageModule);



/***/ })

}]);
//# sourceMappingURL=modal-password-modal-password-module.js.map