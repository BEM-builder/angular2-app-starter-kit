import {Component} from 'angular2/core';
import {Data} from './../../data/data';

@Component({
    selector: 'promo',
    template: require('./promo.html'),
    styles: [ require('./promo.scss').toString() ]
})

export class Promo {
    private data: any = new Data().getData();
    constructor() {

    }
}