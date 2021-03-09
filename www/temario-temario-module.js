(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["temario-temario-module"],{

/***/ "FIT4":
/*!*******************************************************!*\
  !*** ./src/app/views/curso/temario/temario.module.ts ***!
  \*******************************************************/
/*! exports provided: TemarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemarioPageModule", function() { return TemarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _temario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./temario-routing.module */ "o67p");
/* harmony import */ var _temario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./temario.page */ "Yox7");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let TemarioPageModule = class TemarioPageModule {
};
TemarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _temario_routing_module__WEBPACK_IMPORTED_MODULE_5__["TemarioPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        ],
        declarations: [_temario_page__WEBPACK_IMPORTED_MODULE_6__["TemarioPage"]]
    })
], TemarioPageModule);



/***/ }),

/***/ "Yox7":
/*!*****************************************************!*\
  !*** ./src/app/views/curso/temario/temario.page.ts ***!
  \*****************************************************/
/*! exports provided: TemarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemarioPage", function() { return TemarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_temario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./temario.page.html */ "jkcc");
/* harmony import */ var _temario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temario.page.scss */ "d1Wa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_contenido_tema_modal_contenido_tema_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-contenido-tema/modal-contenido-tema.page */ "umKd");
/* harmony import */ var _modal_examen_tema_modal_examen_tema_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-examen-tema/modal-examen-tema.page */ "9oOh");
/* harmony import */ var _curso_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../curso.service */ "7Ab0");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");











let TemarioPage = class TemarioPage {
    constructor(activateRoute, cookiesService, cursoService, globalSer, navCtrl, modalController, router) {
        this.activateRoute = activateRoute;
        this.cookiesService = cookiesService;
        this.cursoService = cursoService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.router = router;
        this.slug = null;
        this.themeId = null;
        this.theme = null;
        this.dataCourseUser = null;
        // check if exist session
        if (!this.globalSer.checkSession())
            this.router.navigate(['/']);
        else {
            this.slug = this.activateRoute.snapshot.paramMap.get('slug');
            this.themeId = this.activateRoute.snapshot.paramMap.get('themeId');
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check if exist session
            if (!this.globalSer.checkSession())
                this.router.navigate(['/']);
            else
                yield this.getCoursesList();
        });
    }
    getCoursesList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.slug && this.themeId) {
                yield this.globalSer.presentLoading();
                const data = yield this.cursoService.getThemeCourse(this.slug, this.themeId);
                if (data && !data.error) {
                    this.theme = data;
                    this.dataCourseUser = this.cookiesService.getCookie(this.slug);
                    yield this.globalSer.dismissLoading();
                }
                else if (data && data.error) {
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.errorSession();
                }
                else {
                    yield this.globalSer.dismissLoading();
                    yield this.navCtrl.back();
                }
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Ha ocurrido un error al momento de obtener los datos a consultar.');
                yield this.navCtrl.back();
            }
        });
    }
    openClassModal(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updateOnDismiss = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                // send data to update the view history
                const view = yield this.updateHistorical(content._id, '2');
                if (view)
                    this.theme.content[i].view = view;
                let accumulated = 0;
                this.theme.content.forEach(c => { if (c.view === 2)
                    accumulated++; });
                this.theme.view = accumulated === this.theme.content.length ? 2 : 1;
                if (this.dataCourseUser) {
                    const index = this.dataCourseUser.temary.findIndex((d) => d.temaryId === this.themeId);
                    if (index > -1) {
                        this.dataCourseUser.temary[index].view = this.theme.view;
                        this.cookiesService.setCookie(this.slug, this.dataCourseUser);
                    }
                }
            });
            yield this.globalSer.presentLoading();
            const content = this.theme.content[i] || null;
            if (content) {
                this.theme.content[i].view = 1;
                // send data to update the view history
                this.updateHistorical(content._id, '1');
                yield this.globalSer.dismissLoading();
                yield this.globalSer.loadModal(_modal_contenido_tema_modal_contenido_tema_page__WEBPACK_IMPORTED_MODULE_6__["ModalContenidoTemaPage"], { content }, false, updateOnDismiss);
            }
            else {
                yield this.globalSer.presentAlert('Alerta', 'Ha ocurrido un error al momento de cargar el contenido.');
                yield this.navCtrl.back();
            }
        });
    }
    openTestModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const content = {
                slug: this.slug,
                themeId: this.themeId,
                title: this.theme.title,
                test: null
            };
            const data = yield this.cursoService.getTestThemeCourse(this.slug, this.themeId);
            if (data && !data.error) {
                if (data && data.length > 0) {
                    content.test = data;
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.loadModal(_modal_examen_tema_modal_examen_tema_page__WEBPACK_IMPORTED_MODULE_7__["ModalExamenTemaPage"], content, false);
                }
                else {
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero la pueba actual no está disponible.');
                }
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
            }
            else {
                yield this.globalSer.dismissLoading();
            }
        });
    }
    updateHistorical(contentId, action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.cursoService.updateHistoricalThemeCourse(this.slug, this.themeId, contentId, action);
        });
    }
};
TemarioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_9__["CookiesService"] },
    { type: _curso_service__WEBPACK_IMPORTED_MODULE_8__["CursoService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TemarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-temario',
        template: _raw_loader_temario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_temario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TemarioPage);



/***/ }),

/***/ "d1Wa":
/*!*******************************************************!*\
  !*** ./src/app/views/curso/temario/temario.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1hcmlvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "jkcc":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/curso/temario/temario.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content *ngIf=\"theme\">\n  <ion-header>\n    <app-minheader title=\"{{ theme.title || 'Cargando ...' }}\"></app-minheader>\n  </ion-header>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"\">Descripción</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div [innerHTML]=\"theme.description\"></div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"theme.content && theme.content.length > 0\">\n    <ion-card-header>\n      <ion-card-title>Contenido</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list *ngFor='let content of theme.content; let i=index'>\n        <!--<ion-item button (click)=\"goToClass(i)\">-->\n        <ion-item class=\"ion-no-padding ion-no-margin\" button (click)=\"openClassModal(i)\">\n          <ion-avatar slot=\"start\">\n            <ion-img src=\"/assets/icon/{{content.view === 2 ? 'clase_video' : 'clase_video_gris'}}.svg\" *ngIf=\"content.urlVideo\"></ion-img>\n            <ion-img src=\"/assets/icon/{{content.view === 2 ? 'clase_texto' : 'clase_texto_gris'}}.svg\" *ngIf=\"!content.urlVideo\"></ion-img>\n          </ion-avatar>\n          <ion-text><b>{{ content.title }}</b></ion-text>\n\n          <ion-icon\n            name=\"time-outline\"\n            slot=\"end\"\n            *ngIf=\"content.view === 0\"\n          ></ion-icon>\n          <ion-icon\n            name=\"eye-outline\"\n            slot=\"end\"\n            *ngIf=\"content.view === 1\"\n          ></ion-icon>\n          <ion-icon\n            name=\"checkmark-done-outline\"\n            slot=\"end\"\n            *ngIf=\"content.view === 2\"\n          ></ion-icon>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Examen</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-text *ngIf=\"theme.view !== 2\">\n            Complete el listado de contenidos del tema para poder presentar el examen.\n          </ion-text>\n          <ion-button expand=\"block\" color=\"primary\" (click)=\"openTestModal()\" *ngIf=\"theme.view === 2\">\n            Presentar exámen\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "o67p":
/*!***************************************************************!*\
  !*** ./src/app/views/curso/temario/temario-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TemarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemarioPageRoutingModule", function() { return TemarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _temario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./temario.page */ "Yox7");




const routes = [
    {
        path: '',
        component: _temario_page__WEBPACK_IMPORTED_MODULE_3__["TemarioPage"]
    },
];
let TemarioPageRoutingModule = class TemarioPageRoutingModule {
};
TemarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TemarioPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=temario-temario-module.js.map