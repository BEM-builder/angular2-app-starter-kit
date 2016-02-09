import {Component} from 'angular2/core';

@Component({
    selector: 'default',
    template: require('./default.html'),
    styles: [ require('./default.scss').toString()],
    //directives: []
})

export class Default {
    constructor() {

    }
}