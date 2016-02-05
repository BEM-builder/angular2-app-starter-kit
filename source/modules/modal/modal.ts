import {Component} from 'angular2/core';
import {Login} from './../login/login';

@Component({
    selector: 'modal',
    template: require('./modal.html'),
    styles: [ require('./modal.scss').toString() ],
    directives: [Login]
})

export class Modal {
    constructor() {

    }
}