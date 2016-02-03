import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {FirstPageComponent} from './../../components/firstpage/firstpage.component';
import {SecondPageComponent} from './../../components/secondpage/secondpage.component';
import {Menu} from './../menu/menu'

@Component({
    selector: 'home-component',
    template: require('./homepage.template.html'),
    directives: [ROUTER_DIRECTIVES, Menu]
})

export class HomeComponent {
    constructor() {

    }
}
