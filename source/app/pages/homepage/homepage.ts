import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {FirstPageComponent} from './../firstpage/firstpage.async';
import {SecondPageComponent} from './../secondpage/secondpage';
import {Content} from './../../../modules/content/content';

@Component({
    selector: 'home-component',
    template: require('./homepage.html'),
    directives: [ROUTER_DIRECTIVES, Content]
})

export class HomeComponent {
    constructor() {

    }
}
