(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editar-recordatorio-editar-recordatorio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/editar-recordatorio/editar-recordatorio.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/editar-recordatorio/editar-recordatorio.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>editarRecordatorio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/editar-recordatorio/editar-recordatorio-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/editar-recordatorio/editar-recordatorio-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditarRecordatorioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarRecordatorioPageRoutingModule", function() { return EditarRecordatorioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _editar_recordatorio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar-recordatorio.page */ "./src/app/editar-recordatorio/editar-recordatorio.page.ts");




const routes = [
    {
        path: '',
        component: _editar_recordatorio_page__WEBPACK_IMPORTED_MODULE_3__["EditarRecordatorioPage"]
    }
];
let EditarRecordatorioPageRoutingModule = class EditarRecordatorioPageRoutingModule {
};
EditarRecordatorioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarRecordatorioPageRoutingModule);



/***/ }),

/***/ "./src/app/editar-recordatorio/editar-recordatorio.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/editar-recordatorio/editar-recordatorio.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditarRecordatorioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarRecordatorioPageModule", function() { return EditarRecordatorioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editar_recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-recordatorio-routing.module */ "./src/app/editar-recordatorio/editar-recordatorio-routing.module.ts");
/* harmony import */ var _editar_recordatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar-recordatorio.page */ "./src/app/editar-recordatorio/editar-recordatorio.page.ts");







let EditarRecordatorioPageModule = class EditarRecordatorioPageModule {
};
EditarRecordatorioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editar_recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarRecordatorioPageRoutingModule"]
        ],
        declarations: [_editar_recordatorio_page__WEBPACK_IMPORTED_MODULE_6__["EditarRecordatorioPage"]]
    })
], EditarRecordatorioPageModule);



/***/ }),

/***/ "./src/app/editar-recordatorio/editar-recordatorio.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/editar-recordatorio/editar-recordatorio.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRhci1yZWNvcmRhdG9yaW8vZWRpdGFyLXJlY29yZGF0b3Jpby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/editar-recordatorio/editar-recordatorio.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/editar-recordatorio/editar-recordatorio.page.ts ***!
  \*****************************************************************/
/*! exports provided: EditarRecordatorioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarRecordatorioPage", function() { return EditarRecordatorioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditarRecordatorioPage = class EditarRecordatorioPage {
    constructor() { }
    ngOnInit() {
    }
};
EditarRecordatorioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-recordatorio',
        template: __webpack_require__(/*! raw-loader!./editar-recordatorio.page.html */ "./node_modules/raw-loader/index.js!./src/app/editar-recordatorio/editar-recordatorio.page.html"),
        styles: [__webpack_require__(/*! ./editar-recordatorio.page.scss */ "./src/app/editar-recordatorio/editar-recordatorio.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EditarRecordatorioPage);



/***/ })

}]);
//# sourceMappingURL=editar-recordatorio-editar-recordatorio-module-es2015.js.map