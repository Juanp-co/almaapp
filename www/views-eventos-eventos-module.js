(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-eventos-eventos-module"],{

/***/ "9qU5":
/*!*************************************************!*\
  !*** ./src/app/views/eventos/eventos.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "KBR1":
/*!***********************************************!*\
  !*** ./src/app/views/eventos/eventos.page.ts ***!
  \***********************************************/
/*! exports provided: EventosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPage", function() { return EventosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_eventos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./eventos.page.html */ "xCRN");
/* harmony import */ var _eventos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventos.page.scss */ "9qU5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _eventos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eventos.service */ "ykbS");









let EventosPage = class EventosPage {
    constructor(activateRoute, alertCtrl, globalSer, eventsService, navCtrl, modalController, router) {
        this.activateRoute = activateRoute;
        this.alertCtrl = alertCtrl;
        this.globalSer = globalSer;
        this.eventsService = eventsService;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.router = router;
        this.events = [];
        this.showFilter = false;
        this.queryParams = {
            input: 'date',
            value: -1,
            initDate: dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD'),
            endDate: null,
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getEventsList();
        });
    }
    getEventsList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.showFilter)
                this.showFilter = false;
            yield this.globalSer.presentLoading();
            const data = yield this.eventsService.getEvents(this.queryParams);
            if (data && !data.error) {
                this.events = data;
                yield this.globalSer.dismissLoading();
            }
            else if (data && data.error)
                yield this.globalSer.errorSession();
            else
                yield this.globalSer.dismissLoading();
        });
    }
    setShowFilter() {
        this.showFilter = !this.showFilter;
    }
    setOrderData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Seleccione',
                inputs: [
                    {
                        name: `order-asc`,
                        type: 'radio',
                        label: `Antíguas primero`,
                        value: 1,
                        checked: this.queryParams.value === 1,
                    },
                    {
                        name: `order-desc`,
                        type: 'radio',
                        label: 'Próximas primero',
                        value: -1,
                        checked: this.queryParams.value === -1,
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { }
                    },
                    {
                        text: 'Ok',
                        handler: (selectedValue) => {
                            this.queryParams.value = selectedValue;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    setDate(input) {
        if (this.queryParams[input]) {
            this.queryParams[input] = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(this.queryParams[input]).format('YYYY-MM-DD');
        }
    }
    resetQueryParams() {
        this.queryParams.input = 'date';
        this.queryParams.value = -1;
        this.queryParams.initDate = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD');
        this.queryParams.endDate = null;
    }
};
EventosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _eventos_service__WEBPACK_IMPORTED_MODULE_8__["EventosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
EventosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-eventos',
        template: _raw_loader_eventos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_eventos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventosPage);



/***/ }),

/***/ "TjVE":
/*!*************************************************!*\
  !*** ./src/app/views/eventos/eventos.module.ts ***!
  \*************************************************/
/*! exports provided: EventosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageModule", function() { return EventosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventos-routing.module */ "mURV");
/* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventos.page */ "KBR1");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let EventosPageModule = class EventosPageModule {
};
EventosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eventos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventosPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_eventos_page__WEBPACK_IMPORTED_MODULE_6__["EventosPage"]]
    })
], EventosPageModule);



/***/ }),

/***/ "mURV":
/*!*********************************************************!*\
  !*** ./src/app/views/eventos/eventos-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EventosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosPageRoutingModule", function() { return EventosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _eventos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventos.page */ "KBR1");




const routes = [
    {
        path: '',
        component: _eventos_page__WEBPACK_IMPORTED_MODULE_3__["EventosPage"]
    }
];
let EventosPageRoutingModule = class EventosPageRoutingModule {
};
EventosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventosPageRoutingModule);



/***/ }),

/***/ "xCRN":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/eventos/eventos.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Eventos\"></app-minheader>\n  </ion-header>\n\n  <div class=\"ion-margin\">\n    <ion-button color=\"light\" (click)=\"setShowFilter()\">\n      <ion-icon name=\"filter-outline\" slot=\"start\" *ngIf=\"!showFilter\"></ion-icon>\n      <ion-icon name=\"close-outline\" slot=\"start\" *ngIf=\"showFilter\"></ion-icon>\n      <ion-text>Filtrar</ion-text>\n    </ion-button>\n  </div>\n\n  <ion-card *ngIf=\"showFilter\">\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"medium\">Ordenar por:</ion-label>\n        <ion-input\n          [readonly]=\"true\"\n          [value]=\"queryParams.value === -1 ? 'Próximas primero' : 'Antíguas primero'\"\n          (click)=\"setOrderData()\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"medium\">A partir de:</ion-label>\n        <ion-datetime\n          [(ngModel)]=\"queryParams.initDate\"\n          displayFormat=\"DD/MM/YYYY\"\n          min=\"2020-01-01\"\n          doneText=\"Listo\"\n          cancelText=\"Cancelar\"\n          onchange=\"setDate('initDate')\"\n        >\n        </ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"medium\">Hasta:</ion-label>\n        <ion-datetime\n          [(ngModel)]=\"queryParams.endDate\"\n          displayFormat=\"DD/MM/YYYY\"\n          min=\"2020-01-01\"\n          doneText=\"Listo\"\n          cancelText=\"Cancelar\"\n          onchange=\"setDate('endDate')\"\n        >\n        </ion-datetime>\n      </ion-item>\n      <ion-row class=\"ion-margin-top\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button class=\"ion-text-center\" color=\"light\" (click)=\"resetQueryParams()\">\n            <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Limpiar</ion-text>\n          </ion-button>\n          <ion-button class=\"ion-text-center\" color=\"primary\" (click)=\"getEventsList()\">\n            <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n            <ion-text>Aplicar</ion-text>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <div *ngIf=\"events && events.length > 0; else noEvents\">\n    <ion-list *ngFor='let e of events'>\n      <app-eventcard [data]=\"e\"></app-eventcard>\n    </ion-list>\n  </div>\n  <ng-template #noEvents>\n    <ion-card class=\"ion-no-padding\">\n      <ion-text class=\"ion-text-center\">\n        <p><ion-icon name=\"alert-circle-outline\"></ion-icon> No se encontraron eventos.</p>\n      </ion-text>\n    </ion-card>\n  </ng-template>\n</ion-content>\n");

/***/ }),

/***/ "ykbS":
/*!**************************************************!*\
  !*** ./src/app/views/eventos/eventos.service.ts ***!
  \**************************************************/
/*! exports provided: EventosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosService", function() { return EventosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");






let EventosService = class EventosService {
    constructor(globalSer, navCtrl, axios, cookieService) {
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.axios = axios;
        this.cookieService = cookieService;
    }
    getEvents(queryParam) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.getData(`/events`, queryParam);
            if (res && res.success) {
                return res.data.events;
            }
            else {
                if (res.status && res.status === 401) {
                    this.cookieService.removeCookie('token');
                    return { error: 401 };
                }
                return null;
            }
        });
    }
};
EventosService.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_2__["AxiosService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_4__["CookiesService"] }
];
EventosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventosService);



/***/ })

}]);
//# sourceMappingURL=views-eventos-eventos-module.js.map