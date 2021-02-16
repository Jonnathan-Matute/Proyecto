(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recordatorio-recordatorio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recordatorio/recordatorio.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recordatorio/recordatorio.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  \r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>    \r\n    <ion-title>\r\n      Crear Recordatorio\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n \r\n  <ion-item>\r\n  <ion-label position=\"floating\" >Titulo Actividad</ion-label>\r\n    <ion-input [(ngModel)]=\"recor.titulo\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Tipo de Actividad</ion-label>\r\n    <ion-select value=\"Seleccione\" okText=\"Seleccionar\" cancelText=\"Cancelar\" [(ngModel)]=\"recor.t_actividad\">\r\n      <ion-select-option value=\"muyImportante\">Muy Importante</ion-select-option>\r\n      <ion-select-option value=\"importante\">Importante</ion-select-option>\r\n      <ion-select-option value=\"normal\">Normal</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n  <ion-label position=\"floating\" >Descripcion de Actividad</ion-label>\r\n    <ion-input [(ngModel)]=\"recor.actividad\"></ion-input>\r\n  </ion-item>\r\n \r\n  <ion-item>\r\n  <ion-label position=\"floating\">Fecha</ion-label>\r\n  <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"2020-03-14\" max=\"2050-12-09\" value=\"2002-09-23T15:03:46.789\" [(ngModel)]=\"recor.fecha\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n  <ion-label>Hora</ion-label>\r\n  <ion-datetime displayFormat=\"h:mm a\" [(ngModel)]=\"recor.hora\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>\r\n      Foto:\r\n    </ion-label>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <label for=\"file-upload\">\r\n          <ion-icon slot=\"icon-only\" name=\"images\"></ion-icon>\r\n        </label>\r\n        <input type=\"file\" accept=\".png, .jpg\" (change)=\"newImageUpload($event)\" id=\"file-upload\" style=\"display: none;\">\r\n\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <img [src]=\"recor.fotoUrl\">\r\n  </ion-item>\r\n\r\n  <ion-item (click)=\"addDirection()\" >\r\n    <ion-label class=\"normal\">\r\n      Ubicacion\r\n    </ion-label>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" color=\"danger\" name=\"location\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-button color=\"secondary\" expand=\"block\" (click)=\"guardar()\">Guardar</ion-button>\r\n  </ion-item>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/recordatorio/file-size-format.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/recordatorio/file-size-format.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FileSizeFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizeFormatPipe", function() { return FileSizeFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

//file-size-format.pipe.ts

const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
let FileSizeFormatPipe = class FileSizeFormatPipe {
    static forRoot() {
        throw new Error("Method not implemented.");
    }
    transform(sizeInBytes, longForm) {
        const units = longForm
            ? FILE_SIZE_UNITS_LONG
            : FILE_SIZE_UNITS;
        let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        const size = sizeInBytes / Math.pow(1024, power); // size in new units
        const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        const unit = units[power];
        return `${formattedSize} ${unit}`;
    }
};
FileSizeFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'fileSizePipe'
    })
], FileSizeFormatPipe);



/***/ }),

/***/ "./src/app/recordatorio/recordatorio-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/recordatorio/recordatorio-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RecordatorioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPageRoutingModule", function() { return RecordatorioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recordatorio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recordatorio.page */ "./src/app/recordatorio/recordatorio.page.ts");




const routes = [
    {
        path: '',
        component: _recordatorio_page__WEBPACK_IMPORTED_MODULE_3__["RecordatorioPage"]
    }
];
let RecordatorioPageRoutingModule = class RecordatorioPageRoutingModule {
};
RecordatorioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecordatorioPageRoutingModule);



/***/ }),

/***/ "./src/app/recordatorio/recordatorio.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/recordatorio/recordatorio.module.ts ***!
  \*****************************************************/
/*! exports provided: RecordatorioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPageModule", function() { return RecordatorioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recordatorio-routing.module */ "./src/app/recordatorio/recordatorio-routing.module.ts");
/* harmony import */ var _recordatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recordatorio.page */ "./src/app/recordatorio/recordatorio.page.ts");
/* harmony import */ var _file_size_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-size-format.pipe */ "./src/app/recordatorio/file-size-format.pipe.ts");








let RecordatorioPageModule = class RecordatorioPageModule {
};
RecordatorioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordatorioPageRoutingModule"]
        ],
        declarations: [_recordatorio_page__WEBPACK_IMPORTED_MODULE_6__["RecordatorioPage"], _file_size_format_pipe__WEBPACK_IMPORTED_MODULE_7__["FileSizeFormatPipe"]],
        exports: [_recordatorio_page__WEBPACK_IMPORTED_MODULE_6__["RecordatorioPage"]]
    })
], RecordatorioPageModule);



/***/ }),

/***/ "./src/app/recordatorio/recordatorio.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/recordatorio/recordatorio.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Set variables for all modes */\n#map {\n  width: 100%;\n  height: 100%;\n}\n.my-custom-class {\n  --background: #06052e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3JkYXRvcmlvL0M6XFxVc2Vyc1xcSGVucnkgR3VhbWFuXFx3b3Jrc3BhY2UtaW9uaWNcXEZpbmFsXFxQcm95ZWN0by9zcmNcXGFwcFxccmVjb3JkYXRvcmlvXFxyZWNvcmRhdG9yaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZWNvcmRhdG9yaW8vcmVjb3JkYXRvcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0UscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZGF0b3Jpby9yZWNvcmRhdG9yaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IHZhcmlhYmxlcyBmb3IgYWxsIG1vZGVzICovXHJcbiNtYXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIFxyXG4gIH1cclxuICAubXktY3VzdG9tLWNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzA2MDUyZTtcclxuICB9IiwiLyogU2V0IHZhcmlhYmxlcyBmb3IgYWxsIG1vZGVzICovXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm15LWN1c3RvbS1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogIzA2MDUyZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/recordatorio/recordatorio.page.ts":
/*!***************************************************!*\
  !*** ./src/app/recordatorio/recordatorio.page.ts ***!
  \***************************************************/
/*! exports provided: RecordatorioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPage", function() { return RecordatorioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_recordatorioservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/recordatorioservice.service */ "./src/app/services/recordatorioservice.service.ts");
/* harmony import */ var _services_firestorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firestorage.service */ "./src/app/services/firestorage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../googlemaps/googlemaps.component */ "./src/app/googlemaps/googlemaps.component.ts");
/* harmony import */ var _services_googlemaps_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/googlemaps.service */ "./src/app/services/googlemaps.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");










let RecordatorioPage = class RecordatorioPage {
    constructor(modalController, firestorageService, route, router, recordatorioService, storage, gs, afs) {
        this.modalController = modalController;
        this.firestorageService = firestorageService;
        this.route = route;
        this.router = router;
        this.recordatorioService = recordatorioService;
        this.storage = storage;
        this.gs = gs;
        this.afs = afs;
        this.recor = {
            uid: this.afs.createId(),
            titulo: "",
            t_actividad: "",
            actividad: "",
            fecha: null,
            hora: null,
            ubicacion: null,
            deleted: false,
            fotoUrl: ""
        };
        this.newImage = '';
        this.newFile = '';
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (this.router.getCurrentNavigation().extras.queryParams) {
                this.recor = this.router.getCurrentNavigation().extras.queryParams.recordatorio;
            }
        });
    }
    ngOnInit() { }
    addDirection() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ubicacion = this.recor.ubicacion;
            let positionInput = {
                lat: -2.898116,
                lng: -78.99958149999999
            };
            if (ubicacion !== null) {
                positionInput = ubicacion;
            }
            const modalAdd = yield this.modalController.create({
                component: _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_7__["GooglemapsComponent"],
                componentProps: { position: positionInput }
            });
            yield modalAdd.present();
            const { data } = yield modalAdd.onWillDismiss();
            if (data) {
                console.log('data -> ', data);
                this.recor.ubicacion = data.pos;
                console.log('This.cliente -> ', this.recor);
            }
        });
    }
    //guardar demas
    guardar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.recor);
            const path = 'Recordatorios';
            const name = this.recor.actividad;
            const res = yield this.firestorageService.uploadImage(this.newFile, path, name);
            this.recor.fotoUrl = res;
            this.recordatorioService.saveRecordatorio(this.recor);
            let navigationExtras = {
                queryParams: {
                    recordatorio: this.recor
                }
            };
            this.router.navigate(['/listar-recordatorios'], navigationExtras);
        });
    }
    newImageUpload(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (event.target.files && event.target.files[0]) {
                this.newFile = event.target.files[0];
                const reader = new FileReader();
                reader.onload = ((image) => {
                    //this.recor.fotoUrl = image.target.result as string;
                });
                reader.readAsDataURL(event.target.files[0]);
            }
        });
    }
};
RecordatorioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_firestorage_service__WEBPACK_IMPORTED_MODULE_5__["FirestorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_recordatorioservice_service__WEBPACK_IMPORTED_MODULE_4__["RecordatorioserviceService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: _services_googlemaps_service__WEBPACK_IMPORTED_MODULE_8__["GooglemapsService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] }
];
RecordatorioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recordatorio',
        template: __webpack_require__(/*! raw-loader!./recordatorio.page.html */ "./node_modules/raw-loader/index.js!./src/app/recordatorio/recordatorio.page.html"),
        styles: [__webpack_require__(/*! ./recordatorio.page.scss */ "./src/app/recordatorio/recordatorio.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _services_firestorage_service__WEBPACK_IMPORTED_MODULE_5__["FirestorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_recordatorioservice_service__WEBPACK_IMPORTED_MODULE_4__["RecordatorioserviceService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], _services_googlemaps_service__WEBPACK_IMPORTED_MODULE_8__["GooglemapsService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"]])
], RecordatorioPage);



/***/ }),

/***/ "./src/app/services/firestorage.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/firestorage.service.ts ***!
  \*************************************************/
/*! exports provided: FirestorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestorageService", function() { return FirestorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let FirestorageService = class FirestorageService {
    constructor(storage) {
        this.storage = storage;
    }
    uploadImage(file, path, nombre) {
        return new Promise(resolve => {
            const filePath = path + '/' + nombre;
            const ref = this.storage.ref(filePath);
            const task = ref.put(file);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                ref.getDownloadURL().subscribe(res => {
                    const downloadURL = res;
                    resolve(downloadURL);
                    return;
                });
            }))
                .subscribe();
        });
    }
};
FirestorageService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
];
FirestorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
], FirestorageService);



/***/ })

}]);
//# sourceMappingURL=recordatorio-recordatorio-module-es2015.js.map