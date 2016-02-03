webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*
	 * Providers provided by Angular
	 */
	var core_1 = __webpack_require__(5);
	var browser_1 = __webpack_require__(144);
	var router_1 = __webpack_require__(64);
	var http_1 = __webpack_require__(143);
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
	    browser_1.bootstrap(app_1.AppComponent, ('production' === process.env.ENV ? [] : browser_1.ELEMENT_PROBE_PROVIDERS).concat(http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, [
	        core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
	    ]))
	        .catch(function (err) { return console.error(err); });
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ },

/***/ 141:
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
	var router_1 = __webpack_require__(64);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home-component',
	            template: "\n    <h1>Test app home page</h1>\n    <nav>\n      <a [routerLink]=\"['FirstPage']\">Player page</a>\n      <a [routerLink]=\"['SecondPage']\">Forms page</a>\n      <a [routerLink]=\"['HomePage']\">HomePage</a>\n    </nav>\n    ",
	            directives: router_1.ROUTER_DIRECTIVES
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	})();
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 298:
/***/ function(module, exports) {

	module.exports = "<div class=\"playerContainer\">\n    <home-component></home-component>\n    <video id=\"player\" src=\"http://1cdp.look1.ru/trailer/e9350309-194b-4e0d-b967-ccd4647baeb4.mp4\" volume=\"0.3\" width=\"800\" height=\"450\"></video>\n    <div class=\"controls\">\n        <button id=\"playpause\" class=\"control btn btn-success\" (click)=\"playbackToggle()\">\n            Play\n        </button>\n        <div id=\"progressbar\">\n            <div id=\"progressindicator\" [style.width.%]=\"getCurrentPercentage()\"></div>\n        </div>\n        <button id=\"fullscreen\" class=\"control btn btn-success\" (click)=\"requestFullScreen()\">\n            Full\n        </button>\n        <span id=\"durationTime\">{{getDuration() | convertToFullTime}}</span>\n        <span class=\"divider\"> / </span>\n        <span id=\"currentTime\">{{getCurrentTime() | convertToFullTime}}</span>\n    </div>\n</div>\n<div id=\"log\" class=\"playerlog\" (click)=\"stopScrolling()\">Click to stop scrolling!<br/></div>"

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
	var homepage_component_1 = __webpack_require__(141);
	var firstpage_component_1 = __webpack_require__(495);
	var secondpage_component_1 = __webpack_require__(496);
	var router_1 = __webpack_require__(64);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: "\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n  ",
	            directives: router_1.ROUTER_DIRECTIVES
	        }),
	        router_1.RouteConfig([
	            { path: '/', name: 'HomePage', component: homepage_component_1.HomeComponent, useAsDefault: true },
	            { path: '/firstpage', name: 'FirstPage', component: firstpage_component_1.FirstPageComponent },
	            { path: '/secondpage', name: 'SecondPage', component: secondpage_component_1.SecondPageComponent }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	})();
	exports.AppComponent = AppComponent;


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
	var core_1 = __webpack_require__(5);
	var timepipe_pipe_1 = __webpack_require__(497);
	var homepage_component_1 = __webpack_require__(141);
	var FirstPageComponent = (function () {
	    function FirstPageComponent() {
	        this.player = null;
	        this.controls = null;
	        this.currentTime = 0;
	        this.duration = 0;
	        this.currentPercentage = 0;
	        this.clicked = false;
	    }
	    FirstPageComponent.prototype.getPlayer = function () {
	        return this.player;
	    };
	    FirstPageComponent.prototype.setPlayer = function (htmlPlayerElement) {
	        this.player = htmlPlayerElement;
	    };
	    FirstPageComponent.prototype.getControls = function () {
	        return this.controls;
	    };
	    FirstPageComponent.prototype.setControls = function (controls) {
	        this.controls = controls;
	    };
	    FirstPageComponent.prototype.getDuration = function () {
	        return this.duration;
	    };
	    FirstPageComponent.prototype.setDuration = function (duration) {
	        this.duration = duration;
	    };
	    FirstPageComponent.prototype.getCurrentPercentage = function () {
	        return this.currentPercentage;
	    };
	    FirstPageComponent.prototype.setCurrentPercentage = function (currentPercentage) {
	        this.currentPercentage = currentPercentage;
	    };
	    FirstPageComponent.prototype.getCurrentTime = function () {
	        return this.currentTime;
	    };
	    FirstPageComponent.prototype.setCurrentTime = function (currentTime) {
	        this.currentTime = currentTime;
	    };
	    FirstPageComponent.prototype.setToDefault = function () {
	        this.setDuration(0);
	        this.setCurrentTime(0);
	        this.setCurrentPercentage(0);
	    };
	    FirstPageComponent.prototype.init = function (player, controls) {
	        var that = this;
	        this.setPlayer(player);
	        this.setControls(controls);
	        this.getPlayer().addEventListener('play', function () {
	            that.appendToLog('Play event fired', true);
	            that.controls.playpause.innerHTML = 'Pause';
	        });
	        this.getPlayer().addEventListener('pause', function () {
	            that.appendToLog('Pause event fired', true);
	            that.controls.playpause.innerHTML = 'Play';
	        });
	        this.getPlayer().addEventListener('canplay', function () {
	            that.appendToLog('Canplay event fired, video ready', true);
	            that.setDuration(that.getPlayer().duration);
	        });
	        this.getPlayer().addEventListener('durationchange', function () {
	            that.appendToLog('Durationchange event fired, now ' + that.getDuration().toString(), true);
	            that.setDuration(that.getPlayer().duration);
	        });
	        this.getPlayer().addEventListener('timeupdate', function () {
	            that.appendToLog('Timeupdate, current is ' + that.getCurrentTime().toString());
	            that.setCurrentTime(that.getPlayer().currentTime);
	            that.setCurrentPercentage(parseInt((Math.floor(that.getCurrentTime()) / Math.floor(that.getDuration()) * 100).toFixed(0), 10));
	        });
	        this.getPlayer().addEventListener('ended', function () {
	            that.appendToLog('Ended event fired', true);
	            that.getPlayer().pause();
	            that.controls.playpause.innerHTML = 'Play';
	            that.setToDefault();
	        });
	    };
	    FirstPageComponent.prototype.appendToLog = function (string, special) {
	        if (special === void 0) { special = false; }
	        var log = this.controls.log;
	        if (special) {
	            log.innerHTML = log.innerHTML + '-----------------------------------------------' + '<br/>';
	        }
	        log.innerHTML = log.innerHTML + string + '<br/>';
	        if (special) {
	            log.innerHTML = log.innerHTML + '-----------------------------------------------' + '<br/>';
	        }
	        if (!this.clicked) {
	            log.scrollTop = log.scrollHeight;
	        }
	    };
	    FirstPageComponent.prototype.stopScrolling = function () {
	        this.clicked = true;
	    };
	    FirstPageComponent.prototype.ngAfterViewInit = function () {
	        this.init(document.getElementById('player'), {
	            playpause: document.getElementById('playpause'),
	            log: document.getElementById('log')
	        });
	    };
	    FirstPageComponent.prototype.playbackToggle = function () {
	        (this.getPlayer().paused) ? this.getPlayer().play() : this.getPlayer().pause();
	    };
	    FirstPageComponent.prototype.requestFullScreen = function () {
	        this.appendToLog('Fullscreen requested', true);
	        if (this.getPlayer().requestFullscreen) {
	            this.getPlayer().requestFullscreen();
	        }
	        else if (this.getPlayer().mozRequestFullScreen) {
	            this.getPlayer().mozRequestFullScreen();
	        }
	        else if (this.getPlayer().webkitRequestFullscreen) {
	            this.getPlayer().webkitRequestFullscreen();
	        }
	    };
	    FirstPageComponent = __decorate([
	        core_1.Component({
	            selector: 'firstpage',
	            pipes: [timepipe_pipe_1.Conversion],
	            template: __webpack_require__(298),
	            directives: [homepage_component_1.HomeComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FirstPageComponent);
	    return FirstPageComponent;
	})();
	exports.FirstPageComponent = FirstPageComponent;


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
	var homepage_component_1 = __webpack_require__(141);
	var SecondPageComponent = (function () {
	    function SecondPageComponent() {
	        this.firstFormSubmitCounter = 0;
	        this.secondFormData = '';
	        this.model = {
	            name: 'Somename',
	            surname: 'Somesurname'
	        };
	        this.selectable = [
	            'firstItem', 'secondItem', 'thirdItem'
	        ];
	    }
	    SecondPageComponent.prototype.getFirstFormSubmitCounter = function () {
	        return this.firstFormSubmitCounter;
	    };
	    SecondPageComponent.prototype.onFirstFormSubmit = function () {
	        this.firstFormSubmitCounter++;
	    };
	    SecondPageComponent.prototype.getSecondFormData = function () {
	        return this.secondFormData;
	    };
	    SecondPageComponent.prototype.onSecondFormSubmit = function () {
	        var selectable = document.getElementById('selectable');
	        this.secondFormData = selectable[selectable.selectedIndex].text;
	    };
	    SecondPageComponent.prototype.getModel = function () {
	        return JSON.stringify(this.model);
	    };
	    SecondPageComponent.prototype.getSelectables = function () {
	        return this.selectable.toString();
	    };
	    SecondPageComponent = __decorate([
	        core_1.Component({
	            selector: 'secondpage',
	            template: "\n            <div class=\"container\">\n                <home-component></home-component>\n                <div class=\"form first\">\n                    <h1>First form</h1>\n                    <form (ngSubmit)=\"onFirstFormSubmit()\" #firstForm=\"ngForm\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Name</label>\n                            <input type=\"text\" class=\"form-control\" required\n                                [(ngModel)]=\"model.name\"\n                                ngControl=\"name\"\n                                #name=\"ngForm\">\n                            <div [hidden]=\"name.valid\" class=\"alert alert-danger\">Name is required</div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"surname\">Surname</label>\n                            <input type=\"text\" class=\"form-control\"\n                                [(ngModel)]=\"model.surname\"\n                                ngControl=\"surname\"\n                                #surname=\"ngForm\">\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!firstForm.form.valid\">Submit</button>\n                    </form>\n                </div>\n\n                <div class=\"form second\">\n                    <h1>Second form</h1>\n                    <form (submit)=\"onSecondFormSubmit()\" #selectables=\"ngForm\">\n                        <div class=\"form-group\">\n                            <label for=\"selectable\">Selectables</label>\n                            <select id=\"selectable\" class=\"form-control\" required>\n                                <option *ngFor=\"#s of selectable\" [value]=\"s\">{{s}}</option>\n                            </select>\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n                    </form>\n                </div>\n            </div>\n            <div id=\"log\">\n                <b>First form submits counter:</b> {{firstFormSubmitCounter}}<br/>\n                <b>Submitted from second form:</b> {{secondFormData}}<br/>\n                <b>Model:</b> {{getModel()}}<br/>\n                <b>Selectables:</b> {{getSelectables()}}\n            </div>\n        ",
	            directives: [homepage_component_1.HomeComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SecondPageComponent);
	    return SecondPageComponent;
	})();
	exports.SecondPageComponent = SecondPageComponent;


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
	var Conversion = (function () {
	    function Conversion() {
	    }
	    Conversion.prototype.transform = function (value, args) {
	        var secondsRouded = Math.floor(value);
	        var hours = Math.floor(secondsRouded / 3600);
	        var minutes = Math.floor((secondsRouded - (hours * 3600)) / 60);
	        var seconds = secondsRouded - (hours * 3600) - (minutes * 60);
	        var hoursString = hours.toString();
	        var minutesString = minutes.toString();
	        var secondsString = seconds.toString();
	        if (hours < 10) {
	            hoursString = "0" + hours.toString();
	        }
	        if (minutes < 10) {
	            minutesString = "0" + minutes.toString();
	        }
	        if (seconds < 10) {
	            secondsString = "0" + seconds.toString();
	        }
	        var timeString = hoursString + ':' + minutesString + ':' + secondsString;
	        return timeString;
	    };
	    Conversion = __decorate([
	        core_1.Pipe({
	            name: 'convertToFullTime'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Conversion);
	    return Conversion;
	})();
	exports.Conversion = Conversion;


/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZmlyc3RwYWdlL2ZpcnN0cGFnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9maXJzdHBhZ2UvZmlyc3RwYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY29uZHBhZ2Uvc2Vjb25kcGFnZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcGlwZXMvdGltZXBpcGUvdGltZXBpcGUucGlwZS50cyJdLCJuYW1lcyI6WyJtYWluIiwiSG9tZUNvbXBvbmVudCIsIkhvbWVDb21wb25lbnQuY29uc3RydWN0b3IiLCJBcHBDb21wb25lbnQiLCJBcHBDb21wb25lbnQuY29uc3RydWN0b3IiLCJGaXJzdFBhZ2VDb21wb25lbnQiLCJGaXJzdFBhZ2VDb21wb25lbnQuY29uc3RydWN0b3IiLCJGaXJzdFBhZ2VDb21wb25lbnQuZ2V0UGxheWVyIiwiRmlyc3RQYWdlQ29tcG9uZW50LnNldFBsYXllciIsIkZpcnN0UGFnZUNvbXBvbmVudC5nZXRDb250cm9scyIsIkZpcnN0UGFnZUNvbXBvbmVudC5zZXRDb250cm9scyIsIkZpcnN0UGFnZUNvbXBvbmVudC5nZXREdXJhdGlvbiIsIkZpcnN0UGFnZUNvbXBvbmVudC5zZXREdXJhdGlvbiIsIkZpcnN0UGFnZUNvbXBvbmVudC5nZXRDdXJyZW50UGVyY2VudGFnZSIsIkZpcnN0UGFnZUNvbXBvbmVudC5zZXRDdXJyZW50UGVyY2VudGFnZSIsIkZpcnN0UGFnZUNvbXBvbmVudC5nZXRDdXJyZW50VGltZSIsIkZpcnN0UGFnZUNvbXBvbmVudC5zZXRDdXJyZW50VGltZSIsIkZpcnN0UGFnZUNvbXBvbmVudC5zZXRUb0RlZmF1bHQiLCJGaXJzdFBhZ2VDb21wb25lbnQuaW5pdCIsIkZpcnN0UGFnZUNvbXBvbmVudC5hcHBlbmRUb0xvZyIsIkZpcnN0UGFnZUNvbXBvbmVudC5zdG9wU2Nyb2xsaW5nIiwiRmlyc3RQYWdlQ29tcG9uZW50Lm5nQWZ0ZXJWaWV3SW5pdCIsIkZpcnN0UGFnZUNvbXBvbmVudC5wbGF5YmFja1RvZ2dsZSIsIkZpcnN0UGFnZUNvbXBvbmVudC5yZXF1ZXN0RnVsbFNjcmVlbiIsIlNlY29uZFBhZ2VDb21wb25lbnQiLCJTZWNvbmRQYWdlQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiU2Vjb25kUGFnZUNvbXBvbmVudC5nZXRGaXJzdEZvcm1TdWJtaXRDb3VudGVyIiwiU2Vjb25kUGFnZUNvbXBvbmVudC5vbkZpcnN0Rm9ybVN1Ym1pdCIsIlNlY29uZFBhZ2VDb21wb25lbnQuZ2V0U2Vjb25kRm9ybURhdGEiLCJTZWNvbmRQYWdlQ29tcG9uZW50Lm9uU2Vjb25kRm9ybVN1Ym1pdCIsIlNlY29uZFBhZ2VDb21wb25lbnQuZ2V0TW9kZWwiLCJTZWNvbmRQYWdlQ29tcG9uZW50LmdldFNlbGVjdGFibGVzIiwiQ29udmVyc2lvbiIsIkNvbnZlcnNpb24uY29uc3RydWN0b3IiLCJDb252ZXJzaW9uLnRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7SUFFRztBQUNILGtDQUFzQixDQUFlLENBQUM7QUFDdEMscUNBQWlELEdBQTJCLENBQUM7QUFDN0Usb0NBQXVFLEVBQWlCLENBQUM7QUFDekYsa0NBQTZCLEdBQWUsQ0FBQztBQUU3Qzs7O0lBR0c7QUFDSCxpQ0FBMkIsR0FBVyxDQUFDO0FBQ3ZDOzs7SUFHRztBQUNILFNBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtLQUM1Q0EsbUJBQVNBLENBQUNBLGtCQUFZQSxFQUNqQkEsQ0FBQ0EsWUFBWUEsS0FBS0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsR0FBR0EsRUFBRUEsR0FBR0EsaUNBQXVCQSxDQUFDQSxRQUNqRUEscUJBQWNBLEVBQ2RB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T0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7YUFBQUEsYUFBYUEsR0FBR0EsR0FBR0EsR0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7U0FBQUEsQ0FBQ0E7U0FDM0RBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2FBQUFBLGFBQWFBLEdBQUdBLEdBQUdBLEdBQUNBLE9BQU9BLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO1NBQUFBLENBQUNBO1NBRTNEQSxJQUFJQSxVQUFVQSxHQUFlQSxXQUFXQSxHQUFDQSxHQUFHQSxHQUFDQSxhQUFhQSxHQUFDQSxHQUFHQSxHQUFDQSxhQUFhQSxDQUFDQTtTQUM3RUEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7S0FDdEJBLENBQUNBO0tBdEJMRjtTQUFDQSxXQUFJQSxDQUFDQTthQUNGQSxJQUFJQSxFQUFFQSxtQkFBbUJBO1VBQzVCQSxDQUFDQTs7b0JBcUJEQTtLQUFEQSxpQkFBQ0E7QUFBREEsRUFBQ0EsSUFBQTtBQW5CWSxtQkFBVSxhQW1CdEIiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogUHJvdmlkZXJzIHByb3ZpZGVkIGJ5IEFuZ3VsYXJcbiAqL1xuaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Ym9vdHN0cmFwLCBFTEVNRU5UX1BST0JFX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlMsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbi8qXG4gKiBBcHAgQ29tcG9uZW50XG4gKiBvdXIgdG9wIGxldmVsIGNvbXBvbmVudCB0aGF0IGhvbGRzIGFsbCBvZiBvdXIgY29tcG9uZW50c1xuICovXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9hcHAvYXBwJztcbi8qXG4gKiBCb290c3RyYXAgb3VyIEFuZ3VsYXIgYXBwIHdpdGggYSB0b3AgbGV2ZWwgY29tcG9uZW50IGBBcHBgIGFuZCBpbmplY3RcbiAqIG91ciBTZXJ2aWNlcyBhbmQgUHJvdmlkZXJzIGludG8gQW5ndWxhcidzIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG4gKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiBtYWluKCkge1xuICBib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4gICAgLi4uKCdwcm9kdWN0aW9uJyA9PT0gcHJvY2Vzcy5lbnYuRU5WID8gW10gOiBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyksXG4gICAgLi4uSFRUUF9QUk9WSURFUlMsXG4gICAgLi4uUk9VVEVSX1BST1ZJREVSUyxcbiAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHsgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0pXG4gIF0pXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi90c2xpbnQtbG9hZGVyIS4vbWFpbi50c1xuICoqLyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7Rmlyc3RQYWdlQ29tcG9uZW50fSBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvZmlyc3RwYWdlL2ZpcnN0cGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWNvbmRQYWdlQ29tcG9uZW50fSBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvc2Vjb25kcGFnZS9zZWNvbmRwYWdlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZS1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGgxPlRlc3QgYXBwIGhvbWUgcGFnZTwvaDE+XG4gICAgPG5hdj5cbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnRmlyc3RQYWdlJ11cIj5QbGF5ZXIgcGFnZTwvYT5cbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnU2Vjb25kUGFnZSddXCI+Rm9ybXMgcGFnZTwvYT5cbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnSG9tZVBhZ2UnXVwiPkhvbWVQYWdlPC9hPlxuICAgIDwvbmF2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogUk9VVEVSX0RJUkVDVElWRVNcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vdHNsaW50LWxvYWRlciEuL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBsYXllckNvbnRhaW5lclxcXCI+XFxuICAgIDxob21lLWNvbXBvbmVudD48L2hvbWUtY29tcG9uZW50PlxcbiAgICA8dmlkZW8gaWQ9XFxcInBsYXllclxcXCIgc3JjPVxcXCJodHRwOi8vMWNkcC5sb29rMS5ydS90cmFpbGVyL2U5MzUwMzA5LTE5NGItNGUwZC1iOTY3LWNjZDQ2NDdiYWViNC5tcDRcXFwiIHZvbHVtZT1cXFwiMC4zXFxcIiB3aWR0aD1cXFwiODAwXFxcIiBoZWlnaHQ9XFxcIjQ1MFxcXCI+PC92aWRlbz5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbHNcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwicGxheXBhdXNlXFxcIiBjbGFzcz1cXFwiY29udHJvbCBidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcInBsYXliYWNrVG9nZ2xlKClcXFwiPlxcbiAgICAgICAgICAgIFBsYXlcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGRpdiBpZD1cXFwicHJvZ3Jlc3NiYXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcInByb2dyZXNzaW5kaWNhdG9yXFxcIiBbc3R5bGUud2lkdGguJV09XFxcImdldEN1cnJlbnRQZXJjZW50YWdlKClcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8YnV0dG9uIGlkPVxcXCJmdWxsc2NyZWVuXFxcIiBjbGFzcz1cXFwiY29udHJvbCBidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcInJlcXVlc3RGdWxsU2NyZWVuKClcXFwiPlxcbiAgICAgICAgICAgIEZ1bGxcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPHNwYW4gaWQ9XFxcImR1cmF0aW9uVGltZVxcXCI+e3tnZXREdXJhdGlvbigpIHwgY29udmVydFRvRnVsbFRpbWV9fTwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj4gLyA8L3NwYW4+XFxuICAgICAgICA8c3BhbiBpZD1cXFwiY3VycmVudFRpbWVcXFwiPnt7Z2V0Q3VycmVudFRpbWUoKSB8IGNvbnZlcnRUb0Z1bGxUaW1lfX08L3NwYW4+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcbjxkaXYgaWQ9XFxcImxvZ1xcXCIgY2xhc3M9XFxcInBsYXllcmxvZ1xcXCIgKGNsaWNrKT1cXFwic3RvcFNjcm9sbGluZygpXFxcIj5DbGljayB0byBzdG9wIHNjcm9sbGluZyE8YnIvPjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2NvbXBvbmVudHMvZmlyc3RwYWdlL2ZpcnN0cGFnZS50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMjk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudCwgcHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpcnN0UGFnZUNvbXBvbmVudH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL2ZpcnN0cGFnZS9maXJzdHBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7U2Vjb25kUGFnZUNvbXBvbmVudH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL3NlY29uZHBhZ2Uvc2Vjb25kcGFnZS5jb21wb25lbnQnO1xuXG5pbXBvcnQge1xuICAgIFJvdXRlcixcbiAgICBSb3V0ZUNvbmZpZyxcbiAgICBSb3V0ZURlZmluaXRpb24sXG4gICAgUk9VVEVSX0RJUkVDVElWRVMsXG4gICAgUk9VVEVSX1BST1ZJREVSUyxcbiAgICBMb2NhdGlvblN0cmF0ZWd5LFxuICAgIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFJPVVRFUl9ESVJFQ1RJVkVTXG59KVxuXG5AUm91dGVDb25maWcoW1xuICB7cGF0aDogJy8nLCBuYW1lOiAnSG9tZVBhZ2UnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gIHtwYXRoOiAnL2ZpcnN0cGFnZScsIG5hbWU6ICdGaXJzdFBhZ2UnLCBjb21wb25lbnQ6IEZpcnN0UGFnZUNvbXBvbmVudH0sXG4gIHtwYXRoOiAnL3NlY29uZHBhZ2UnLCBuYW1lOiAnU2Vjb25kUGFnZScsIGNvbXBvbmVudDogU2Vjb25kUGFnZUNvbXBvbmVudH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L3RzbGludC1sb2FkZXIhLi9hcHAvYXBwLnRzXG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5pbXBvcnQge0NvbnZlcnNpb259IGZyb20gJy4vLi4vLi4vcGlwZXMvdGltZXBpcGUvdGltZXBpcGUucGlwZSdcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi8uLi9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlyc3RwYWdlJyxcbiAgICBwaXBlczogW0NvbnZlcnNpb25dLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpcnN0cGFnZS50ZW1wbGF0ZS5odG1sJyksXG4gICAgZGlyZWN0aXZlczogW0hvbWVDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgRmlyc3RQYWdlQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHBsYXllciAgPSBudWxsO1xuICAgIHByaXZhdGUgY29udHJvbHMgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudFRpbWUgOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgZHVyYXRpb24gOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudFBlcmNlbnRhZ2UgOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY2xpY2tlZCA6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0UGxheWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXI7XG4gICAgfVxuXG4gICAgc2V0UGxheWVyKGh0bWxQbGF5ZXJFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gaHRtbFBsYXllckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0Q29udHJvbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzO1xuICAgIH1cblxuICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKSB7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBjb250cm9scztcbiAgICB9XG5cbiAgICBnZXREdXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVyYXRpb247XG4gICAgfVxuXG4gICAgc2V0RHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRQZXJjZW50YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UGVyY2VudGFnZTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50UGVyY2VudGFnZShjdXJyZW50UGVyY2VudGFnZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQZXJjZW50YWdlID0gY3VycmVudFBlcmNlbnRhZ2U7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRUaW1lKGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICB9XG5cbiAgICBzZXRUb0RlZmF1bHQoKSB7XG4gICAgICAgIHRoaXMuc2V0RHVyYXRpb24oMCk7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFRpbWUoMCk7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFBlcmNlbnRhZ2UoMCk7XG4gICAgfVxuXG4gICAgaW5pdChwbGF5ZXI6IGFueSwgY29udHJvbHM6IGFueSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZXRQbGF5ZXIocGxheWVyKTtcbiAgICAgICAgdGhpcy5zZXRDb250cm9scyhjb250cm9scyk7XG5cbiAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5hcHBlbmRUb0xvZygnUGxheSBldmVudCBmaXJlZCcsIHRydWUpO1xuICAgICAgICAgICAgdGhhdC5jb250cm9scy5wbGF5cGF1c2UuaW5uZXJIVE1MID0gJ1BhdXNlJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmFwcGVuZFRvTG9nKCdQYXVzZSBldmVudCBmaXJlZCcsIHRydWUpO1xuICAgICAgICAgICAgdGhhdC5jb250cm9scy5wbGF5cGF1c2UuaW5uZXJIVE1MID0gJ1BsYXknO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldFBsYXllcigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmFwcGVuZFRvTG9nKCdDYW5wbGF5IGV2ZW50IGZpcmVkLCB2aWRlbyByZWFkeScsIHRydWUpO1xuICAgICAgICAgICAgdGhhdC5zZXREdXJhdGlvbih0aGF0LmdldFBsYXllcigpLmR1cmF0aW9uKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldFBsYXllcigpLmFkZEV2ZW50TGlzdGVuZXIoJ2R1cmF0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5hcHBlbmRUb0xvZygnRHVyYXRpb25jaGFuZ2UgZXZlbnQgZmlyZWQsIG5vdyAnK3RoYXQuZ2V0RHVyYXRpb24oKS50b1N0cmluZygpLCB0cnVlKTtcbiAgICAgICAgICAgIHRoYXQuc2V0RHVyYXRpb24odGhhdC5nZXRQbGF5ZXIoKS5kdXJhdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuYXBwZW5kVG9Mb2coJ1RpbWV1cGRhdGUsIGN1cnJlbnQgaXMgJyt0aGF0LmdldEN1cnJlbnRUaW1lKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0aGF0LnNldEN1cnJlbnRUaW1lKHRoYXQuZ2V0UGxheWVyKCkuY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgdGhhdC5zZXRDdXJyZW50UGVyY2VudGFnZShwYXJzZUludCgoTWF0aC5mbG9vcih0aGF0LmdldEN1cnJlbnRUaW1lKCkpIC8gTWF0aC5mbG9vcih0aGF0LmdldER1cmF0aW9uKCkpICogMTAwKS50b0ZpeGVkKDApLCAxMCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldFBsYXllcigpLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5hcHBlbmRUb0xvZygnRW5kZWQgZXZlbnQgZmlyZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHRoYXQuZ2V0UGxheWVyKCkucGF1c2UoKTtcbiAgICAgICAgICAgIHRoYXQuY29udHJvbHMucGxheXBhdXNlLmlubmVySFRNTCA9ICdQbGF5JztcbiAgICAgICAgICAgIHRoYXQuc2V0VG9EZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICBhcHBlbmRUb0xvZyhzdHJpbmc6IFN0cmluZywgc3BlY2lhbDogQm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgICB2YXIgbG9nID0gdGhpcy5jb250cm9scy5sb2c7XG4gICAgICAgICBpZiAoc3BlY2lhbCkge1xuICAgICAgICAgICAgIGxvZy5pbm5lckhUTUwgPSBsb2cuaW5uZXJIVE1MICsgJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyArICc8YnIvPic7XG4gICAgICAgICB9XG4gICAgICAgICBsb2cuaW5uZXJIVE1MID0gbG9nLmlubmVySFRNTCArIHN0cmluZyArICc8YnIvPic7XG4gICAgICAgICBpZiAoc3BlY2lhbCkge1xuICAgICAgICAgICAgIGxvZy5pbm5lckhUTUwgPSBsb2cuaW5uZXJIVE1MICsgJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyArICc8YnIvPic7XG4gICAgICAgICB9XG4gICAgICAgICBpZiAoIXRoaXMuY2xpY2tlZCkge1xuICAgICAgICAgICAgIGxvZy5zY3JvbGxUb3AgPSBsb2cuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgfVxuICAgICB9XG5cbiAgICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0KFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYXlwYXVzZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlwYXVzZScpLFxuICAgICAgICAgICAgICAgIGxvZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZycpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGxheWJhY2tUb2dnbGUoKSB7XG4gICAgICAgICh0aGlzLmdldFBsYXllcigpLnBhdXNlZCkgPyB0aGlzLmdldFBsYXllcigpLnBsYXkoKSA6IHRoaXMuZ2V0UGxheWVyKCkucGF1c2UoKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0RnVsbFNjcmVlbigpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRUb0xvZygnRnVsbHNjcmVlbiByZXF1ZXN0ZWQnLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyKCkucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKCkucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldFBsYXllcigpLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBsYXllcigpLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRQbGF5ZXIoKS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vdHNsaW50LWxvYWRlciEuL2NvbXBvbmVudHMvZmlyc3RwYWdlL2ZpcnN0cGFnZS5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSdcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdhbmd1bGFyMi9jb21tb24nXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4uL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZWNvbmRwYWdlJyxcbiAgICB0ZW1wbGF0ZTpcbiAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxob21lLWNvbXBvbmVudD48L2hvbWUtY29tcG9uZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtIGZpcnN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5GaXJzdCBmb3JtPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uRmlyc3RGb3JtU3VibWl0KClcIiAjZmlyc3RGb3JtPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ0NvbnRyb2w9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI25hbWU9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtoaWRkZW5dPVwibmFtZS52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+TmFtZSBpcyByZXF1aXJlZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN1cm5hbWVcIj5TdXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuc3VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nQ29udHJvbD1cInN1cm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc3VybmFtZT1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgW2Rpc2FibGVkXT1cIiFmaXJzdEZvcm0uZm9ybS52YWxpZFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybSBzZWNvbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlNlY29uZCBmb3JtPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gKHN1Ym1pdCk9XCJvblNlY29uZEZvcm1TdWJtaXQoKVwiICNzZWxlY3RhYmxlcz1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic2VsZWN0YWJsZVwiPlNlbGVjdGFibGVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0YWJsZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI3Mgb2Ygc2VsZWN0YWJsZVwiIFt2YWx1ZV09XCJzXCI+e3tzfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dcIj5cbiAgICAgICAgICAgICAgICA8Yj5GaXJzdCBmb3JtIHN1Ym1pdHMgY291bnRlcjo8L2I+IHt7Zmlyc3RGb3JtU3VibWl0Q291bnRlcn19PGJyLz5cbiAgICAgICAgICAgICAgICA8Yj5TdWJtaXR0ZWQgZnJvbSBzZWNvbmQgZm9ybTo8L2I+IHt7c2Vjb25kRm9ybURhdGF9fTxici8+XG4gICAgICAgICAgICAgICAgPGI+TW9kZWw6PC9iPiB7e2dldE1vZGVsKCl9fTxici8+XG4gICAgICAgICAgICAgICAgPGI+U2VsZWN0YWJsZXM6PC9iPiB7e2dldFNlbGVjdGFibGVzKCl9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0hvbWVDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgU2Vjb25kUGFnZUNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIGZpcnN0Rm9ybVN1Ym1pdENvdW50ZXIgOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc2Vjb25kRm9ybURhdGEgOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIG1vZGVsIDogT2JqZWN0ID0ge1xuICAgICAgICBuYW1lIDogJ1NvbWVuYW1lJyxcbiAgICAgICAgc3VybmFtZSA6ICdTb21lc3VybmFtZSdcbiAgICB9O1xuICAgIHByaXZhdGUgc2VsZWN0YWJsZSA6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgICAgICdmaXJzdEl0ZW0nLCAnc2Vjb25kSXRlbScsICd0aGlyZEl0ZW0nXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0Rmlyc3RGb3JtU3VibWl0Q291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3RGb3JtU3VibWl0Q291bnRlcjtcbiAgICB9XG5cbiAgICBvbkZpcnN0Rm9ybVN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5maXJzdEZvcm1TdWJtaXRDb3VudGVyKys7XG4gICAgfVxuXG4gICAgZ2V0U2Vjb25kRm9ybURhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlY29uZEZvcm1EYXRhO1xuICAgIH1cblxuICAgIG9uU2Vjb25kRm9ybVN1Ym1pdCgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGFibGUgOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0YWJsZScpO1xuICAgICAgICB0aGlzLnNlY29uZEZvcm1EYXRhID0gc2VsZWN0YWJsZVtzZWxlY3RhYmxlLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgfVxuXG4gICAgZ2V0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLm1vZGVsKTtcbiAgICB9XG5cbiAgICBnZXRTZWxlY3RhYmxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0YWJsZS50b1N0cmluZygpO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L3RzbGludC1sb2FkZXIhLi9jb21wb25lbnRzL3NlY29uZHBhZ2Uvc2Vjb25kcGFnZS5jb21wb25lbnQudHNcbiAqKi8iLCJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnY29udmVydFRvRnVsbFRpbWUnXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvbiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBhcmdzOnN0cmluZ1tdKSA6IGFueSB7XG4gICAgICAgIHZhciBzZWNvbmRzUm91ZGVkIDogbnVtYmVyID0gTWF0aC5mbG9vcih2YWx1ZSk7XG5cbiAgICAgICAgdmFyIGhvdXJzIDogbnVtYmVyICAgPSBNYXRoLmZsb29yKHNlY29uZHNSb3VkZWQgLyAzNjAwKTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgOiBudW1iZXIgPSBNYXRoLmZsb29yKChzZWNvbmRzUm91ZGVkIC0gKGhvdXJzICogMzYwMCkpIC8gNjApO1xuICAgICAgICB2YXIgc2Vjb25kcyA6IG51bWJlciA9IHNlY29uZHNSb3VkZWQgLSAoaG91cnMgKiAzNjAwKSAtIChtaW51dGVzICogNjApO1xuXG4gICAgICAgIHZhciBob3Vyc1N0cmluZyA6IFN0cmluZyA9IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgICAgIHZhciBtaW51dGVzU3RyaW5nIDogU3RyaW5nID0gbWludXRlcy50b1N0cmluZygpO1xuICAgICAgICB2YXIgc2Vjb25kc1N0cmluZyA6IFN0cmluZyA9IHNlY29uZHMudG9TdHJpbmcoKTtcblxuICAgICAgICBpZiAoaG91cnMgICA8IDEwKSB7aG91cnNTdHJpbmcgICA9IFwiMFwiK2hvdXJzLnRvU3RyaW5nKCk7fVxuICAgICAgICBpZiAobWludXRlcyA8IDEwKSB7bWludXRlc1N0cmluZyA9IFwiMFwiK21pbnV0ZXMudG9TdHJpbmcoKTt9XG4gICAgICAgIGlmIChzZWNvbmRzIDwgMTApIHtzZWNvbmRzU3RyaW5nID0gXCIwXCIrc2Vjb25kcy50b1N0cmluZygpO31cblxuICAgICAgICB2YXIgdGltZVN0cmluZyA6IFN0cmluZyAgICA9IGhvdXJzU3RyaW5nKyc6JyttaW51dGVzU3RyaW5nKyc6JytzZWNvbmRzU3RyaW5nO1xuICAgICAgICByZXR1cm4gdGltZVN0cmluZztcbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi90c2xpbnQtbG9hZGVyIS4vcGlwZXMvdGltZXBpcGUvdGltZXBpcGUucGlwZS50c1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=