webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var core_1 = __webpack_require__(5);
	var browser_1 = __webpack_require__(144);
	var router_1 = __webpack_require__(45);
	var http_1 = __webpack_require__(94);
	var app_1 = __webpack_require__(494);
	document.addEventListener('DOMContentLoaded', function main() {
	    browser_1.bootstrap(app_1.App, ('production' === process.env.ENV ? [] : browser_1.ELEMENT_PROBE_PROVIDERS).concat(http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, [
	        core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
	    ]))
	        .catch(function (err) { return console.error(err); });
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(62)))

/***/ },

/***/ 297:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 298:
/***/ function(module, exports) {

	module.exports = "<div>\n  <span x-large>Your Content Here</span>\n  <input type=\"text\" [value]=\"title.value\" (input)=\"title.value = $event.target.value\" autofocus>\n  <!--\n    Rather than wiring up two-way data-binding ourselves\n    we can use Angular's [(ngModel)] syntax\n    <input type=\"text\" [(ngModel)]=\"title.value\">\n  -->\n\n  <pre>this.title = {{ title | json }}</pre>\n</div>\n"

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(45);
	var common_1 = __webpack_require__(93);
	var router_active_1 = __webpack_require__(495);
	var home_1 = __webpack_require__(497);
	var App = (function () {
	    function App() {
	        this.name = 'Angular 2 Webpack Starter';
	        this.url = 'https://twitter.com/AngularClass';
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            providers: common_1.FORM_PROVIDERS.slice(),
	            directives: router_1.ROUTER_DIRECTIVES.concat([router_active_1.RouterActive]),
	            pipes: [],
	            styles: ["\n    nav ul {\n      display: inline;\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      width: 60px;\n    }\n    nav li {\n      display: inline;\n    }\n    nav li.active {\n      background-color: lightgray;\n    }\n  "],
	            template: "\n    <header>\n      <nav>\n        <h1>Hello {{ name }}</h1>\n        <ul>\n          <li router-active=\"active\">\n            <a [routerLink]=\" ['Index'] \">Index</a>\n          </li>\n          <li router-active=\"active\">\n            <a [routerLink]=\" ['Home'] \">Home</a>\n          </li>\n        </ul>\n      </nav>\n    </header>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <footer>\n      WebPack Angular 2 Starter by <a [href]=\"url\">@AngularClass</a>\n    </footer>\n  "
	        }),
	        router_1.RouteConfig([
	            { path: '/', component: home_1.Home, name: 'Index' },
	            { path: '/home', component: home_1.Home, name: 'Home' },
	            { path: '/**', redirectTo: ['Index'] }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	})();
	exports.App = App;


/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var router_1 = __webpack_require__(45);
	var lang_1 = __webpack_require__(1);
	var core_1 = __webpack_require__(5);
	var router_2 = __webpack_require__(45);
	var RouterActive = (function () {
	    function RouterActive(router, element, renderer, routerLink, routerActiveAttr) {
	        var _this = this;
	        this.routerActive = null;
	        this.routerActiveAttr = 'active';
	        router.subscribe(function () {
	            var active = routerLink.first.isRouteActive;
	            renderer.setElementClass(element.nativeElement, _this._attrOrProp(), active);
	        });
	    }
	    RouterActive.prototype._attrOrProp = function () {
	        return lang_1.isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
	    };
	    RouterActive = __decorate([
	        core_1.Directive({
	            selector: '[router-active]',
	            inputs: ['routerActive']
	        }),
	        __param(3, core_1.Query(router_2.RouterLink)),
	        __param(4, core_1.Attribute('router-active')), 
	        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef, core_1.Renderer, core_1.QueryList, String])
	    ], RouterActive);
	    return RouterActive;
	})();
	exports.RouterActive = RouterActive;


/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var XLarge = (function () {
	    function XLarge(element, renderer) {
	        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
	    }
	    XLarge = __decorate([
	        core_1.Directive({
	            selector: '[x-large]'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], XLarge);
	    return XLarge;
	})();
	exports.XLarge = XLarge;


/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var common_1 = __webpack_require__(93);
	var http_1 = __webpack_require__(94);
	var title_1 = __webpack_require__(498);
	var x_large_1 = __webpack_require__(496);
	var Home = (function () {
	    function Home(title, http) {
	        this.title = title;
	        this.http = http;
	    }
	    Home.prototype.ngOnInit = function () {
	        console.log('hello Home component');
	    };
	    Home = __decorate([
	        core_1.Component({
	            selector: 'home',
	            providers: [
	                title_1.Title
	            ],
	            directives: common_1.FORM_DIRECTIVES.concat([
	                x_large_1.XLarge
	            ]),
	            pipes: [],
	            styles: [__webpack_require__(297)],
	            template: __webpack_require__(298)
	        }), 
	        __metadata('design:paramtypes', [title_1.Title, http_1.Http])
	    ], Home);
	    return Home;
	})();
	exports.Home = Home;


/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var Title = (function () {
	    function Title() {
	        this.value = 'Angular 2';
	    }
	    Title = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Title);
	    return Title;
	})();
	exports.Title = Title;


/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY3NzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLnRzIiwid2VicGFjazovLy8uL2FwcC9kaXJlY3RpdmVzL3JvdXRlci1hY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvZGlyZWN0aXZlcy94LWxhcmdlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvcHJvdmlkZXJzL3RpdGxlLnRzIl0sIm5hbWVzIjpbIm1haW4iLCJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJSb3V0ZXJBY3RpdmUiLCJSb3V0ZXJBY3RpdmUuY29uc3RydWN0b3IiLCJSb3V0ZXJBY3RpdmUuX2F0dHJPclByb3AiLCJYTGFyZ2UiLCJYTGFyZ2UuY29uc3RydWN0b3IiLCJIb21lIiwiSG9tZS5jb25zdHJ1Y3RvciIsIkhvbWUubmdPbkluaXQiLCJUaXRsZSIsIlRpdGxlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUdBLGlGQUFzQixDQUFlLENBQUM7QUFDdEMscUNBQWlELEdBQTJCLENBQUM7QUFDN0Usb0NBQXVFLEVBQWlCLENBQUM7QUFDekYsa0NBQTZCLEVBQWUsQ0FBQztBQU03QyxpQ0FBa0IsR0FBVyxDQUFDO0FBSzlCLFNBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtLQUM1Q0EsbUJBQVNBLENBQUNBLFNBQUdBLEVBQ1JBLENBQUNBLFlBQVlBLEtBQUtBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLEVBQUVBLEdBQUdBLGlDQUF1QkEsQ0FBQ0EsUUFDakVBLHFCQUFjQSxFQUNkQSx5QkFBZ0JBO1NBQ25CQSxjQUFPQSxDQUFDQSx5QkFBZ0JBLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUVBLDZCQUFvQkEsRUFBRUEsQ0FB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YUEsQ0FBQ0E7VUFDakNBLENBQUNBOztjQVdEQTtLQUFEQSxXQUFDQTtBQUFEQSxFQUFDQSxJQUFBO0FBVlksYUFBSSxPQVVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Qsa0NBQXlCLENBQWUsQ0FBQztBQUV6QztLQUdFRztTQURBQyxVQUFLQSxHQUFHQSxXQUFXQSxDQUFDQTtLQUVwQkEsQ0FBQ0E7S0FKSEQ7U0FBQ0EsaUJBQVVBLEVBQUVBOztlQUtaQTtLQUFEQSxZQUFDQTtBQUFEQSxFQUFDQSxJQUFBO0FBSlksY0FBSyxRQUlqQiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBQcm92aWRlcnMgcHJvdmlkZWQgYnkgQW5ndWxhclxuICovXG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXAsIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuLypcbiAqIEFwcCBDb21wb25lbnRcbiAqIG91ciB0b3AgbGV2ZWwgY29tcG9uZW50IHRoYXQgaG9sZHMgYWxsIG9mIG91ciBjb21wb25lbnRzXG4gKi9cbmltcG9ydCB7QXBwfSBmcm9tICcuL2FwcC9hcHAnO1xuLypcbiAqIEJvb3RzdHJhcCBvdXIgQW5ndWxhciBhcHAgd2l0aCBhIHRvcCBsZXZlbCBjb21wb25lbnQgYEFwcGAgYW5kIGluamVjdFxuICogb3VyIFNlcnZpY2VzIGFuZCBQcm92aWRlcnMgaW50byBBbmd1bGFyJ3MgZGVwZW5kZW5jeSBpbmplY3Rpb25cbiAqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIG1haW4oKSB7XG4gIGJvb3RzdHJhcChBcHAsIFtcbiAgICAuLi4oJ3Byb2R1Y3Rpb24nID09PSBwcm9jZXNzLmVudi5FTlYgPyBbXSA6IEVMRU1FTlRfUFJPQkVfUFJPVklERVJTKSxcbiAgICAuLi5IVFRQX1BST1ZJREVSUyxcbiAgICAuLi5ST1VURVJfUFJPVklERVJTLFxuICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwgeyB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSlcbiAgXSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L3RzbGludC1sb2FkZXIhLi9tYWluLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9ob21lL2hvbWUuY3NzXG4gKiogbW9kdWxlIGlkID0gMjk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXG4gIDxzcGFuIHgtbGFyZ2U+WW91ciBDb250ZW50IEhlcmU8L3NwYW4+XFxuICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgW3ZhbHVlXT1cXFwidGl0bGUudmFsdWVcXFwiIChpbnB1dCk9XFxcInRpdGxlLnZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxcXCIgYXV0b2ZvY3VzPlxcbiAgPCEtLVxcbiAgICBSYXRoZXIgdGhhbiB3aXJpbmcgdXAgdHdvLXdheSBkYXRhLWJpbmRpbmcgb3Vyc2VsdmVzXFxuICAgIHdlIGNhbiB1c2UgQW5ndWxhcidzIFsobmdNb2RlbCldIHN5bnRheFxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInRpdGxlLnZhbHVlXFxcIj5cXG4gIC0tPlxcblxcbiAgPHByZT50aGlzLnRpdGxlID0ge3sgdGl0bGUgfCBqc29uIH19PC9wcmU+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2hvbWUvaG9tZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMjk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKlxuICogQW5ndWxhciAyIGRlY29yYXRvcnMgYW5kIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0ZPUk1fUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG5pbXBvcnQge1JvdXRlckFjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JvdXRlci1hY3RpdmUnO1xuaW1wb3J0IHtIb21lfSBmcm9tICcuL2hvbWUvaG9tZSc7XG5cblxuLypcbiAqIEFwcCBDb21wb25lbnRcbiAqIFRvcCBMZXZlbCBDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwJyxcbiAgcHJvdmlkZXJzOiBbIC4uLkZPUk1fUFJPVklERVJTIF0sXG4gIGRpcmVjdGl2ZXM6IFsgLi4uUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlckFjdGl2ZSBdLFxuICBwaXBlczogW10sXG4gIHN0eWxlczogW2BcbiAgICBuYXYgdWwge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgICBuYXYgbGkge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cbiAgICBuYXYgbGkuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXI+XG4gICAgICA8bmF2PlxuICAgICAgICA8aDE+SGVsbG8ge3sgbmFtZSB9fTwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgcm91dGVyLWFjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiIFsnSW5kZXgnXSBcIj5JbmRleDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSByb3V0ZXItYWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCIgWydIb21lJ10gXCI+SG9tZTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8bWFpbj5cbiAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgV2ViUGFjayBBbmd1bGFyIDIgU3RhcnRlciBieSA8YSBbaHJlZl09XCJ1cmxcIj5AQW5ndWxhckNsYXNzPC9hPlxuICAgIDwvZm9vdGVyPlxuICBgXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZSwgbmFtZTogJ0luZGV4JyB9LFxuICB7IHBhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogSG9tZSwgbmFtZTogJ0hvbWUnIH0sXG4gIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnSW5kZXgnXSB9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIG5hbWUgPSAnQW5ndWxhciAyIFdlYnBhY2sgU3RhcnRlcic7XG4gIHVybCA9ICdodHRwczovL3R3aXR0ZXIuY29tL0FuZ3VsYXJDbGFzcyc7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cbn1cblxuLypcbiAqIFBsZWFzZSByZXZpZXcgdGhlIGh0dHBzOi8vZ2l0aHViLmNvbS9Bbmd1bGFyQ2xhc3MvYW5ndWxhcjItZXhhbXBsZXMvIHJlcG8gZm9yXG4gKiBtb3JlIGFuZ3VsYXIgYXBwIGV4YW1wbGVzIHRoYXQgeW91IG1heSBjb3B5L3Bhc3RlXG4gKiAoVGhlIGV4YW1wbGVzIG1heSBub3QgYmUgdXBkYXRlZCBhcyBxdWlja2x5LiBQbGVhc2Ugb3BlbiBhbiBpc3N1ZSBvbiBnaXRodWIgZm9yIHVzIHRvIHVwZGF0ZSBpdClcbiAqIEZvciBoZWxwIG9yIHF1ZXN0aW9ucyBwbGVhc2UgY29udGFjdCB1cyBhdCBAQW5ndWxhckNsYXNzIG9uIHR3aXR0ZXJcbiAqIG9yIG91ciBjaGF0IG9uIFNsYWNrIGF0IGh0dHBzOi8vQW5ndWxhckNsYXNzLmNvbS9zbGFjay1qb2luXG4gKiBvciB2aWEgY2hhdCBvbiBHaXR0ZXIgYXQgaHR0cHM6Ly9naXR0ZXIuaW0vQW5ndWxhckNsYXNzL2FuZ3VsYXIyLXdlYnBhY2stc3RhcnRlclxuICovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L3RzbGludC1sb2FkZXIhLi9hcHAvYXBwLnRzXG4gKiovIiwiaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7RGlyZWN0aXZlLCBRdWVyeSwgUXVlcnlMaXN0LCBBdHRyaWJ1dGUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5zdHJ1Y3Rpb24sIFJvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbi8qKlxuICogUm91dGVyQWN0aXZlIGR5bmFtaWNhbGx5IGZpbmRzIHRoZSBmaXJzdCBlbGVtZW50IHdpdGggcm91dGVyTGluayBhbmQgdG9nZ2xlcyB0aGUgYWN0aXZlIGNsYXNzXG4gKlxuICogIyMgVXNlXG4gKlxuICogYGBgXG4gKiA8bGkgcm91dGVyLWFjdGl2ZT1cImFjdGl2ZVwiPjxhIFtyb3V0ZXJMaW5rXT1cIiBbJy9Ib21lJ10gXCI+SG9tZTwvYT48L2xpPlxuICogPGxpIFtyb3V0ZXJBY3RpdmVdPVwiIGFjdGl2ZVN0cmluZ1ZhbHVlIFwiPjxhIFtyb3V0ZXJMaW5rXT1cIiBbJy9Ib21lJ10gXCI+SG9tZTwvYT48L2xpPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyb3V0ZXItYWN0aXZlXScsXG4gIGlucHV0czogWydyb3V0ZXJBY3RpdmUnXVxufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZXJBY3RpdmUge1xuICByb3V0ZXJBY3RpdmU6IHN0cmluZyA9IG51bGw7XG4gIHJvdXRlckFjdGl2ZUF0dHI6IHN0cmluZyA9ICdhY3RpdmUnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRlcjogUm91dGVyLFxuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgIEBRdWVyeShSb3V0ZXJMaW5rKSByb3V0ZXJMaW5rOiBRdWVyeUxpc3Q8Um91dGVyTGluaz4sXG4gICAgQEF0dHJpYnV0ZSgncm91dGVyLWFjdGl2ZScpIHJvdXRlckFjdGl2ZUF0dHI6IHN0cmluZykge1xuXG4gICAgcm91dGVyLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBsZXQgYWN0aXZlID0gKDxhbnk+cm91dGVyTGluaykuZmlyc3QuaXNSb3V0ZUFjdGl2ZTtcbiAgICAgIHJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2F0dHJPclByb3AoKSwgYWN0aXZlKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIF9hdHRyT3JQcm9wKCkge1xuICAgIHJldHVybiBpc1ByZXNlbnQodGhpcy5yb3V0ZXJBY3RpdmUpID8gdGhpcy5yb3V0ZXJBY3RpdmUgOiB0aGlzLnJvdXRlckFjdGl2ZUF0dHI7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vdHNsaW50LWxvYWRlciEuL2FwcC9kaXJlY3RpdmVzL3JvdXRlci1hY3RpdmUudHNcbiAqKi8iLCJpbXBvcnQge0RpcmVjdGl2ZSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4vKlxuICogRGlyZWN0aXZlXG4gKiBYTGFyZ2UgaXMgYSBzaW1wbGUgZGlyZWN0aXZlIHRvIHNob3cgaG93IG9uZSBpcyBtYWRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t4LWxhcmdlXScgLy8gdXNpbmcgWyBdIG1lYW5zIHNlbGVjdGluZyBhdHRyaWJ1dGVzXG59KVxuZXhwb3J0IGNsYXNzIFhMYXJnZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgIC8vIHNpbXBsZSBET00gbWFuaXB1bGF0aW9uIHRvIHNldCBmb250IHNpemUgdG8geC1sYXJnZVxuICAgIC8vIGBuYXRpdmVFbGVtZW50YCBpcyB0aGUgZGlyZWN0IHJlZmVyZW5jZSB0byB0aGUgRE9NIGVsZW1lbnRcbiAgICAvLyBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAneC1sYXJnZSc7XG5cbiAgICAvLyBmb3Igc2VydmVyL3dlYndvcmtlciBzdXBwb3J0IHVzZSB0aGUgcmVuZGVyZXJcbiAgICByZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZm9udFNpemUnLCAneC1sYXJnZScpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L3RzbGludC1sb2FkZXIhLi9hcHAvaG9tZS9kaXJlY3RpdmVzL3gtbGFyZ2UudHNcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0ZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7VGl0bGV9IGZyb20gJy4vcHJvdmlkZXJzL3RpdGxlJztcbmltcG9ydCB7WExhcmdlfSBmcm9tICcuL2RpcmVjdGl2ZXMveC1sYXJnZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBUaGUgc2VsZWN0b3IgaXMgd2hhdCBhbmd1bGFyIGludGVybmFsbHkgdXNlc1xuICAvLyBmb3IgYGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpYCBpbiBvdXIgaW5kZXguaHRtbFxuICAvLyB3aGVyZSwgaW4gdGhpcyBjYXNlLCBzZWxlY3RvciBpcyB0aGUgc3RyaW5nICdhcHAnXG4gIHNlbGVjdG9yOiAnaG9tZScsICAvLyA8aG9tZT48L2hvbWU+XG4gIC8vIFdlIG5lZWQgdG8gdGVsbCBBbmd1bGFyJ3MgRGVwZW5kZW5jeSBJbmplY3Rpb24gd2hpY2ggcHJvdmlkZXJzIGFyZSBpbiBvdXIgYXBwLlxuICBwcm92aWRlcnM6IFtcbiAgICBUaXRsZVxuICBdLFxuICAvLyBXZSBuZWVkIHRvIHRlbGwgQW5ndWxhcidzIGNvbXBpbGVyIHdoaWNoIGRpcmVjdGl2ZXMgYXJlIGluIG91ciB0ZW1wbGF0ZS5cbiAgLy8gRG9pbmcgc28gd2lsbCBhbGxvdyBBbmd1bGFyIHRvIGF0dGFjaCBvdXIgYmVoYXZpb3IgdG8gYW4gZWxlbWVudFxuICBkaXJlY3RpdmVzOiBbXG4gICAgLi4uRk9STV9ESVJFQ1RJVkVTLFxuICAgIFhMYXJnZVxuICBdLFxuICAvLyBXZSBuZWVkIHRvIHRlbGwgQW5ndWxhcidzIGNvbXBpbGVyIHdoaWNoIGN1c3RvbSBwaXBlcyBhcmUgaW4gb3VyIHRlbXBsYXRlLlxuICBwaXBlczogWyBdLFxuICAvLyBPdXIgbGlzdCBvZiBzdHlsZXMgaW4gb3VyIGNvbXBvbmVudC4gV2UgbWF5IGFkZCBtb3JlIHRvIGNvbXBvc2UgbWFueSBzdHlsZXMgdG9nZXRoZXJcbiAgc3R5bGVzOiBbIHJlcXVpcmUoJy4vaG9tZS5jc3MnKSBdLFxuICAvLyBFdmVyeSBBbmd1bGFyIHRlbXBsYXRlIGlzIGZpcnN0IGNvbXBpbGVkIGJ5IHRoZSBicm93c2VyIGJlZm9yZSBBbmd1bGFyIHJ1bnMgaXQncyBjb21waWxlclxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBIb21lIHtcbiAgLy8gVHlwZVNjcmlwdCBwdWJsaWMgbW9kaWZpZXJzXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogVGl0bGUsIHB1YmxpYyBodHRwOiBIdHRwKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbyBIb21lIGNvbXBvbmVudCcpO1xuICB9XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vdHNsaW50LWxvYWRlciEuL2FwcC9ob21lL2hvbWUudHNcbiAqKi8iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGl0bGUge1xuICB2YWx1ZSA9ICdBbmd1bGFyIDInO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi90c2xpbnQtbG9hZGVyIS4vYXBwL2hvbWUvcHJvdmlkZXJzL3RpdGxlLnRzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==