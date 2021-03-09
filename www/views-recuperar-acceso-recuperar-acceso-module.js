(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-recuperar-acceso-recuperar-acceso-module"],{

/***/ "0ox5":
/*!***********************************!*\
  !*** ./src/Utils/profile.data.ts ***!
  \***********************************/
/*! exports provided: educationLevels, documentType, bloodType, professions, companyType, civilStatus, gender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "educationLevels", function() { return educationLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentType", function() { return documentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bloodType", function() { return bloodType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "professions", function() { return professions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyType", function() { return companyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "civilStatus", function() { return civilStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gender", function() { return gender; });
const educationLevels = [
    'Preescolar',
    'Básica Primaria (1-5)',
    'Básica Secundaria (6-9)',
    'Média (10-13)',
    'Técnica Laboral',
    'Técnica Profesional',
    'Tecnológica',
    'Universitaria',
    'Especialización',
    'Maestría',
    'Doctorado'
];
const documentType = [
    { val: 'CC', label: 'Cédula de ciudadanía' },
    { val: 'TI', label: 'Tarjeta de identidad' },
    { val: 'PAS', label: 'Pasaporte' },
    { val: 'CE', label: 'Cédula de extrajería' },
    { val: 'PE', label: 'Permiso Especial de Permanencia' },
];
const bloodType = ['A -', 'A +', 'AB -', 'AB +', 'B -', 'B +', 'O -', 'O +'];
const professions = [
    'Prefiero no indicar',
    'Abogado',
    'Actor, Actriz, Artista, Director de Espectáculos',
    'Actuario',
    'Administrador',
    'Aduanero/Agente de Aduanas/Inspectores de Frontera',
    'Aeromozo/Azafata',
    'Agente/Intermediario/Corredor Inmobiliario',
    'Agente de Bolsa',
    'Agente de Inmigración/Migración',
    'Agente de Turismo/Viajes',
    'Agente/Intermediario/Corredor de Seguros',
    'Agricultor, Agrónomo, Agrologo, Arboricultor',
    'albañil, Obrero de Construcción',
    'Ama de Casa',
    'Analista de Sistema y Computación',
    'Antropólogo, Arqueólogo y Etnólogo',
    'Archivero',
    'Armador de Barco',
    'Arquitecto 00020 Artesano',
    'Asistente Social',
    'Autor Literario, Escritor y Crmtico',
    'Avicultor',
    'Bacteriólogo, Farmacólogo, Biólogo, Científico',
    'Basurero/Barrendero',
    'Cajero',
    'Camarero/Barman/Mesero/Chef',
    'Cambista, Compra/Venta de Moneda',
    'Campesino',
    'Capataz',
    'Cargador',
    'Carpintero',
    'Cartero',
    'Cerrajero',
    'Cobrador',
    'Comerciante / Vendedor',
    'Conductor, Chofer / Taxista',
    'Conserje/Portero/Guardián/Vigilante',
    'Constructor',
    'Contador',
    'Contratista',
    'Corte y Confección de Ropa/Fabricante de Prendas',
    'Cosmetólogo, Peluquero y Barbero',
    'Decorador, Dibujante, Publicista',
    'Dentista / Odontólogo',
    'Deportista Profesional, Atleta, Arbitro',
    'Distribuidor',
    'Docente',
    'Economista',
    'Electricista',
    'Empleada(o) del hogar / Nana',
    'Empresario Exportador/Empresario Importador',
    'Enfermero',
    'Ensamblador',
    'Escultor',
    'Estudiante',
    'Fotógrafo/Operadores cámara, cine y tv, locutor',
    'Ganadero',
    'Gasfitero',
    'Historiador',
    'Ingeniero',
    'Interprete, Traductor',
    'Jardinero',
    'Jockey',
    'Joyero y/o Platero / Orfebre',
    'Jubilado / Pensionista',
    'Laboratorista (Técnico)',
    'Liquidador, Reclamaciones/Seguros',
    'Maquinista / Operador de maquinaria',
    'Martillero / Subastador',
    'Mayorista, comercio al por mayor',
    'Mecánico',
    'Medico / Cirujano',
    'Metalurgista',
    'Miembro de las Fuerzas Armadas',
    'Nutricionista',
    'Obrero / Operador',
    'Obstetriz',
    'Organizador de Eventos',
    'Panadero / Pastelero',
    'Paramédico',
    'Periodista',
    'Perito',
    'Pescador',
    'Piloto',
    'Pintor',
    'Policía Municipal',
    'Policía PNP',
    'Productor de Cine / Radio / Televisión / Teatro',
    'Productor, Cultivos Extensivos',
    'Programador',
    'Psicólogo / Terapeuta',
    'Quiropráctico/Kinesiterapeuta (Kinesiólogos)',
    'Relacionista Publico e Industrial',
    'Relojero',
    'Reparación de Automóviles, Pintor Retocador',
    'Reparador de Aparatos Electrodomésticos',
    'Repartidor',
    'Sacerdote/Monja',
    'Secretaria, Recepcionista, Telefonista',
    'Seguridad/Guardaespaldas/Guardia de Seguridad',
    'Servicio de Almacenamiento/Almacenero',
    'Servicio de Alquiler de Vehículos',
    'Servicios de Alquiler de Videos, Equipos de Sonido',
    'Sociólogo',
    'Tasador',
    'Técnico',
    'Torero',
    'Tramitador',
    'Transporte de Carga y/o Mudanza',
    'Transportista',
    'Vendedor Ambulante',
    'Veterinario, Zoólogo, Zootécnico',
    'Visitador Medico',
    'Zapatero',
    'Otros',
];
const companyType = [
    'Empresa asociativa de trabajo',
    'Empresa unipersonal',
    'Persona natural comerciante',
    'Sociedad anónima',
    'Sociedad colectiva',
    'Sociedad en comandita por acciones',
    'Sociedad en comandita simple',
    'Sociedad limitada',
    'Sociedades agrarias de transformación',
    'Sociedades por acciones simplificadas',
    'Otro',
];
const civilStatus = [
    'Soltero',
    'Casado',
    'Divorciado',
    'Separado',
    'Prefiero no indicar',
];
const gender = [
    'Hombre',
    'Mujer',
    'Prefiero no indicar',
];


/***/ }),

/***/ "A43k":
/*!*******************************************************************!*\
  !*** ./src/app/views/recuperar-acceso/recuperar-acceso.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecuperarAccesoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarAccesoPageModule", function() { return RecuperarAccesoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _recuperar_acceso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recuperar-acceso-routing.module */ "sFHQ");
/* harmony import */ var _recuperar_acceso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recuperar-acceso.page */ "BNjM");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let RecuperarAccesoPageModule = class RecuperarAccesoPageModule {
};
RecuperarAccesoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recuperar_acceso_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecuperarAccesoPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_recuperar_acceso_page__WEBPACK_IMPORTED_MODULE_6__["RecuperarAccesoPage"]]
    })
], RecuperarAccesoPageModule);



/***/ }),

/***/ "BNjM":
/*!*****************************************************************!*\
  !*** ./src/app/views/recuperar-acceso/recuperar-acceso.page.ts ***!
  \*****************************************************************/
/*! exports provided: RecuperarAccesoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarAccesoPage", function() { return RecuperarAccesoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recuperar_acceso_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recuperar-acceso.page.html */ "cNw0");
/* harmony import */ var _recuperar_acceso_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recuperar-acceso.page.scss */ "CaDm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _recuperar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recuperar.service */ "Hewg");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_profile_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utils/profile.data */ "0ox5");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");










let RecuperarAccesoPage = class RecuperarAccesoPage {
    constructor(globalSer, navCtrl, recuperarService) {
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.recuperarService = recuperarService;
        this.successRecovery = false;
        this.documentTypes = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_8__["documentType"];
        this.formData = {
            document: null,
            check: {
                email: null,
                birthday: null,
            },
            password: null,
            repPassword: null
        };
        this.formData2 = {
            documentType: null,
            document: null,
        };
        this.view = 0;
        this.views = [
            { msg: 'Por favor, indique su número de documento.' },
            { msg: null, check: null },
            { msg: null, setNewPassword: false },
        ];
        this.maxDate = null;
        this.maxDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD');
    }
    ngOnInit() {
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    checkDocument() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Verificando número de documento, por favor espere ...');
            this.formData.document = `${this.formData2.documentType}${this.formData2.document}`;
            const res = yield this.recuperarService.checkDocument(this.formData);
            if (res && !res.error) {
                this.views[1].msg = res.msg;
                this.views[1].check = res.check;
                this.view = 1;
                yield this.globalSer.dismissLoading();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    checkParams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Verificando respuestas, por favor espere ...');
            const res = yield this.recuperarService.checkParams(this.formData);
            if (res && !res.error) {
                this.views[2] = Object.assign({}, res);
                this.view = 2;
                yield this.globalSer.dismissLoading();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    changePassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Verificando número de documento, por favor espere ...');
            this.formData.document = `${this.formData2.documentType}${this.formData2.document}`;
            const res = yield this.recuperarService.changePassword(this.formData);
            if (res && !res.error) {
                this.views[3] = Object.assign({}, res);
                this.view = 3;
                this.successRecovery = true;
                yield this.globalSer.dismissLoading();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    /*
    Getters and setters
     */
    setView(view) {
        const currentView = this.view;
        this.view = view;
        if (currentView === 1) {
            this.views[1].msg = null;
            this.formData.check.birthday = null;
            this.formData.check.email = null;
        }
        else if (currentView === 2) {
            this.formData.check.birthday = null;
            this.formData.check.email = null;
            this.views[2].msg = null;
            this.formData.password = null;
            this.formData.repPassword = null;
        }
    }
    setDate() {
        if (this.formData.check.birthday) {
            this.formData.check.birthday = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.formData.check.birthday).format('YYYY-MM-DD');
        }
    }
    getDocumentLabel(value) {
        if (!value)
            return null;
        const da = this.documentTypes.find(d => d.val === value);
        return da ? da.label : null;
    }
    showAlertDocumentList(selected = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputs = [];
            for (const value of this.documentTypes) {
                inputs.push({
                    name: `documentType`,
                    type: 'radio',
                    label: value.label,
                    value: value.val,
                    checked: selected !== null && selected === value.val,
                });
            }
            yield this.globalSer.alertWithList({
                header: 'Seleccione',
                inputs,
                confirmAction: (selectedValue) => {
                    this.formData2.documentType = selectedValue;
                }
            });
        });
    }
    validateOnlyNumbers(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__["onlyNumbersInputValidation"])(event);
    }
    /*
    Confirms
     */
    confirmCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea cancelar la recuperación de su cuenta?',
                confirmAction: () => this.back()
            });
        });
    }
    validateData(view = null) {
        if (view === 0) {
            if (!/^([CC|CE|PE|TI|PAS]){2,3}/.test(this.formData2.documentType))
                return 'Disculpe, pero debe indicar el tipo de documento.';
            if (!/[0-9]{5,10}/.test(this.formData2.document))
                return 'Disculpe, pero debe indicar el número de documento de identidad.';
            return null;
        }
        if (view === 1) {
            if (this.views[1].check.email && !Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__["checkEmail"])(`${this.formData.check.email}`))
                return 'Disculpe, pero debe indicar un correo electrónico válido.';
            if (this.views[1].check.birthday && !Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__["checkDate"])(`${this.formData.check.birthday}`))
                return 'Disculpe, pero debe indicar una fecha válida.';
            return null;
        }
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_9__["checkPassword"])(this.formData.password))
            return 'Disculpe, pero debe indicar una contraseña correcta.' +
                '<br><br>Solo se permiten letras (A-Z, a-z), números (0-9) y caracteres especiales (¿?¡!=)(/&%$#,.-+*).';
        if (this.formData.password !== this.formData.repPassword)
            return 'Disculpe, pero las contraseñas ingresadas no coinciden.';
        return null;
    }
    checkStep(step) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateData(step);
            if (!validated) {
                if (step === 0)
                    yield this.checkDocument();
                else if (step === 1)
                    yield this.checkParams();
                else if (step === 2)
                    yield this.confirmChangePassword();
                else
                    yield this.globalSer.presentAlert('Alerta', 'Error al validar');
            }
            else
                yield this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
        });
    }
    confirmChangePassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea asignar esta nueva contraseña?',
                confirmAction: () => this.changePassword()
            });
        });
    }
};
RecuperarAccesoPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _recuperar_service__WEBPACK_IMPORTED_MODULE_6__["RecuperarService"] }
];
RecuperarAccesoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recuperar-acceso',
        template: _raw_loader_recuperar_acceso_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recuperar_acceso_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecuperarAccesoPage);



/***/ }),

/***/ "CaDm":
/*!*******************************************************************!*\
  !*** ./src/app/views/recuperar-acceso/recuperar-acceso.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pictureLogo2 {\n  width: 100px !important;\n  margin: 0 auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWN1cGVyYXItYWNjZXNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJyZWN1cGVyYXItYWNjZXNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWN0dXJlTG9nbzIge1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Hewg":
/*!*************************************************************!*\
  !*** ./src/app/views/recuperar-acceso/recuperar.service.ts ***!
  \*************************************************************/
/*! exports provided: RecuperarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarService", function() { return RecuperarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");




let RecuperarService = class RecuperarService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    checkDocument(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData('/recovery-password/check-document', data);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
    checkParams(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData('/recovery-password/check-params', data);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
    changePassword(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.putData('/recovery-password/change-password', data);
            if (res && res.success)
                return res.data;
            return this.globalSer.altResponse(res);
        });
    }
};
RecuperarService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_3__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
];
RecuperarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RecuperarService);



/***/ }),

/***/ "cNw0":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/recuperar-acceso/recuperar-acceso.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Recuperar acceso\"></app-minheader>\n  </ion-header>\n\n  <ion-row>\n    <ion-col size=\"12\" *ngIf=\"!successRecovery\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-text>{{ views[view].msg }}</ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"view === 0\">\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Tipo de documento (*)</ion-label>\n                <ion-input\n                  [readonly]=\"true\"\n                  [value]=\"formData2.documentType ? getDocumentLabel(formData2.documentType) : ''\"\n                  (click)=\"showAlertDocumentList(formData2.documentType)\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Número de documento (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData2.document\"\n                  autocomplete=\"off\"\n                  maxlength=\"10\"\n                  (keypress)=\"validateOnlyNumbers($event)\"\n                  class=\"ion-text-uppercase\"\n                >\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-margin-top\">\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom ion-text-center\">\n              <ion-button color=\"light\" (click)=\"confirmCancel()\">\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Cancelar</ion-text>\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"checkStep(0)\">\n                <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Verificar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"view === 1\">\n            <ion-col size=\"12\" *ngIf=\"views[view].check.email\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Correo electrónico (*)</ion-label>\n                <ion-input [(ngModel)]=\"formData.check.email\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"views[view].check.birthday\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Fecha de nacimiento *</ion-label>\n                <ion-datetime\n                  [(ngModel)]=\"formData.check.birthday\"\n                  displayFormat=\"DD/MM/YYYY\"\n                  min=\"1910-03-14\"\n                  max=\"{{maxDate}}\"\n                  doneText=\"Listo\"\n                  cancelText=\"Cancelar\"\n                  (ionChange)=\"setDate()\"\n                >\n                </ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-margin-top\">\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom ion-text-center\">\n              <ion-button color=\"light\" (click)=\"setView(0)\">\n                <ion-icon name=\"arrow-back-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Regresar</ion-text>\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"checkStep(1)\">\n                <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Verificar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"view === 2\">\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Contraseña (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.password\"\n                  autocomplete=\"off\"\n                  type=\"password\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Repita la contraseña (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.repPassword\"\n                  autocomplete=\"off\"\n                  type=\"password\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-margin-top\">\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom ion-text-center\">\n              <ion-button color=\"light\" (click)=\"setView(1)\">\n                <ion-icon name=\"arrow-back-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Regresar</ion-text>\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"checkStep(2)\">\n                <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Cambiar</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" *ngIf=\"successRecovery\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col [size]=\"12\" class=\"ion-text-center\">\n              <ion-img class=\"pictureLogo2 ion-margin-top ion-padding-top\" [src]=\"'/assets/icon/check.svg'\"></ion-img>\n              <ion-card-title class=\"ion-margin-top ion-padding-top\">\n                Se ha recuperado su cuenta exitosamente.<br/>\n                Ahora puede acceder a la aplicación.\n              </ion-card-title>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom ion-text-center\">\n              <ion-button color=\"primary\" (click)=\"back()\">\n                <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Iniciar sesión</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n");

/***/ }),

/***/ "sFHQ":
/*!***************************************************************************!*\
  !*** ./src/app/views/recuperar-acceso/recuperar-acceso-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RecuperarAccesoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarAccesoPageRoutingModule", function() { return RecuperarAccesoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recuperar_acceso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recuperar-acceso.page */ "BNjM");




const routes = [
    {
        path: '',
        component: _recuperar_acceso_page__WEBPACK_IMPORTED_MODULE_3__["RecuperarAccesoPage"]
    }
];
let RecuperarAccesoPageRoutingModule = class RecuperarAccesoPageRoutingModule {
};
RecuperarAccesoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecuperarAccesoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-recuperar-acceso-recuperar-acceso-module.js.map