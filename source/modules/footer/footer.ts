import {Component} from 'angular2/core';
import {Data} from './../../data/data';
import construct = Reflect.construct;

@Component({
    selector: 'footer',
    template: require('./footer.html'),
    styles: [ require('./footer.scss').toString() ]
})

export class Footer {
    private data: any = new Data().getData();
    constructor() {

    }
}