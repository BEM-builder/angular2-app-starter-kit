import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {FirstPageComponent} from './../firstpage/firstpage.component.async';
import {SecondPageComponent} from './../secondpage/secondpage.component';
import {Content} from './../../../modules/content/content';

@Component({
    selector: 'home-component',
    template: require('./homepage.template.html'),
    directives: [ROUTER_DIRECTIVES, Content]
})

export class HomeComponent {
    constructor() {

    }
}
