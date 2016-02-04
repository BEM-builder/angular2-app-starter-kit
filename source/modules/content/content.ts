import {Component} from 'angular2/core';
import {Promo} from './../promo/promo';
import {Tech} from './../tech/tech';

@Component({
    selector: 'content',
    template: require('./content.html'),
    styles: [ require('./content.scss').toString() ],
    directives: [Promo, Tech]
})

export class Content {
    constructor() {

    }
}