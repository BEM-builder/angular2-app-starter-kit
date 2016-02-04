import {Data} from '../../data/data'

import {Component, Input} from 'angular2/core'

@Component({
    selector: 'menu',
    template: require('./menu.template.html'),
    styles: [ require('./menu.scss').toString() ]
    //providers: [Data]
})

export class Menu {
    @Input() modificator : string;
    private data : any = new Data().getData();
    constructor() {

    }
}