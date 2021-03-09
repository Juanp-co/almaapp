(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-registro-registro-module"],{

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

/***/ "Gbx7":
/*!***************************************************!*\
  !*** ./src/app/views/registro/registro.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pictureLogo2 {\n  width: 100px !important;\n  margin: 0 auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoicmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY3R1cmVMb2dvMiB7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "JQUN":
/*!****************************************************!*\
  !*** ./src/app/views/registro/registro.service.ts ***!
  \****************************************************/
/*! exports provided: RegistroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroService", function() { return RegistroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _services_axios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/axios.service */ "1Ldg");




let RegistroService = class RegistroService {
    constructor(axios, globalSer) {
        this.axios = axios;
        this.globalSer = globalSer;
    }
    register(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.axios.postData('/register', data);
            if (res && res.success)
                return res.data.msg;
            return this.globalSer.altResponse(res);
        });
    }
};
RegistroService.ctorParameters = () => [
    { type: _services_axios_service__WEBPACK_IMPORTED_MODULE_3__["AxiosService"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
];
RegistroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegistroService);



/***/ }),

/***/ "bIpp":
/*!***************************************************!*\
  !*** ./src/app/views/registro/registro.module.ts ***!
  \***************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "dSBL");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "m6Os");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })
], RegistroPageModule);



/***/ }),

/***/ "dSBL":
/*!***********************************************************!*\
  !*** ./src/app/views/registro/registro-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "m6Os");




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ "m6Os":
/*!*************************************************!*\
  !*** ./src/app/views/registro/registro.page.ts ***!
  \*************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro.page.html */ "o61I");
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.page.scss */ "Gbx7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro.service */ "JQUN");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global.service */ "4WDQ");
/* harmony import */ var _Utils_profile_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Utils/profile.data */ "0ox5");
/* harmony import */ var _Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Utils/validations.functions */ "OmbT");









let RegistroPage = class RegistroPage {
    constructor(globalSer, navCtrl, registroService) {
        this.globalSer = globalSer;
        this.navCtrl = navCtrl;
        this.registroService = registroService;
        this.documentTypes = _Utils_profile_data__WEBPACK_IMPORTED_MODULE_7__["documentType"];
        this.referred = false;
        this.successRegister = false;
        this.view = 0;
        this.formData = {
            email: null,
            password: null,
            repPassword: null,
            names: null,
            lastNames: null,
            documentType: null,
            document: null,
            referred: null,
        };
    }
    ngOnInit() {
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navCtrl.back();
        });
    }
    registerMember() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.presentLoading('Registrando, por favor espere ...');
            const data = Object.assign({}, this.formData);
            data.document = `${data.documentType}${data.document}`;
            const res = yield this.registroService.register(data);
            if (res && !res.error) {
                this.successRegister = true;
                yield this.globalSer.dismissLoading();
            }
            else
                yield this.globalSer.dismissLoading();
        });
    }
    // getters and setters
    setView(view) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (view === 1) {
                const validated = this.validateData(view);
                if (!validated)
                    this.view = view;
                else
                    yield this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
            }
            else
                this.view = view;
        });
    }
    showInputReferred() {
        this.referred = !this.referred;
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
                    this.formData.documentType = selectedValue;
                }
            });
        });
    }
    validateOnlyNumbers(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["onlyNumbersInputValidation"])(event);
    }
    validateOnlyLetters(event) {
        Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["onlyLettersInputValidation"])(event);
    }
    /*
    Confirms
     */
    confirmCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.globalSer.alertConfirm({
                header: 'Confirme',
                message: '¿Está seguro qué desea cancelar el registro?',
                confirmAction: () => this.back()
            });
        });
    }
    validateData(view = null) {
        if (view === 1) {
            if (!/^([CC|CE|PE|TI|PAS]){2,3}/.test(this.formData.documentType))
                return 'Disculpe, pero debe indicar el tipo de documento.';
            if (!/[0-9]{5,10}/.test(this.formData.document))
                return 'Disculpe, pero debe indicar el número de documento de identidad.';
            if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkNameOrLastName"])(this.formData.names))
                return 'Disculpe, pero debe indicar un nombre válido.';
            if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkNameOrLastName"])(this.formData.lastNames))
                return 'Disculpe, pero debe indicar un apellido válido.';
            if (this.formData.referred && !Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkDocument"])(`${this.formData.referred.toUpperCase()}`))
                return 'Disculpe, pero debe indicar un número de documento correcto del miembro (ejm: CC12345678).';
            return null;
        }
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkEmail"])(this.formData.email))
            return 'Disculpe, pero debe indicar un correo electrónico válido.';
        if (!Object(_Utils_validations_functions__WEBPACK_IMPORTED_MODULE_8__["checkPassword"])(this.formData.password))
            return 'Disculpe, pero debe indicar una contraseña correcta.' +
                '<br><br>Solo se permiten letras (A-Z, a-z), números (0-9) y caracteres especiales (¿?¡!=)(/&%$#,.-+*)';
        if (this.formData.password !== this.formData.repPassword)
            return 'Disculpe, pero las contraseñas ingresadas no coinciden.';
        return null;
    }
    confirmRegister() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const validated = this.validateData();
            if (!validated) {
                yield this.globalSer.alertConfirm({
                    header: 'Confirme',
                    message: '¿Está seguro qué desea registrarse con esta información?' +
                        '<br/><br/><b>NOTA</b>: Le recomendamos verificar su número de documento, ya que una vez registrado no podrá modificarlo.',
                    confirmAction: () => this.registerMember()
                });
            }
            else {
                yield this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
            }
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _registro_service__WEBPACK_IMPORTED_MODULE_5__["RegistroService"] }
];
RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistroPage);



/***/ }),

/***/ "o61I":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/registro/registro.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <app-minheader title=\"Registro\"></app-minheader>\n  </ion-header>\n\n  <ion-row>\n    <ion-col size=\"12\" *ngIf=\"!successRegister\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row *ngIf=\"view === 0\">\n            <ion-col size=\"12\">\n              <ion-text color=\"medium\">\n                <p>Bienvenido al registro. Por favor, complete el formulario.</p>\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Tipo de documento (*)</ion-label>\n                <ion-input\n                  [readonly]=\"true\"\n                  [value]=\"formData.documentType ? getDocumentLabel(formData.documentType) : ''\"\n                  (click)=\"showAlertDocumentList(formData.documentType)\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Número de documento (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.document\"\n                  autocomplete=\"off\"\n                  maxlength=\"10\"\n                  (keypress)=\"validateOnlyNumbers($event)\"\n                  class=\"ion-text-uppercase\"\n                >\n                </ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Nombre(s) (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.names\"\n                  autocomplete=\"off\"\n                  (keyup)=\"validateOnlyLetters($event)\"\n                  class=\"ion-text-uppercase\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Apellido(s) (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.lastNames\"\n                  autocomplete=\"off\"\n                  (keyup)=\"validateOnlyLetters($event)\"\n                  class=\"ion-text-uppercase\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item lines=\"none\">\n                <ion-checkbox slot=\"start\" (click)=\"showInputReferred()\"></ion-checkbox>\n                <ion-label color=\"medium\">He sido referido por un miembro.</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"referred\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Nº de documento del miembro</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.referred\"\n                  autocomplete=\"off\"\n                  class=\"ion-text-uppercase\"\n                ></ion-input>\n              </ion-item>\n              <ion-text color=\"medium\"><i>Ejm: CC12345678</i></ion-text>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-margin-top\">\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom ion-text-center\">\n              <ion-button color=\"light\" (click)=\"confirmCancel()\">\n                <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Cancelar</ion-text>\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"setView(1)\">\n                <ion-text>Siguiente</ion-text>\n                <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"view === 1\">\n            <ion-col size=\"12\">\n              <ion-text color=\"medium\">\n                <p>Por favor, complete los campos del formulario.</p>\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Correo electrónico (*)</ion-label>\n                <ion-input [(ngModel)]=\"formData.email\" autocomplete=\"off\" class=\"ion-text-uppercase\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Contraseña (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.password\"\n                  autocomplete=\"off\"\n                  type=\"password\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Repita la contraseña (*)</ion-label>\n                <ion-input\n                  [(ngModel)]=\"formData.repPassword\"\n                  autocomplete=\"off\"\n                  type=\"password\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-margin-top\">\n              <ion-text color=\"medium\"><i class=\"toSmall\">(*) Campos requeridos.</i></ion-text>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom ion-text-center\">\n              <ion-button color=\"light\" (click)=\"setView(0)\">\n                <ion-icon name=\"arrow-back-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Regresar</ion-text>\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"confirmRegister()\">\n                <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Regístrame</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" *ngIf=\"successRegister\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col [size]=\"12\" class=\"ion-text-center\">\n              <ion-img class=\"pictureLogo2 ion-margin-top ion-padding-top\" [src]=\"'/assets/icon/check.svg'\"></ion-img>\n              <ion-card-title class=\"ion-margin-top ion-padding-top\">\n                Se ha registrado exitosamente.<br/>\n                Ahora puede acceder a la aplicación.\n              </ion-card-title>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" class=\"ion-margin-top ion-padding-top ion-padding-bottom ion-margin-bottom ion-text-center\">\n              <ion-button color=\"primary\" (click)=\"back()\">\n                <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n                <ion-text>Iniciar sesión</ion-text>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=views-registro-registro-module.js.map