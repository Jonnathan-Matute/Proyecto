(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
<<<<<<< Updated upstream
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title text-center>Iniciar sesión</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n  <div class=\"center\">\r\n    <img class=\"icon\" src=\"./../../assets/user.png\" alt=\"ICON\">\r\n  </div>\r\n<ion-item>\r\n  <ion-label position=\"floating\" > Correo electrónico</ion-label>\r\n  <ion-input type=\"text\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label position=\"floating\" > Contraseña</ion-label>\r\n  <ion-input [(ngModel)]=\"password\" type=\"password\" name=\"password\"></ion-input>\r\n</ion-item>\r\n<br>\r\n<ion-button (click)=\"onSubmitLogin()\" expand=\"block\">Ingresar</ion-button>\r\n<br>\r\n<ion-button color=\"success\" expand=\"block\" routerLink=\"/registro\">Registrarse</ion-button>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-title color=\"secondary\">Ionic | Henry Guaman</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>"
=======
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title text-center>Iniciar sesión</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n  <div class=\"center\">\r\n    <img class=\"icon\" src=\"./../../assets/user.png\" alt=\"ICON\">\r\n  </div>\r\n<ion-item>\r\n  <ion-label position=\"floating\" > Correo electrónico</ion-label>\r\n  <ion-input type=\"text\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label position=\"floating\" > Contraseña</ion-label>\r\n  <ion-input [(ngModel)]=\"password\" type=\"password\" name=\"password\"></ion-input>\r\n</ion-item>\r\n<br>\r\n<ion-button (click)=\"onSubmitLogin()\" expand=\"block\">Ingresar</ion-button>\r\n<br>\r\n<ion-button color=\"success\" expand=\"block\" routerLink=\"/registro\">Registrarse</ion-button>\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col size=\"3\">\r\n      <ion-button class=\"google\" (click)=\"loginGoogle()\">\r\n        <ion-icon name=\"logo-google\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-button class=\"facebook\" (click)=\"loginFcebook()\">\r\n        <ion-icon name=\"logo-facebook\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-title color=\"secondary\">Ionic | Jonnathan Matute</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>"
>>>>>>> Stashed changes
=======
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title text-center>Iniciar sesión</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n  <div class=\"center\">\r\n    <img class=\"icon\" src=\"./../../assets/user.png\" alt=\"ICON\">\r\n  </div>\r\n<ion-item>\r\n  <ion-label position=\"floating\" > Correo electrónico</ion-label>\r\n  <ion-input type=\"text\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label position=\"floating\" > Contraseña</ion-label>\r\n  <ion-input [(ngModel)]=\"password\" type=\"password\" name=\"password\"></ion-input>\r\n</ion-item>\r\n<br>\r\n<ion-button (click)=\"onSubmitLogin()\" expand=\"block\">Ingresar</ion-button>\r\n<br>\r\n<ion-button color=\"success\" expand=\"block\" routerLink=\"/registro\">Registrarse</ion-button>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-title color=\"secondary\">Ionic | Durazno - Guaman - Matute</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>"
>>>>>>> 8bd8a05f04e215dad6a837f1341a86902f7d84ef

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< Updated upstream
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"
=======
module.exports = ".icon {\n  max-width: 32vh;\n  display: block;\n  margin: 0 auto;\n}\n\nion-input, ion-item {\n  --background: transparent;\n}\n\nion-content {\n  --background: aliceblue;\n}\n\n.text-danger {\n  color: #cf3c4f;\n}\n\n.google {\n  --background: #DB4437;\n}\n\n.facebook {\n  --background: #4267B2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxqbWF0dVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXFBMQVRBRk9STUFTIE3Dk1ZJTEVTIC0gVGltYmlcXFByb3llY3RvL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbntcclxuICAgIG1heC13aWR0aDogMzJ2aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmlvbi1pbnB1dCwgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlcntcclxuICAgIGNvbG9yOiAjY2YzYzRmO1xyXG59XHJcblxyXG4uZ29vZ2xle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjREI0NDM3O1xyXG59XHJcblxyXG4uZmFjZWJvb2t7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0MjY3QjI7XHJcbn0iLCIuaWNvbiB7XG4gIG1heC13aWR0aDogMzJ2aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pb24taW5wdXQsIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbn1cblxuLnRleHQtZGFuZ2VyIHtcbiAgY29sb3I6ICNjZjNjNGY7XG59XG5cbi5nb29nbGUge1xuICAtLWJhY2tncm91bmQ6ICNEQjQ0Mzc7XG59XG5cbi5mYWNlYm9vayB7XG4gIC0tYmFja2dyb3VuZDogIzQyNjdCMjtcbn0iXX0= */"
>>>>>>> Stashed changes

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


//importamos la clase del servicio


//error mensaje

let LoginPage = class LoginPage {
    //inyectamos y tenemos el acceso a todos los metodos
    constructor(authService, router, alertCtrl) {
        this.authService = authService;
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
    //metodo
    onSubmitLogin() {
        this.authService.login(this.email, this.password).then(res => {
            this.router.navigate(['/home']);
        }, res => {
            this.showAlert();
        });
    }
    showAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Warning !',
                subHeader: 'Hubo un error!',
<<<<<<< Updated upstream
                message: 'Verifique los datos =(',
=======
                message: 'Verifique los datos',
>>>>>>> Stashed changes
                buttons: ['OK']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
<<<<<<< Updated upstream
=======
    loginGoogle() {
        this.authService.loginWithGoogle().then(res => {
            this.router.navigate(['/home']);
        }).catch(err => {
            alert('Los datos son incorrectos o no existe el usuario');
        });
    }
    loginFacebook() {
        this.authService.loginWithFacebook().then(res => {
            this.router.navigate(['/home']);
        }).catch(err => {
            alert('Los datos son incorrectos o no existe el usuario');
        });
    }
>>>>>>> Stashed changes
};
LoginPage.ctorParameters = () => [
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map