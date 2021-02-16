(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listar-detallada-listar-detallada-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/listar-detallada/listar-detallada.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listar-detallada/listar-detallada.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>    \r\n    <ion-title>\r\n      Listar Recordatorio \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"ios list-ios hydrated\">\r\n    <ion-list-header class=\"ios hydrated\">\r\n      Detalle Recordatorio\r\n    </ion-list-header>\r\n      \r\n    <div *ngIf=\"actividad\">\r\n    <ion-card>\r\n\r\n    <ion-item>\r\n      \r\n      <ion-label>Titulo Actividad:</ion-label> <br>\r\n      <ion-label>{{actividad.titulo}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tipo de Actividad: </ion-label><br>\r\n      <ion-label>{{actividad.t_actividad}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Actividad: </ion-label><br>\r\n      <ion-label>{{actividad.actividad}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Fecha: </ion-label><br>\r\n      <ion-label>{{actividad.fecha}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Hora: </ion-label><br>\r\n      <ion-label>{{actividad.hora}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-card-content>\r\n      <img [src]=\"actividad.fotoUrl\">\r\n    </ion-card-content>\r\n\r\n    <ion-item>\r\n    <ion-button  color=\"secondary\" expand=\"block\" (click)=\"volver()\">Cerrar</ion-button>\r\n    </ion-item>\r\n\r\n  </ion-card>\r\n\r\n    </div>\r\n        \r\n        \r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/listar-detallada/listar-detallada-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/listar-detallada/listar-detallada-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListarDetalladaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarDetalladaPageRoutingModule", function() { return ListarDetalladaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listar_detallada_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listar-detallada.page */ "./src/app/listar-detallada/listar-detallada.page.ts");




var routes = [
    {
        path: ':uid',
        component: _listar_detallada_page__WEBPACK_IMPORTED_MODULE_3__["ListarDetalladaPage"]
    }
];
var ListarDetalladaPageRoutingModule = /** @class */ (function () {
    function ListarDetalladaPageRoutingModule() {
    }
    ListarDetalladaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListarDetalladaPageRoutingModule);
    return ListarDetalladaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/listar-detallada/listar-detallada.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/listar-detallada/listar-detallada.module.ts ***!
  \*************************************************************/
/*! exports provided: ListarDetalladaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarDetalladaPageModule", function() { return ListarDetalladaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listar_detallada_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listar-detallada-routing.module */ "./src/app/listar-detallada/listar-detallada-routing.module.ts");
/* harmony import */ var _listar_detallada_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar-detallada.page */ "./src/app/listar-detallada/listar-detallada.page.ts");







var ListarDetalladaPageModule = /** @class */ (function () {
    function ListarDetalladaPageModule() {
    }
    ListarDetalladaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _listar_detallada_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListarDetalladaPageRoutingModule"]
            ],
            declarations: [_listar_detallada_page__WEBPACK_IMPORTED_MODULE_6__["ListarDetalladaPage"]]
        })
    ], ListarDetalladaPageModule);
    return ListarDetalladaPageModule;
}());



/***/ }),

/***/ "./src/app/listar-detallada/listar-detallada.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/listar-detallada/listar-detallada.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Rhci1kZXRhbGxhZGEvbGlzdGFyLWRldGFsbGFkYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/listar-detallada/listar-detallada.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/listar-detallada/listar-detallada.page.ts ***!
  \***********************************************************/
/*! exports provided: ListarDetalladaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarDetalladaPage", function() { return ListarDetalladaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_lista_recordatorios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/lista-recordatorios.service */ "./src/app/services/lista-recordatorios.service.ts");
/* harmony import */ var _services_recordatorioservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/recordatorioservice.service */ "./src/app/services/recordatorioservice.service.ts");





var ListarDetalladaPage = /** @class */ (function () {
    function ListarDetalladaPage(ObtenerRecordatorio, route, router, recordatorioServicio) {
        this.ObtenerRecordatorio = ObtenerRecordatorio;
        this.route = route;
        this.router = router;
        this.recordatorioServicio = recordatorioServicio;
    }
    ListarDetalladaPage.prototype.ngOnInit = function () {
        this.cargarDetalleActividad();
    };
    ListarDetalladaPage.prototype.volver = function () {
        this.router.navigate(['/listar-recordatorios']);
    };
    ListarDetalladaPage.prototype.cargarDetalleActividad = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.route.params.subscribe(function (params) {
                            _this.actividadId = params.uid;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.recordatorioServicio.getRecordatorioById(this.actividadId).subscribe(function (res) {
                                console.log("esto llega");
                                console.log(res);
                                _this.actividad = res.docs[0].data();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListarDetalladaPage.ctorParameters = function () { return [
        { type: _services_lista_recordatorios_service__WEBPACK_IMPORTED_MODULE_3__["ListaRecordatoriosService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_recordatorioservice_service__WEBPACK_IMPORTED_MODULE_4__["RecordatorioserviceService"] }
    ]; };
    ListarDetalladaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listar-detallada',
            template: __webpack_require__(/*! raw-loader!./listar-detallada.page.html */ "./node_modules/raw-loader/index.js!./src/app/listar-detallada/listar-detallada.page.html"),
            styles: [__webpack_require__(/*! ./listar-detallada.page.scss */ "./src/app/listar-detallada/listar-detallada.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_lista_recordatorios_service__WEBPACK_IMPORTED_MODULE_3__["ListaRecordatoriosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_recordatorioservice_service__WEBPACK_IMPORTED_MODULE_4__["RecordatorioserviceService"]])
    ], ListarDetalladaPage);
    return ListarDetalladaPage;
}());



/***/ }),

/***/ "./src/app/services/lista-recordatorios.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/lista-recordatorios.service.ts ***!
  \*********************************************************/
/*! exports provided: ListaRecordatoriosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaRecordatoriosService", function() { return ListaRecordatoriosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var ListaRecordatoriosService = /** @class */ (function () {
    function ListaRecordatoriosService(db) {
        this.db = db;
    }
    ListaRecordatoriosService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    ListaRecordatoriosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ListaRecordatoriosService);
    return ListaRecordatoriosService;
}());



/***/ })

}]);
//# sourceMappingURL=listar-detallada-listar-detallada-module-es5.js.map