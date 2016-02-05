import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'page',
    template: require('./page.html'),
    directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {
    constructor() {

    }
}