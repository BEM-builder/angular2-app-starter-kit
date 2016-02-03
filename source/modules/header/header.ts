import {Component} from 'angular2/core'
import {Menu} from './../menu/menu'

@Component({
    selector: 'header',
    template: require('./header.html'),
    styles: [ require('./header.scss').toString() ],
    directives: [Menu]
})

export class Header {
    constructor() {

    }
}