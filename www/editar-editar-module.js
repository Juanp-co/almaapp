(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editar-editar-module"],{

/***/ "Ert4":
/*!**************************************************************!*\
  !*** ./src/app/views/perfil/editar/editar-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: EditarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPageRoutingModule", function() { return EditarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar.page */ "xTNe");




const routes = [
    {
        path: '',
        component: _editar_page__WEBPACK_IMPORTED_MODULE_3__["EditarPage"]
    }
];
let EditarPageRoutingModule = class EditarPageRoutingModule {
};
EditarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarPageRoutingModule);



/***/ }),

/***/ "L5Cb":
/*!******************************************************!*\
  !*** ./src/app/views/perfil/editar/editar.module.ts ***!
  \******************************************************/
/*! exports provided: EditarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPageModule", function() { return EditarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-routing.module */ "Ert4");
/* harmony import */ var _editar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar.page */ "xTNe");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");








let EditarPageModule = class EditarPageModule {
};
EditarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editar_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_editar_page__WEBPACK_IMPORTED_MODULE_6__["EditarPage"]]
    })
], EditarPageModule);



/***/ }),

/***/ "SiKu":
/*!*******************************************************!*\
  !*** ./src/app/views/perfil/editar/editar.service.ts ***!
  \*******************************************************/
/*! exports provided: EditarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarService", function() { return EditarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Utils_profile_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Utils/profile.data */ "0ox5");
/* harmony import */ var _Utils_locations_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Utils/locations.data */ "ZrT4");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/axios.service */ "1Ldg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");






let EditarService = class EditarService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
        this.professionsList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_2__["professions"];
        this.companyTypeList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_2__["companyType"];
        this.departmentsList = _Utils_locations_data__WEBPACK_IMPORTED_MODULE_3__["departments"];
        this.educationLevel = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_2__["educationLevels"];
        this.bloodTypeList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_2__["bloodType"];
        this.civilStatusList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_2__["civilStatus"];
        this.genderList = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_2__["gender"];
    }
    updateProfile(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData('/user', data);
            if (res && res.success)
                return res.data.data;
            return this.globalSer.altResponse(res);
        });
    }
};
EditarService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_4__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }
];
EditarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EditarService);



/***/ }),

/***/ "bhqx":
/*!******************************************************!*\
  !*** ./src/app/views/perfil/editar/editar.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0YXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "p0rv":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/perfil/editar/editar.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Editar perfil\"></app-minheader>\n  </ion-header>\n\n  <div *ngIf=\"formData\">\n    <ion-card>\n      <ion-card-content class=\"ion-no-padding\">\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Nombre(s) (*)</ion-label>\n              <ion-input [(ngModel)]=\"formData.names\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Apellido(s) (*)</ion-label>\n              <ion-input [(ngModel)]=\"formData.lastNames\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Correo electrónico (*)</ion-label>\n              <ion-input [(ngModel)]=\"formData.email\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Teléfono (*)</ion-label>\n              <ion-input [(ngModel)]=\"formData.phone\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Fecha de nacimiento (*)</ion-label>\n              <ion-datetime\n                [(ngModel)]=\"formData.birthday\"\n                displayFormat=\"DD/MM/YYYY\"\n                min=\"1910-03-14\"\n                max=\"{{maxDate}}\"\n                doneText=\"Listo\"\n                cancelText=\"Cancelar\"\n                (ionChange)=\"setDate()\"\n              >\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Sexo (*)</ion-label>\n              <ion-input\n                [readonly]=\"true\"\n                [value]=\"gender[formData.gender] || ''\"\n                autocomplete=\"off\"\n                (click)=\"showAlertList('gender', 'gender', formData.gender)\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Tipo de sangre (*)</ion-label>\n              <ion-input\n                [readonly]=\"true\"\n                [value]=\"bloodType[formData.bloodType] || ''\"\n                autocomplete=\"off\"\n                (click)=\"showAlertList('bloodType', 'bloodType', formData.bloodType)\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Estado civil (*)</ion-label>\n              <ion-input\n                [readonly]=\"true\"\n                [value]=\"civilStatus[formData.civilStatus] || ''\"\n                autocomplete=\"off\"\n                (click)=\"showAlertList('civilStatus', 'civilStatus', formData.civilStatus)\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Nivel educativo (*)</ion-label>\n              <ion-input\n                [readonly]=\"true\"\n                [value]=\"educationLevel[formData.educationLevel] || ''\"\n                autocomplete=\"off\"\n                (click)=\"showAlertList('educationLevel', 'educationLevel', formData.educationLevel)\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Profesión (*)</ion-label>\n              <ion-input\n                [readonly]=\"true\"\n                [value]=\"professions[formData.profession] || ''\"\n                autocomplete=\"off\"\n                (click)=\"showAlertList('profession', 'professions', formData.profession)\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">¿Posee una empresa? (*)</ion-label>\n              <ion-input\n                [readonly]=\"true\"\n                [value]=\"formData.company\"\n                autocomplete=\"off\"\n                (click)=\"showAlertYesOrNotList('company', formData.company)\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item *ngIf=\"formData.company === 'Si';\">\n              <ion-label position=\"floating\" color=\"medium\">Tipo de empresa (*)</ion-label>\n              <ion-input\n                [readonly]=\"true\"\n                [value]=\"companyType[formData.companyType] || ''\"\n                autocomplete=\"off\"\n                class=\"ion-text-uppercase\"\n                (click)=\"showAlertList('companyType', 'companyType', formData.companyType)\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">¿Estás bautizado?</ion-label>\n              <ion-input\n                [readonly]=\"true\"\n                [value]=\"formData.baptized\"\n                autocomplete=\"off\"\n                (click)=\"showAlertYesOrNotList('baptized', formData.baptized)\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Departamento (*)</ion-label>\n              <ion-input\n                [readonly]=\"true\"\n                [value]=\"departments[formData.department] || ''\"\n                autocomplete=\"off\"\n                class=\"ion-text-uppercase\"\n                (click)=\"showAlertList('department', 'departments', formData.department)\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Ciudad (*)</ion-label>\n              <ion-input\n                [readonly]=\"true\"\n                [value]=\"cities[formData.city] || ''\"\n                autocomplete=\"off\"\n                class=\"ion-text-uppercase\"\n                (click)=\"showAlertList('city', 'cities', formData.city)\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Barrio ó localidad (*)</ion-label>\n              <ion-input [(ngModel)]=\"formData.locality\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Dirección (*)</ion-label>\n              <ion-input [(ngModel)]=\"formData.direction\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-top ion-margin-bottom\">\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <ion-button color=\"light\" (click)=\"back()\">\n              <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n              Cancelar\n            </ion-button>\n            <ion-button color=\"primary\" (click)=\"confirmUpdate()\">\n              <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\n              Guardar\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "xTNe":
/*!****************************************************!*\
  !*** ./src/app/views/perfil/editar/editar.page.ts ***!
  \****************************************************/
/*! exports provided: EditarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPage", function() { return EditarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editar.page.html */ "p0rv");
/* harmony import */ var _editar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editar.page.scss */ "bhqx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar.service */ "SiKu");
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../perfil.service */ "76Eu");
/* harmony import */ var _services_cookies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/cookies.service */ "QTu/");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Utils/validations.functions */ "OmbT");











let EditarPage = class EditarPage {
    constructor(editarService, cookieService, perfilService, globalSer, navCtrl) {
        this.editarService = editarService;
        this.cookieService = cookieService;
        this.perfilService = perfilService;
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.professions = [];
        this.companyType = [];
        this.educationLevel = [];
        this.bloodType = [];
        this.departments = [];
        this.cities = [];
        this.civilStatus = [];
        this.gender = [];
        this.yesOrNotValues = ['No', 'Si'];
        this.maxDate = null;
        this.formData = null;
        this.educationLevel = editarService.educationLevel;
        this.professions = editarService.professionsList;
        this.bloodType = editarService.bloodTypeList;
        this.companyType = editarService.companyTypeList;
        this.civilStatus = editarService.civilStatusList;
        this.gender = editarService.genderList;
        this.departments = editarService.departmentsList.map(d => d.department);
        this.maxDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading();
            const token = this.cookieService.getCookie('token');
            if (token) {
                const userData = this.cookieService.getCookie('data');
                if (userData) {
                    this.formData = Object.assign({}, userData);
                    this.formData.company = this.formData.company ? 'Si' : 'No';
                    this.formData.baptized = this.formData.baptized ? 'Si' : 'No';
                    if (this.formData.department !== null)
                        this.getCity();
                    yield this.globalSer.dismissLoading();
                }
                else
                    yield this.errorSession();
            }
            else
                yield this.errorSession();
        });
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    getCity(clearCity = false) {
        const filter = this.editarService.departmentsList[this.formData.department] || null;
        if (filter)
            this.cities = filter.cities || [];
        if (clearCity)
            this.formData.city = null;
    }
    setDate() {
        if (this.formData.birthday) {
            this.formData.birthday = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.formData.birthday).format('YYYY-MM-DD');
        }
    }
    errorSession() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
            this.globalSer.clearAllData();
            yield this.globalSer.dismissLoading();
            yield this.navCtrl.navigateBack(['/']);
        });
    }
    /*
      Alerts
     */
    showAlertList(input, nameArray, selected = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [i, value] of this[nameArray].entries()) {
                inputs.push({
                    name: `value-${i}`,
                    type: 'radio',
                    label: value,
                    value: i,
                    checked: selected !== null && selected.toString() === i.toString(),
                });
            }
            const updateData = (selectedValue) => {
                this.formData[input] = selectedValue;
                if (input === 'department')
                    this.getCity(true);
            };
            yield this.globalSer.alertWithList({
                inputs,
                confirmAction: updateData
            });
        });
    }
    showAlertYesOrNotList(input, selected = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const [i, value] of this.yesOrNotValues.entries()) {
                inputs.push({
                    name: `value-${i}`,
                    type: 'radio',
                    label: value,
                    value,
                    checked: value === selected,
                });
            }
            const updateData = (selectedValue) => { this.formData[input] = selectedValue; };
            yield this.globalSer.alertWithList({
                inputs,
                confirmAction: updateData
            });
        });
    }
    /*
      validations
     */
    validateOnlyNumbers(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["onlyNumbersInputValidation"])(event);
    }
    validateOnlyLetters(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["onlyLettersInputValidation"])(event);
    }
    validateData() {
        const { formData } = this;
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkEmail"])(formData.email))
            return 'Disculpe, pero debe indicar su correo electrónico.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkNameOrLastName"])(formData.names))
            return 'Disculpe, pero debe indicar su nombre.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkNameOrLastName"])(formData.lastNames))
            return 'Disculpe, pero debe indicar su apellido.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkPhone"])(formData.phone))
            return 'Disculpe, pero debe indicar su número de teléfono.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkDate"])(formData.birthday))
            return 'Disculpe, pero debe indicar su fecha de nacimiento.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.gender}`))
            return 'Disculpe, pero debe indicar su sexo.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.bloodType}`))
            return 'Disculpe, pero debe indicar su tipo de sangre.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.civilStatus}`))
            return 'Disculpe, pero debe indicar su estado civil.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.educationLevel}`))
            return 'Disculpe, pero debe indicar su nivel educativo.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.profession}`))
            return 'Disculpe, pero debe indicar su profesión.';
        if (formData.company === null || formData.company === undefined)
            return 'Disculpe, pero debe indicar si posee una empresa.';
        if (formData.company !== null && formData.company === 'Si')
            if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.companyType}`))
                return 'Disculpe, pero debe indicar el tipo de empresa que posee.';
        if (formData.baptized === null || formData.baptized === undefined)
            return 'Disculpe, pero debe indicar si usted se encuentra bautizado.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.department}`))
            return 'Disculpe, pero debe indicar el departamento de residencia.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkIfValueIsNumber"])(`${formData.city}`))
            return 'Disculpe, pero debe indicar la ciudad de residencia.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkTitlesOrDescriptions"])(formData.locality))
            return 'Disculpe, pero debe indicar el nombre de la localidad de residencia.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_10__["checkTitlesOrDescriptions"])(formData.direction))
            return 'Disculpe, pero debe indicar su dirección de residencia.';
        return null;
    }
    updateData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateData();
            if (validated)
                yield this.globalSer.presentAlert('Alerta', validated);
            else {
                yield this.globalSer.presentLoading('Actualizando perfil, por favor espere ...');
                const data = Object.assign({}, this.formData);
                data.company = data.company === 'Si';
                data.baptized = data.baptized === 'Si';
                const updated = yield this.editarService.updateProfile(data);
                if (updated && !updated.error) {
                    const userData = this.cookieService.getCookie('data');
                    if (userData)
                        this.cookieService.setCookie('data', Object.assign(Object.assign({}, userData), updated));
                    yield this.globalSer.dismissLoading();
                    yield this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado su perfil exitosamente.');
                    yield this.back();
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
    /*
      Update
     */
    confirmUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateData();
            if (validated)
                yield this.globalSer.presentAlert('Alerta', validated);
            else {
                yield this.globalSer.alertConfirm({
                    header: 'Actualizar perfil',
                    message: '¿Está seguro qué desea actualizar los datos de su perfil?',
                    confirmAction: () => this.updateData()
                });
            }
        });
    }
};
EditarPage.ctorParameters = () => [
    { type: _editar_service__WEBPACK_IMPORTED_MODULE_6__["EditarService"] },
    { type: _services_cookies_service__WEBPACK_IMPORTED_MODULE_8__["CookiesService"] },
    { type: _perfil_service__WEBPACK_IMPORTED_MODULE_7__["PerfilService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
EditarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editar',
        template: _raw_loader_editar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditarPage);



/***/ })

}]);
//# sourceMappingURL=editar-editar-module.js.map