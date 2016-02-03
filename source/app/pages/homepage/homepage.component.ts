import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {FirstPageComponent} from './../firstpage/firstpage.component';
import {SecondPageComponent} from './../secondpage/secondpage.component';
import {Menu} from './../../../modules/menu/menu'

@Component({
    selector: 'home-component',
    template: require('./homepage.template.html'),
    directives: [ROUTER_DIRECTIVES, Menu]
})

export class HomeComponent {
    constructor() {

    }
}
