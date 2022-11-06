var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"en"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};const u=undefined;function plural(val){const n=val,i=Math.floor(Math.abs(val)),v=val.toString().replace(/^[^.]*\.?/,"").length;if(i===1&&v===0)return 1;return 5}global.ng.common.locales["en"]=["en",[["a","p"],["AM","PM"],u],[["AM","PM"],u,u],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],u,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",u,"{1} 'at' {0}",u],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",plural,[[["mi","n","in the morning","in the afternoon","in the evening","at night"],["midnight","noon","in the morning","in the afternoon","in the evening","at night"],u],[["midnight","noon","morning","afternoon","evening","night"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","06:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
"use strict";
(self["webpackChunksadad"] = self["webpackChunksadad"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_guards_user_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/user.guard */ 3246);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guards/auth.guard */ 7574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: 'dashboard', canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard], loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/layout.module */ 4805)).then(m => m.LayoutModule) },
    { path: 'auth', canActivate: [_core_guards_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard], loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/auth.module */ 6621)).then(m => m.AuthModule) },
    { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'Todo List';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.module */ 4805);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _pages_todo_list_to_do_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/todo-list/to-do-list.module */ 8704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA, useValue: [] },
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestoreModule,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_14__.AngularFireStorageModule,
        _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_15__.AngularFireDatabaseModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _pages_todo_list_to_do_list_module__WEBPACK_IMPORTED_MODULE_5__.ToDoListModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule.forRoot(),
        ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestoreModule,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_14__.AngularFireStorageModule,
        _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_15__.AngularFireDatabaseModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
        _pages_todo_list_to_do_list_module__WEBPACK_IMPORTED_MODULE_5__.ToDoListModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule] }); })();


/***/ }),

/***/ 7574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/auth/services/auth.service */ 7423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['auth/sign-in']);
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3246:
/*!*******************************************!*\
  !*** ./src/app/core/guards/user.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserGuard": () => (/* binding */ UserGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/auth/services/auth.service */ 7423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class UserGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn === true) {
            this.router.navigate(['dashboard']);
        }
        return true;
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
UserGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6610:
/*!********************************************************************!*\
  !*** ./src/app/layout/components/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pages_todo_list_components_to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pages/todo-list/components/to-do-list/to-do-list.component */ 1570);
/* harmony import */ var _pages_todo_list_components_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pages/todo-list/components/filter-box/filter-box.component */ 1923);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ 2176);




class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 5, vars: 0, consts: [[1, "dashboard-container"], [1, "task-container"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header")(2, "app-filter-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-to-do-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } }, dependencies: [_pages_todo_list_components_to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_0__.ToDoListComponent, _pages_todo_list_components_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_1__.FilterBoxComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent], styles: [".dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.dashboard-container[_ngcontent-%COMP%]   .task-container[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: var(--bg-secondary) !important;\n  height: 90%;\n  padding: 0 150px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAudGFzay1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgcGFkZGluZzogMCAxNTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 2176:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pages_todo_list_services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pages/todo-list/services/task.service */ 5095);
/* harmony import */ var _shared_components_toggle_theme_toggle_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/toggle-theme/toggle-theme.component */ 7606);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/profile.component */ 2754);




class HeaderComponent {
    constructor(taskService) {
        this.taskService = taskService;
    }
    ngOnInit() {
    }
    search(term) {
        this.taskService.search(term);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_pages_todo_list_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 0, consts: [[1, "primary-color", "border-gray-200", "px-4", "lg:px-6", "py-2.5", "dark:bg-gray-800"], [1, "flex", "flex-wrap", "justify-between", "items-center", "mx-auto"], [1, "flex", "items-center"], ["src", "./assets/images/icon.png", "alt", "Todo Logo", 1, "mr-3", "h-6", "sm:h-9"], [1, "self-center", "text-xl", "font-semibold", "whitespace-nowrap", "text-white", "dark:text-white"], [1, "relative", "text-gray-600"], ["type", "text", "name", "serch", "placeholder", "Search", 1, "bg-white", "h-10", "px-5", "pr-10", "rounded-md", "text-sm", "focus:outline-none", 3, "keyup"], ["input", ""], ["type", "submit", 1, "absolute", "right-0", "top-0", "mt-3", "mr-4"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "id", "Capa_1", "x", "0px", "y", "0px", "viewBox", "0 0 56.966 56.966", 0, "xml", "space", "preserve", "width", "512px", "height", "512px", 1, "h-4", "w-4", "fill-current", 2, "enable-background", "new 0 0 56.966 56.966"], ["d", "M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"], [1, "flex", "items-center", "lg:order-2", "align-center"], [1, "lang"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "To Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "div", 5)(9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function HeaderComponent_Template_input_keyup_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.search(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-toggle-theme")(18, "app-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_shared_components_toggle_theme_toggle_theme_component__WEBPACK_IMPORTED_MODULE_1__.ToggleThemeComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent], styles: ["span[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n  font-size: 16px;\n  line-height: 48px;\n  color: white !important;\n}\n\nheader[_ngcontent-%COMP%] {\n  border-bottom: 1px var(--bg-secondary) solid;\n}\n\n.lang[_ngcontent-%COMP%] {\n  background-color: #e7dcdc;\n  padding: 3px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRDQUFBO0FBQ0Y7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLWJnLXNlY29uZGFyeSkgc29saWQ7XHJcbn1cclxuXHJcblxyXG4ubGFuZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZGNkYztcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2754:
/*!****************************************************************!*\
  !*** ./src/app/layout/components/profile/profile.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 242);
/* harmony import */ var _pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pages/auth/services/auth.service */ 7423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 8589);





function ProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r0.user$)) == null ? null : tmp_1_0.photoURL) ? (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r0.user$)) == null ? null : tmp_1_0.photoURL : "./assets/images/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
class ProfileComponent {
  constructor(userService, authService) {
    this.userService = userService;
    this.authService = authService;
  }
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.user$ = this.userService.getUser();
  }
  signOut() {
    this.authService.SignOut().finally();
  }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 21,
  vars: 15,
  consts: [["class", "bg-gray-100 shadow-lg flex items-center rounded-full", 3, "matMenuTriggerFor", 4, "ngIf"], [1, "profile-container"], ["menu", "matMenu"], [1, "menu-container"], ["alt", "photo", 1, "h-6", "sm:h-9", "shadow-lg", "flex", "items-center", "rounded-full", "profile-photo", 3, "src"], [1, "user-info"], [1, "user-email"], [1, "sign-out"], [3, "click"], ["src", "./assets/images/log-out.svg"], [1, "bg-gray-100", "shadow-lg", "flex", "items-center", "rounded-full", 3, "matMenuTriggerFor"], ["alt", "photo", 1, "h-6", "sm:h-9", "shadow-lg", "flex", "items-center", "rounded-full", 3, "src"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 4, 6, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "mat-menu", null, 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7)(18, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_18_listener() {
        return ctx.signOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "sign out");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user$);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 5, ctx.user$)) == null ? null : tmp_1_0.photoURL) ? (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 7, ctx.user$)) == null ? null : tmp_1_0.photoURL : "./assets/images/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 9, ctx.user$)) == null ? null : tmp_2_0.firstName, " ", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 11, ctx.user$)) == null ? null : tmp_2_0.lastName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 13, ctx.user$)) == null ? null : tmp_3_0.email);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: ["#menu[_ngcontent-%COMP%] {\n  width: 320px !important;\n  max-width: 100vw !important;\n  overflow-wrap: anywhere;\n}\n\n.profile-container[_ngcontent-%COMP%] {\n  background-color: var(--card-item) !important;\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.menu-container[_ngcontent-%COMP%]   .profile-photo[_ngcontent-%COMP%] {\n  width: 70px !important;\n  height: 70px !important;\n  margin-left: 5px;\n}\n\n.menu-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  margin-left: 5px;\n}\n\n.menu-container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  margin-right: 5px;\n}\n\n.sign-out[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 5px;\n  justify-content: end;\n  cursor: pointer;\n}\n\n.sign-out[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  filter: invert(73%) sepia(14%) saturate(0%) hue-rotate(210deg) brightness(93%) contrast(91%);\n}\n\n.sign-out[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n  .mat-menu-panel {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdJO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQUROOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBSEY7O0FBS0U7RUFDRSxXQUFBO0VBQ0EsNEZBQUE7QUFISjs7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFRQTtFQUNFLGNBQUE7QUFMRjs7QUFTQTtFQUNFLFlBQUE7QUFORiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lbnUge1xyXG4gIHdpZHRoOiAzMjBweCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMTAwdncgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWl0ZW0pICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcblxyXG4gIC5wcm9maWxlLXBob3RvIHtcclxuICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAudXNlci1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gICAgLnVzZXItZW1haWwge1xyXG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2lnbi1vdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBmaWx0ZXI6IGludmVydCg3MyUpIHNlcGlhKDE0JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjEwZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoOTElKTtcclxuICB9XHJcblxyXG4gIGF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LW1lbnUtcGFuZWx7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 4660:
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pages_todo_list_services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pages/todo-list/services/task.service */ 5095);


class SidebarComponent {
    constructor(taskService) {
        this.taskService = taskService;
    }
    ngOnInit() {
        this.taskService.getLiveTasks().subscribe(value => {
            this.totalCount = value.length;
            this.bookmarkCount = value.filter(task => task.isBookmark).length;
            this.doneCount = value.filter(task => task.isDone).length;
            this.ongoingCount = this.totalCount - this.doneCount;
        });
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pages_todo_list_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 41, vars: 4, consts: [[1, "header-container", "bkg-color"], [1, "bkg-color"], [1, "sidebar", "w-[3.35rem]", "overflow-hidden", "border-r", "w-56", "hover:shadow-lg"], [1, "flex", "h-screen", "flex-col", "justify-between", "pt-2", "pb-6"], [1, "w-max", "p-2.5"], ["src", "./assets/images/menu.svg", "alt", "", 1, "w-8"], [1, "mt-6", "space-y-2", "tracking-wide"], [1, "min-w-max"], ["href", "#", "aria-label", "dashboard", 1, "relative", "flex", "items-center", "space-x-4", "from-sky-600", "to-cyan-400", "px-4", "py-3", "text-white"], [1, "-mr-1", "font-medium"], [1, "flex", "text-center", "justify-center", "items-center", "w-6", "h-6", "p-1", "rounded-full", "text-gray-100", "bg-cyan-500"], ["href", "#", 1, "bg", "group", "flex", "items-center", "space-x-4", "rounded-full", "px-4", "py-3", "text-gray-600"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z", "clip-rule", "evenodd", 1, "fill-current", "text-gray-300", "group-hover:text-cyan-300"], ["d", "M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z", 1, "fill-current", "text-gray-600", "group-hover:text-cyan-600"], [1, "group-hover:text-gray-700"], ["href", "#", 1, "group", "flex", "items-center", "space-x-4", "rounded-md", "px-4", "py-3", "text-gray-600"], ["fill-rule", "evenodd", "d", "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z", "clip-rule", "evenodd", 1, "fill-current", "text-gray-600", "group-hover:text-cyan-600"], ["d", "M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z", 1, "fill-current", "text-gray-300", "group-hover:text-cyan-300"], ["d", "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z", 1, "fill-current", "text-gray-600", "group-hover:text-cyan-600"], ["d", "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z", 1, "fill-current", "text-gray-300", "group-hover:text-cyan-300"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6)(8, "li", 7)(9, "a", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "All Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7)(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 13)(18, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Bookmarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 7)(24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 17)(27, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 7)(33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "path", 19)(36, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "UnCompleted");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.totalCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bookmarkCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.doneCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ongoingCount);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9689:
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutRoutingModule": () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 6610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent },
];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵfac = function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); };
LayoutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
LayoutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 2176);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 6610);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-routing.module */ 9689);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 4660);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ 2754);
/* harmony import */ var _pages_todo_list_to_do_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/todo-list/to-do-list.module */ 8704);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__.LayoutRoutingModule,
        _pages_todo_list_to_do_list_module__WEBPACK_IMPORTED_MODULE_6__.ToDoListModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent,
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__.LayoutRoutingModule,
        _pages_todo_list_to_do_list_module__WEBPACK_IMPORTED_MODULE_6__.ToDoListModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule] }); })();


/***/ }),

/***/ 242:
/*!*************************************************!*\
  !*** ./src/app/layout/services/user.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/auth/services/auth.service */ 7423);





class UserService {
    constructor(afs, afAuth, authService) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.authService = authService;
        this.userId = this.authService.getUid();
    }
    getUser() {
        return this.afs.doc(`users/${this.userId}`).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(item => item.payload.data()));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_pages_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7423:
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/services/auth.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 3628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/api.service */ 4761);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);








class AuthService {
    constructor(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, apiService, toastr, ngZone // NgZone service to remove outside scope warning
    ) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.apiService = apiService;
        this.toastr = toastr;
        this.ngZone = ngZone;
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.userData = user;
                this.userId = user.uid;
                this.emailVerified = user.emailVerified;
                localStorage.setItem('uid', this.userId);
                localStorage.setItem('emailVerified', this.emailVerified);
            }
            else {
                localStorage.setItem('uid', 'null');
            }
        });
    }
    getUid() {
        return localStorage.getItem('uid');
    }
    // Sign in with email/password
    SignIn(email, password) {
        this.apiService.start();
        return this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.SetUserData(result.user);
            this.afAuth.authState.subscribe((user) => {
                this.apiService.complete();
                if (user) {
                    this.router.navigate(['dashboard']);
                }
            });
        })
            .catch((error) => {
            // console.log(error.errore.message);
            this.apiService.complete();
            this.toastr.error(error.message);
        });
    }
    // Sign up with email/password
    SignUp(firstName, lastName, email, password) {
        return this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            this.SendVerificationMail();
            this.SetUserData(result.user, firstName, lastName);
            this.router.navigate(['auth/sign-in']);
        })
            .catch((error) => {
            window.alert(error.message);
        });
    }
    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
        return this.afAuth.currentUser
            .then((u) => u.sendEmailVerification())
            .then(() => {
            // this.router.navigate(['verify-email-address']);
        });
    }
    // Reset Forggot password
    ForgotPassword(passwordResetEmail) {
        return this.afAuth
            .sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
            window.alert('Password reset email sent, check your inbox.');
        })
            .catch((error) => {
            window.alert(error);
        });
    }
    // Returns true when user is looged in and email is verified
    get isLoggedIn() {
        // tslint:disable-next-line:no-non-null-assertion
        const user = localStorage.getItem('uid');
        // const emailVerified = localStorage.getItem('emailVerified')!;
        const emailVerified = JSON.parse(localStorage.getItem('emailVerified'));
        return user !== null && emailVerified === true;
    }
    // Sign in with Google
    GoogleAuth() {
        return this.AuthLogin(new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider()).then((res) => {
            this.afAuth.authState.subscribe((user) => {
                if (user) {
                    this.router.navigate(['dashboard']);
                }
            });
        }).catch((error) => {
            this.toastr.error(error);
        });
    }
    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth
            .signInWithPopup(provider)
            .then((result) => {
            let firstName = '';
            let lastName = '';
            try {
                firstName = result.user.displayName.split(' ')[0];
                lastName = result.user.displayName.replace(firstName, '');
            }
            catch (e) {
                firstName = result.user.displayName;
            }
            this.SetUserData(result.user, firstName, lastName);
        })
            .catch((error) => {
            window.alert(error);
        });
    }
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user, firstName, lastName) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            // firstName: firstName ? firstName : user.firstName,
            // lastName: lastName ? lastName : user.lastName,
            // tasks: []
        };
        if (firstName) {
            userData.firstName = firstName;
        }
        if (lastName) {
            userData.lastName = lastName;
        }
        return userRef.set(userData, {
            merge: true,
        });
    }
    // Sign out
    SignOut() {
        return this.afAuth.signOut().then(() => {
            //this.afs.firestore.terminate().finally(() => {});
            //this.afs.firestore.clearPersistence().finally(() => {});
            localStorage.removeItem('uid');
            localStorage.removeItem('emailVerified');
            this.router.navigate(['auth/sign-in']);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3903:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/todo-list/components/create-item-bottom-sheet/create-item-bottom-sheet.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateItemBottomSheetComponent": () => (/* binding */ CreateItemBottomSheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CreateItemBottomSheetComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreateItemBottomSheetComponent.ɵfac = function CreateItemBottomSheetComponent_Factory(t) { return new (t || CreateItemBottomSheetComponent)(); };
CreateItemBottomSheetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateItemBottomSheetComponent, selectors: [["app-create-item-bottom-sheet"]], decls: 0, vars: 0, template: function CreateItemBottomSheetComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtaXRlbS1ib3R0b20tc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7374:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/todo-list/components/create-item/create-item.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateItemComponent": () => (/* binding */ CreateItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ 9485);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/task.service */ 5095);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _shared_components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/custom-input/custom-input.component */ 4554);
/* harmony import */ var _shared_components_custom_text_area_custom_text_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/custom-text-area/custom-text-area.component */ 2783);











class CreateItemComponent {
    constructor(db, taskService, formBuilder, dialogRef, data) {
        this.db = db;
        this.taskService = taskService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.createForm();
        if (this.data.task) {
            this.formGroup.patchValue({
                title: this.data?.task?.title,
                description: this.data?.task?.description
            });
        }
    }
    createForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null)
        });
    }
    reset() {
        this.dialogRef.close(false);
    }
    onSubmit(form) {
        if (this?.data?.task) {
            this.taskService.updateTask(this?.data?.task?.id, form?.title, form?.description).then(() => {
                this.dialogRef.close();
            }).finally(() => {
            });
        }
        else {
            const task = {
                title: form.title,
                description: form.description,
                isBookmark: false,
                isDone: false,
                creationDate: Date.now(),
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)()
            };
            this.taskService.addTask(task).then(() => {
                this.dialogRef.close();
            }).finally(() => {
            });
        }
    }
}
CreateItemComponent.ɵfac = function CreateItemComponent_Factory(t) { return new (t || CreateItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_1__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA)); };
CreateItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreateItemComponent, selectors: [["app-create-item"]], decls: 7, vars: 8, consts: [[1, "form", 3, "formGroup", "ngSubmit"], ["formControlName", "title", 1, "margin-input-title", 3, "name", "label", "formControl"], ["formControlName", "description", 1, "margin-input", 3, "formControl", "name", "label"], [1, "form-element"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "button", 3, "disabled"]], template: function CreateItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-dialog-content")(1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function CreateItemComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(ctx.formGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-custom-input", 1)(3, "app-custom-text-area", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", "title")("label", "title")("formControl", ctx.formGroup.controls["title"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.formGroup.controls["description"])("name", "description")("label", "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _shared_components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_2__.CustomInputComponent, _shared_components_custom_text_area_custom_text_area_component__WEBPACK_IMPORTED_MODULE_3__.CustomTextAreaComponent], styles: ["button[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJjcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 1923:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/todo-list/components/filter-box/filter-box.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterBoxComponent": () => (/* binding */ FilterBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/task.service */ 5095);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ 1169);



class FilterBoxComponent {
    constructor(taskService) {
        this.taskService = taskService;
    }
    ngOnInit() {
        this.taskService.getLiveTasks().subscribe(value => {
            this.tasks = value;
            this.totalCount = value.length;
            this.bookmarkCount = value.filter(task => task.isBookmark).length;
            this.doneCount = value.filter(task => task.isDone).length;
            this.ongoingCount = this.totalCount - this.doneCount;
        });
    }
    getAllTask() {
        this.taskService.setTaskFiltered(this.tasks);
    }
    getBookmarkTask() {
        const tasks = this.tasks.filter(task => task.isBookmark === true);
        this.taskService.setTaskFiltered(tasks);
    }
    getCompletedTask() {
        const tasks = this.tasks.filter(task => task.isDone === true);
        this.taskService.setTaskFiltered(tasks);
    }
    getUnCompletedTask() {
        const tasks = this.tasks.filter(task => task.isDone === false);
        this.taskService.setTaskFiltered(tasks);
    }
}
FilterBoxComponent.ɵfac = function FilterBoxComponent_Factory(t) { return new (t || FilterBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService)); };
FilterBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilterBoxComponent, selectors: [["app-filter-box"]], decls: 15, vars: 1, consts: [[1, "filter-container"], ["aria-label", "Dog selection"], [1, "task-count"], ["color", "primary"], ["matChipAvatar", "", "src", "https://material.angular.io/assets/img/examples/shiba1.jpg", "alt", "Photo of a Shiba Inu"], ["color", "accent"]], template: function FilterBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-chip-list", 1)(2, "mat-chip")(3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Bookmark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-chip", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-chip", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " UnCompleted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalCount);
    } }, dependencies: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__.MatChipAvatar], styles: [".filter-container[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary) !important;\n  display: flex;\n  justify-content: space-evenly;\n  z-index: 1000;\n}\n.filter-container[_ngcontent-%COMP%]   .task-count[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNKIiwiZmlsZSI6ImZpbHRlci1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICAudGFzay1jb3VudHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7ICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3103:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/todo-list/components/to-do-item/to-do-item.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoItemComponent": () => (/* binding */ ToDoItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/task.service */ 5095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2156);





class ToDoItemComponent {
    constructor(taskService) {
        this.taskService = taskService;
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.bookMark = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    onDone() {
        this.done.emit();
    }
    onRemove() {
        this.remove.emit();
    }
    onBookMark() {
        this.bookMark.emit();
    }
    onEdit() {
        this.edit.emit();
    }
    getTask(task) {
        this.taskService.setTask(task);
    }
}
ToDoItemComponent.ɵfac = function ToDoItemComponent_Factory(t) { return new (t || ToDoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService)); };
ToDoItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToDoItemComponent, selectors: [["app-to-do-item"]], inputs: { task: "task" }, outputs: { done: "done", bookMark: "bookMark", remove: "remove", edit: "edit" }, decls: 17, vars: 6, consts: [[1, "task-item__container", 3, "click"], [1, "task-item__content"], [1, "checkbox-container", 3, "ngClass"], ["type", "checkbox", 3, "checked", "value", "change"], [1, "checkmark"], [1, "task-description"], [1, "action"], [1, "bookmark", 3, "click"], [3, "src"], [1, "btn-action"], [3, "click"], ["src", "./assets/images/edit.svg"], ["src", "./assets/images/trash.svg"]], template: function ToDoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToDoItemComponent_Template_div_click_0_listener() { return ctx.getTask(ctx.task); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card")(2, "div", 1)(3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ToDoItemComponent_Template_input_change_5_listener() { return ctx.onDone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToDoItemComponent_Template_div_click_10_listener() { return ctx.onBookMark(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToDoItemComponent_Template_button_click_13_listener() { return ctx.onEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToDoItemComponent_Template_button_click_15_listener() { return ctx.onRemove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.task.isDone ? "completed" : "unCompleted");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.task == null ? null : ctx.task.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.task.isDone)("value", ctx.task.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.task == null ? null : ctx.task.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", !ctx.task.isBookmark ? "./assets/images/bookmark.svg" : "./assets/images/blue-star.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard], styles: [".task-item__container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.task-item__container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n  background-color: var(--card-item);\n}\n.task-item__container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n}\n.task-item__container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .bookmark[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px !important;\n  cursor: pointer !important;\n}\n.task-item__container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n}\n.task-item__container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 21px;\n}\n.task-item__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.task-item__content[_ngcontent-%COMP%]   .task-description[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n.task-item__content[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.task-item__content[_ngcontent-%COMP%]   .unCompleted[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.task-item__content[_ngcontent-%COMP%]   .task-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvLWRvLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFBSjtBQUVJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBQU47QUFHTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFJVTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7QUFGWjtBQU1RO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBSlY7QUFLVTtFQUNFLFdBQUE7QUFIWjtBQVlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBVko7QUFZSTtFQUNFLGdCQUFBO0FBVk47QUFhSTtFQUNFLDZCQUFBO0FBWE47QUFjSTtFQUNFLHFCQUFBO0FBWk47QUFlSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQWJOIiwiZmlsZSI6InRvLWRvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1pdGVtIHtcclxuICAmX19jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICAvL2N1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtKTtcclxuXHJcblxyXG4gICAgICAuYWN0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xyXG5cclxuICAgICAgICAuYm9va21hcmsge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLWFjdGlvbntcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgYnV0dG9uIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDIxcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLnRhc2stZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21wbGV0ZWQge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIH1cclxuXHJcbiAgICAudW5Db21wbGV0ZWQge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhc2stZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 1570:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/todo-list/components/to-do-list/to-do-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoListComponent": () => (/* binding */ ToDoListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-item/create-item.component */ 7374);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _shared_components_dialog_confirm_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/dialog-confirm/dialog-confirm.component */ 1855);
/* harmony import */ var _shared_components_confirm_bottom_sheet_confirm_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/confirm-bottom-sheet/confirm-bottom-sheet.component */ 6308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/task.service */ 5095);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/services/auth.service */ 7423);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _to_do_item_to_do_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../to-do-item/to-do-item.component */ 3103);
















function ToDoListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "app-to-do-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("done", function ToDoListComponent_div_6_Template_app_to_do_item_done_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const task_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDone(task_r1)); })("bookMark", function ToDoListComponent_div_6_Template_app_to_do_item_bookMark_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const task_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.onBookMark(task_r1)); })("remove", function ToDoListComponent_div_6_Template_app_to_do_item_remove_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const task_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.onRemove(task_r1)); })("edit", function ToDoListComponent_div_6_Template_app_to_do_item_edit_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const task_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.openDialogTask(task_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("task", task_r1);
} }
class ToDoListComponent {
    constructor(db, taskService, authService, afAuth, dialog, bottomSheet) {
        this.db = db;
        this.taskService = taskService;
        this.authService = authService;
        this.afAuth = afAuth;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.tasks = [];
    }
    // sortByDateDesc(l: Task, r: Task) {
    //   return r.creationDate - l.creationDate;
    // }
    ngOnInit() {
        this.getScreenWidth = window.innerWidth;
        this.getScreenHeight = window.innerHeight;
        this.subscriptions.add(this.taskService.taskFiltered$.asObservable().subscribe(tasks => {
            this.tasks = tasks;
        }));
        this.getTasks();
    }
    onWindowResize() {
        this.getScreenWidth = window.innerWidth;
        this.getScreenHeight = window.innerHeight;
    }
    getTasks() {
        const tasksObservable = this.taskService.getLiveTasks();
        const searchObservable = this.taskService.searchItem;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([tasksObservable, searchObservable])
            .subscribe(([tasks, searchTerm]) => {
            this.tasks = tasks.filter(task => {
                if (searchTerm) {
                    return task.title.indexOf(searchTerm) >= 0;
                }
                return 1;
            });
            // }).sort((l, r) => this.sortByDateDesc(l, r));
        });
    }
    drop(event) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.moveItemInArray)(this.tasks, event.previousIndex, event.currentIndex);
        this.taskService.updateAll(this.tasks).finally();
    }
    openDialogTask(task) {
        const dialog = this.dialog.open(_create_item_create_item_component__WEBPACK_IMPORTED_MODULE_0__.CreateItemComponent, {
            disableClose: false,
            width: '400px',
            height: 'auto',
            data: { task }
        });
        dialog.afterClosed().subscribe((task) => {
        });
    }
    onDone(task) {
        this.taskService.doneTask(task.id, !task.isDone).finally();
    }
    onBookMark(task) {
        this.taskService.bookMarkTask(task.id, !task.isBookmark).finally();
    }
    onRemove(task) {
        if (this.getScreenWidth > 959) {
            const dialog = this.dialog.open(_shared_components_dialog_confirm_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_1__.DialogConfirmComponent, {
                disableClose: true,
            });
            dialog.afterClosed().subscribe((success) => {
                if (success) {
                    this.taskService.removeTask(task.id).finally();
                }
            });
        }
        else {
            const bSheet = this.bottomSheet.open(_shared_components_confirm_bottom_sheet_confirm_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmBottomSheetComponent, {
                disableClose: true,
            });
            bSheet.afterDismissed().subscribe((task) => {
            });
        }
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
ToDoListComponent.ɵfac = function ToDoListComponent_Factory(t) { return new (t || ToDoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_3__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__.MatBottomSheet)); };
ToDoListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ToDoListComponent, selectors: [["app-to-do-list"]], hostBindings: function ToDoListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resize", function ToDoListComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 1, consts: [[1, "mb-5", "add-task-card", 3, "click"], ["fill", "currentColor", "aria-hidden", "true", "width", "20", "height", "20", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", 1, "fluentIcon", "___12fm75w", "f1w7gpdv", "fez10in", "fg4l7m0"], ["d", "M10 2.5a.5.5 0 00-1 0V9H2.5a.5.5 0 000 1H9v6.5a.5.5 0 001 0V10h6.5a.5.5 0 000-1H10V2.5z", "fill", "currentColor"], [1, "title"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [3, "task", "done", "bookMark", "remove", "edit"]], template: function ToDoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ToDoListComponent_Template_mat_card_click_0_listener() { return ctx.openDialogTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Add a task");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cdkDropListDropped", function ToDoListComponent_Template_div_cdkDropListDropped_5_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ToDoListComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.tasks);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDrag, _to_do_item_to_do_item_component__WEBPACK_IMPORTED_MODULE_5__.ToDoItemComponent], styles: ["[_nghost-%COMP%] {\n  width: 100% !important;\n  margin: 20px !important;\n}\n\n.add-task-card[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  background-color: var(--card-item);\n  cursor: pointer;\n}\n\n.add-task-card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  color: #78bafd !important;\n}\n\n.add-task-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #78bafd !important;\n  font-weight: 400;\n}\n\ndiv[_ngcontent-%COMP%] {\n  cursor: move !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvLWRvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBRUEsZUFBQTtBQURGOztBQUlJO0VBQ0UseUJBQUE7QUFGTjs7QUFNRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFVQTtFQUNFLHVCQUFBO0FBUEYiLCJmaWxlIjoidG8tZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYWRkLXRhc2stY2FyZHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtaXRlbSk7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgc3Zne1xyXG4gICAgcGF0aHtcclxuICAgICAgY29sb3I6ICM3OGJhZmQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXRsZXtcclxuICAgIGNvbG9yOiAjNzhiYWZkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5kaXZ7XHJcbiAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5095:
/*!**********************************************************!*\
  !*** ./src/app/pages/todo-list/services/task.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskService": () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/services/auth.service */ 7423);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);







class TaskService {
    constructor(afs, afAuth, authService, toastr) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.authService = authService;
        this.toastr = toastr;
        this.userId = this.authService.getUid();
        this.searchItem = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.taskItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.taskFiltered$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    addTask(task) {
        return new Promise((resolve, reject) => {
            this.getTasks().subscribe(tasks => {
                tasks.unshift(task);
                const userRef = this.afs.doc(`users/${this.userId}`);
                userRef.set({ tasks }, { mergeFields: ['tasks'] }).then(() => resolve()).catch(() => reject());
            });
        });
    }
    doneTask(taskId, isDone) {
        return new Promise((resolve, reject) => {
            this.getTasks().subscribe(tasks => {
                const task = tasks.find(item => item.id === taskId);
                if (task) {
                    task.isDone = isDone;
                }
                const userRef = this.afs.doc(`users/${this.userId}`);
                userRef.set({ tasks }, { mergeFields: ['tasks'] }).then(() => resolve()).catch(() => reject());
            });
        });
    }
    updateTask(taskId, title, description) {
        return new Promise((resolve, reject) => {
            this.getTasks().subscribe(tasks => {
                const task = tasks.find(item => item.id === taskId);
                if (task && title) {
                    task.title = title;
                }
                if (task && description) {
                    task.description = description;
                }
                const userRef = this.afs.doc(`users/${this.userId}`);
                userRef.set({ tasks }, { mergeFields: ['tasks'] }).then(() => resolve()).catch(() => reject());
            });
        });
    }
    getLiveTasks() {
        return this.afs.doc(`users/${this.userId}`).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(item => item.payload.data().tasks ? item.payload.data().tasks : []));
    }
    updateAll(tasks) {
        return new Promise((resolve, reject) => {
            const userRef = this.afs.doc(`users/${this.userId}`);
            userRef.set({ tasks }, { mergeFields: ['tasks'] }).then(() => resolve()).catch(() => reject());
        });
    }
    getTasks() {
        const tasks = this.afs.doc(`users/${this.userId}`).get({ source: 'default' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(item => item.data().tasks ? item.data().tasks : []));
        return tasks;
    }
    search(term) {
        return this.searchItem.next(term);
    }
    removeTask(taskId) {
        return new Promise((resolve, reject) => {
            this.getTasks().subscribe(tasks => {
                tasks = tasks.filter(task => task.id !== taskId);
                const userRef = this.afs.doc(`users/${this.userId}`);
                userRef.set({ tasks }, { mergeFields: ['tasks'] }).then(() => resolve()).catch(() => reject());
            });
        });
    }
    bookMarkTask(taskId, isBookMark) {
        return new Promise((resolve, reject) => {
            this.getTasks().subscribe(tasks => {
                const task = tasks.find(item => item.id === taskId);
                if (task) {
                    task.isBookmark = isBookMark;
                }
                const userRef = this.afs.doc(`users/${this.userId}`);
                userRef.set({ tasks }, { mergeFields: ['tasks'] }).then(() => resolve()).catch(() => reject());
            });
        });
    }
    setTask(task) {
        this.taskItem$.next(task);
    }
    setTaskFiltered(tasks) {
        this.taskFiltered$.next(tasks);
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService)); };
TaskService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8704:
/*!******************************************************!*\
  !*** ./src/app/pages/todo-list/to-do-list.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoListModule": () => (/* binding */ ToDoListModule)
/* harmony export */ });
/* harmony import */ var _components_to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/to-do-list/to-do-list.component */ 1570);
/* harmony import */ var _components_to_do_item_to_do_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/to-do-item/to-do-item.component */ 3103);
/* harmony import */ var _components_create_item_create_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create-item/create-item.component */ 7374);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _components_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/filter-box/filter-box.component */ 1923);
/* harmony import */ var _components_create_item_bottom_sheet_create_item_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-item-bottom-sheet/create-item-bottom-sheet.component */ 3903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);







class ToDoListModule {
}
ToDoListModule.ɵfac = function ToDoListModule_Factory(t) { return new (t || ToDoListModule)(); };
ToDoListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ToDoListModule });
ToDoListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ToDoListModule, { declarations: [_components_to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_0__.ToDoListComponent,
        _components_to_do_item_to_do_item_component__WEBPACK_IMPORTED_MODULE_1__.ToDoItemComponent,
        _components_create_item_create_item_component__WEBPACK_IMPORTED_MODULE_2__.CreateItemComponent,
        _components_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_4__.FilterBoxComponent,
        _components_create_item_bottom_sheet_create_item_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_5__.CreateItemBottomSheetComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule], exports: [_components_to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_0__.ToDoListComponent, _components_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_4__.FilterBoxComponent] }); })();


/***/ }),

/***/ 6308:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/confirm-bottom-sheet/confirm-bottom-sheet.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmBottomSheetComponent": () => (/* binding */ ConfirmBottomSheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);


class ConfirmBottomSheetComponent {
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    ngOnInit() {
    }
    submit() {
        this.bottomSheetRef.dismiss(true);
    }
    reset() {
        this.bottomSheetRef.dismiss(false);
    }
}
ConfirmBottomSheetComponent.ɵfac = function ConfirmBottomSheetComponent_Factory(t) { return new (t || ConfirmBottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.MatBottomSheetRef)); };
ConfirmBottomSheetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmBottomSheetComponent, selectors: [["app-confirm-bottom-sheet"]], decls: 15, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6210141943972647320$$SRC_APP_SHARED_COMPONENTS_CONFIRM_BOTTOM_SHEET_CONFIRM_BOTTOM_SHEET_COMPONENT_TS_1 = goog.getMsg("Are You Sure?");
        i18n_0 = MSG_EXTERNAL_6210141943972647320$$SRC_APP_SHARED_COMPONENTS_CONFIRM_BOTTOM_SHEET_CONFIRM_BOTTOM_SHEET_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "Are You Sure?";
    } return [[1, "bottom-sheet-container"], [1, "dialog-content"], [1, "remove-container"], ["src", "./assets/images/error.svg", "alt", ""], i18n_0, [1, "bottom-sheet-action"], [1, "py-2", "mr-4", "w-40", "px-4", "bg-blue-600", "text-white", "font-semibold", "border", "border-blue-600", "rounded", "hover:bg-white", "hover:text-blue-600", "hover:border-blue-600", 3, "click"], [1, "py-2", "px-4", "w-40", "bg-transparent", "text-red-600", "font-semibold", "border", "border-red-600", "rounded", "hover:bg-red-600", "hover:text-white", "hover:border-transparent", 3, "click"], ["container", ""]]; }, template: function ConfirmBottomSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div")(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmBottomSheetComponent_Template_button_click_8_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div")(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmBottomSheetComponent_Template_button_click_11_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "template", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".mat-bottom-sheet-container {\n  border-radius: 5px 5px 0 0;\n  min-height: 256px;\n  max-height: 256px;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  position: relative;\n  width: 100%;\n  overflow: auto;\n}\n\n.bottom-sheet-container[_ngcontent-%COMP%] {\n  padding: 5px;\n  position: relative;\n}\n\n.bottom-sheet-container[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  overflow: hidden !important;\n}\n\n.bottom-sheet-container[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .remove-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bottom-sheet-container[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .remove-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 68.2px;\n  height: 64.3px;\n}\n\n.bottom-sheet-container[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .remove-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 5.29;\n  letter-spacing: normal;\n  text-align: right;\n  color: #d80612;\n}\n\n.bottom-sheet-container[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .remove-container[_ngcontent-%COMP%]   .bottom-sheet-action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.bottom-sheet-container[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .remove-container[_ngcontent-%COMP%]   .bottom-sheet-action[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  padding: 0 48px;\n  margin-left: 10px;\n}\n\n.bottom-sheet-container[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .remove-container[_ngcontent-%COMP%]   .bottom-sheet-action[_ngcontent-%COMP%]   .reset[_ngcontent-%COMP%] {\n  padding: 0 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tYm90dG9tLXNoZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFISjs7QUFTQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVFFO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtBQU5KOztBQVNJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVBOOztBQVNNO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFQUjs7QUFVTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBUlI7O0FBV007RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBVFI7O0FBV1E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFUVjs7QUFZUTtFQUNFLGVBQUE7QUFWViIsImZpbGUiOiJjb25maXJtLWJvdHRvbS1zaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46Om5nLWRlZXAge1xyXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1NnB4O1xyXG4gICAgbWF4LWhlaWdodDogMjU2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAuZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4uYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmRpYWxvZy1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG5cclxuXHJcbiAgICAucmVtb3ZlLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjguMnB4O1xyXG4gICAgICAgIGhlaWdodDogNjQuM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1LjI5O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICNkODA2MTI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3R0b20tc2hlZXQtYWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgLnN1Ym1pdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDQ4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZXNldCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDE5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4554:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/custom-input/custom-input.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomInputComponent": () => (/* binding */ CustomInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8562);







const _c0 = function (a0) { return { "color": a0, "fontsize": "12px" }; };
function CustomInputComponent_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.labelColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function CustomInputComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getErrorMessages(ctx_r1.formControl == null ? null : ctx_r1.formControl.errors));
} }
const _c1 = function (a0) { return { "font-size": a0 }; };
class CustomInputComponent {
    constructor(_renderer) {
        this._renderer = _renderer;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
        this.fontSizePx = '12';
        this.name = '';
        this.label = '';
        this.appearance = 'outline';
        this.labelColor = '#484848';
        this.borderDefaultColor = '#e2e2e2';
        this.borderSelectColor = 'blue';
        this.disabledBackgroundColor = '#f8f8f8';
        this.borderWidthPx = '1';
        this.required = false;
        this.withLabel = true;
        this.placeholder = '';
        this.showUnderlineErrorContainer = true;
        this.isDisabled = false;
        this.errorMessages = {};
    }
    writeValue(obj) {
        this.matInputValue = obj;
    }
    registerOnChange(fn) {
        this.onMatInputChange = fn;
    }
    registerOnTouched(fn) {
        this.onInputClicked = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onMatInputChange(event) {
        this.matInputValue = event;
    }
    onInputClicked(event) {
    }
    getErrorMessages(errors) {
        return this.errorMessages[Object.keys(errors)[0]];
    }
    ngAfterViewInit() {
        let element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline .mat-form-field-outline');
        this._renderer.setStyle(element, 'color', this.borderDefaultColor);
        element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline .mat-form-field-outline-thick');
        this._renderer.setStyle(element, 'color', this.borderDefaultColor);
        let elements = document.querySelectorAll('.' + this.name + ' .mat-form-field-flex .mat-form-field-outline *');
        elements.forEach((elem) => {
            this._renderer.setStyle(elem, 'border-width', this.borderWidthPx + 'px');
        });
        element = document.querySelector('.' + this.name + ' .mat-form-field-wrapper');
        !this.showUnderlineErrorContainer && this._renderer.setStyle(element, 'padding-bottom', '0px');
    }
    ngAfterViewChecked() {
        let element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline.ng-invalid.ng-touched .mat-form-field-outline-thick');
        element && this._renderer.setStyle(element, 'opacity', 1);
        element && this._renderer.setStyle(element, 'color', this.borderDefaultColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.Important);
        element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick');
        element && this._renderer.setStyle(element, 'color', this.borderSelectColor);
        element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline.ng-valid.ng-touched .mat-form-field-outline-thick');
        element && this._renderer.setStyle(element, 'opacity', 1);
        element && this._renderer.setStyle(element, 'color', this.borderDefaultColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.Important);
        if (this.isDisabled) {
            const elements = document.querySelectorAll('.' + this.name + ' .mat-form-field-flex .mat-form-field-outline *');
            elements.forEach((elem) => {
                this._renderer.setStyle(elem, 'background-color', this.disabledBackgroundColor);
            });
            const element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline .mat-input-element:disabled');
            this._renderer.setStyle(element, 'color', 'unset');
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
CustomInputComponent.ɵfac = function CustomInputComponent_Factory(t) { return new (t || CustomInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
CustomInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomInputComponent, selectors: [["app-custom-input"]], inputs: { formControl: "formControl", fontSizePx: "fontSizePx", name: "name", label: "label", appearance: "appearance", labelColor: "labelColor", borderDefaultColor: "borderDefaultColor", borderSelectColor: "borderSelectColor", disabledBackgroundColor: "disabledBackgroundColor", borderWidthPx: "borderWidthPx", required: "required", withLabel: "withLabel", placeholder: "placeholder", showUnderlineErrorContainer: "showUnderlineErrorContainer", isDisabled: "isDisabled", errorMessages: "errorMessages" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CustomInputComponent),
                multi: true
            }
        ])], decls: 6, vars: 13, consts: [[3, "ngStyle"], [2, "width", "100%", 3, "appearance"], [3, "ngStyle", 4, "ngIf"], ["matInput", "", "type", "text", 3, "placeholder", "value", "formControl", "required", "disabled", "change", "click"], [4, "ngIf"]], template: function CustomInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomInputComponent_mat_label_3_Template, 2, 4, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomInputComponent_Template_input_change_4_listener($event) { return ctx.onMatInputChange($event.target.value); })("click", function CustomInputComponent_Template_input_click_4_listener($event) { return ctx.onInputClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomInputComponent_mat_error_5_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.fontSizePx + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", ctx.appearance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.withLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder)("value", ctx.matInputValue)("formControl", ctx.formControl)("required", ctx.required)("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControl == null ? null : ctx.formControl.errors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput], styles: [".mat-form-field-appearance-outline.mat-focused .mat-form-field-label {\n  transform: translateY(-1.29375em) scale(0.75) !important;\n  top: 1.70375em;\n}\n\n  .mat-form-field-flex .mat-form-field-infix {\n  padding: 0.4em 0 0.7em 0;\n}\n\n  .mat-form-field-flex .mat-form-field-infix input {\n  margin-right: 5px;\n  height: 100%;\n}\n\n  .mat-form-field-flex .mat-form-field-infix input::-moz-placeholder {\n  color: currentColor;\n}\n\n  .mat-form-field-flex .mat-form-field-infix input::placeholder {\n  color: currentColor;\n}\n\n  .mat-form-field-flex .mat-form-field-infix .mat-form-field-label {\n  font-size: inherit;\n  top: 1.40375em;\n  transform: translateY(-1.29375em) scale(0.75) !important;\n}\n\n  .mat-form-field-flex .mat-form-field-infix .mat-form-field-label span {\n  margin-left: 3px;\n  color: #f44336;\n  font-size: 12px;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-hide-placeholder .mat-form-field-label {\n  transform: none !important;\n  transform: initial !important;\n}\n\n  .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n  mat-label {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHdEQUFBO0VBQ0EsY0FBQTtBQUROOztBQU9FO0VBQ0Usd0JBQUE7QUFKSjs7QUFNSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUpOOztBQU1NO0VBQ0UsbUJBQUE7QUFKUjs7QUFHTTtFQUNFLG1CQUFBO0FBSlI7O0FBUUk7RUFFRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3REFBQTtBQVBOOztBQVNNO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVBSOztBQWNFO0VBQ0UsMEJBQUE7RUFBQSw2QkFBQTtBQVhKOztBQWVBO0VBQ0UsaUJBQUE7QUFaRjs7QUFlQTtFQUNFLDBCQUFBO0FBWkYiLCJmaWxlIjoiY3VzdG9tLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xyXG4gICYubWF0LWZvY3VzZWQge1xyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI5Mzc1ZW0pIHNjYWxlKDAuNzUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRvcDogMS43MDM3NWVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMC40ZW0gMCAuN2VtIDA7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgICAvLyBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdG9wOiAxLjQwMzc1ZW07XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yOTM3NWVtKSBzY2FsZSgwLjc1KSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICBjb2xvcjogI2Y0NDMzNjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWhpZGUtcGxhY2Vob2xkZXIge1xyXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICB0cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgbWF0LWxhYmVsIHtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2783:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/custom-text-area/custom-text-area.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomTextAreaComponent": () => (/* binding */ CustomTextAreaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8562);







const _c0 = function (a0) { return { "color": a0 }; };
function CustomTextAreaComponent_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.labelColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function CustomTextAreaComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getErrorMessages(ctx_r1.formControl == null ? null : ctx_r1.formControl.errors));
} }
const _c1 = function (a0) { return { "font-size": a0 }; };
class CustomTextAreaComponent {
    constructor(_renderer) {
        this._renderer = _renderer;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
        this.fontSizePx = '14';
        this.name = '';
        this.label = '';
        this.appearance = 'outline';
        this.labelColor = '#484848';
        this.borderDefaultColor = '#e2e2e2';
        this.borderSelectColor = 'blue';
        this.disabledBackgroundColor = '#f8f8f8';
        this.borderWidthPx = '1';
        this.required = false;
        this.withLabel = true;
        this.placeholder = '';
        this.showUnderlineErrorContainer = true;
        this.isDisabled = false;
        this.errorMessages = {};
    }
    writeValue(obj) {
        this.matInputValue = obj;
    }
    registerOnChange(fn) {
        this.onMatInputChange = fn;
    }
    registerOnTouched(fn) {
        this.onInputClicked = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onMatInputChange(event) {
        this.matInputValue = event;
    }
    onInputClicked(event) {
    }
    getErrorMessages(errors) {
        return this.errorMessages[Object.keys(errors)[0]];
    }
    ngAfterViewInit() {
        let element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline .mat-form-field-outline');
        this._renderer.setStyle(element, 'color', this.borderDefaultColor);
        element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline .mat-form-field-outline-thick');
        this._renderer.setStyle(element, 'color', this.borderDefaultColor);
        let elements = document.querySelectorAll('.' + this.name + ' .mat-form-field-flex .mat-form-field-outline *');
        elements.forEach((elem) => {
            this._renderer.setStyle(elem, 'border-width', this.borderWidthPx + 'px');
        });
        element = document.querySelector('.' + this.name + ' .mat-form-field-wrapper');
        !this.showUnderlineErrorContainer && this._renderer.setStyle(element, 'padding-bottom', '0px');
    }
    ngAfterViewChecked() {
        let element;
        element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick');
        element && this._renderer.setStyle(element, 'color', this.borderSelectColor);
        if (this.isDisabled) {
            const elements = document.querySelectorAll('.' + this.name + ' .mat-form-field-flex .mat-form-field-outline *');
            elements.forEach((elem) => {
                this._renderer.setStyle(elem, 'background-color', this.disabledBackgroundColor);
            });
            const element = document.querySelector('.' + this.name + ' .mat-form-field-appearance-outline .mat-input-element:disabled');
            this._renderer.setStyle(element, 'color', 'unset');
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
CustomTextAreaComponent.ɵfac = function CustomTextAreaComponent_Factory(t) { return new (t || CustomTextAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
CustomTextAreaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomTextAreaComponent, selectors: [["app-custom-text-area"]], inputs: { formControl: "formControl", fontSizePx: "fontSizePx", name: "name", label: "label", appearance: "appearance", labelColor: "labelColor", borderDefaultColor: "borderDefaultColor", borderSelectColor: "borderSelectColor", disabledBackgroundColor: "disabledBackgroundColor", borderWidthPx: "borderWidthPx", required: "required", withLabel: "withLabel", placeholder: "placeholder", showUnderlineErrorContainer: "showUnderlineErrorContainer", isDisabled: "isDisabled", errorMessages: "errorMessages" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CustomTextAreaComponent),
                multi: true
            }
        ])], decls: 7, vars: 13, consts: [[3, "ngStyle"], [2, "width", "100%", "height", "130px", 3, "appearance"], [3, "ngStyle", 4, "ngIf"], ["matInput", "", "type", "text", 3, "placeholder", "value", "formControl", "required", "disabled", "change", "click"], [4, "ngIf"]], template: function CustomTextAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomTextAreaComponent_mat_label_3_Template, 2, 4, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomTextAreaComponent_Template_textarea_change_4_listener($event) { return ctx.onMatInputChange($event.target.value); })("click", function CustomTextAreaComponent_Template_textarea_click_4_listener($event) { return ctx.onInputClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomTextAreaComponent_mat_error_6_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.fontSizePx + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", ctx.appearance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.withLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder)("value", ctx.matInputValue)("formControl", ctx.formControl)("required", ctx.required)("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControl == null ? null : ctx.formControl.errors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput], styles: [".mat-form-field-appearance-outline.mat-focused .mat-form-field-label {\n  transform: translateY(-1.29375em) scale(0.75) !important;\n  top: 1.70375em;\n}\n\n  .mat-form-field-flex .mat-form-field-infix {\n  padding: 0.4em 0 0.7em 0;\n}\n\n  .mat-form-field-flex .mat-form-field-infix input {\n  margin-right: 5px;\n}\n\n  .mat-form-field-flex .mat-form-field-infix input::-moz-placeholder {\n  color: currentColor;\n}\n\n  .mat-form-field-flex .mat-form-field-infix input::placeholder {\n  color: currentColor;\n}\n\n  .mat-form-field-flex .mat-form-field-infix .mat-form-field-label {\n  font-size: inherit;\n  top: 1.40375em;\n  transform: translateY(-1.29375em) scale(0.75) !important;\n}\n\n  .mat-form-field-flex .mat-form-field-infix .mat-form-field-label span {\n  margin-left: 3px;\n  color: #f44336;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-hide-placeholder .mat-form-field-label {\n  transform: none !important;\n  transform: initial !important;\n}\n\n  .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 120px;\n  resize: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS10ZXh0LWFyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSx3REFBQTtFQUNBLGNBQUE7QUFGTjs7QUFXRTtFQUNFLHdCQUFBO0FBUko7O0FBVUk7RUFDRSxpQkFBQTtBQVJOOztBQVVNO0VBQ0UsbUJBQUE7QUFSUjs7QUFPTTtFQUNFLG1CQUFBO0FBUlI7O0FBWUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3REFBQTtBQVZOOztBQVlNO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBVlI7O0FBaUJFO0VBQ0UsMEJBQUE7RUFBQSw2QkFBQTtBQWRKOztBQWtCQTtFQUNFLGlCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQWZGIiwiZmlsZSI6ImN1c3RvbS10ZXh0LWFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XHJcbiAgJi5tYXQtZm9jdXNlZCB7XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI5Mzc1ZW0pIHNjYWxlKDAuNzUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRvcDogMS43MDM3NWVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcblxyXG5cclxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMC40ZW0gMCAuN2VtIDA7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICB0b3A6IDEuNDAzNzVlbTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI5Mzc1ZW0pIHNjYWxlKDAuNzUpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1oaWRlLXBsYWNlaG9sZGVyIHtcclxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1855:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/dialog-confirm/dialog-confirm.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogConfirmComponent": () => (/* binding */ DialogConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);



class DialogConfirmComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    submit() {
        this.dialogRef.close(true);
    }
    reset() {
        this.dialogRef.close(false);
    }
}
DialogConfirmComponent.ɵfac = function DialogConfirmComponent_Factory(t) { return new (t || DialogConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
DialogConfirmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogConfirmComponent, selectors: [["app-dialog-confirm"]], decls: 15, vars: 0, consts: [[1, "dialog-header"], ["mat-dialog-close", ""], [1, "dialog-content"], [1, "dialog-container"], ["src", "./assets/images/error.svg", "alt", ""], [1, "dialog-title"], [1, "dialog-action"], [1, "py-2", "mr-4", "w-40", "px-4", "bg-blue-600", "text-white", "font-semibold", "border", "border-blue-600", "rounded", "hover:bg-white", "hover:text-blue-600", "hover:border-blue-600", 3, "click"], [1, "py-2", "px-4", "w-40", "bg-transparent", "text-red-600", "font-semibold", "border", "border-red-600", "rounded", "hover:bg-red-600", "hover:text-white", "hover:border-transparent", 3, "click"]], template: function DialogConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Are You Sure ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div")(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogConfirmComponent_Template_button_click_10_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div")(13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogConfirmComponent_Template_button_click_13_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .dialog-header[_ngcontent-%COMP%] {\n  height: 40px;\n  background-color: #324458;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 3px;\n}\n[_nghost-%COMP%]   .dialog-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 15px;\n  cursor: pointer;\n  -webkit-appearance: initial;\n}\n[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 200px;\n  position: relative;\n  width: 550px;\n  overflow: auto;\n  bottom: 0;\n  margin: 20px 0;\n}\n[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .dialog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n}\n[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .dialog-container[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 5;\n  letter-spacing: normal;\n  text-align: right;\n  color: #d80612;\n}\n[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .dialog-container[_ngcontent-%COMP%]   .dialog-action[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]   .dialog-container[_ngcontent-%COMP%]   .dialog-action[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  padding: 0 48px;\n  margin-left: 10px;\n}\n  .mat-dialog-container {\n  padding: 0;\n  background-color: var(--card-item) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1jb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQUFGO0FBRUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUFOO0FBSUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFGTjtBQUlNO0VBQ0UsV0FBQTtBQUZSO0FBS007RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFIUjtBQU1NO0VBQ0UsYUFBQTtBQUpSO0FBTVE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFKVjtBQWFBO0VBQ0UsVUFBQTtFQUNBLDZDQUFBO0FBVkYiLCJmaWxlIjoiZGlhbG9nLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAuZGlhbG9nLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0NDU4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRpYWxvZy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1NTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcblxyXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGlhbG9nLXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBjb2xvcjogI2Q4MDYxMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRpYWxvZy1hY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5zdWJtaXQge1xyXG4gICAgICAgICAgcGFkZGluZzogMCA0OHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1pdGVtKSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 8424:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 4761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function LoadingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoadingComponent {
    constructor(apiService, cdr) {
        this.apiService = apiService;
        this.cdr = cdr;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.apiService.loading$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.unsubscribe$)).subscribe(data => {
            console.log(data);
            this.isLoading = data;
            this.cdr.detectChanges();
        });
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
LoadingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 1, vars: 1, consts: [["class", "absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ", 4, "ngIf"], [1, "absolute", "right-1/2", "bottom-1/2", "transform", "translate-x-1/2", "translate-y-1/2"], [1, "border-t-transparent", "border-solid", "animate-spin", "rounded-full", "border-red-900", "border-8", "w-20", "h-20"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7606:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/toggle-theme/toggle-theme.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleThemeComponent": () => (/* binding */ ToggleThemeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ToggleThemeComponent {
    constructor() {
        this.isDarkTheme = false;
    }
    ngOnInit() {
        this.isDarkTheme = localStorage.getItem('dark-mode') === 'Dark' ? true : false;
        if (this.isDarkTheme) {
            document.body.classList.toggle('dark-theme');
        }
    }
    toggleTheme() {
        const darkMode = JSON.stringify(this.isDarkTheme);
        localStorage.setItem('dark-mode', darkMode);
        this.isDarkTheme = !this.isDarkTheme;
        document.body.classList.toggle('dark-theme');
    }
}
ToggleThemeComponent.ɵfac = function ToggleThemeComponent_Factory(t) { return new (t || ToggleThemeComponent)(); };
ToggleThemeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleThemeComponent, selectors: [["app-toggle-theme"]], decls: 2, vars: 1, consts: [[3, "click"], [3, "src"]], template: function ToggleThemeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleThemeComponent_Template_button_click_0_listener() { return ctx.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.isDarkTheme ? "./assets/images/dark.svg" : "./assets/images/light.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["button[_ngcontent-%COMP%] {\n  width: 25px;\n  margin-right: 10px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZ2dsZS10aGVtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJ0b2dnbGUtdGhlbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8601:
/*!***************************************************!*\
  !*** ./src/app/shared/modules/material.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/core */ 2560);





































const modules = [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule,
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule,
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule,
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule,
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__.MatTreeModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule,
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__.MatBadgeModule,
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__.MatProgressBarModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule,
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_28__.MatBottomSheetModule,
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogModule,
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule,
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__.MatPaginatorModule,
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSortModule,
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__.DragDropModule,
    _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule,
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjector"]({ imports: [modules, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_28__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSortModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__.DragDropModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_28__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSortModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__.DragDropModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_28__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSortModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__.DragDropModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_35__.MatTableModule] }); })();


/***/ }),

/***/ 4761:
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ApiService {
    constructor() {
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    start() {
        this.loading$.next(true);
    }
    complete() {
        this.loading$.next(false);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/material.module */ 8601);
/* harmony import */ var _components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/custom-input/custom-input.component */ 4554);
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loading/loading.component */ 8424);
/* harmony import */ var _components_custom_text_area_custom_text_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/custom-text-area/custom-text-area.component */ 2783);
/* harmony import */ var _components_toggle_theme_toggle_theme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/toggle-theme/toggle-theme.component */ 7606);
/* harmony import */ var _components_dialog_confirm_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dialog-confirm/dialog-confirm.component */ 1855);
/* harmony import */ var _components_confirm_bottom_sheet_confirm_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/confirm-bottom-sheet/confirm-bottom-sheet.component */ 6308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);










const modules = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
    _modules_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, modules, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _modules_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent,
        _components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_1__.CustomInputComponent,
        _components_custom_text_area_custom_text_area_component__WEBPACK_IMPORTED_MODULE_3__.CustomTextAreaComponent,
        _components_toggle_theme_toggle_theme_component__WEBPACK_IMPORTED_MODULE_4__.ToggleThemeComponent,
        _components_dialog_confirm_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_5__.DialogConfirmComponent,
        _components_confirm_bottom_sheet_confirm_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmBottomSheetComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _modules_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _modules_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _components_custom_input_custom_input_component__WEBPACK_IMPORTED_MODULE_1__.CustomInputComponent,
        _components_custom_text_area_custom_text_area_component__WEBPACK_IMPORTED_MODULE_3__.CustomTextAreaComponent,
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent,
        _components_toggle_theme_toggle_theme_component__WEBPACK_IMPORTED_MODULE_4__.ToggleThemeComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAbfwdNhpa8YU4m8KocpAWLXnyrrso6OXQ',
        authDomain: 'todo-list-sadad.firebaseapp.com',
        databaseURL: 'https://todo-list-sadad.firebaseio.com',
        projectId: 'todo-list-sadad',
        storageBucket: 'todo-list-sadad.appspot.com',
        messagingSenderId: '1076791856514',
        appId: '1:1076791856514:web:d956369c1008674069d39b',
        measurementId: 'G-KNGLJ9G5M9'
    }
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map