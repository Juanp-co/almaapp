(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modal-examen-tema-modal-examen-tema-module~temario-temario-module"],{

/***/ "7Le4":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/curso/modal-examen-tema/modal-examen-tema.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header color=\"primary\">\n    <ion-toolbar class=\"ion-no-padding ion-no-margin\">\n      <div class=\"fondoCool\">\n        <ion-row>\n          <ion-col class=\"ion-margin-top ion-margin-bottom\">\n            <ion-buttons>\n              <ion-button color=\"light\" (click)=\"getQuestionsFromList()\" *ngIf=\"!finishedTest.msg && viewSelected > 0 && viewSelected <= totalsViews\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"light\" (click)=\"!finishedTest.msg ? dismiss() : closeModal()\" *ngIf=\"viewSelected === 0 || finishedTest.msg\">\n                <ion-icon name=\"close\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n          </ion-col>\n          <ion-col size=\"7\" class=\"ion-margin-top ion-margin-bottom\">\n            <ion-text color=\"light\" class=\"titulo1\">Examen: {{ title }}</ion-text>\n          </ion-col>\n          <ion-col>\n            <img src=\"assets/logo.png\" class=\"logo-2\">\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <div *ngIf=\"questionsView && !finishedTest.msg\">\n    <ion-list *ngFor=\"let item of questionsView\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{ item.title }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <div *ngIf=\"item.description\" [innerHTML]=\"item.description\"></div>\n\n          <div *ngIf=\"item.inputType === 'text'\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">{{ item.placeholder || 'Indique su respuesta' }}</ion-label>\n              <ion-input [(ngModel)]=\"questionsModel[item._id]\" [required]=\"item.require\"></ion-input>\n            </ion-item>\n          </div>\n          <div *ngIf=\"item.inputType === 'textarea'\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">{{ item.placeholder || 'Indique su respuesta' }}</ion-label>\n              <ion-textarea\n                rows=\"4\"\n                cols=\"20\"\n                [(ngModel)]=\"questionsModel[item._id]\"\n                [required]=\"item.require\"\n              ></ion-textarea>\n            </ion-item>\n          </div>\n          <div *ngIf=\"item.inputType === 'radio'\">\n            <ion-radio-group [(ngModel)]=\"questionsModel[item._id]\" value=\"{{questionsModel[item._id]}}\">\n              <ion-list *ngFor=\"let value of item.values; let i=index\">\n                <ion-item>\n                  <ion-label>{{ value }}</ion-label>\n                  <ion-radio slot=\"start\" value=\"{{i}}\"></ion-radio>\n                </ion-item>\n              </ion-list>\n            </ion-radio-group>\n          </div>\n          <div *ngIf=\"item.inputType === 'checkbox'\">\n            <ion-list>\n              <ion-item *ngFor=\"let value of questionsModel[item._id]\">\n                <ion-label>{{ value.val }}</ion-label>\n                <ion-checkbox\n                  slot=\"start\"\n                  [(ngModel)]=\"value.isChecked\"\n                ></ion-checkbox>\n              </ion-item>\n            </ion-list>\n          </div>\n          <ion-text *ngIf=\"item.require\"><i>(*) Obligatoria </i></ion-text>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <div *ngIf=\"viewSelected === 0; else nextButtons\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button color=\"light\" expand=\"block\" (click)=\"dismiss()\">\n            <ion-text>SALIR</ion-text>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"getQuestionsFromList(true)\">\n            <ion-text>SIGUIENTE</ion-text>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ng-template #nextButtons>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button color=\"light\" expand=\"block\" (click)=\"getQuestionsFromList()\">\n            <ion-text>ATRÁS</ion-text>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\" *ngIf=\"viewSelected > 0 && viewSelected < totalsViews\">\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"getQuestionsFromList(true)\">\n            <ion-text>SIGUIENTE</ion-text>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\" *ngIf=\"viewSelected === totalsViews\">\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"finishTest()\">\n            <ion-text>FINALIZAR</ion-text>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ng-template>\n    <!--<ion-card>-->\n      <!--<ion-card-content>-->\n\n      <!--</ion-card-content>-->\n    <!--</ion-card>-->\n  </div>\n  <div *ngIf=\"finishedTest.msg\">\n    <ion-card>\n      <ion-card-header>\n        <ion-img class=\"exam-img\" [src]=\"'/assets/icon/education.svg'\" *ngIf=\"finishedTest.approved\"></ion-img>\n        <ion-img class=\"exam-img\" [src]=\"'/assets/icon/exam.svg'\" *ngIf=\"!finishedTest.approved\"></ion-img>\n        <ion-card-title class=\"ion-text-center ion-margin-top\">{{finishedTest.msg}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-row>\n              <ion-col size=\"6\" class=\"height-100\">\n                <div class=\"align-middle\"></div>\n                <h2 class=\"number-score\">{{ finishedTest.average }}</h2>\n                <ion-card-title class=\"ion-text-center\">Puntos</ion-card-title>\n              </ion-col>\n              <ion-col size=\"6\" class=\"ion-justify-content-around\">\n                <ion-img [src]=\"'/assets/icon/rating.svg'\"></ion-img>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"12\" class=\"ion-justify-content-center\">\n            <ion-button expand=\"block\" (click)=\"closeModal()\">\n              <ion-text>CERRAR EXAMEN</ion-text>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "9oOh":
/*!*************************************************************************!*\
  !*** ./src/app/views/curso/modal-examen-tema/modal-examen-tema.page.ts ***!
  \*************************************************************************/
/*! exports provided: ModalExamenTemaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalExamenTemaPage", function() { return ModalExamenTemaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_examen_tema_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-examen-tema.page.html */ "7Le4");
/* harmony import */ var _modal_examen_tema_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-examen-tema.page.scss */ "xWLt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/cookies.service */ "QTu/");
/* harmony import */ var _curso_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../curso.service */ "7Ab0");










let ModalExamenTemaPage = class ModalExamenTemaPage {
    constructor(activateRoute, alertController, cookiesService, globalSer, cursoService, modalController) {
        this.activateRoute = activateRoute;
        this.alertController = alertController;
        this.cookiesService = cookiesService;
        this.globalSer = globalSer;
        this.cursoService = cursoService;
        this.modalController = modalController;
        this.slug = null;
        this.themeId = null;
        this.test = null;
        this.title = null;
        this.totalsViews = 0;
        this.viewSelected = 0;
        this.questions = [];
        this.questionsView = null;
        this.finishedTest = {
            msg: null,
            average: 0,
            approved: false
        };
        this.questionsModel = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.setSectionsQuestions();
        });
    }
    setSectionsQuestions() {
        const totals = this.test.length;
        this.totalsViews = this.globalSer.getPagination(totals, 2);
        for (let i = 0; i < this.totalsViews; i++) {
            const jump = i === 0 ? 0 : i * 2;
            const selected = this.test.slice(jump, jump + 2);
            this.questions.push(selected);
        }
        for (let j = 0; j < totals; j++) {
            if (this.test[j].inputType === 'checkbox') {
                this.questionsModel[`${this.test[j]._id}`] = []; // create a new value with Question ID
                // set data with the new object
                this.test[j].values.forEach(v => {
                    this.questionsModel[`${this.test[j]._id}`].push({
                        val: v,
                        isChecked: false
                    });
                });
            }
            else
                this.questionsModel[`${this.test[j]._id}`] = null;
        }
        if (this.totalsViews > 0) {
            this.totalsViews = this.totalsViews - 1;
            if (!!this.questions[0])
                this.questionsView = this.questions[0];
        }
    }
    checkAnswerSections(view) {
        // check required answer
        const totals = this.questions[view].length;
        let showMsg = false;
        for (let i = 0; i < totals; i++) {
            if (this.questions[view][i].require) {
                if (this.questions[view][i].inputType === 'checkbox') {
                    const answered = this.questionsModel[this.questions[view][i]._id].filter(a => a.isChecked);
                    showMsg = answered.length === 0;
                }
                else
                    showMsg = this.questionsModel[this.questions[view][i]._id] === null;
            }
            if (showMsg)
                break;
        }
        return showMsg;
    }
    getQuestionsFromList(next = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // check required answer
            if (next && this.checkAnswerSections(this.viewSelected)) {
                // await this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe asegurarse de responder las preguntas obligatorias de esta sección.');
            }
            else {
                if (next)
                    this.viewSelected = this.viewSelected + 1;
                else
                    this.viewSelected = this.viewSelected - 1;
                this.questionsView = this.questions[this.viewSelected] || null;
            }
        });
    }
    finishTest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            // check required answer
            if (this.checkAnswerSections(this.viewSelected)) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe asegurarse de responder las preguntas obligatorias de esta sección.');
                return false;
            }
            const data = [];
            const keys = Object.keys(this.questionsModel);
            if (keys.length > 0) {
                keys.forEach(k => {
                    const model = {
                        questionId: k,
                        answer: null
                    };
                    if (this.questionsModel[k] !== null && typeof this.questionsModel[k] === 'object') {
                        const res = [];
                        this.questionsModel[k].forEach((q, i) => {
                            if (q.isChecked)
                                res.push(i);
                        });
                        model.answer = res.toString();
                    }
                    else
                        model.answer = this.questionsModel[k];
                    data.push(model);
                });
            }
            if (data.length === 0) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se logró obtener la respuestas a procesar.');
                return false;
            }
            const answer = yield this.cursoService.sendAnswer(this.slug, this.themeId, data);
            if (answer && !answer.error) {
                this.finishedTest = answer;
                const dataCourseUser = this.cookiesService.getCookie(this.slug);
                const index = dataCourseUser.temary.findIndex(t => t._id === this.themeId);
                if (index > -1) {
                    dataCourseUser.temary[index].view = 2;
                    dataCourseUser.temary[index].approved = this.finishedTest.approved;
                    dataCourseUser.temary[index].approvedDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD HH:mm:ss');
                    dataCourseUser.temary[index].date = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD HH:mm:ss');
                    this.cookiesService.setCookie(this.slug, dataCourseUser);
                }
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error) {
                yield this.globalSer.dismissLoading();
                yield this.globalSer.errorSession();
                return false;
            }
            else {
                yield this.globalSer.dismissLoading();
                yield this.closeModal();
                return false;
            }
            return true;
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Saliendo del examen',
                message: '¿Está seguro qué desea salir del examen?<br/><br/>NOTA: Se perderá todo el progreso.',
                confirmAction: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.modalController.dismiss(); })
            });
        });
    }
};
ModalExamenTemaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_8__["CookiesService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _curso_service__WEBPACK_IMPORTED_MODULE_9__["CursoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ModalExamenTemaPage.propDecorators = {
    slug: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    themeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    test: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalExamenTemaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-examen-tema',
        template: _raw_loader_modal_examen_tema_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_examen_tema_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalExamenTemaPage);



/***/ }),

/***/ "xWLt":
/*!***************************************************************************!*\
  !*** ./src/app/views/curso/modal-examen-tema/modal-examen-tema.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".exam-img {\n  height: 200px !important;\n}\n\n.height-100 {\n  display: table;\n  height: 100% !important;\n}\n\n.align-middle {\n  width: 100% !important;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.number-score {\n  height: 100% !important;\n  width: 100% !important;\n  text-align: center !important;\n  font-size: 3em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW9kYWwtZXhhbWVuLXRlbWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6Im1vZGFsLWV4YW1lbi10ZW1hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtLWltZyB7XHJcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LTEwMCB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGlnbi1taWRkbGUge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5udW1iZXItc2NvcmUge1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAzZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=default~modal-examen-tema-modal-examen-tema-module~temario-temario-module.js.map