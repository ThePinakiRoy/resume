(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"hero-top\">\r\n\r\n    <header class=\"h-100\">\r\n      <mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark\" [containerInside]=\"false\">\r\n\r\n\r\n        <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\"> <i class=\"fas fa-code color-sec \"></i>\r\n            <span class=\"color-sec\"> Pinaki</span> <span class=\"text-white\"> Roy</span></a></mdb-navbar-brand>\r\n\r\n\r\n        <links>\r\n\r\n\r\n          <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link waves-light\" href=\"#hero\" mdbWavesEffect>\r\n                <mdb-icon fas icon=\"home\"></mdb-icon> Home\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link waves-light\" href=\"#about\" mdbWavesEffect>\r\n                <mdb-icon fas icon=\"user\"></mdb-icon> About\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link waves-light\" href=\"#services\" mdbWavesEffect>\r\n                <mdb-icon fas icon=\"asterisk\"></mdb-icon> Services\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link waves-light\" href=\"#portfolio\" mdbWavesEffect>\r\n                <mdb-icon fas icon=\"briefcase\"></mdb-icon> Portfolio\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link waves-light\" href=\"#contact\" mdbWavesEffect>\r\n                <mdb-icon fas icon=\"address-card\"></mdb-icon> Contact\r\n              </a>\r\n            </li>\r\n\r\n\r\n\r\n          </ul>\r\n\r\n        </links>\r\n\r\n\r\n      </mdb-navbar>\r\n\r\n    </header>\r\n  </div> -->\r\n<app-main></app-main>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _container_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container/main/main.component */ "./src/app/container/main/main.component.ts");
/* harmony import */ var _container_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container/hero/hero.component */ "./src/app/container/hero/hero.component.ts");
/* harmony import */ var _container_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./container/about/about.component */ "./src/app/container/about/about.component.ts");
/* harmony import */ var _container_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./container/services/services.component */ "./src/app/container/services/services.component.ts");
/* harmony import */ var _container_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container/portfolio/portfolio.component */ "./src/app/container/portfolio/portfolio.component.ts");
/* harmony import */ var _container_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./container/contact/contact.component */ "./src/app/container/contact/contact.component.ts");
/* harmony import */ var _container_about_about_box_about_box_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./container/about/about-box/about-box.component */ "./src/app/container/about/about-box/about-box.component.ts");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _container_portfolio_p_modal_p_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./container/portfolio/p-modal/p-modal.component */ "./src/app/container/portfolio/p-modal/p-modal.component.ts");
/* harmony import */ var _container_hero_video_hero_video_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./container/hero-video/hero-video.component */ "./src/app/container/hero-video/hero-video.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _container_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _container_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
                _container_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _container_services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
                _container_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
                _container_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _container_about_about_box_about_box_component__WEBPACK_IMPORTED_MODULE_12__["AboutBoxComponent"],
                _container_portfolio_p_modal_p_modal_component__WEBPACK_IMPORTED_MODULE_15__["PModalComponent"],
                _container_hero_video_hero_video_component__WEBPACK_IMPORTED_MODULE_16__["HeroVideoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
            ],
            providers: [_services_rest_service__WEBPACK_IMPORTED_MODULE_13__["RestService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/container/about/about-box/about-box.component.html":
/*!********************************************************************!*\
  !*** ./src/app/container/about/about-box/about-box.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row overlay py-4 \" id=\"resume\">\n\n  <div class=\"col-md-4 spl wow fadeInLeft\" data-wow-delay=\"0.6s\">\n      <div class=\"spl-icon\">\n          <i class=\"fas fa-gem\"></i>\n      </div>\n      <div class=\"spl-title\">\n          <h3>My <strong>Specialities</strong></h3>\n          <hr class=\"spl-hr\" />\n      </div>\n      <div class=\"spl-content pt-4\">\n          <ul class=\"spl-ul\">\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i class=\"fas fa-hdd\"></i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>Website production</h5>\n                      <p>Great, modern </p>\n                  </div>\n\n              </li>\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i class=\"fas fa-mobile-alt\"></i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>App production</h5>\n                      <p>Great, modern website designes.</p>\n                  </div>\n\n              </li>\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i class=\"fas fa-desktop\"></i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>Front-End Development</h5>\n                      <p>Great, modern website designes.</p>\n                  </div>\n\n              </li>\n          </ul>\n      </div>\n  </div>\n\n  <div class=\"col-md-4 spl wow fadeInUp\" data-wow-delay=\"0.6s\">\n      <div class=\"spl-icon\">\n          <i class=\"fas fa-book\"></i>\n      </div>\n      <div class=\"spl-title\">\n          <h3>My <strong>Education</strong></h3>\n          <hr />\n      </div>\n      <div class=\"spl-content pt-4\">\n          <ul class=\"spl-ul\">\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i>85.5%</i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>B.Tech</h5>\n                      <p>Electronics & Comm Engg</p>\n                  </div>\n\n              </li>\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i>82.2%</i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>Higer Secondary</h5>\n                      <p>CBSE</p>\n                  </div>\n\n              </li>\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i>89.4%</i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>matriculation</h5>\n                      <p>CBSE</p>\n                  </div>\n\n              </li>\n          </ul>\n      </div>\n  </div>\n  <div class=\"col-md-4 spl wow fadeInRight\" data-wow-delay=\"0.6s\">\n      <div class=\"spl-icon\">\n          <i class=\"fas fa-code\"></i>\n      </div>\n      <div class=\"spl-title\">\n          <h3> <strong>Skills</strong> & abilities</h3>\n          <hr />\n      </div>\n      <div class=\"spl-content pt-4\">\n          <div class=\"content\">\n              <div class=\"col\">\n                  <ul class=\"spl-ul container skill\">\n                      <li class=\"spl-li\"><span class=\"expand html5\"></span><em>React</em></li>\n                      <li class=\"spl-li\"><span class=\"expand css3\"></span><em>Java</em></li>\n                      <li class=\"spl-li\"><span class=\"expand jquery\"></span><em>Angular</em></li>\n                      <li class=\"spl-li\"><span class=\"expand photoshop\"></span><em>Python</em></li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-md-4 spl wow fadeInLeft\" data-wow-delay=\"0.6s\">\n      <div class=\"spl-icon\">\n          <i class=\"fas fa-globe\"></i>\n      </div>\n      <div class=\"spl-title\">\n          <h3> <strong>Language</strong> skills</h3>\n          <hr />\n      </div>\n      <div class=\"spl-content pt-4\">\n          <div class=\"content\">\n              <div class=\"col\">\n                  <ul class=\"spl-ul container skill\">\n                      <li class=\"spl-li\"><span class=\"expand jquery\"></span><em>English</em></li>\n                      <li class=\"spl-li\"><span class=\"expand html5\"></span><em>Bengali</em></li>\n                      <li class=\"spl-li\"><span class=\"expand css3\"></span><em>Hindi</em></li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"col-md-4 spl wow fadeInUp\" data-wow-delay=\"0.6s\">\n      <div class=\"spl-icon\">\n          <i class=\"fas fa-gamepad\"></i>\n      </div>\n      <div class=\"spl-title\">\n          <h3>Hobbies &<strong> Interests</strong></h3>\n          <hr />\n      </div>\n      <div class=\"spl-content pt-4\">\n          <ul class=\"spl-ul\">\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i class=\"fas fa-music\"></i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>Music</h5>\n                  </div>\n\n              </li>\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i class=\"fas fa-play\"></i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>Art</h5>\n                  </div>\n\n              </li>\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i class=\"fab fa-xbox\"></i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>Games</h5>\n                  </div>\n\n              </li>\n          </ul>\n      </div>\n  </div>\n  <div class=\"col-md-4 spl wow fadeInRight\" data-wow-delay=\"0.6s\">\n      <div class=\"spl-icon\">\n          <i class=\"fas fa-medal\"></i>\n      </div>\n      <div class=\"spl-title\">\n          <h3>Recognition &<strong> Acheivements</strong></h3>\n          <hr />\n      </div>\n      <div class=\"spl-content pt-4\">\n          <ul class=\"spl-ul\">\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i class=\"fas fa-hdd\"></i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>Website production</h5>\n                      <p>Great, modern </p>\n                  </div>\n\n              </li>\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i class=\"fas fa-mobile-alt\"></i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>App production</h5>\n                      <p>Great, modern website designes.</p>\n                  </div>\n\n              </li>\n              <li class=\"spl-li\">\n                  <div class=\"icon\">\n                      <i class=\"fas fa-desktop\"></i>\n                  </div>\n                  <div class=\"details\">\n                      <h5>Front-End Development</h5>\n                      <p>Great, modern website designes.</p>\n                  </div>\n\n              </li>\n          </ul>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/container/about/about-box/about-box.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/container/about/about-box/about-box.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9hYm91dC9hYm91dC1ib3gvYWJvdXQtYm94LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/container/about/about-box/about-box.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/container/about/about-box/about-box.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutBoxComponent", function() { return AboutBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutBoxComponent = /** @class */ (function () {
    function AboutBoxComponent() {
    }
    AboutBoxComponent.prototype.ngOnInit = function () {
    };
    AboutBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-box',
            template: __webpack_require__(/*! ./about-box.component.html */ "./src/app/container/about/about-box/about-box.component.html"),
            styles: [__webpack_require__(/*! ./about-box.component.scss */ "./src/app/container/about/about-box/about-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutBoxComponent);
    return AboutBoxComponent;
}());



/***/ }),

/***/ "./src/app/container/about/about.component.html":
/*!******************************************************!*\
  !*** ./src/app/container/about/about.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\n  <div class=\"row\">\n      <div class=\"col-md-6 ptb-120 \" >\n          <div class=\"container text-white text-center animated wow slideInUp\" data-wow-delay=\"0.6s\">\n              <div id=\"avatar\">\n                  <i class=\"fas fa-user-circle\"></i>\n              </div>\n              <br />\n              <div class=\"title animated slideInUp\">Pinaki Roy</div>\n              <div class=\"subtitle dr \">\n                  <span>Full Stack Developer\n                      <hr class=\"hr mt-1\">\n                  </span>\n              </div>\n          </div>\n      </div>\n      <div class=\"col-md-6 ptb-120 overlay\">\n          <div class=\"container-fluid text-white wow fadeInUp\" data-wow-delay=\"0.6s\" >\n              <h2 class=\"text-center text-white pb-2 dr \">\n                  Resume\n                  <hr class=\"hr mt-2\" />\n              </h2>\n              <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ex odio porro vitae\n                  recusandae nesciunt voluptas autem tempore. Accusantium mollitia, esse voluptas architecto\n                  corporis laborum velit nostrum animi ab accusamus.\n              </p>\n              <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ex odio porro vitae\n                  recusandae nesciunt voluptas autem tempore. Accusantium mollitia, esse voluptas architecto\n                  corporis laborum velit nostrum animi ab accusamus.\n              </p>\n              <p>\n                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ex odio porro vitae\n                  recusandae nesciunt voluptas autem tempore. Accusantium mollitia, esse voluptas architecto\n                  corporis laborum velit nostrum animi ab accusamus.\n              </p>\n              <div class=\"buton-group pt-3\">\n                  <a href=\"#contact\" type=\"button\" class=\"btn btn-outline-warning px-3 mx-1 my-btn\"><i\n                          class=\"far fa-heart\"></i> Hire Me</a>\n                  <a type=\"button\" class=\"btn btn-outline-warning px-3 mx-1 my-btn\"><i class=\"far fa-save\"></i>\n                      Download CV</a>\n              </div>\n          </div>\n      </div>\n\n  </div>\n  <app-about-box></app-about-box>\n</section>\n\n"

/***/ }),

/***/ "./src/app/container/about/about.component.scss":
/*!******************************************************!*\
  !*** ./src/app/container/about/about.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/container/about/about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/container/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/container/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/container/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/container/contact/contact.component.html":
/*!**********************************************************!*\
  !*** ./src/app/container/contact/contact.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"hireMe\" style=\"background: url('assets/img/bg.jpg'); background-attachment: fixed;background-position: center;background-repeat: no-repeat;background-size: cover;\">\n  <div class=\"overlay ptb-120\">\n      <div class=\"container-fluid text-center \">\n          <div class=\"d-f container-fluid row\">\n              <div class=\"col-md-1\"></div>\n              <div class=\"icon col-md-2 wow zoomInLeft\" data-wow-delay=\"0.6s\">\n                  <i class=\"fas fa-dragon fa-5x pull-left fa-fw\"></i>\n              </div>\n              <div class=\"details container px-3  col-md-6 wow slideInUp\" data-wow-delay=\"0.6s\">\n                  <h2>Hire me for your awesome project</h2>\n                  <p class=\"container\">I am available for Freelance projects that depends on your project value.\n                      Hire me and get your project done!</p>\n              </div>\n              <div class=\"bttn col-md-2 wow zoomInRight\" data-wow-delay=\"0.6s\">\n                  <a href=\"#contact\" type=\"button\" class=\"btn btn-outline-light px-3 mx-1 my-btn\"> Hire Me Now</a>\n              </div>\n              <div class=\"col-md-1\"></div>\n          </div>\n      </div>\n  </div>\n</section>\n<section id=\"contact\">\n  <div class=\"row\">\n      <div class=\"col-md-6 overlay\">\n          <div class=\" ptb-50\">\n              <div class=\"container-fluid\">\n                  <div class=\"container wow zoomInUp\" data-wow-delay=\"0.6s\">\n                      <div class=\"title text-center text-white\">\n                          <h2>Contact\n                              <hr class=\"hr\" />\n                          </h2>\n                      </div>\n                      <div class=\" pt-5\">\n                          <div class=\"my-contact container\">\n                              <div class=\"box\">\n                                  <div class=\"icon\">\n                                      <i class=\"fas fa-map-marker-alt fa-2x\"></i>\n                                  </div>\n                                  <div class=\"details\">\n                                      <h3>Kolkata, India</h3>\n                                  </div>\n                              </div>\n                              <div class=\"box\">\n                                  <div class=\"icon\">\n                                      <i class=\"fas fa-phone fa-2x\"></i>\n                                  </div>\n                                  <div class=\"details\">\n                                      <h3>+91 7980222180</h3>\n                                  </div>\n                              </div>\n                              <div class=\"box\">\n                                  <div class=\"icon\">\n                                      <i class=\"fas fa-envelope-open fa-2x\"></i>\n                                  </div>\n                                  <div class=\"details\">\n                                      <h3>roypin49@gmail.com</h3>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"col-md-6\">\n          <div class=\"ptb-120\">\n              <div class=\"container-fluid\">\n                  <div class=\"container \">\n                      <div class=\"text-center text-white\">\n                          <form class=\"wow slideInUp\" data-wow-delay=\"0.6s\" action=\"http://formspree.io/roypin49@gmail.com\">\n                              <div class=\"form-row\">\n                                  <div class=\"form-group col-md-6\">\n                                      <label for=\"inputFirstName4\">First Name</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"inputFirstName4\"\n                                          placeholder=\"First Name\" name=\"firstName\">\n                                  </div>\n                                  <div class=\"form-group col-md-6\">\n                                      <label for=\"inputLastName4\">Last Name</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"inputLastName4\"\n                                          placeholder=\"Last Name\" name=\"lastName\">\n                                  </div>\n                              </div>\n                              <div class=\"form-group\">\n                                  <label for=\"inputEmmailAddress\">Email Address</label>\n                                  <input type=\"email\" class=\"form-control\" id=\"inputEmmailAddress\"\n                                      placeholder=\"Email Address\" name=\"_replyto\">\n                              </div>\n                              <div class=\"form-group\">\n                                  <label for=\"inputMessage2\">Message</label>\n                                  <textarea type=\"text\" class=\"form-control\" id=\"inputMessage2\"\n                                      placeholder=\"Message\" name=\"body\"></textarea>\n                              </div>\n                              <button type=\"submit\" class=\"btn btn-outline-light px-3 mx-1 my-btn\"><i\n                                      class=\"fa fa-paper-plane pull-left fa-fw\"></i> Send</button>\n                          </form>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/container/contact/contact.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/container/contact/contact.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/container/contact/contact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/container/contact/contact.component.ts ***!
  \********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/container/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/container/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/container/hero-video/hero-video.component.html":
/*!****************************************************************!*\
  !*** ./src/app/container/hero-video/hero-video.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<section id=\"hero\" class=\"v-header contain\">\n  <div class=\"full-screen-video-wrap\">\n    <video src=\"assets/video/bg.mp4\" autoplay=\"trur\" loop=\"true\"></video>\n\n  </div>\n  <div class=\"header-overlay\"></div>\n  <div class=\"header-content\">\n     <div id=\"hero-top\">\n\n      <header class=\"h-100\">\n        <mdb-navbar id=\"navbar\" SideClass=\"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar\" [containerInside]=\"false\">\n\n\n          <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\"> <i class=\"fas fa-code color-sec \"></i>\n              <span class=\"color-sec\"> Pinaki</span> <span class=\"text-white\"> Roy</span></a></mdb-navbar-brand>\n\n\n          <links>\n\n\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" href=\"#hero\" mdbWavesEffect>\n                  <mdb-icon fas icon=\"home\"></mdb-icon> Home\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" href=\"#about\" mdbWavesEffect>\n                  <mdb-icon fas icon=\"user\"></mdb-icon> About\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" href=\"#services\" mdbWavesEffect>\n                  <mdb-icon fas icon=\"asterisk\"></mdb-icon> Services\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" href=\"#portfolio\" mdbWavesEffect>\n                  <mdb-icon fas icon=\"briefcase\"></mdb-icon> Portfolio\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" href=\"#contact\" mdbWavesEffect>\n                  <mdb-icon fas icon=\"address-card\"></mdb-icon> Contact\n                </a>\n              </li>\n\n\n\n            </ul>\n\n          </links>\n\n\n        </mdb-navbar>\n\n      </header>\n    </div>\n    <div id=\"hero-middle\" class=\"text-center text-white py-5\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <div class=\"title animated slideInUp\">\n            <h3>I'm </h3>\n            <div class=\"glow \">\n              <h2>Pinaki Roy</h2>\n            </div>\n          </div>\n          <div class=\"subtitle pt-3 animated slideInUp\">\n            <p>I'm a passionate UI/UX Designer and Front-End Developer creating modern and responsive design\n              for Web\n              and Mobile.\n              Let's start scfadeIng and learn more about me.</p>\n          </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n\n    </div>\n    <div id=\"hero-bottom\" class=\"pt-5\">\n      <div class=\"icon text-center  arrow bounce\">\n        <a href=\"#about\" class=\"text-white\"><i class=\"fas fa-angle-double-down\"></i></a>\n      </div>\n    </div>\n    <div id=\"hero-footer\">\n      <div id=\"social\">\n        <div class=\"row social-container\">\n          <ul class=\"social \">\n            <li><a href=\"#\"><i class=\"fab fa-facebook-f \"></i></a></li>\n            <li><a href=\"#\"><i class=\"fab  fa-google-plus\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fab  fa-linkedin\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fab  fa-github\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fab  fa-skype\"></i></a></li>\n\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/container/hero-video/hero-video.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/container/hero-video/hero-video.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".v-header {\n  height: 100vh;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  color: #fff; }\n\n.contain {\n  max-width: 960px;\n  margin: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  text-align: center; }\n\n.full-screen-video-wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden; }\n\n.full-screen-video-wrap video {\n  min-width: 100%;\n  min-height: 100%; }\n\n.header-overlay {\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#d31027+2,ea384d+100 */\n  background: #d31027;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, #d31027 2%, #ea384d 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d31027', endColorstr='#ea384d',GradientType=0 );\n  /* IE6-9 */\n  z-index: 1;\n  opacity: 0.85; }\n\n.header-content {\n  z-index: 2; }\n\n#navbar.scroll {\n  background-color: #A1572F;\n  color: #eef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyL2hlcm8tdmlkZW8vRDpcXFBJTkFLSSBPRkZJQ0VcXFByb2plY3RzXFxNWVxcYW5ndWxhclxccG9ydGZvbGlvL3NyY1xcYXBwXFxjb250YWluZXJcXGhlcm8tdmlkZW9cXGhlcm8tdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isb0JBQWE7RUFBYixhQUFhO0VBQ2Isc0JBQW1CO01BQW5CLG1CQUFtQjtFQUNuQix5QkFBNkI7TUFBN0IsNkJBQTZCO0VBQzdCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBSztFQUNMLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxhQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFLO0VBQ0wsT0FBTztFQUVULGlIQUFBO0VBQ0EsbUJBQTBCO0VBQUUsaUJBQUE7RUFDMEQsYUFBQTtFQUNFLDRCQUFBO0VBQ3hGLGdFQUFvRjtFQUFFLHFEQUFBO0VBQ3RGLG1IQUFtSDtFQUFFLFVBQUE7RUFFbkgsVUFBVTtFQUNWLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLHlCQUF5QjtFQUN6QixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXIvaGVyby12aWRlby9oZXJvLXZpZGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnYtaGVhZGVye1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jb250YWlue1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZnVsbC1zY3JlZW4tdmlkZW8td3JhcHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmZ1bGwtc2NyZWVuLXZpZGVvLXdyYXAgdmlkZW97XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmhlYWRlci1vdmVybGF5e1xyXG4gIGhlaWdodDoxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDogMDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjMDcyYTVmO1xyXG4vKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cHM6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvI2QzMTAyNysyLGVhMzg0ZCsxMDAgKi9cclxuYmFja2dyb3VuZDogcmdiKDIxMSwxNiwzOSk7IC8qIE9sZCBicm93c2VycyAqL1xyXG5iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDIxMSwxNiwzOSwxKSAyJSwgcmdiYSgyMzQsNTYsNzcsMSkgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjExLDE2LDM5LDEpIDIlLHJnYmEoMjM0LDU2LDc3LDEpIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgcmdiYSgyMTEsMTYsMzksMSkgMiUscmdiYSgyMzQsNTYsNzcsMSkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2QzMTAyNycsIGVuZENvbG9yc3RyPScjZWEzODRkJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG5cclxuICB6LWluZGV4OiAxO1xyXG4gIG9wYWNpdHk6IDAuODU7XHJcbn1cclxuLmhlYWRlci1jb250ZW50e1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuI25hdmJhci5zY3JvbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBMTU3MkY7XHJcbiAgY29sb3I6ICNlZWY7XHJcbn1cclxuXHJcblxyXG4vLyBAbWVkaWEgKG1heC13aWR0aDo5NjBweCl7XHJcbi8vICAgLmNvbnRhaW57XHJcblxyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/container/hero-video/hero-video.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/container/hero-video/hero-video.component.ts ***!
  \**************************************************************/
/*! exports provided: HeroVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroVideoComponent", function() { return HeroVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroVideoComponent = /** @class */ (function () {
    function HeroVideoComponent() {
    }
    HeroVideoComponent.prototype.ngOnInit = function () {
    };
    HeroVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-video',
            template: __webpack_require__(/*! ./hero-video.component.html */ "./src/app/container/hero-video/hero-video.component.html"),
            styles: [__webpack_require__(/*! ./hero-video.component.scss */ "./src/app/container/hero-video/hero-video.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroVideoComponent);
    return HeroVideoComponent;
}());



/***/ }),

/***/ "./src/app/container/hero/hero.component.html":
/*!****************************************************!*\
  !*** ./src/app/container/hero/hero.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<section id=\"hero\" style=\"background: url('assets/img/bg.jpg'); background-attachment: fixed;background-position: center;background-repeat: no-repeat;background-size: cover;\">\n  <div id=\"hero-top\" >\n    <header class=\"h-100\">\n      <mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark\" [containerInside]=\"true\">\n\n        <!-- Navbar brand -->\n        <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\"> <i class=\"fas fa-code color-sec \"></i>\n            <span class=\"color-sec\">    Pinaki</span> <span class=\"text-white\">    Roy</span></a></mdb-navbar-brand>\n\n        <!-- Collapsible content -->\n        <links>\n\n          <!-- Links -->\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link waves-light\" href=\"#hero\" mdbWavesEffect>\n                <mdb-icon fas icon=\"home\"></mdb-icon> Home\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link waves-light\" href=\"#about\" mdbWavesEffect>\n                <mdb-icon fas icon=\"user\"></mdb-icon> About\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link waves-light\" href=\"#services\" mdbWavesEffect>\n                <mdb-icon fas icon=\"asterisk\"></mdb-icon> Services\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link waves-light\" href=\"#portfolio\" mdbWavesEffect>\n                <mdb-icon fas icon=\"briefcase\"></mdb-icon> Portfolio\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link waves-light\" href=\"#contact\" mdbWavesEffect>\n                <mdb-icon fas icon=\"address-card\"></mdb-icon> Contact\n              </a>\n            </li>\n\n            \n\n          </ul>\n          <!-- Links -->\n        </links>\n        <!-- Collapsible content -->\n\n      </mdb-navbar>\n      <!--/.Navbar-->\n    </header>\n  </div>\n  <div id=\"hero-middle\" class=\"text-center text-white \">\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <div class=\"title animated slideInUp\">\n          <h3>I'm </h3>\n          <div class=\"glow \">\n            <h2>Pinaki Roy</h2>\n          </div>\n        </div>\n        <div class=\"subtitle pt-3 animated slideInUp\">\n          <p>I'm a passionate UI/UX Designer and Front-End Developer creating modern and responsive design\n            for Web\n            and Mobile.\n            Let's start scfadeIng and learn more about me.</p>\n        </div>\n      </div>\n      <div class=\"col-md-3\"></div>\n    </div>\n\n  </div>\n  <div id=\"hero-bottom\">\n    <div class=\"icon text-center  arrow bounce\">\n      <a href=\"#about\" class=\"text-white\"><i class=\"fas fa-angle-double-down\"></i></a>\n    </div>\n  </div>\n  <div id=\"hero-footer\">\n    <div id=\"social\">\n      <div class=\"row social-container\">\n        <ul class=\"social \">\n          <li><a href=\"#\"><i class=\"fab fa-facebook-f \"></i></a></li>\n          <li><a href=\"#\"><i class=\"fab  fa-google-plus\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fab  fa-linkedin\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fab  fa-github\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fab  fa-skype\"></i></a></li>\n\n        </ul>\n      </div>\n\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/container/hero/hero.component.scss":
/*!****************************************************!*\
  !*** ./src/app/container/hero/hero.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#hero {\n  width: 100%;\n  height: 100vh;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n\n#hero .title h2 {\n  font-size: 62px; }\n\n#hero .subtitle p {\n  font-size: 18px; }\n\n#hero ul {\n  list-style: none; }\n\n#social {\n  background: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 80px;\n  display: block;\n  z-index: 2; }\n\n.social-container {\n  display: block;\n  vertical-align: middle;\n  margin: 0 auto;\n  width: 85%;\n  text-align: center; }\n\n.social-container .social {\n  margin: 24px 0;\n  padding: 0;\n  font-size: 30px;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8); }\n\nul {\n  list-style: none outside; }\n\n.social-container .social li {\n  display: inline-block;\n  margin: 0 15px;\n  padding: 0; }\n\nli {\n  line-height: 18px;\n  margin-bottom: 12px; }\n\n.social li i {\n  color: #fff;\n  transition: ease-in-out 0.5s; }\n\n.social li i:hover {\n  color: #fae901;\n  -webkit-transform: scale(1.07);\n      -ms-transform: scale(1.07);\n          transform: scale(1.07); }\n\n.glow {\n  font-size: 80px;\n  color: #fff;\n  text-align: center;\n  -webkit-animation: glow 1s ease-in-out infinite alternate;\n  animation: glow 1s ease-in-out infinite alternate; }\n\n@-webkit-keyframes glow {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fae901, 0 0 40px #fae901, 0 0 50px #fae901, 0 0 60px #fae901, 0 0 70px #fae901; }\n  to {\n    text-shadow: 0 0 20px #fff, 0 0 30px #f3ea6f, 0 0 40px #f3ea6f, 0 0 50px #f3ea6f, 0 0 60px #f3ea6f, 0 0 70px #f3ea6f, 0 0 80px #f3ea6f; } }\n\n.bounce {\n  -webkit-animation: bounce 2s infinite;\n          animation: bounce 2s infinite;\n  font-size: 20px; }\n\n@-webkit-keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); } }\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyL2hlcm8vRDpcXFBJTkFLSSBPRkZJQ0VcXFByb2plY3RzXFxNWVxcYW5ndWxhclxccG9ydGZvbGlvL3NyY1xcYXBwXFxjb250YWluZXJcXGhlcm9cXGhlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDBCQUFzQjtNQUF0QixzQkFBc0I7RUFDdEIsc0JBQThCO01BQTlCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsOEJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGVBQWU7RUFDZiwyQ0FBMEMsRUFBQTs7QUFHNUM7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsY0FBYztFQUNkLDhCQUFzQjtNQUF0QiwwQkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseURBQXlEO0VBRXpELGlEQUFpRCxFQUFBOztBQUduRDtFQUNFO0lBQ0ksbUlBQW1JLEVBQUE7RUFHdkk7SUFDSSxzSUFBc0ksRUFBQSxFQUFBOztBQUk1STtFQUNFLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsZUFBZSxFQUFBOztBQUVqQjtFQUNFO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBO0VBRTFCO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBO0VBRTlCO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBLEVBQUE7O0FBUmhDO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUE7RUFFMUI7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCLEVBQUE7RUFFOUI7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2hlcm8ge1xyXG4gIC8vIGJhY2tncm91bmQ6ICMxNjE0MTUgdXJsKCcuL2ltZ3MvYmcuanBnJykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI2hlcm8gLnRpdGxlIGgyIHtcclxuICBmb250LXNpemU6IDYycHg7XHJcbn1cclxuXHJcbiNoZXJvIC5zdWJ0aXRsZSBwIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNoZXJvIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4jc29jaWFsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zb2NpYWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc29jaWFsLWNvbnRhaW5lciAuc29jaWFsIHtcclxuICBtYXJnaW46IDI0cHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAuOCk7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XHJcbn1cclxuXHJcbi5zb2NpYWwtY29udGFpbmVyIC5zb2NpYWwgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgMTVweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLnNvY2lhbCBsaSBpIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjVzO1xyXG59XHJcblxyXG4uc29jaWFsIGxpIGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmFlOTAxO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNylcclxufVxyXG5cclxuLmdsb3cge1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICBhbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2xvdyB7XHJcbiAgZnJvbSB7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZmFlOTAxLCAwIDAgNDBweCAjZmFlOTAxLCAwIDAgNTBweCAjZmFlOTAxLCAwIDAgNjBweCAjZmFlOTAxLCAwIDAgNzBweCAjZmFlOTAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggI2ZmZiwgMCAwIDMwcHggI2YzZWE2ZiwgMCAwIDQwcHggI2YzZWE2ZiwgMCAwIDUwcHggI2YzZWE2ZiwgMCAwIDYwcHggI2YzZWE2ZiwgMCAwIDcwcHggI2YzZWE2ZiwgMCAwIDgwcHggI2YzZWE2ZjtcclxuICB9XHJcbn1cclxuXHJcbi5ib3VuY2Uge1xyXG4gIGFuaW1hdGlvbjogYm91bmNlIDJzIGluZmluaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XHJcbiAgMCUsIDIwJSwgNTAlLCA4MCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/container/hero/hero.component.ts":
/*!**************************************************!*\
  !*** ./src/app/container/hero/hero.component.ts ***!
  \**************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/container/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.scss */ "./src/app/container/hero/hero.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/container/main/main.component.html":
/*!****************************************************!*\
  !*** ./src/app/container/main/main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" *ngIf=\"loading\">\n\n  <app-hero-video></app-hero-video>\n  <app-about></app-about>\n  <app-services></app-services>\n  <app-portfolio [items]=\"items\"></app-portfolio>\n  <app-contact></app-contact>\n  <footer class=\"py-1\">\n\n    <div class=\"row social-container \">\n        <ul class=\"social \">\n            <li><a href=\"#\"><i class=\"fab fa-facebook-f \"></i></a></li>\n            <li><a href=\"#\"><i class=\"fab  fa-google-plus\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fab  fa-linkedin\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fab  fa-github\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fab  fa-skype\"></i></a></li>\n\n        </ul>\n\n    </div>\n    <div class=\"row social-container text-center text-white\">\n        &copy; Pinaki Roy 2019\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/container/main/main.component.scss":
/*!****************************************************!*\
  !*** ./src/app/container/main/main.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9tYWluL21haW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/container/main/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/container/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/rest.service */ "./src/app/services/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(rest) {
        var _this = this;
        this.rest = rest;
        this.loading = false;
        this.rest.getJSON().subscribe(function (data) {
            _this.items = data['portfolio'];
            _this.loading = true;
            console.log('items', _this.items);
        });
        // (this.loading)?console.log('items',this.items):console.log('loading') 
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/container/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/container/portfolio/p-modal/p-modal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/container/portfolio/p-modal/p-modal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div mdbModal #frame=\"mdbModal\" class=\"modal fade\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n\n    <!--Content-->\n    <div class=\"modal-content\">\n\n      <!--Body-->\n      <div class=\"modal-body mb-0 p-0\">\n        <div class=\"embed-responsive embed-responsive-16by9 z-depth-1-half\">\n          <iframe class=\"embed-responsive-item\" src=\"\" allowfullscreen></iframe>\n        </div>\n      </div>\n\n      <!--Footer-->\n      <div class=\"modal-footer justify-content-center flex-column flex-md-row\">\n        <span class=\"mr-4\">Spread the word!</span>\n        <div>\n          <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"fb\" class=\"waves-light\" mdbWavesEffect>\n            <mdb-icon fab icon=\"facebook-f\"></mdb-icon>\n          </a>\n          <!--Twitter-->\n          <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"tw\" class=\"waves-light\" mdbWavesEffect>\n            <mdb-icon fab icon=\"twitter\"></mdb-icon>\n          </a>\n          <!--Google +-->\n          <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"gplus\" class=\"waves-light\" mdbWavesEffect>\n            <mdb-icon fab icon=\"google-plus\"></mdb-icon>\n          </a>\n          <!--Linkedin-->\n          <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" mdbBtn color=\"ins\" class=\"waves-light\" mdbWavesEffect>\n            <mdb-icon fab icon=\"linkedin-in\"></mdb-icon>\n          </a>\n        </div>\n        <button type=\"button\" mdbBtn color=\"primary\" outline=\"true\" rounded=\"true\" class=\"ml-4 waves-light\" mdbWavesEffect data-dismiss=\"modal\"\n          (click)=\"frame.hide()\">Close</button>\n\n      </div>\n\n    </div>\n    <!--/.Content-->\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/container/portfolio/p-modal/p-modal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/container/portfolio/p-modal/p-modal.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9wb3J0Zm9saW8vcC1tb2RhbC9wLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/container/portfolio/p-modal/p-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/container/portfolio/p-modal/p-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: PModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PModalComponent", function() { return PModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PModalComponent = /** @class */ (function () {
    function PModalComponent() {
    }
    PModalComponent.prototype.ngOnInit = function () {
    };
    PModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-p-modal',
            template: __webpack_require__(/*! ./p-modal.component.html */ "./src/app/container/portfolio/p-modal/p-modal.component.html"),
            styles: [__webpack_require__(/*! ./p-modal.component.scss */ "./src/app/container/portfolio/p-modal/p-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PModalComponent);
    return PModalComponent;
}());



/***/ }),

/***/ "./src/app/container/portfolio/portfolio.component.html":
/*!**************************************************************!*\
  !*** ./src/app/container/portfolio/portfolio.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio\">\n  <div class=\"overlay ptb-120\">\n    <div class=\"container-fluid\">\n      <div class=\"container \">\n        <div class=\"title text-center text-white wow slideInUp\" data-wow-delay=\"0.6s\">\n          <h2>Portfolio\n            <hr class=\"hr\" />\n          </h2>\n        </div>\n      </div>\n    </div>\n    <div class=\" portfolio\">\n      <div class=\" pt-5  work \" id=\"works\">\n        <div class=\"box m-1 wow slideInUp\" data-wow-delay=\"0.6s\" *ngFor=\"let item of items\">\n          <div class=\"icon text-center\">\n            <h2>{{item.id}}</h2>\n          </div>\n          <div class=\"content d-flex justify-content-center flex-column\">\n            <h3>{{item.title}}</h3>\n            <p class=\"p-1\">{{item.decription}}</p>\n\n              <button class=\"links \" mdbBtn type=\"button\" gradient=\"aqua\" rounded=\"true\" mdbWavesEffect>View Project</button>\n\n          </div>\n\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</section>\n<!-- <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"frame.show()\"\n  mdbWavesEffect>Launch Modal</button> -->\n"

/***/ }),

/***/ "./src/app/container/portfolio/portfolio.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/container/portfolio/portfolio.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#works {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around; }\n\n.links {\n  display: inline-block;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyL3BvcnRmb2xpby9EOlxcUElOQUtJIE9GRklDRVxcUHJvamVjdHNcXE1ZXFxhbmd1bGFyXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGNvbnRhaW5lclxccG9ydGZvbGlvXFxwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBdUI7TUFBdkIsdUJBQXVCO0VBQ3ZCLDhCQUEyQjtNQUEzQiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxxQkFBcUI7RUFDckIsV0FBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd29ya3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmxpbmtze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/container/portfolio/portfolio.component.ts":
/*!************************************************************!*\
  !*** ./src/app/container/portfolio/portfolio.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PortfolioComponent.prototype, "items", void 0);
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/container/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/container/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/container/services/services.component.html":
/*!************************************************************!*\
  !*** ./src/app/container/services/services.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"services\" style=\"background: url('assets/img/bg.jpg'); background-attachment: fixed;background-position: center;background-repeat: no-repeat;background-size: cover;\">\n  <div class=\"overlay ptb-120\">\n\n      <div class=\"container \">\n          <div class=\"title text-center text-white\">\n              <h2>Services\n                  <hr class=\"hr\" />\n              </h2>\n          </div>\n\n          <div class=\"row pt-5\">\n              <div class=\"col-md-4 animated wow fadeInLeft\">\n                  <div class=\"spl\">\n                      <div class=\"icon\">\n                          <i class=\"fas fa-mobile-alt\"></i>\n                      </div>\n                      <div class=\"details\">\n                          <h5>Mobile App production</h5>\n                          <p>Great, modern </p>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-4 animated wow fadeInUp\">\n                  <div class=\"spl\">\n                      <div class=\"icon\">\n                          <i class=\"fas fa-hdd\"></i>\n                      </div>\n                      <div class=\"details\">\n                          <h5>Front-End Development</h5>\n                          <p>Great, modern </p>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-4 animated wow fadeInRight\">\n                  <div class=\"spl\">\n                      <div class=\"icon\">\n                          <i class=\"fas fa-desktop\"></i>\n                      </div>\n                      <div class=\"details\">\n                          <h5>Website App production</h5>\n                          <p>Great, modern </p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/container/services/services.component.scss":
/*!************************************************************!*\
  !*** ./src/app/container/services/services.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/container/services/services.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/container/services/services.component.ts ***!
  \**********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/container/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/container/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/services/rest.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.getJSON = function () {
        return this.http.get('assets/data.json');
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PINAKI OFFICE\Projects\MY\angular\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map