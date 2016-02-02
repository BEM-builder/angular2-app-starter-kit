webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*
	 * Providers provided by Angular
	 */
	var core_1 = __webpack_require__(5);
	var browser_1 = __webpack_require__(143);
	var router_1 = __webpack_require__(64);
	var http_1 = __webpack_require__(142);
	/*
	 * App Component
	 * our top level component that holds all of our components
	 */
	var app_1 = __webpack_require__(492);
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

/***/ 492:
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
	var homepage_component_1 = __webpack_require__(494);
	var firstpage_component_1 = __webpack_require__(493);
	var secondpage_component_1 = __webpack_require__(495);
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

/***/ 493:
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
	var timepipe_pipe_1 = __webpack_require__(496);
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
	            template: "\n            <div class=\"playerContainer\">\u043E\n                <home-component></home-component>\n                <video id=\"player\" src=\"http://1cdp.look1.ru/trailer/e9350309-194b-4e0d-b967-ccd4647baeb4.mp4\" volume=\"0.3\" width=\"800\" height=\"450\"></video>\n                <div class=\"controls\">\n                    <button id=\"playpause\" class=\"control btn btn-success\" (click)=\"playbackToggle()\">\n                        Play\n                    </button>\n                    <div id=\"progressbar\">\n                        <div id=\"progressindicator\" [style.width.%]=\"getCurrentPercentage()\"></div>\n                    </div>\n                    <button id=\"fullscreen\" class=\"control btn btn-success\" (click)=\"requestFullScreen()\">\n                        Full\n                    </button>\n                    <span id=\"durationTime\">{{getDuration() | convertToFullTime}}</span>\n                    <span class=\"divider\"> / </span>\n                    <span id=\"currentTime\">{{getCurrentTime() | convertToFullTime}}</span>\n                </div>\n            </div>\n            <div id=\"log\" class=\"playerlog\" (click)=\"stopScrolling()\">Click to stop scrolling!<br/></div>\n        "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FirstPageComponent);
	    return FirstPageComponent;
	})();
	exports.FirstPageComponent = FirstPageComponent;


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
	var router_1 = __webpack_require__(64);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home-component',
	            template: "\n    <h1>Test app home page</h1>\n    <nav>\n      <a [routerLink]=\"['FirstPage']\">Player page</a>\n      <a [routerLink]=\"['SecondPage']\">Forms page</a>\n    </nav>\n    ",
	            directives: router_1.ROUTER_DIRECTIVES
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	})();
	exports.HomeComponent = HomeComponent;


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
	            template: "\n            <div class=\"container\">\n                <div class=\"form first\">\n                    <h1>First form</h1>\n                    <form (ngSubmit)=\"onFirstFormSubmit()\" #firstForm=\"ngForm\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Name</label>\n                            <input type=\"text\" class=\"form-control\" required\n                                [(ngModel)]=\"model.name\"\n                                ngControl=\"name\"\n                                #name=\"ngForm\">\n                            <div [hidden]=\"name.valid\" class=\"alert alert-danger\">Name is required</div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"surname\">Surname</label>\n                            <input type=\"text\" class=\"form-control\"\n                                [(ngModel)]=\"model.surname\"\n                                ngControl=\"surname\"\n                                #surname=\"ngForm\">\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!firstForm.form.valid\">Submit</button>\n                    </form>\n                </div>\n\n                <div class=\"form second\">\n                    <h1>Second form</h1>\n                    <form (submit)=\"onSecondFormSubmit()\" #selectables=\"ngForm\">\n                        <div class=\"form-group\">\n                            <label for=\"selectable\">Selectables</label>\n                            <select id=\"selectable\" class=\"form-control\" required>\n                                <option *ngFor=\"#s of selectable\" [value]=\"s\">{{s}}</option>\n                            </select>\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n                    </form>\n                </div>\n            </div>\n            <div id=\"log\">\n                <b>First form submits counter:</b> {{firstFormSubmitCounter}}<br/>\n                <b>Submitted from second form:</b> {{secondFormData}}<br/>\n                <b>Model:</b> {{getModel()}}<br/>\n                <b>Selectables:</b> {{getSelectables()}}\n            </div>\n        "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SecondPageComponent);
	    return SecondPageComponent;
	})();
	exports.SecondPageComponent = SecondPageComponent;


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9maXJzdHBhZ2UvZmlyc3RwYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY29uZHBhZ2Uvc2Vjb25kcGFnZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcGlwZXMvdGltZXBpcGUvdGltZXBpcGUucGlwZS50cyJdLCJuYW1lcyI6WyJtYWluIiwiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiRmlyc3RQYWdlQ29tcG9uZW50IiwiRmlyc3RQYWdlQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiRmlyc3RQYWdlQ29tcG9uZW50LmdldFBsYXllciIsIkZpcnN0UGFnZUNvbXBvbmVudC5zZXRQbGF5ZXIiLCJGaXJzdFBhZ2VDb21wb25lbnQuZ2V0Q29udHJvbHMiLCJGaXJzdFBhZ2VDb21wb25lbnQuc2V0Q29udHJvbHMiLCJGaXJzdFBhZ2VDb21wb25lbnQuZ2V0RHVyYXRpb24iLCJGaXJzdFBhZ2VDb21wb25lbnQuc2V0RHVyYXRpb24iLCJGaXJzdFBhZ2VDb21wb25lbnQuZ2V0Q3VycmVudFBlcmNlbnRhZ2UiLCJGaXJzdFBhZ2VDb21wb25lbnQuc2V0Q3VycmVudFBlcmNlbnRhZ2UiLCJGaXJzdFBhZ2VDb21wb25lbnQuZ2V0Q3VycmVudFRpbWUiLCJGaXJzdFBhZ2VDb21wb25lbnQuc2V0Q3VycmVudFRpbWUiLCJGaXJzdFBhZ2VDb21wb25lbnQuc2V0VG9EZWZhdWx0IiwiRmlyc3RQYWdlQ29tcG9uZW50LmluaXQiLCJGaXJzdFBhZ2VDb21wb25lbnQuYXBwZW5kVG9Mb2ciLCJGaXJzdFBhZ2VDb21wb25lbnQuc3RvcFNjcm9sbGluZyIsIkZpcnN0UGFnZUNvbXBvbmVudC5uZ0FmdGVyVmlld0luaXQiLCJGaXJzdFBhZ2VDb21wb25lbnQucGxheWJhY2tUb2dnbGUiLCJGaXJzdFBhZ2VDb21wb25lbnQucmVxdWVzdEZ1bGxTY3JlZW4iLCJIb21lQ29tcG9uZW50IiwiSG9tZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlNlY29uZFBhZ2VDb21wb25lbnQiLCJTZWNvbmRQYWdlQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiU2Vjb25kUGFnZUNvbXBvbmVudC5nZXRGaXJzdEZvcm1TdWJtaXRDb3VudGVyIiwiU2Vjb25kUGFnZUNvbXBvbmVudC5vbkZpcnN0Rm9ybVN1Ym1pdCIsIlNlY29uZFBhZ2VDb21wb25lbnQuZ2V0U2Vjb25kRm9ybURhdGEiLCJTZWNvbmRQYWdlQ29tcG9uZW50Lm9uU2Vjb25kRm9ybVN1Ym1pdCIsIlNlY29uZFBhZ2VDb21wb25lbnQuZ2V0TW9kZWwiLCJTZWNvbmRQYWdlQ29tcG9uZW50LmdldFNlbGVjdGFibGVzIiwiQ29udmVyc2lvbiIsIkNvbnZlcnNpb24uY29uc3RydWN0b3IiLCJDb252ZXJzaW9uLnRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7SUFFRztBQUNILGtDQUFzQixDQUFlLENBQUM7QUFDdEMscUNBQWlELEdBQTJCLENBQUM7QUFDN0Usb0NBQXVFLEVBQWlCLENBQUM7QUFDekYsa0NBQTZCLEdBQWUsQ0FBQztBQUU3Qzs7O0lBR0c7QUFDSCxpQ0FBMkIsR0FBVyxDQUFDO0FBQ3ZDOzs7SUFHRztBQUNILFNBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtLQUM1Q0EsbUJBQVNBLENBQUNBLGtCQUFZQSxFQUNqQkEsQ0FBQ0EsWUFBWUEsS0FBS0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsR0FBR0EsRUFBRUEsR0FBR0EsaUNBQXVCQSxDQUFDQSxRQUNqRUEscUJBQWNBLEVBQ2RBLHlCQUFnQkE7U0FDbkJBLGNBQU9BLENBQUNBLHlCQUFnQkEsRUFBRUEsRUFBRUEsUUFBUUEsRUFBRUEs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WUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7U0FFL0NBLElBQUlBLEtBQUtBLEdBQWNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLENBQUNBO1NBQ3hEQSxJQUFJQSxPQUFPQSxHQUFZQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxhQUFhQSxHQUFHQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtTQUN6RUEsSUFBSUEsT0FBT0EsR0FBWUEsYUFBYUEsR0FBR0EsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7U0FFdkVBLElBQUlBLFdBQVdBLEdBQVlBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO1NBQzVDQSxJQUFJQSxhQUFhQSxHQUFZQSxPQUFPQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtTQUNoREEsSUFBSUEsYUFBYUEsR0FBWUEsT0FBT0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7U0FFaERBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLEdBQUtBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2FBQUFBLFdBQVdBLEdBQUtBLEdBQUdBLEdBQUNBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO1NBQUFBLENBQUNBO1NBQ3pEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTthQUFBQSxhQUFhQSxHQUFHQSxHQUFHQSxHQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtTQUFBQSxDQUFDQTtTQUMzREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsR0FBR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7YUFBQUEsYUFBYUEsR0FBR0EsR0FBR0EsR0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0E7U0FBQUEsQ0FBQ0E7U0FFM0RBLElBQUlBLFVBQVVBLEdBQWVBLFdBQVdBLEdBQUNBLEdBQUdBLEdBQUNBLGFBQWFBLEdBQUNBLEdBQUdBLEdBQUNBLGFBQWFBLENBQUNBO1NBQzdFQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQTtLQUN0QkEsQ0FBQ0E7S0F0QkxGO1NBQUNBLFdBQUlBLENBQUNBO2FBQ0ZBLElBQUlBLEVBQUVBLG1CQUFtQkE7VUFDNUJBLENBQUNBOztvQkFxQkRBO0tBQURBLGlCQUFDQTtBQUFEQSxFQUFDQSxJQUFBO0FBbkJZLG1CQUFVLGFBbUJ0QiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBQcm92aWRlcnMgcHJvdmlkZWQgYnkgQW5ndWxhclxuICovXG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXAsIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuLypcbiAqIEFwcCBDb21wb25lbnRcbiAqIG91ciB0b3AgbGV2ZWwgY29tcG9uZW50IHRoYXQgaG9sZHMgYWxsIG9mIG91ciBjb21wb25lbnRzXG4gKi9cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC9hcHAnO1xuLypcbiAqIEJvb3RzdHJhcCBvdXIgQW5ndWxhciBhcHAgd2l0aCBhIHRvcCBsZXZlbCBjb21wb25lbnQgYEFwcGAgYW5kIGluamVjdFxuICogb3VyIFNlcnZpY2VzIGFuZCBQcm92aWRlcnMgaW50byBBbmd1bGFyJ3MgZGVwZW5kZW5jeSBpbmplY3Rpb25cbiAqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIG1haW4oKSB7XG4gIGJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcbiAgICAuLi4oJ3Byb2R1Y3Rpb24nID09PSBwcm9jZXNzLmVudi5FTlYgPyBbXSA6IEVMRU1FTlRfUFJPQkVfUFJPVklERVJTKSxcbiAgICAuLi5IVFRQX1BST1ZJREVSUyxcbiAgICAuLi5ST1VURVJfUFJPVklERVJTLFxuICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwgeyB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSlcbiAgXSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L3RzbGludC1sb2FkZXIhLi9tYWluLnRzXG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnQsIHByb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5cbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudCdcbmltcG9ydCB7Rmlyc3RQYWdlQ29tcG9uZW50fSBmcm9tICcuLy4uL2NvbXBvbmVudHMvZmlyc3RwYWdlL2ZpcnN0cGFnZS5jb21wb25lbnQnXG5pbXBvcnQge1NlY29uZFBhZ2VDb21wb25lbnR9IGZyb20gJy4vLi4vY29tcG9uZW50cy9zZWNvbmRwYWdlL3NlY29uZHBhZ2UuY29tcG9uZW50J1xuXG5pbXBvcnQge1JvdXRlciwgUm91dGVDb25maWcsIFJvdXRlRGVmaW5pdGlvbiwgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZGlyZWN0aXZlczogUk9VVEVSX0RJUkVDVElWRVNcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gIHtwYXRoOiAnLycsIG5hbWU6ICdIb21lUGFnZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAge3BhdGg6ICcvZmlyc3RwYWdlJywgbmFtZTogJ0ZpcnN0UGFnZScsIGNvbXBvbmVudDogRmlyc3RQYWdlQ29tcG9uZW50fSxcbiAge3BhdGg6ICcvc2Vjb25kcGFnZScsIG5hbWU6ICdTZWNvbmRQYWdlJywgY29tcG9uZW50OiBTZWNvbmRQYWdlQ29tcG9uZW50fVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L3RzbGludC1sb2FkZXIhLi9hcHAvYXBwLnRzXG4gKiovIiwiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5pbXBvcnQge0NvbnZlcnNpb259IGZyb20gJy4vLi4vLi4vcGlwZXMvdGltZXBpcGUvdGltZXBpcGUucGlwZSdcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi8uLi9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlyc3RwYWdlJyxcbiAgICBwaXBlczogW0NvbnZlcnNpb25dLFxuICAgIHRlbXBsYXRlOlxuICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyQ29udGFpbmVyXCI+0L5cbiAgICAgICAgICAgICAgICA8aG9tZS1jb21wb25lbnQ+PC9ob21lLWNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICA8dmlkZW8gaWQ9XCJwbGF5ZXJcIiBzcmM9XCJodHRwOi8vMWNkcC5sb29rMS5ydS90cmFpbGVyL2U5MzUwMzA5LTE5NGItNGUwZC1iOTY3LWNjZDQ2NDdiYWViNC5tcDRcIiB2b2x1bWU9XCIwLjNcIiB3aWR0aD1cIjgwMFwiIGhlaWdodD1cIjQ1MFwiPjwvdmlkZW8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwbGF5cGF1c2VcIiBjbGFzcz1cImNvbnRyb2wgYnRuIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cInBsYXliYWNrVG9nZ2xlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXlcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9ncmVzc2JhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2dyZXNzaW5kaWNhdG9yXCIgW3N0eWxlLndpZHRoLiVdPVwiZ2V0Q3VycmVudFBlcmNlbnRhZ2UoKVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZ1bGxzY3JlZW5cIiBjbGFzcz1cImNvbnRyb2wgYnRuIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cInJlcXVlc3RGdWxsU2NyZWVuKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZ1bGxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiZHVyYXRpb25UaW1lXCI+e3tnZXREdXJhdGlvbigpIHwgY29udmVydFRvRnVsbFRpbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkaXZpZGVyXCI+IC8gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImN1cnJlbnRUaW1lXCI+e3tnZXRDdXJyZW50VGltZSgpIHwgY29udmVydFRvRnVsbFRpbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ1wiIGNsYXNzPVwicGxheWVybG9nXCIgKGNsaWNrKT1cInN0b3BTY3JvbGxpbmcoKVwiPkNsaWNrIHRvIHN0b3Agc2Nyb2xsaW5nITxici8+PC9kaXY+XG4gICAgICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaXJzdFBhZ2VDb21wb25lbnQge1xuICAgIHByaXZhdGUgcGxheWVyICA9IG51bGw7XG4gICAgcHJpdmF0ZSBjb250cm9scyA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZSA6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBkdXJhdGlvbiA6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50UGVyY2VudGFnZSA6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjbGlja2VkIDogQm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBnZXRQbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcjtcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXIoaHRtbFBsYXllckVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBodG1sUGxheWVyRWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHM7XG4gICAgfVxuXG4gICAgc2V0Q29udHJvbHMoY29udHJvbHMpIHtcbiAgICAgICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzO1xuICAgIH1cblxuICAgIGdldER1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICBzZXREdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFBlcmNlbnRhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQZXJjZW50YWdlO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRQZXJjZW50YWdlKGN1cnJlbnRQZXJjZW50YWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBlcmNlbnRhZ2UgPSBjdXJyZW50UGVyY2VudGFnZTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWU7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFRpbWUoY3VycmVudFRpbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIH1cblxuICAgIHNldFRvRGVmYXVsdCgpIHtcbiAgICAgICAgdGhpcy5zZXREdXJhdGlvbigwKTtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50VGltZSgwKTtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGVyY2VudGFnZSgwKTtcbiAgICB9XG5cbiAgICBpbml0KHBsYXllcjogYW55LCBjb250cm9sczogYW55KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgICB0aGlzLnNldFBsYXllcihwbGF5ZXIpO1xuICAgICAgICB0aGlzLnNldENvbnRyb2xzKGNvbnRyb2xzKTtcblxuICAgICAgICB0aGlzLmdldFBsYXllcigpLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmFwcGVuZFRvTG9nKCdQbGF5IGV2ZW50IGZpcmVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGF0LmNvbnRyb2xzLnBsYXlwYXVzZS5pbm5lckhUTUwgPSAnUGF1c2UnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuYXBwZW5kVG9Mb2coJ1BhdXNlIGV2ZW50IGZpcmVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGF0LmNvbnRyb2xzLnBsYXlwYXVzZS5pbm5lckhUTUwgPSAnUGxheSc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuYXBwZW5kVG9Mb2coJ0NhbnBsYXkgZXZlbnQgZmlyZWQsIHZpZGVvIHJlYWR5JywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGF0LnNldER1cmF0aW9uKHRoYXQuZ2V0UGxheWVyKCkuZHVyYXRpb24pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuYWRkRXZlbnRMaXN0ZW5lcignZHVyYXRpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmFwcGVuZFRvTG9nKCdEdXJhdGlvbmNoYW5nZSBldmVudCBmaXJlZCwgbm93ICcrdGhhdC5nZXREdXJhdGlvbigpLnRvU3RyaW5nKCksIHRydWUpO1xuICAgICAgICAgICAgdGhhdC5zZXREdXJhdGlvbih0aGF0LmdldFBsYXllcigpLmR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5hcHBlbmRUb0xvZygnVGltZXVwZGF0ZSwgY3VycmVudCBpcyAnK3RoYXQuZ2V0Q3VycmVudFRpbWUoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoYXQuc2V0Q3VycmVudFRpbWUodGhhdC5nZXRQbGF5ZXIoKS5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB0aGF0LnNldEN1cnJlbnRQZXJjZW50YWdlKHBhcnNlSW50KChNYXRoLmZsb29yKHRoYXQuZ2V0Q3VycmVudFRpbWUoKSkgLyBNYXRoLmZsb29yKHRoYXQuZ2V0RHVyYXRpb24oKSkgKiAxMDApLnRvRml4ZWQoMCksIDEwKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0UGxheWVyKCkuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LmFwcGVuZFRvTG9nKCdFbmRlZCBldmVudCBmaXJlZCcsIHRydWUpO1xuICAgICAgICAgICAgdGhhdC5nZXRQbGF5ZXIoKS5wYXVzZSgpO1xuICAgICAgICAgICAgdGhhdC5jb250cm9scy5wbGF5cGF1c2UuaW5uZXJIVE1MID0gJ1BsYXknO1xuICAgICAgICAgICAgdGhhdC5zZXRUb0RlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgIGFwcGVuZFRvTG9nKHN0cmluZzogU3RyaW5nLCBzcGVjaWFsOiBCb29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgIHZhciBsb2cgPSB0aGlzLmNvbnRyb2xzLmxvZztcbiAgICAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgICAgICAgbG9nLmlubmVySFRNTCA9IGxvZy5pbm5lckhUTUwgKyAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nICsgJzxici8+JztcbiAgICAgICAgIH1cbiAgICAgICAgIGxvZy5pbm5lckhUTUwgPSBsb2cuaW5uZXJIVE1MICsgc3RyaW5nICsgJzxici8+JztcbiAgICAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgICAgICAgbG9nLmlubmVySFRNTCA9IGxvZy5pbm5lckhUTUwgKyAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nICsgJzxici8+JztcbiAgICAgICAgIH1cbiAgICAgICAgIGlmICghdGhpcy5jbGlja2VkKSB7XG4gICAgICAgICAgICAgbG9nLnNjcm9sbFRvcCA9IGxvZy5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICB9XG4gICAgIH1cblxuICAgIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmluaXQoXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJyksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGxheXBhdXNlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheXBhdXNlJyksXG4gICAgICAgICAgICAgICAgbG9nOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwbGF5YmFja1RvZ2dsZSgpIHtcbiAgICAgICAgKHRoaXMuZ2V0UGxheWVyKCkucGF1c2VkKSA/IHRoaXMuZ2V0UGxheWVyKCkucGxheSgpIDogdGhpcy5nZXRQbGF5ZXIoKS5wYXVzZSgpO1xuICAgIH1cblxuICAgIHJlcXVlc3RGdWxsU2NyZWVuKCkge1xuICAgICAgICB0aGlzLmFwcGVuZFRvTG9nKCdGdWxsc2NyZWVuIHJlcXVlc3RlZCcsIHRydWUpO1xuICAgICAgICBpZiAodGhpcy5nZXRQbGF5ZXIoKS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXIoKS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0UGxheWVyKCkubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVyKCkubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldFBsYXllcigpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBsYXllcigpLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi90c2xpbnQtbG9hZGVyIS4vY29tcG9uZW50cy9maXJzdHBhZ2UvZmlyc3RwYWdlLmNvbXBvbmVudC50c1xuICoqLyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xuXG5pbXBvcnQge0ZpcnN0UGFnZUNvbXBvbmVudH0gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL2ZpcnN0cGFnZS9maXJzdHBhZ2UuY29tcG9uZW50J1xuaW1wb3J0IHtTZWNvbmRQYWdlQ29tcG9uZW50fSBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvc2Vjb25kcGFnZS9zZWNvbmRwYWdlLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aDE+VGVzdCBhcHAgaG9tZSBwYWdlPC9oMT5cbiAgICA8bmF2PlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydGaXJzdFBhZ2UnXVwiPlBsYXllciBwYWdlPC9hPlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydTZWNvbmRQYWdlJ11cIj5Gb3JtcyBwYWdlPC9hPlxuICAgIDwvbmF2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogUk9VVEVSX0RJUkVDVElWRVNcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L3RzbGludC1sb2FkZXIhLi9jb21wb25lbnRzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC50c1xuICoqLyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbidcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZWNvbmRwYWdlJyxcbiAgICB0ZW1wbGF0ZTpcbiAgICAgICAgYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtIGZpcnN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5GaXJzdCBmb3JtPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uRmlyc3RGb3JtU3VibWl0KClcIiAjZmlyc3RGb3JtPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ0NvbnRyb2w9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI25hbWU9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtoaWRkZW5dPVwibmFtZS52YWxpZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+TmFtZSBpcyByZXF1aXJlZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN1cm5hbWVcIj5TdXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuc3VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nQ29udHJvbD1cInN1cm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc3VybmFtZT1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgW2Rpc2FibGVkXT1cIiFmaXJzdEZvcm0uZm9ybS52YWxpZFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybSBzZWNvbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlNlY29uZCBmb3JtPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gKHN1Ym1pdCk9XCJvblNlY29uZEZvcm1TdWJtaXQoKVwiICNzZWxlY3RhYmxlcz1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic2VsZWN0YWJsZVwiPlNlbGVjdGFibGVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0YWJsZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI3Mgb2Ygc2VsZWN0YWJsZVwiIFt2YWx1ZV09XCJzXCI+e3tzfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dcIj5cbiAgICAgICAgICAgICAgICA8Yj5GaXJzdCBmb3JtIHN1Ym1pdHMgY291bnRlcjo8L2I+IHt7Zmlyc3RGb3JtU3VibWl0Q291bnRlcn19PGJyLz5cbiAgICAgICAgICAgICAgICA8Yj5TdWJtaXR0ZWQgZnJvbSBzZWNvbmQgZm9ybTo8L2I+IHt7c2Vjb25kRm9ybURhdGF9fTxici8+XG4gICAgICAgICAgICAgICAgPGI+TW9kZWw6PC9iPiB7e2dldE1vZGVsKCl9fTxici8+XG4gICAgICAgICAgICAgICAgPGI+U2VsZWN0YWJsZXM6PC9iPiB7e2dldFNlbGVjdGFibGVzKCl9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWNvbmRQYWdlQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgZmlyc3RGb3JtU3VibWl0Q291bnRlciA6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzZWNvbmRGb3JtRGF0YSA6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgbW9kZWwgOiBPYmplY3QgPSB7XG4gICAgICAgIG5hbWUgOiAnU29tZW5hbWUnLFxuICAgICAgICBzdXJuYW1lIDogJ1NvbWVzdXJuYW1lJ1xuICAgIH07XG4gICAgcHJpdmF0ZSBzZWxlY3RhYmxlIDogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgJ2ZpcnN0SXRlbScsICdzZWNvbmRJdGVtJywgJ3RoaXJkSXRlbSdcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBnZXRGaXJzdEZvcm1TdWJtaXRDb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maXJzdEZvcm1TdWJtaXRDb3VudGVyO1xuICAgIH1cblxuICAgIG9uRmlyc3RGb3JtU3VibWl0KCkge1xuICAgICAgICB0aGlzLmZpcnN0Rm9ybVN1Ym1pdENvdW50ZXIrKztcbiAgICB9XG5cbiAgICBnZXRTZWNvbmRGb3JtRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vjb25kRm9ybURhdGE7XG4gICAgfVxuXG4gICAgb25TZWNvbmRGb3JtU3VibWl0KCkge1xuICAgICAgICB2YXIgc2VsZWN0YWJsZSA6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RhYmxlJyk7XG4gICAgICAgIHRoaXMuc2Vjb25kRm9ybURhdGEgPSBzZWxlY3RhYmxlW3NlbGVjdGFibGUuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICB9XG5cbiAgICBnZXRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMubW9kZWwpO1xuICAgIH1cblxuICAgIGdldFNlbGVjdGFibGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RhYmxlLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vdHNsaW50LWxvYWRlciEuL2NvbXBvbmVudHMvc2Vjb25kcGFnZS9zZWNvbmRwYWdlLmNvbXBvbmVudC50c1xuICoqLyIsImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnYW5ndWxhcjIvY29yZSdcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdjb252ZXJ0VG9GdWxsVGltZSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb252ZXJzaW9uIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGFyZ3M6c3RyaW5nW10pIDogYW55IHtcbiAgICAgICAgdmFyIHNlY29uZHNSb3VkZWQgOiBudW1iZXIgPSBNYXRoLmZsb29yKHZhbHVlKTtcblxuICAgICAgICB2YXIgaG91cnMgOiBudW1iZXIgICA9IE1hdGguZmxvb3Ioc2Vjb25kc1JvdWRlZCAvIDM2MDApO1xuICAgICAgICB2YXIgbWludXRlcyA6IG51bWJlciA9IE1hdGguZmxvb3IoKHNlY29uZHNSb3VkZWQgLSAoaG91cnMgKiAzNjAwKSkgLyA2MCk7XG4gICAgICAgIHZhciBzZWNvbmRzIDogbnVtYmVyID0gc2Vjb25kc1JvdWRlZCAtIChob3VycyAqIDM2MDApIC0gKG1pbnV0ZXMgKiA2MCk7XG5cbiAgICAgICAgdmFyIGhvdXJzU3RyaW5nIDogU3RyaW5nID0gaG91cnMudG9TdHJpbmcoKTtcbiAgICAgICAgdmFyIG1pbnV0ZXNTdHJpbmcgOiBTdHJpbmcgPSBtaW51dGVzLnRvU3RyaW5nKCk7XG4gICAgICAgIHZhciBzZWNvbmRzU3RyaW5nIDogU3RyaW5nID0gc2Vjb25kcy50b1N0cmluZygpO1xuXG4gICAgICAgIGlmIChob3VycyAgIDwgMTApIHtob3Vyc1N0cmluZyAgID0gXCIwXCIraG91cnMudG9TdHJpbmcoKTt9XG4gICAgICAgIGlmIChtaW51dGVzIDwgMTApIHttaW51dGVzU3RyaW5nID0gXCIwXCIrbWludXRlcy50b1N0cmluZygpO31cbiAgICAgICAgaWYgKHNlY29uZHMgPCAxMCkge3NlY29uZHNTdHJpbmcgPSBcIjBcIitzZWNvbmRzLnRvU3RyaW5nKCk7fVxuXG4gICAgICAgIHZhciB0aW1lU3RyaW5nIDogU3RyaW5nICAgID0gaG91cnNTdHJpbmcrJzonK21pbnV0ZXNTdHJpbmcrJzonK3NlY29uZHNTdHJpbmc7XG4gICAgICAgIHJldHVybiB0aW1lU3RyaW5nO1xuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L3RzbGludC1sb2FkZXIhLi9waXBlcy90aW1lcGlwZS90aW1lcGlwZS5waXBlLnRzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==