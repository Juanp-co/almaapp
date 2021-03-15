(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-curso-curso-module"],{

/***/ "+ThV":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/curso/curso.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Curso\" slugValue=\"{{slug}}\"></app-minheader>\n  </ion-header>\n\n  <div *ngIf=\"course\">\n    <ion-card>\n      <ion-img class=\"banner\" [src]=\"course.banner\"></ion-img>\n      <ion-card-header>\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-no-padding ion-no-margin ion-justify-content-center\">\n            <ion-card-subtitle class=\"ion-margin-top\">{{ course.speaker }} - {{ course.speakerPosition }}</ion-card-subtitle>\n            <ion-card-title>{{ course.title }}</ion-card-title>\n          </ion-col>\n        </ion-row>\n      </ion-card-header>\n\n      <ion-card-content *ngIf=\"course.description\">\n        <div [innerHTML]=\"course.description\"></div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Temas</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list class=\"ion-no-padding ion-no-margin\" *ngFor='let temary of course.temary; let i=index'>\n          <ion-item class=\"ion-no-padding ion-no-margin\" button (click)=\"activeClickTemary ? goToTemary(temary._id) : showAlertRejectAction()\" class=\"\">\n            <ion-icon\n              name=\"albums\"\n              color=\"{{ dataCourseUser && dataCourseUser.temary[i] && dataCourseUser.temary[i].approved ? 'success' : '' }}\"\n              slot=\"start\"\n            ></ion-icon>\n            <ion-text><b>{{ temary.title }} ({{ temary.content.length }})</b></ion-text>\n            <ion-icon\n              name=\"time-outline\"\n              slot=\"end\"\n              *ngIf=\"dataCourseUser && dataCourseUser.temary[i] && dataCourseUser.temary[i].view === 0\"\n            ></ion-icon>\n            <ion-icon\n              name=\"eye-outline\"\n              slot=\"end\"\n              *ngIf=\"dataCourseUser && dataCourseUser.temary[i] && dataCourseUser.temary[i].view === 1\"\n            ></ion-icon>\n            <ion-icon\n              name=\"checkmark-done-outline\"\n              slot=\"end\"\n              *ngIf=\"dataCourseUser && dataCourseUser.temary[i] && dataCourseUser.temary[i].view === 2\"\n            ></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"course.levels && course.levels.length > 0\">\n      <ion-card-header>\n        <ion-card-title>Cursos previos requeridos</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"ion-no-padding ion-no-margin\">\n        <app-coursecard *ngFor=\"let level of course.levels\" [data]=\"level\"></app-coursecard>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n  <ion-fab class=\"ion-margin-end ion-margin-bottom\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"course && !activeClickTemary\" (click)=\"showConfirmAddCourse()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "/kjj":
/*!*********************************************!*\
  !*** ./src/app/views/curso/curso.module.ts ***!
  \*********************************************/
/*! exports provided: CursoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoPageModule", function() { return CursoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _curso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curso-routing.module */ "3DWt");
/* harmony import */ var _curso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./curso.page */ "WgGe");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let CursoPageModule = class CursoPageModule {
};
CursoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _curso_routing_module__WEBPACK_IMPORTED_MODULE_5__["CursoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_curso_page__WEBPACK_IMPORTED_MODULE_6__["CursoPage"]]
    })
], CursoPageModule);



/***/ }),

/***/ "3DWt":
/*!*****************************************************!*\
  !*** ./src/app/views/curso/curso-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CursoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoPageRoutingModule", function() { return CursoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _curso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curso.page */ "WgGe");




const routes = [
    {
        path: '',
        component: _curso_page__WEBPACK_IMPORTED_MODULE_3__["CursoPage"]
    },
    {
        path: 'temario',
        children: [
            {
                path: ':themeId',
                loadChildren: () => Promise.all(/*! import() | temario-temario-module */[__webpack_require__.e("default~modal-examen-tema-modal-examen-tema-module~temario-temario-module"), __webpack_require__.e("common"), __webpack_require__.e("temario-temario-module")]).then(__webpack_require__.bind(null, /*! ./temario/temario.module */ "FIT4")).then(m => m.TemarioPageModule)
            }
        ]
    },
    {
        path: 'modal-contenido-tema',
        loadChildren: () => Promise.all(/*! import() | modal-contenido-tema-modal-contenido-tema-module */[__webpack_require__.e("common"), __webpack_require__.e("modal-contenido-tema-modal-contenido-tema-module")]).then(__webpack_require__.bind(null, /*! ./modal-contenido-tema/modal-contenido-tema.module */ "/9U8")).then(m => m.ModalContenidoTemaPageModule)
    },
    {
        path: 'modal-examen-tema',
        loadChildren: () => Promise.all(/*! import() | modal-examen-tema-modal-examen-tema-module */[__webpack_require__.e("default~modal-examen-tema-modal-examen-tema-module~temario-temario-module"), __webpack_require__.e("modal-examen-tema-modal-examen-tema-module")]).then(__webpack_require__.bind(null, /*! ./modal-examen-tema/modal-examen-tema.module */ "zsAH")).then(m => m.ModalExamenTemaPageModule)
    },
];
let CursoPageRoutingModule = class CursoPageRoutingModule {
};
CursoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CursoPageRoutingModule);



/***/ }),

/***/ "7Ab0":
/*!**********************************************!*\
  !*** ./src/app/views/curso/curso.service.ts ***!
  \**********************************************/
/*! exports provided: CursoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoService", function() { return CursoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");




let CursoService = class CursoService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    getCourse(slug) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/courses/${slug}`);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
    addCourse(slug) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData(`/courses/${slug}/add`);
            if (res && res.success)
                return res.data.added;
            return this.globalSer.altResponse(res);
        });
    }
    /*
      Temary
     */
    getThemeCourse(slug, themeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/courses/${slug}/theme/${themeId}`);
            if (res && res.success)
                return res.data.theme;
            return this.globalSer.altResponse(res);
        });
    }
    updateHistoricalThemeCourse(slug, temaryId, contentId, action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData(`/courses/${slug}/theme/${temaryId}/content/${contentId}/${action}`);
            return res && res.success && res.data && res.data.updated ? 2 : null;
        });
    }
    getTestThemeCourse(slug, themeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/courses/${slug}/theme/${themeId}/test`);
            if (res && res.success)
                return res.data.test;
            return this.globalSer.altResponse(res);
        });
    }
    sendAnswer(slug, themeId, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData(`/courses/${slug}/theme/${themeId}/test`, { data });
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
};
CursoService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
CursoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CursoService);



/***/ }),

/***/ "JqSL":
/*!*********************************************!*\
  !*** ./src/app/views/curso/curso.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJzby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "WgGe":
/*!*******************************************!*\
  !*** ./src/app/views/curso/curso.page.ts ***!
  \*******************************************/
/*! exports provided: CursoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoPage", function() { return CursoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_curso_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./curso.page.html */ "+ThV");
/* harmony import */ var _curso_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curso.page.scss */ "JqSL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _curso_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./curso.service */ "7Ab0");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");










let CursoPage = class CursoPage {
    constructor(activateRoute, cookiesService, globalSer, navCtrl, coursesService, modalController, router) {
        this.activateRoute = activateRoute;
        this.cookiesService = cookiesService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.coursesService = coursesService;
        this.modalController = modalController;
        this.router = router;
        this.course = null;
        this.dataCourseUser = null;
        this.slug = null;
        this.activeClickTemary = false;
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/']);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check if exist session
            if (!this.globalSer.checkSession())
                this.router.navigate(['/']);
            else
                yield this.getCourse();
        });
    }
    getCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.slug)
                yield this.setSlug();
            yield this.globalSer.presentLoading();
            const data = yield this.coursesService.getCourse(this.slug);
            if (data && !data.error) {
                this.course = data.course;
                this.course.description = Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__["setSaltLinesOrBr"])(this.course.description, true);
                this.dataCourseUser = data.dataCourseUser;
                if (data.dataCourseUser) {
                    this.cookiesService.setCookie(this.slug, this.dataCourseUser);
                    this.activeClickTemary = true;
                }
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
    addCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const data = yield this.coursesService.addCourse(this.slug);
            if (data && !data.error) {
                this.dataCourseUser = data;
                this.cookiesService.setCookie(this.slug, this.dataCourseUser);
                this.activeClickTemary = true;
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('¡Éxito!', 'Se ha agregado el curso a su listado. Ahora puede acceder al contenido.');
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    setSlug() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.activateRoute.paramMap.subscribe(paramMap => {
                this.slug = paramMap.get('slug');
            });
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // get data course
            this.dataCourseUser = this.cookiesService.getCookie(this.slug);
        });
    }
    ngOnDestroy() {
        this.cookiesService.removeCookie(this.slug);
    }
    goToTemary(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate([`/curso/${this.course.slug}/temario/${id}`]);
        });
    }
    showAlertRejectAction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no puede acceder al contenido hasta no haber agregado el curso a su listado.');
        });
    }
    showConfirmAddCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea agregar este curso a su listado?',
                confirmAction: () => this.addCourse()
            });
        });
    }
};
CursoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_8__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _curso_service__WEBPACK_IMPORTED_MODULE_6__["CursoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CursoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-curso',
        template: _raw_loader_curso_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_curso_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CursoPage);



/***/ })

}]);
//# sourceMappingURL=views-curso-curso-module.js.map