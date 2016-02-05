import {Component, Input} from 'angular2/core';
import {Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'default',
    template: require('./default.html'),
    styles: [ require('./default.scss').toString()],
    directives: [Player]
})

export class Default {
    constructor() {

    }
}