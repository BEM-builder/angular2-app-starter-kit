import {Data} from '../../data/data'

import {Component, Input} from 'angular2/core'
import {Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'menu',
    template: require('./menu.template.html'),
    styles: [ require('./menu.scss').toString()],
    directives: [RouterLink, ROUTER_DIRECTIVES]
    //providers: [Data]
})

export class Menu {
    @Input() modificator : string;
    private routeNames : Array<string> = [
        'FirstPage',
        'SecondPage',
        'HomePage'
    ];
    private data : any = new Data().getData();
    constructor(public router: Router) {

    }
}