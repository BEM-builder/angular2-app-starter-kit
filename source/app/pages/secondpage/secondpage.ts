import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Form} from './../../../modules/form/form';

@Component({
    selector: 'secondpage',
    template: require('./secondpage.html'),
    directives: [Form]
})

export class SecondPageComponent {
    constructor() {

    }
}