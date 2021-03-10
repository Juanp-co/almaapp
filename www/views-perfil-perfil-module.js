(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-perfil-perfil-module"],{

/***/ "3kF3":
/*!***********************************************!*\
  !*** ./src/app/views/perfil/perfil.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titles {\n  font-size: 1.5em !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVzIHtcclxuICBmb250LXNpemU6IDEuNWVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "76Eu":
/*!************************************************!*\
  !*** ./src/app/views/perfil/perfil.service.ts ***!
  \************************************************/
/*! exports provided: PerfilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilService", function() { return PerfilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let PerfilService = class PerfilService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    getProfileData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/user');
            if (res && res.success)
                return res.data.data;
            return this.globalSer.altResponse(res);
        });
    }
    getGroup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/user/group');
            return res && res.success ? res.data.group : null;
        });
    }
    getCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData('/user/courses');
            return res && res.success ? res.data.courses : [];
        });
    }
    changePassword(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData('/user/change-password', data);
            if (res && res.success)
                return res.data.msg || 'Se ha actualizado la contraseña exitosamente';
            return this.globalSer.altResponse(res);
        });
    }
};
PerfilService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
PerfilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PerfilService);



/***/ }),

/***/ "BK+y":
/*!***********************************************!*\
  !*** ./src/app/views/perfil/perfil.module.ts ***!
  \***********************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "V2qm");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "PEhe");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "NNtD":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/perfil/perfil.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Perfil\"></app-minheader>\n  </ion-header>\n\n  <div *ngIf=\"userData; else loadingData\">\n\n    <ion-card>\n      <ion-card-header class=\"ion-no-padding\" color=\"primary\">\n        <ion-toolbar color=\"primary\">\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"setShowView('info')\">\n              <ion-icon name=\"chevron-{{views.info.show ? 'up' : 'down' }}-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <ion-title>{{ views.info.title }}</ion-title>\n        </ion-toolbar>\n      </ion-card-header>\n      <ion-card-content class=\"{{views.info.show ? '' : 'ion-hide'}}\">\n        <ion-row class=\"ion-margin-top\" *ngIf=\"views.info.data\">\n          <ion-col size=\"5\">\n            <ion-text><b>Nombre(s):</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.names || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Apellidos:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.lastNames || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Correo electrónico:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.email || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Teléfono:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.phone || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Fecha de nac.:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.birthday || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Sexo:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.gender || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Estado civil:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.civilStatus || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Nivel educativo:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.educationLevel || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Profesión:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.profession || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Tipo de sangre:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.bloodType || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Empresa:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.company ? 'Si' : 'No'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\" *ngIf=\"views.info.data.company\">\n            <ion-text><b>Tipo de empresa:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\" *ngIf=\"views.info.data.company\">\n            <ion-text>{{views.info.data.companyType}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Bautizado:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.baptized ? 'Si' : 'No'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Departamento:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{ views.info.data.department || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Cuidad:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{ views.info.data.city || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Barrio:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.locality || 'No indicado'}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text><b>Dirección:</b></ion-text>\n          </ion-col>\n          <ion-col size=\"7\">\n            <ion-text>{{views.info.data.direction || 'No indicado'}}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-row class=\"ion-margin-top ion-padding\">\n      <ion-col size=\"6\">\n        <ion-button\n          expand=\"block\"\n          color=\"{{views.group.show ? 'primary' : 'light'}}\"\n          (click)=\"setShowGroup(true)\"\n        >\n          Núcleo familiar\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button\n          expand=\"block\"\n          color=\"{{views.courses.show ? 'primary' : 'light'}}\"\n          (click)=\"setShowGroup()\"\n        >\n          Educación\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-card class=\"{{views.group.show ? '' : 'ion-hide'}}\">\n      <div *ngIf=\"views.group.data; else noGroup\">\n        <ion-card-header class=\"ion-no-padding ion-margin-top ion-margin-start ion-margin-end\">\n          <ion-row class=\"ion-margin-top\" *ngIf=\"views.group.data; else noGroup\">\n            <ion-col size=\"9\">\n              <ion-text class=\"toSmall\">Nombre del grupo</ion-text><br/>\n              <ion-text><span class=\"titles\">{{views.group.data.name || 'No indicado'}}</span></ion-text>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-text class=\"toSmall\">Miembros</ion-text><br/>\n              <ion-text><span class=\"titles\">{{ views.group.data.members ? views.group.data.members.length : 0 }}</span></ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-card-header>\n        <ion-card-content class=\"ion-margin-top ion-no-padding\">\n          <ion-row class=\"ion-margin-top\" *ngIf=\"views.group.data; else noGroup\">\n            <ion-col class=\"ion-no-margin ion-no-padding\" size=\"12\">\n              <app-personcard *ngFor='let member of views.group.data.members' [data]=\"member\" getGroup=\"true\"></app-personcard>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </div>\n      <ng-template #noGroup>\n        <ion-card-content class=\"ion-margin-top ion-no-padding\">\n          <div class=\"ion-margin-top\">\n            <ion-text>\n              <p class=\"ion-text-center\">No pertenece a ningún grupo familiar.</p>\n            </ion-text>\n          </div>\n        </ion-card-content>\n      </ng-template>\n    </ion-card>\n\n    <div class=\"{{views.courses.show ? '' : 'ion-hide'}} ion-margin-bottom ion-padding-bottom\">\n      <ion-row class=\"ion-margin-top ion-no-padding\" *ngIf=\"views.courses.data && views.courses.data.length > 0; else noCourses\">\n        <ion-col class=\"ion-no-margin ion-no-padding\" size=\"12\">\n          <app-coursecard *ngFor='let course of views.courses.data' [data]=\"course\"></app-coursecard>\n        </ion-col>\n      </ion-row>\n      <ng-template #noCourses>\n        <div class=\"ion-margin-top\">\n          <ion-text>\n            <p class=\"ion-text-center\">No posee ningún curso en su perfil.</p>\n          </ion-text>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n  <ng-template #loadingData>\n    <ion-card>\n      <ion-card-content class=\"ion-margin-top ion-margin-bottom\">\n        <ion-text><p class=\"ion-text-center\">Cargando ...</p></ion-text>\n      </ion-card-content>\n    </ion-card>\n  </ng-template>\n\n  <ion-fab class=\"ion-margin-end ion-margin-bottom\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"userData\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"light\" (click)='goToEdit()'><ion-icon name=\"person-outline\"></ion-icon></ion-fab-button>\n      <ion-fab-button color=\"light\" (click)=\"openChangePasswordModal()\"><ion-icon name=\"lock-closed-outline\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n\n");

/***/ }),

/***/ "PEhe":
/*!*********************************************!*\
  !*** ./src/app/views/perfil/perfil.page.ts ***!
  \*********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil.page.html */ "NNtD");
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss */ "3kF3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./perfil.service */ "76Eu");
/* harmony import */ var _Utils_locations_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Utils/locations.data */ "ZrT4");
/* harmony import */ var _Utils_profile_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Utils/profile.data */ "0ox5");
/* harmony import */ var _modal_password_modal_password_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-password/modal-password.page */ "xXQh");












let PerfilPage = class PerfilPage {
    constructor(globalSer, perfilService, cookieService, router) {
        this.globalSer = globalSer;
        this.perfilService = perfilService;
        this.cookieService = cookieService;
        this.router = router;
        this.userData = null;
        this.views = {
            info: { show: true, title: 'Mis datos', data: null },
            courses: { show: false, title: 'Mis cursos', data: [] },
            group: { show: true, title: 'Núcleo familiar', data: null },
        };
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/']);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check if exist session
            if (!this.globalSer.checkSession())
                this.router.navigate(['/']);
            else
                yield this.getData();
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Cargando ...');
            const data = yield this.perfilService.getProfileData();
            if (data && !data.error) {
                this.cookieService.setCookie('data', data);
                this.userData = data;
                this.views.group.data = yield this.perfilService.getGroup();
                this.views.courses.data = yield this.perfilService.getCourses();
                this.userData.birthday = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.userData.birthday).format('DD-MM-YYYY');
                this.userData.bloodType = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_10__["bloodType"][this.userData.bloodType] || null;
                this.userData.profession = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_10__["professions"][this.userData.profession] || null;
                this.userData.educationLevel = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_10__["educationLevels"][this.userData.educationLevel] || null;
                this.userData.companyType = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_10__["companyType"][this.userData.companyType] || null;
                this.userData.civilStatus = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_10__["civilStatus"][this.userData.civilStatus] || null;
                this.userData.gender = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_10__["gender"][this.userData.gender] || null;
                if (this.userData.department !== null) {
                    const depto = _Utils_locations_data__WEBPACK_IMPORTED_MODULE_9__["departments"][this.userData.department] || null;
                    if (depto) {
                        this.userData.department = depto.department;
                        if (this.userData.city !== null)
                            this.userData.city = depto.cities[this.userData.city] || null;
                    }
                }
                this.views.info.data = this.userData;
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
    setShowView(input) {
        this.views[input].show = !this.views[input].show;
    }
    goToEdit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['perfil/editar']);
        });
    }
    setShowGroup(value = false) {
        this.views.group.show = value;
        this.views.courses.show = !value;
    }
    openChangePasswordModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.loadModal(_modal_password_modal_password_page__WEBPACK_IMPORTED_MODULE_11__["ModalPasswordPage"], {}, false);
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _perfil_service__WEBPACK_IMPORTED_MODULE_8__["PerfilService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_6__["CookiesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilPage);



/***/ }),

/***/ "Sjog":
/*!**********************************************************************!*\
  !*** ./src/app/views/perfil/modal-password/modal-password.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "V2qm":
/*!*******************************************************!*\
  !*** ./src/app/views/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "PEhe");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    },
    {
        path: 'editar',
        loadChildren: () => __webpack_require__.e(/*! import() | editar-editar-module */ "editar-editar-module").then(__webpack_require__.bind(null, /*! ./editar/editar.module */ "L5Cb")).then(m => m.EditarPageModule)
    },
    {
        path: 'modal-password',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-password-modal-password-module */ "modal-password-modal-password-module").then(__webpack_require__.bind(null, /*! ./modal-password/modal-password.module */ "G6Bd")).then(m => m.ModalPasswordPageModule)
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "aFUL":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/perfil/modal-password/modal-password.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Cambiar contraseña\" [modal]=\"true\"></app-minheader>\n  </ion-header>\n\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\">\n          <ion-text><i>La nueva contraseña debe contener al menos 6 caracteres entre letras (A-Z, a-z), números (0-9) y caracteres especiales (¿?¡!=)(/&%$#,.-+*).</i></ion-text>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"medium\">Contaseña actual (*)</ion-label>\n            <ion-input [(ngModel)]=\"formData.password\" type=\"password\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"medium\">Nueva contraseña (*)</ion-label>\n            <ion-input [(ngModel)]=\"formData.newPassword\" type=\"password\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"medium\">Rep. nueva contraseña (*)</ion-label>\n            <ion-input [(ngModel)]=\"formData.repPassword\" type=\"password\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-margin-top ion-margin-bottom\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button color=\"light\" (click)=\"closeModal()\">\n            <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n            Cancelar\n          </ion-button>\n          <ion-button color=\"primary\" (click)=\"confirmUpdate()\">\n            <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n            Cambiar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "xXQh":
/*!********************************************************************!*\
  !*** ./src/app/views/perfil/modal-password/modal-password.page.ts ***!
  \********************************************************************/
/*! exports provided: ModalPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPasswordPage", function() { return ModalPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-password.page.html */ "aFUL");
/* harmony import */ var _modal_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-password.page.scss */ "Sjog");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../perfil.service */ "76Eu");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");








let ModalPasswordPage = class ModalPasswordPage {
    constructor(globalSer, modalController, perfilService) {
        this.globalSer = globalSer;
        this.modalController = modalController;
        this.perfilService = perfilService;
        this.formData = {
            password: null,
            newPassword: null,
            repPassword: null
        };
    }
    ngOnInit() {
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    validateData() {
        const { formData } = this;
        if (!formData.password)
            return 'Disculpe, pero debe indicar su contraseña actual.';
        if (formData.password && formData.password.length < 5)
            return 'Disculpe, pero debe puede que su contraseña actual no sea correcta.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_7__["checkPassword"])(formData.newPassword))
            return 'Disculpe, pero debe indicar una nueva contraseña válida.';
        if (formData.newPassword !== formData.repPassword)
            return 'Disculpe, pero las nuevas contraseñas no coinciden.';
        return null;
    }
    updateData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateData();
            if (validated)
                yield this.globalSer.presentAlert('Alerta', validated);
            else {
                yield this.globalSer.presentLoading('Cambiando contraseña, por favor espere ...');
                const updated = yield this.perfilService.changePassword(this.formData);
                if (updated && !updated.error) {
                    this.formData.password = null;
                    this.formData.newPassword = null;
                    this.formData.repPassword = null;
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.presentAlert('¡Éxito!', updated || 'Se ha actualizado la contraseña exitosamente.');
                    yield this.closeModal();
                }
                else if (updated && updated.error) {
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.errorSession();
                }
                else
                    yield this.globalSer.dismissLoading();
            }
        });
    }
    confirmUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateData();
            if (validated)
                yield this.globalSer.presentAlert('Alerta', validated);
            else {
                yield this.globalSer.alertConfirm({
                    header: 'Cambiar contraseña',
                    message: '¿Está seguro qué desea cambiar la contraseña de su cuenta?',
                    confirmAction: () => this.updateData()
                });
            }
        });
    }
};
ModalPasswordPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _perfil_service__WEBPACK_IMPORTED_MODULE_5__["PerfilService"] }
];
ModalPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-password',
        template: _raw_loader_modal_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalPasswordPage);



/***/ })

}]);
//# sourceMappingURL=views-perfil-perfil-module.js.map