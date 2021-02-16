(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listar-recordatorios-listar-recordatorios-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/listar-recordatorios/listar-recordatorios.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listar-recordatorios/listar-recordatorios.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>    \r\n    <ion-title>\r\n      Listar Recordatorio\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"ios list-ios hydrated\">\r\n    <ion-list-header class=\"ios hydrated\">\r\n      Mis Recordatorios\r\n    </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let recordatorio of recor\" class=\"user-list\">\r\n      <ion-label>\r\n        <h5>\r\n          <ion-icon name=\"person\"></ion-icon> {{recordatorio.titulo}}\r\n        </h5>\r\n      </ion-label>\r\n      <div class=\"item-note\" item-end>\r\n        <button ion-button clear [routerLink]=\"\">\r\n          \r\n          <ion-icon name=\"trash\" style=\"zoom:2.0\"></ion-icon>\r\n        </button>\r\n\r\n        <button ion-button clear (click)=\"editarRecordatorio(recordatorio)\">\r\n        <ion-icon name=\"create\" style=\"zoom:2.0\"></ion-icon>\r\n          \r\n        </button>\r\n        \r\n        <button ion-button clear (click)=\"confirmarBorrado(recordatorio.uid)\">\r\n          <ion-icon name=\"trash\" style=\"zoom:2.0\"></ion-icon>\r\n        </button>\r\n      </div>\r\n      \r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/listar-recordatorios/listar-recordatorios-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/listar-recordatorios/listar-recordatorios-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ListarRecordatoriosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarRecordatoriosPageRoutingModule", function() { return ListarRecordatoriosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _listar_recordatorios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listar-recordatorios.page */ "./src/app/listar-recordatorios/listar-recordatorios.page.ts");




const routes = [
    {
        path: '',
        component: _listar_recordatorios_page__WEBPACK_IMPORTED_MODULE_3__["ListarRecordatoriosPage"]
    }
];
let ListarRecordatoriosPageRoutingModule = class ListarRecordatoriosPageRoutingModule {
};
ListarRecordatoriosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListarRecordatoriosPageRoutingModule);



/***/ }),

/***/ "./src/app/listar-recordatorios/listar-recordatorios.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/listar-recordatorios/listar-recordatorios.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListarRecordatoriosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarRecordatoriosPageModule", function() { return ListarRecordatoriosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listar_recordatorios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listar-recordatorios-routing.module */ "./src/app/listar-recordatorios/listar-recordatorios-routing.module.ts");
/* harmony import */ var _listar_recordatorios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar-recordatorios.page */ "./src/app/listar-recordatorios/listar-recordatorios.page.ts");







let ListarRecordatoriosPageModule = class ListarRecordatoriosPageModule {
};
ListarRecordatoriosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listar_recordatorios_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListarRecordatoriosPageRoutingModule"]
        ],
        declarations: [_listar_recordatorios_page__WEBPACK_IMPORTED_MODULE_6__["ListarRecordatoriosPage"]]
    })
], ListarRecordatoriosPageModule);



/***/ }),

/***/ "./src/app/listar-recordatorios/listar-recordatorios.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/listar-recordatorios/listar-recordatorios.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< Updated upstream
module.exports = "ion-icon {\n  color: #1e94d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFyLXJlY29yZGF0b3Jpb3MvQzpcXFVzZXJzXFxIZW5yeSBHdWFtYW5cXHdvcmtzcGFjZS1pb25pY1xcRmluYWxcXFByb3llY3RvL3NyY1xcYXBwXFxsaXN0YXItcmVjb3JkYXRvcmlvc1xcbGlzdGFyLXJlY29yZGF0b3Jpb3MucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0YXItcmVjb3JkYXRvcmlvcy9saXN0YXItcmVjb3JkYXRvcmlvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9saXN0YXItcmVjb3JkYXRvcmlvcy9saXN0YXItcmVjb3JkYXRvcmlvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBjb2xvcjpyZ2IoMzAsIDE0OCwgMjE2KTtcclxuICB9IiwiaW9uLWljb24ge1xuICBjb2xvcjogIzFlOTRkODtcbn0iXX0= */"
=======
module.exports = "ion-icon {\n  color: #1e94d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFyLXJlY29yZGF0b3Jpb3MvQzpcXFVzZXJzXFxqbWF0dVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXFBMQVRBRk9STUFTIE3Dk1ZJTEVTIC0gVGltYmlcXFByb3llY3RvL3NyY1xcYXBwXFxsaXN0YXItcmVjb3JkYXRvcmlvc1xcbGlzdGFyLXJlY29yZGF0b3Jpb3MucGFnZS5zY3NzIiwic3JjL2FwcC9saXN0YXItcmVjb3JkYXRvcmlvcy9saXN0YXItcmVjb3JkYXRvcmlvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9saXN0YXItcmVjb3JkYXRvcmlvcy9saXN0YXItcmVjb3JkYXRvcmlvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBjb2xvcjpyZ2IoMzAsIDE0OCwgMjE2KTtcclxuICB9IiwiaW9uLWljb24ge1xuICBjb2xvcjogIzFlOTRkODtcbn0iXX0= */"
>>>>>>> Stashed changes

/***/ }),

/***/ "./src/app/listar-recordatorios/listar-recordatorios.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/listar-recordatorios/listar-recordatorios.page.ts ***!
  \*******************************************************************/
/*! exports provided: ListarRecordatoriosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarRecordatoriosPage", function() { return ListarRecordatoriosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_recordatorioservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/recordatorioservice.service */ "./src/app/services/recordatorioservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notificaciones.service */ "./src/app/services/notificaciones.service.ts");





let ListarRecordatoriosPage = class ListarRecordatoriosPage {
    constructor(ObtenerRecordatorio, router, notificacionesService) {
        this.ObtenerRecordatorio = ObtenerRecordatorio;
        this.router = router;
        this.notificacionesService = notificacionesService;
    }
    ngOnInit() {
        this.recuperarRecordatorios();
    }
    recuperarRecordatorios() {
        this.ObtenerRecordatorio.ObtenerRecordatorio().subscribe(respuesta => {
            console.log("listar", respuesta);
            this.recor = respuesta;
        });
    }
    editarRecordatorio(recordatorio) {
        let navigationExtras = {
            queryParams: {
                recordatorio: recordatorio
            }
        };
        this.router.navigate(['/crear_recordatorio'], navigationExtras);
    }
    borrarRecordatorio(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ObtenerRecordatorio.borrarRecor(uid);
            this.notificacionesService.notificacionToast("Registro borrado");
        });
    }
    confirmarBorrado(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.notificacionesService.confirmacion("Confirmar", "Esta seguro de borrar", this.borrarRecordatorio.bind(this, uid));
        });
    }
};
ListarRecordatoriosPage.ctorParameters = () => [
    { type: _services_recordatorioservice_service__WEBPACK_IMPORTED_MODULE_2__["RecordatorioserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_4__["NotificacionesService"] }
];
ListarRecordatoriosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listar-recordatorios',
        template: __webpack_require__(/*! raw-loader!./listar-recordatorios.page.html */ "./node_modules/raw-loader/index.js!./src/app/listar-recordatorios/listar-recordatorios.page.html"),
        styles: [__webpack_require__(/*! ./listar-recordatorios.page.scss */ "./src/app/listar-recordatorios/listar-recordatorios.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recordatorioservice_service__WEBPACK_IMPORTED_MODULE_2__["RecordatorioserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_4__["NotificacionesService"]])
], ListarRecordatoriosPage);



/***/ }),

/***/ "./src/app/services/notificaciones.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/notificaciones.service.ts ***!
  \****************************************************/
/*! exports provided: NotificacionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesService", function() { return NotificacionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let NotificacionesService = class NotificacionesService {
    constructor(toastController, alertController) {
        this.toastController = toastController;
        this.alertController = alertController;
    }
    notificacionToast(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 2000
            });
            toast.present();
        });
    }
    confirmacion(header, message, funcion) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: message,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Aceptar',
                        role: 'ok',
                        handler: () => {
                            funcion();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
NotificacionesService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
NotificacionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], NotificacionesService);



/***/ })

}]);
//# sourceMappingURL=listar-recordatorios-listar-recordatorios-module-es2015.js.map