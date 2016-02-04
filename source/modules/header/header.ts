import {Component, Input} from 'angular2/core';
import {Menu} from './../menu/menu';
import {Modal} from './../modal/modal'

import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'header',
    template: require('./header.html'),
    styles: [ require('./header.scss').toString() ],
    directives: [Menu, Modal, ROUTER_DIRECTIVES]
})

export class Header {
    constructor() {

    }
}