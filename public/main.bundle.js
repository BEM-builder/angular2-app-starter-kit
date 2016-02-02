webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*
	 * Providers provided by Angular
	 */
	var core_1 = __webpack_require__(5);
	var browser_1 = __webpack_require__(144);
	var router_1 = __webpack_require__(45);
	var http_1 = __webpack_require__(94);
	/*
	 * App Component
	 * our top level component that holds all of our components
	 */
	var app_1 = __webpack_require__(494);
	/*
	 * Bootstrap our Angular app with a top level component `App` and inject
	 * our Services and Providers into Angular's dependency injection
	 */
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
	/*
	 * Angular 2 decorators and services
	 */
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(45);
	var common_1 = __webpack_require__(93);
	var router_active_1 = __webpack_require__(495);
	var home_1 = __webpack_require__(497);
	/*
	 * App Component
	 * Top Level Component
	 */
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
	/*
	 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
	 * more angular app examples that you may copy/paste
	 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
	 * For help or questions please contact us at @AngularClass on twitter
	 * or our chat on Slack at https://AngularClass.com/slack-join
	 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
	 */


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
	/**
	 * RouterActive dynamically finds the first element with routerLink and toggles the active class
	 *
	 * ## Use
	 *
	 * ```
	 * <li router-active="active"><a [routerLink]=" ['/Home'] ">Home</a></li>
	 * <li [routerActive]=" activeStringValue "><a [routerLink]=" ['/Home'] ">Home</a></li>
	 * ```
	 */
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
	/*
	 * Directive
	 * XLarge is a simple directive to show how one is made
	 */
	var XLarge = (function () {
	    function XLarge(element, renderer) {
	        // simple DOM manipulation to set font size to x-large
	        // `nativeElement` is the direct reference to the DOM element
	        // element.nativeElement.style.fontSize = 'x-large';
	        // for server/webworker support use the renderer
	        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
	    }
	    XLarge = __decorate([
	        core_1.Directive({
	            selector: '[x-large]' // using [ ] means selecting attributes
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
	    // TypeScript public modifiers
	    function Home(title, http) {
	        this.title = title;
	        this.http = http;
	    }
	    Home.prototype.ngOnInit = function () {
	        console.log('hello Home component');
	    };
	    Home = __decorate([
	        core_1.Component({
	            // The selector is what angular internally uses
	            // for `document.querySelectorAll(selector)` in our index.html
	            // where, in this case, selector is the string 'app'
	            selector: 'home',
	            // We need to tell Angular's Dependency Injection which providers are in our app.
	            providers: [
	                title_1.Title
	            ],
	            // We need to tell Angular's compiler which directives are in our template.
	            // Doing so will allow Angular to attach our behavior to an element
	            directives: common_1.FORM_DIRECTIVES.concat([
	                x_large_1.XLarge
	            ]),
	            // We need to tell Angular's compiler which custom pipes are in our template.
	            pipes: [],
	            // Our list of styles in our component. We may add more to compose many styles together
	            styles: [__webpack_require__(297)],
	            // Every Angular template is first compiled by the browser before Angular runs it's compiler
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY3NzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLnRzIiwid2VicGFjazovLy8uL2FwcC9kaXJlY3RpdmVzL3JvdXRlci1hY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvZGlyZWN0aXZlcy94LWxhcmdlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvcHJvdmlkZXJzL3RpdGxlLnRzIl0sIm5hbWVzIjpbIm1haW4iLCJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJSb3V0ZXJBY3RpdmUiLCJSb3V0ZXJBY3RpdmUuY29uc3RydWN0b3IiLCJSb3V0ZXJBY3RpdmUuX2F0dHJPclByb3AiLCJYTGFyZ2UiLCJYTGFyZ2UuY29uc3RydWN0b3IiLCJIb21lIiwiSG9tZS5jb25zdHJ1Y3RvciIsIkhvbWUubmdPbkluaXQiLCJUaXRsZSIsIlRpdGxlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztJQUVHO0FBQ0gsa0NBQXNCLENBQWUsQ0FBQztBQUN0QyxxQ0FBaUQsR0FBMkIsQ0FBQztBQUM3RSxvQ0FBdUUsRUFBaUIsQ0FBQztBQUN6RixrQ0FBNkIsRUFBZSxDQUFDO0FBRTdDOzs7SUFHRztBQUNILGlDQUFrQixHQUFXLENBQUM7QUFDOUI7OztJQUdHO0FBQ0gsU0FBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0tBQzVDQSxtQkFBU0EsQ0FBQ0EsU0FBR0EsRUFDUkEsQ0FBQ0EsWUFBWUEsS0FBS0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsR0FBR0EsRUFBRUEsR0FBR0EsaUNBQXVCQSxDQUFDQSxRQUNqRUEscUJBQWNBLEVBQ2RBLHlCQUFnQkE7U0FDbkJBLGNBQU9BLENBQUNBLHlCQUFnQkEsRUFBRUEs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OERBO2FBQzlEQSxvREFBb0RBO2FBQ3BEQSxRQUFRQSxFQUFFQSxNQUFNQTthQUNoQkEsaUZBQWlGQTthQUNqRkEsU0FBU0EsRUFBRUE7aUJBQ1RBLGFBQUtBO2NBQ05BO2FBQ0RBLDJFQUEyRUE7YUFDM0VBLG1FQUFtRUE7YUFDbkVBLFVBQVVBLEVBQ0xBLHdCQUFlQTtpQkFDbEJBLGdCQUFNQTtlQUNQQTthQUNEQSw2RUFBNkVBO2FBQzdFQSxLQUFLQSxFQUFFQSxFQUFHQTthQUNWQSx1RkFBdUZBO2FBQ3ZGQSxNQUFNQSxFQUFFQSxDQUFFLG1CQUFPQSxDQUFDLEdBQVlBLENBQUNBLENBQUVBO2FBQ2pDQSw0RkFBNEZBO2FBQzVGQSxRQUFRQSxFQUFFLG1CQUFPQSxDQUFDLEdBQWFBLENBQUNBO1VBQ2pDQSxDQUFDQTs7Y0FXREE7S0FBREEsV0FBQ0E7QUFBREEsRUFBQ0EsSUFBQTtBQVZZLGFBQUksT0FVaEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNELGtDQUF5QixDQUFlLENBQUM7QUFFekM7S0FHRUc7U0FEQUMsVUFBS0EsR0FBR0EsV0FBV0EsQ0FBQ0E7S0FFcEJBLENBQUNBO0tBSkhEO1NBQUNBLGlCQUFVQSxFQUFFQTs7ZUFLWkE7S0FBREEsWUFBQ0E7QUFBREEsRUFBQ0EsSUFBQTtBQUpZLGNBQUssUUFJakIiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogUHJvdmlkZXJzIHByb3ZpZGVkIGJ5IEFuZ3VsYXJcbiAqL1xuaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Ym9vdHN0cmFwLCBFTEVNRU5UX1BST0JFX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlMsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbi8qXG4gKiBBcHAgQ29tcG9uZW50XG4gKiBvdXIgdG9wIGxldmVsIGNvbXBvbmVudCB0aGF0IGhvbGRzIGFsbCBvZiBvdXIgY29tcG9uZW50c1xuICovXG5pbXBvcnQge0FwcH0gZnJvbSAnLi9hcHAvYXBwJztcbi8qXG4gKiBCb290c3RyYXAgb3VyIEFuZ3VsYXIgYXBwIHdpdGggYSB0b3AgbGV2ZWwgY29tcG9uZW50IGBBcHBgIGFuZCBpbmplY3RcbiAqIG91ciBTZXJ2aWNlcyBhbmQgUHJvdmlkZXJzIGludG8gQW5ndWxhcidzIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG4gKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiBtYWluKCkge1xuICBib290c3RyYXAoQXBwLCBbXG4gICAgLi4uKCdwcm9kdWN0aW9uJyA9PT0gcHJvY2Vzcy5lbnYuRU5WID8gW10gOiBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyksXG4gICAgLi4uSFRUUF9QUk9WSURFUlMsXG4gICAgLi4uUk9VVEVSX1BST1ZJREVSUyxcbiAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHsgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0pXG4gIF0pXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi90c2xpbnQtbG9hZGVyIS4vbWFpbi50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvaG9tZS9ob21lLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxuICA8c3BhbiB4LWxhcmdlPllvdXIgQ29udGVudCBIZXJlPC9zcGFuPlxcbiAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFt2YWx1ZV09XFxcInRpdGxlLnZhbHVlXFxcIiAoaW5wdXQpPVxcXCJ0aXRsZS52YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWVcXFwiIGF1dG9mb2N1cz5cXG4gIDwhLS1cXG4gICAgUmF0aGVyIHRoYW4gd2lyaW5nIHVwIHR3by13YXkgZGF0YS1iaW5kaW5nIG91cnNlbHZlc1xcbiAgICB3ZSBjYW4gdXNlIEFuZ3VsYXIncyBbKG5nTW9kZWwpXSBzeW50YXhcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ0aXRsZS52YWx1ZVxcXCI+XFxuICAtLT5cXG5cXG4gIDxwcmU+dGhpcy50aXRsZSA9IHt7IHRpdGxlIHwganNvbiB9fTwvcHJlPlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9ob21lL2hvbWUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLypcbiAqIEFuZ3VsYXIgMiBkZWNvcmF0b3JzIGFuZCBzZXJ2aWNlc1xuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtGT1JNX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuaW1wb3J0IHtSb3V0ZXJBY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yb3V0ZXItYWN0aXZlJztcbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9ob21lL2hvbWUnO1xuXG5cbi8qXG4gKiBBcHAgQ29tcG9uZW50XG4gKiBUb3AgTGV2ZWwgQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHByb3ZpZGVyczogWyAuLi5GT1JNX1BST1ZJREVSUyBdLFxuICBkaXJlY3RpdmVzOiBbIC4uLlJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJBY3RpdmUgXSxcbiAgcGlwZXM6IFtdLFxuICBzdHlsZXM6IFtgXG4gICAgbmF2IHVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICB9XG4gICAgbmF2IGxpIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG4gICAgbmF2IGxpLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdj5cbiAgICAgICAgPGgxPkhlbGxvIHt7IG5hbWUgfX08L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIHJvdXRlci1hY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIiBbJ0luZGV4J10gXCI+SW5kZXg8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgcm91dGVyLWFjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiIFsnSG9tZSddIFwiPkhvbWU8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuXG4gICAgPG1haW4+XG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9tYWluPlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIFdlYlBhY2sgQW5ndWxhciAyIFN0YXJ0ZXIgYnkgPGEgW2hyZWZdPVwidXJsXCI+QEFuZ3VsYXJDbGFzczwvYT5cbiAgICA8L2Zvb3Rlcj5cbiAgYFxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWUsIG5hbWU6ICdJbmRleCcgfSxcbiAgeyBwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IEhvbWUsIG5hbWU6ICdIb21lJyB9LFxuICB7IHBhdGg6ICcvKionLCByZWRpcmVjdFRvOiBbJ0luZGV4J10gfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHAge1xuICBuYW1lID0gJ0FuZ3VsYXIgMiBXZWJwYWNrIFN0YXJ0ZXInO1xuICB1cmwgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS9Bbmd1bGFyQ2xhc3MnO1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG59XG5cbi8qXG4gKiBQbGVhc2UgcmV2aWV3IHRoZSBodHRwczovL2dpdGh1Yi5jb20vQW5ndWxhckNsYXNzL2FuZ3VsYXIyLWV4YW1wbGVzLyByZXBvIGZvclxuICogbW9yZSBhbmd1bGFyIGFwcCBleGFtcGxlcyB0aGF0IHlvdSBtYXkgY29weS9wYXN0ZVxuICogKFRoZSBleGFtcGxlcyBtYXkgbm90IGJlIHVwZGF0ZWQgYXMgcXVpY2tseS4gUGxlYXNlIG9wZW4gYW4gaXNzdWUgb24gZ2l0aHViIGZvciB1cyB0byB1cGRhdGUgaXQpXG4gKiBGb3IgaGVscCBvciBxdWVzdGlvbnMgcGxlYXNlIGNvbnRhY3QgdXMgYXQgQEFuZ3VsYXJDbGFzcyBvbiB0d2l0dGVyXG4gKiBvciBvdXIgY2hhdCBvbiBTbGFjayBhdCBodHRwczovL0FuZ3VsYXJDbGFzcy5jb20vc2xhY2stam9pblxuICogb3IgdmlhIGNoYXQgb24gR2l0dGVyIGF0IGh0dHBzOi8vZ2l0dGVyLmltL0FuZ3VsYXJDbGFzcy9hbmd1bGFyMi13ZWJwYWNrLXN0YXJ0ZXJcbiAqL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi90c2xpbnQtbG9hZGVyIS4vYXBwL2FwcC50c1xuICoqLyIsImltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgUXVlcnksIFF1ZXJ5TGlzdCwgQXR0cmlidXRlLCBFbGVtZW50UmVmLCBSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0luc3RydWN0aW9uLCBSb3V0ZXJMaW5rfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG4vKipcbiAqIFJvdXRlckFjdGl2ZSBkeW5hbWljYWxseSBmaW5kcyB0aGUgZmlyc3QgZWxlbWVudCB3aXRoIHJvdXRlckxpbmsgYW5kIHRvZ2dsZXMgdGhlIGFjdGl2ZSBjbGFzc1xuICpcbiAqICMjIFVzZVxuICpcbiAqIGBgYFxuICogPGxpIHJvdXRlci1hY3RpdmU9XCJhY3RpdmVcIj48YSBbcm91dGVyTGlua109XCIgWycvSG9tZSddIFwiPkhvbWU8L2E+PC9saT5cbiAqIDxsaSBbcm91dGVyQWN0aXZlXT1cIiBhY3RpdmVTdHJpbmdWYWx1ZSBcIj48YSBbcm91dGVyTGlua109XCIgWycvSG9tZSddIFwiPkhvbWU8L2E+PC9saT5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcm91dGVyLWFjdGl2ZV0nLFxuICBpbnB1dHM6IFsncm91dGVyQWN0aXZlJ11cbn0pXG5leHBvcnQgY2xhc3MgUm91dGVyQWN0aXZlIHtcbiAgcm91dGVyQWN0aXZlOiBzdHJpbmcgPSBudWxsO1xuICByb3V0ZXJBY3RpdmVBdHRyOiBzdHJpbmcgPSAnYWN0aXZlJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0ZXI6IFJvdXRlcixcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcixcbiAgICBAUXVlcnkoUm91dGVyTGluaykgcm91dGVyTGluazogUXVlcnlMaXN0PFJvdXRlckxpbms+LFxuICAgIEBBdHRyaWJ1dGUoJ3JvdXRlci1hY3RpdmUnKSByb3V0ZXJBY3RpdmVBdHRyOiBzdHJpbmcpIHtcblxuICAgIHJvdXRlci5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgbGV0IGFjdGl2ZSA9ICg8YW55PnJvdXRlckxpbmspLmZpcnN0LmlzUm91dGVBY3RpdmU7XG4gICAgICByZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hdHRyT3JQcm9wKCksIGFjdGl2ZSk7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBfYXR0ck9yUHJvcCgpIHtcbiAgICByZXR1cm4gaXNQcmVzZW50KHRoaXMucm91dGVyQWN0aXZlKSA/IHRoaXMucm91dGVyQWN0aXZlIDogdGhpcy5yb3V0ZXJBY3RpdmVBdHRyO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L3RzbGludC1sb2FkZXIhLi9hcHAvZGlyZWN0aXZlcy9yb3V0ZXItYWN0aXZlLnRzXG4gKiovIiwiaW1wb3J0IHtEaXJlY3RpdmUsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuLypcbiAqIERpcmVjdGl2ZVxuICogWExhcmdlIGlzIGEgc2ltcGxlIGRpcmVjdGl2ZSB0byBzaG93IGhvdyBvbmUgaXMgbWFkZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbeC1sYXJnZV0nIC8vIHVzaW5nIFsgXSBtZWFucyBzZWxlY3RpbmcgYXR0cmlidXRlc1xufSlcbmV4cG9ydCBjbGFzcyBYTGFyZ2Uge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICAvLyBzaW1wbGUgRE9NIG1hbmlwdWxhdGlvbiB0byBzZXQgZm9udCBzaXplIHRvIHgtbGFyZ2VcbiAgICAvLyBgbmF0aXZlRWxlbWVudGAgaXMgdGhlIGRpcmVjdCByZWZlcmVuY2UgdG8gdGhlIERPTSBlbGVtZW50XG4gICAgLy8gZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJ3gtbGFyZ2UnO1xuXG4gICAgLy8gZm9yIHNlcnZlci93ZWJ3b3JrZXIgc3VwcG9ydCB1c2UgdGhlIHJlbmRlcmVyXG4gICAgcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2ZvbnRTaXplJywgJ3gtbGFyZ2UnKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi90c2xpbnQtbG9hZGVyIS4vYXBwL2hvbWUvZGlyZWN0aXZlcy94LWxhcmdlLnRzXG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge1RpdGxlfSBmcm9tICcuL3Byb3ZpZGVycy90aXRsZSc7XG5pbXBvcnQge1hMYXJnZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3gtbGFyZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gVGhlIHNlbGVjdG9yIGlzIHdoYXQgYW5ndWxhciBpbnRlcm5hbGx5IHVzZXNcbiAgLy8gZm9yIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKWAgaW4gb3VyIGluZGV4Lmh0bWxcbiAgLy8gd2hlcmUsIGluIHRoaXMgY2FzZSwgc2VsZWN0b3IgaXMgdGhlIHN0cmluZyAnYXBwJ1xuICBzZWxlY3RvcjogJ2hvbWUnLCAgLy8gPGhvbWU+PC9ob21lPlxuICAvLyBXZSBuZWVkIHRvIHRlbGwgQW5ndWxhcidzIERlcGVuZGVuY3kgSW5qZWN0aW9uIHdoaWNoIHByb3ZpZGVycyBhcmUgaW4gb3VyIGFwcC5cbiAgcHJvdmlkZXJzOiBbXG4gICAgVGl0bGVcbiAgXSxcbiAgLy8gV2UgbmVlZCB0byB0ZWxsIEFuZ3VsYXIncyBjb21waWxlciB3aGljaCBkaXJlY3RpdmVzIGFyZSBpbiBvdXIgdGVtcGxhdGUuXG4gIC8vIERvaW5nIHNvIHdpbGwgYWxsb3cgQW5ndWxhciB0byBhdHRhY2ggb3VyIGJlaGF2aW9yIHRvIGFuIGVsZW1lbnRcbiAgZGlyZWN0aXZlczogW1xuICAgIC4uLkZPUk1fRElSRUNUSVZFUyxcbiAgICBYTGFyZ2VcbiAgXSxcbiAgLy8gV2UgbmVlZCB0byB0ZWxsIEFuZ3VsYXIncyBjb21waWxlciB3aGljaCBjdXN0b20gcGlwZXMgYXJlIGluIG91ciB0ZW1wbGF0ZS5cbiAgcGlwZXM6IFsgXSxcbiAgLy8gT3VyIGxpc3Qgb2Ygc3R5bGVzIGluIG91ciBjb21wb25lbnQuIFdlIG1heSBhZGQgbW9yZSB0byBjb21wb3NlIG1hbnkgc3R5bGVzIHRvZ2V0aGVyXG4gIHN0eWxlczogWyByZXF1aXJlKCcuL2hvbWUuY3NzJykgXSxcbiAgLy8gRXZlcnkgQW5ndWxhciB0ZW1wbGF0ZSBpcyBmaXJzdCBjb21waWxlZCBieSB0aGUgYnJvd3NlciBiZWZvcmUgQW5ndWxhciBydW5zIGl0J3MgY29tcGlsZXJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgSG9tZSB7XG4gIC8vIFR5cGVTY3JpcHQgcHVibGljIG1vZGlmaWVyc1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGl0bGU6IFRpdGxlLCBwdWJsaWMgaHR0cDogSHR0cCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gSG9tZSBjb21wb25lbnQnKTtcbiAgfVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L3RzbGludC1sb2FkZXIhLi9hcHAvaG9tZS9ob21lLnRzXG4gKiovIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRpdGxlIHtcbiAgdmFsdWUgPSAnQW5ndWxhciAyJztcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vdHNsaW50LWxvYWRlciEuL2FwcC9ob21lL3Byb3ZpZGVycy90aXRsZS50c1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=