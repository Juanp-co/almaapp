(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-persona-persona-module"],{

/***/ "+g/2":
/*!*********************************************************!*\
  !*** ./src/app/views/persona/persona-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PersonaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaPageRoutingModule", function() { return PersonaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _persona_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persona.page */ "xM1M");




const routes = [
    {
        path: '',
        component: _persona_page__WEBPACK_IMPORTED_MODULE_3__["PersonaPage"]
    }
];
let PersonaPageRoutingModule = class PersonaPageRoutingModule {
};
PersonaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonaPageRoutingModule);



/***/ }),

/***/ "HLFH":
/*!*************************************************!*\
  !*** ./src/app/views/persona/persona.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pictureLogo {\n  width: 65px !important;\n  margin: 0 auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwZXJzb25hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJwZXJzb25hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWN0dXJlTG9nbyB7XHJcbiAgd2lkdGg6IDY1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "R6vB":
/*!*************************************************!*\
  !*** ./src/app/views/persona/persona.module.ts ***!
  \*************************************************/
/*! exports provided: PersonaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaPageModule", function() { return PersonaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _persona_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./persona-routing.module */ "+g/2");
/* harmony import */ var _persona_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./persona.page */ "xM1M");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let PersonaPageModule = class PersonaPageModule {
};
PersonaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _persona_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonaPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_persona_page__WEBPACK_IMPORTED_MODULE_6__["PersonaPage"]]
    })
], PersonaPageModule);



/***/ }),

/***/ "kFKL":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/persona/persona.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Detalles del miembro\"></app-minheader>\n  </ion-header>\n\n  <ion-card *ngIf=\"userData\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-text><b>Nombres:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-text>{{userData.names || 'No indicado'}}</ion-text>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text><b>Apellidos:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-text>{{userData.lastNames || 'No indicado'}}</ion-text>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text><b>Teléfono:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-text>{{userData.phone || 'No indicado'}}</ion-text>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text><b>Correo electrónico:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-text>{{userData.email || 'No indicado'}}</ion-text>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text><b>Fecha de nac.:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-text>{{userData.birthday || 'No indicado'}}</ion-text>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text><b>Sexo:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-text>{{userData.birthday || 'No indicado'}}</ion-text>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text><b>Estado civil:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-text>{{userData.birthday || 'No indicado'}}</ion-text>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text><b>Departamento:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-text>{{userData.department || 'No indicado'}}</ion-text>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text><b>Cuidad:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-text>{{userData.city || 'No indicado'}}</ion-text>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text><b>Barrio:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-text>{{userData.locality || 'No indicado'}}</ion-text>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text><b>Dirección:</b></ion-text>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-text>{{userData.direction || 'No indicado'}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-text color=\"dark\">\n            <h2 class=\"numberTitle\">{{ totalCourses }}</h2>\n          </ion-text>\n          <ion-img class=\"pictureLogo\" [src]=\"'/assets/icon/escuela.svg'\"></ion-img>\n          <p class=\"ion-text-center\">Cursos</p>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"dark\">\n            <h2 class=\"numberTitle\">{{ totalReferrals }}</h2>\n          </ion-text>\n          <ion-img class=\"pictureLogo\" [src]=\"'/assets/icon/red.svg'\"></ion-img>\n          <p class=\"ion-text-center\">Hijos espirituales</p>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "xM1M":
/*!***********************************************!*\
  !*** ./src/app/views/persona/persona.page.ts ***!
  \***********************************************/
/*! exports provided: PersonaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaPage", function() { return PersonaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_persona_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./persona.page.html */ "kFKL");
/* harmony import */ var _persona_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persona.page.scss */ "HLFH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _Utils_locations_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Utils/locations.data */ "ZrT4");
/* harmony import */ var _Utils_profile_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Utils/profile.data */ "0ox5");




// import {ActivatedRoute, Router} from '@angular/router';







let PersonaPage = class PersonaPage {
    constructor(activateRoute, alertConCtrl, axios, cookieService, globalSer, navCtrl) {
        this.activateRoute = activateRoute;
        this.alertConCtrl = alertConCtrl;
        this.axios = axios;
        this.cookieService = cookieService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.id = null;
        this.totalCourses = 0;
        this.totalReferrals = 0;
        this.path = '/user/referrals';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = this.cookieService.getCookie('token');
            if (token) {
                yield this.activateRoute.paramMap.subscribe(paramMap => {
                    this.id = paramMap.get('personId');
                });
                this.activateRoute.queryParams.subscribe(params => {
                    if (params.group)
                        this.path = '/user/group';
                });
                if (this.id) {
                    yield this.globalSer.presentLoading();
                    const res = yield this.axios.getData(`${this.path}/${this.id}`);
                    if (res && res.success) {
                        const { data } = res.data;
                        this.userData = data.member || null;
                        this.userData.civilStatus = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_10__["civilStatus"][this.userData.civilStatus] || null;
                        this.userData.gender = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_10__["gender"][this.userData.gender] || null;
                        if (this.userData.department) {
                            const depto = _Utils_locations_data__WEBPACK_IMPORTED_MODULE_9__["departments"][this.userData.department] || null;
                            if (depto) {
                                this.userData.department = depto.department;
                                if (this.userData.city)
                                    this.userData.city = depto.cities[this.userData.city] || null;
                            }
                        }
                        this.totalCourses = data.totalCourses || 0;
                        this.totalReferrals = data.totalReferrals || 0;
                        yield this.globalSer.dismissLoading();
                    }
                    else {
                        yield this.globalSer.dismissLoading();
                        yield this.globalSer.presentAlert('Error', res.error);
                    }
                }
                else {
                    yield this.globalSer.presentAlert('Error', 'Error al obtener el parámetro a consultar.');
                    yield this.navCtrl.navigateBack(['/']);
                }
            }
            else
                yield this.globalSer.errorSession();
        });
    }
};
PersonaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_8__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
PersonaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-persona',
        template: _raw_loader_persona_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_persona_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PersonaPage);



/***/ })

}]);
//# sourceMappingURL=views-persona-persona-module.js.map