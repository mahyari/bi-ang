"use strict";
(self["webpackChunksadad"] = self["webpackChunksadad"] || []).push([["src_app_pages_auth_auth_module_ts"],{

/***/ 794:
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ 4096);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 5835);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 3546);
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ 4057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    { path: 'sign-in', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__.SignInComponent },
    { path: 'sign-up', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent },
    { path: 'forgot-password', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent },
    { path: 'verify-email-address', component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_3__.VerifyEmailComponent },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 6621:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 794);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ 4096);
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ 4057);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 3546);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 5835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__.SignInComponent,
        _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__.SignUpComponent,
        _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordComponent,
        _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_3__.VerifyEmailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 3546:
/*!************************************************************************************!*\
  !*** ./src/app/pages/auth/components/forgot-password/forgot-password.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class ForgotPasswordComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 20, vars: 0, consts: [[1, "bg-purple-900", "absolute", "top-0", "left-0", "bg-gradient-to-b", "from-gray-900", "via-gray-900", "to-purple-800", "bottom-0", "leading-5", "h-full", "w-full", "overflow-hidden"], [1, "relative", "min-h-screen", "sm:flex", "sm:flex-row", "justify-center", "bg-transparent", "rounded-3xl", "shadow-xl"], [1, "flex", "justify-center", "self-center", "z-10"], [1, "p-12", "bg-white", "mx-auto", "rounded-3xl", "w-96"], [1, "mb-7", "flex", "justify-center"], [1, "font-semibold", "text-2xl", "text-gray-800"], [1, "text-sm", "ml-auto", "text-center"], [1, "space-y-6"], [1, ""], ["type", "", "placeholder", "Email Address", 1, "w-full", "text-sm", "px-4", "py-3", "bg-gray-200", "focus:bg-gray-100", "border", "border-gray-200", "rounded-lg", "focus:outline-none", "focus:border-purple-400"], ["passwordResetEmail", ""], ["type", "submit", 1, "w-full", "flex", "justify-center", "bg-purple-800", "hover:bg-purple-700", "text-gray-100", "p-3", "rounded-lg", "tracking-wide", "font-semibold", "cursor-pointer", "transition", "ease-in", "duration-500", 3, "click"], [1, "text-sm", "ml-auto", "flex", "justify-center", "mt-3"], ["routerLink", "/auth/sign-in", 1, "text-purple-700", "hover:text-purple-600"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Please enter your email address to request a password reset. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.authService.ForgotPassword(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Go back to ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4096:
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/components/sign-in/sign-in.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7423);





class SignInComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])
        });
    }
    signUp() {
        this.router.navigate(['auth/sign-up']);
    }
    singInByUserNameAndPassword(form) {
        this.authService.SignIn(form.email, form.password).finally();
    }
    singInByGoogleAuth() {
        this.authService.GoogleAuth().then(() => {
            console.log('gggg');
            this.router.navigate(['dashboard']);
        });
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 36, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_756565309674644182$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_1 = goog.getMsg("Sign In ");
        i18n_0 = MSG_EXTERNAL_756565309674644182$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0648\u0631\u0648\u062F";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1805714366104631936$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_3 = goog.getMsg("Don'thave an account? {$startLink}Sign Up{$closeLink}", { "startLink": "\uFFFD#9\uFFFD", "closeLink": "\uFFFD/#9\uFFFD" }, { original_code: { "startLink": "<a (click)=\"signUp()\" class=\"text-sm text-purple-700 hover:text-purple-700\">", "closeLink": "</a>" } });
        i18n_2 = MSG_EXTERNAL_1805714366104631936$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0627\u06CC\u0627 \u0627\u06A9\u0627\u0646\u062A \u062F\u0627\u0631\u06CC\u062F\u061F";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4768749765465246664$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_5 = goog.getMsg("Email");
        i18n_4 = MSG_EXTERNAL_4768749765465246664$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u0627\u06CC\u0645\u06CC\u0644";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4768749765465246664$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_7 = goog.getMsg("Email");
        i18n_6 = MSG_EXTERNAL_4768749765465246664$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\u0627\u06CC\u0645\u06CC\u0644";
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9124487436655887907$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_9 = goog.getMsg(" Forgot your password? ");
        i18n_8 = MSG_EXTERNAL_9124487436655887907$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_9;
    }
    else {
        i18n_8 = " Forgot your password? ";
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6624454320005583845$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_11 = goog.getMsg(" Sign in ");
        i18n_10 = MSG_EXTERNAL_6624454320005583845$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_11;
    }
    else {
        i18n_10 = "\u0648\u0631\u0648\u062F";
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6627551976444260400$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_13 = goog.getMsg("or");
        i18n_12 = MSG_EXTERNAL_6627551976444260400$$SRC_APP_PAGES_AUTH_COMPONENTS_SIGN_IN_SIGN_IN_COMPONENT_TS_13;
    }
    else {
        i18n_12 = "\u06CC\u0627";
    } return [[1, "bg-purple-900", "absolute", "top-0", "left-0", "bg-gradient-to-b", "from-gray-900", "via-gray-900", "to-purple-800", "bottom-0", "leading-5", "h-full", "w-full", "overflow-hidden"], [1, "relative", "min-h-screen", "sm:flex", "sm:flex-row", "justify-center", "bg-transparent", "rounded-3xl", "shadow-xl"], [1, "flex", "justify-center", "self-center", "z-10"], [1, "p-12", "bg-white", "mx-auto", "rounded-3xl", "w-96"], [1, "mb-7"], [1, "font-semibold", "text-2xl", "text-gray-800"], i18n_0, [1, "text-gray-400"], i18n_2, [1, "text-sm", "text-purple-700", "hover:text-purple-700", 3, "click"], [1, "space-y-6", 3, "formGroup"], [1, ""], ["formControlName", "email", "type", "text", "placeholder", i18n_4, 1, "w-full", "text-sm", "px-4", "py-3", "bg-gray-200", "focus:bg-gray-100", "border", "border-gray-200", "rounded-lg", "focus:outline-none", "focus:border-purple-400"], [1, "relative"], ["formControlName", "password", "type", "password", "placeholder", i18n_6, 1, "w-full", "text-sm", "px-4", "py-3", "bg-gray-200", "focus:bg-gray-100", "border", "border-gray-200", "rounded-lg", "focus:outline-none", "focus:border-purple-400"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "ml-auto"], ["routerLink", "/auth/forgot-password", 1, "text-purple-700", "hover:text-purple-600"], i18n_8, ["type", "submit", 1, "w-full", "flex", "justify-center", "bg-purple-800", "hover:bg-purple-700", "text-gray-100", "p-3", "rounded-lg", "tracking-wide", "font-semibold", "cursor-pointer", "transition", "ease-in", "duration-500", 3, "click"], i18n_10, [1, "flex", "items-center", "justify-center", "space-x-2", "my-5"], [1, "h-px", "w-16", "bg-gray-100"], [1, "text-gray-300", "font-normal"], i18n_12, [1, "flex", "justify-center", "gap-5", "w-full"], ["type", "submit", 1, "w-full", "flex", "items-center", "justify-center", "mb-6", "md:mb-0", "border", "border-gray-300", "hover:border-gray-900", "hover:bg-gray-900", "text-sm", "text-gray-500", "p-3", "rounded-lg", "tracking-wide", "font-medium", "cursor-pointer", "transition", "ease-in", "duration-500", 3, "click"], ["viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-4", "mr-2"], ["fill", "#EA4335", "d", "M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"], ["fill", "#34A853", "d", "M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"], ["fill", "#4A90E2", "d", "M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"], ["fill", "#FBBC05", "d", "M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"]]; }, template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nStart"](8, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_9_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 10)(11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 15)(16, "div", 16)(17, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](18, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div")(20, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_20_listener() { return ctx.singInByUserNameAndPassword(ctx.formGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](21, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](25, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 25)(28, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_28_listener() { return ctx.singInByGoogleAuth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "path", 28)(31, "path", 29)(32, "path", 30)(33, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5835:
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/components/sign-up/sign-up.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class SignUpComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
SignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 27, vars: 0, consts: [[1, "bg-purple-900", "absolute", "top-0", "left-0", "bg-gradient-to-b", "from-gray-900", "via-gray-900", "to-purple-800", "bottom-0", "leading-5", "h-full", "w-full", "overflow-hidden"], [1, "relative", "min-h-screen", "sm:flex", "sm:flex-row", "justify-center", "bg-transparent", "rounded-3xl", "shadow-xl"], [1, "flex", "justify-center", "self-center", "z-10"], [1, "p-12", "bg-white", "mx-auto", "rounded-3xl", "w-96"], [1, "mb-7"], [1, "font-semibold", "text-2xl", "text-gray-800"], [1, "space-y-6"], [1, ""], ["type", "", "placeholder", "firstName", 1, "w-full", "text-sm", "px-4", "py-3", "bg-gray-200", "focus:bg-gray-100", "border", "border-gray-200", "rounded-lg", "focus:outline-none", "focus:border-purple-400"], ["firstName", ""], ["type", "", "placeholder", "lastName", 1, "w-full", "text-sm", "px-4", "py-3", "bg-gray-200", "focus:bg-gray-100", "border", "border-gray-200", "rounded-lg", "focus:outline-none", "focus:border-purple-400"], ["lastName", ""], ["type", "", "placeholder", "Email", 1, "w-full", "text-sm", "px-4", "py-3", "bg-gray-200", "focus:bg-gray-100", "border", "border-gray-200", "rounded-lg", "focus:outline-none", "focus:border-purple-400"], ["userName", ""], [1, "relative"], ["placeholder", "Password", 1, "text-sm", "px-4", "py-3", "rounded-lg", "w-full", "bg-gray-200", "focus:bg-gray-100", "border", "border-gray-200", "focus:outline-none", "focus:border-purple-400"], ["userPassword", ""], ["type", "submit", 1, "w-full", "flex", "justify-center", "bg-purple-800", "hover:bg-purple-700", "text-gray-100", "p-3", "rounded-lg", "tracking-wide", "font-semibold", "cursor-pointer", "transition", "ease-in", "duration-500", 3, "click"], [1, "text-sm", "ml-auto", "flex", "justify-center"], ["routerLink", "/auth/sign-in", 1, "text-purple-700", "hover:text-purple-600"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div")(21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.authService.SignUp(_r0.value, _r1.value, _r2.value, _r3.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4057:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/components/verify-email/verify-email.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailComponent": () => (/* binding */ VerifyEmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class VerifyEmailComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
VerifyEmailComponent.ɵfac = function VerifyEmailComponent_Factory(t) { return new (t || VerifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
VerifyEmailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VerifyEmailComponent, selectors: [["app-verify-email"]], decls: 24, vars: 0, consts: [[1, "bg-purple-900", "absolute", "top-0", "left-0", "bg-gradient-to-b", "from-gray-900", "via-gray-900", "to-purple-800", "bottom-0", "leading-5", "h-full", "w-full", "overflow-hidden"], [1, "relative", "min-h-screen", "sm:flex", "sm:flex-row", "justify-center", "bg-transparent", "rounded-3xl", "shadow-xl"], [1, "flex", "justify-center", "self-center", "z-10"], [1, "p-12", "bg-white", "mx-auto", "rounded-3xl", "w-96"], [1, "mb-7", "flex", "justify-center"], [1, "font-semibold", "text-2xl", "text-gray-800"], [1, "formGroup"], [1, "text-center", "mb-4"], [1, "text-center", "mb-10"], [1, "space-y-6"], ["type", "submit", 1, "w-full", "flex", "justify-center", "bg-purple-800", "hover:bg-purple-700", "text-gray-100", "p-3", "rounded-lg", "tracking-wide", "font-semibold", "cursor-pointer", "transition", "ease-in", "duration-500", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2", "my-5"], [1, "text-gray-500", "font-normal"], ["routerLink", "auth/sign-in", 1, "text-gray-700", "font-normal"]], template: function VerifyEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Thank You for Registering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " We have sent a confirmation email to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "elnaz.ardalani66262@gmailcom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Please check your email and click on the link to verfiy your email address. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9)(16, "div")(17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerifyEmailComponent_Template_button_click_17_listener() { return ctx.authService.SendVerificationMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Resend Verification Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11)(20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Go back to?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_auth_module_ts.js.map