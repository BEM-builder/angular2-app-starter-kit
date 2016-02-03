import {Data} from '../../data/data'

import {Component} from 'angular2/core'

@Component({
    selector: 'menu',
    template: require('./menu.template.html'),
    styles: [ require('./menu.scss').toString() ]
    //providers: [Data]
})

export class Menu {
    private data : any = new Data().getData();
    constructor() {
        console.log("data: ",this.data);
    }
}