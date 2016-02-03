import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {FirstPageComponent} from './../firstpage/firstpage.component';
import {SecondPageComponent} from './../secondpage/secondpage.component';

@Component({
    selector: 'home-component',
    template: `
    <h1>Test app home page</h1>
    <nav>
      <a [routerLink]="['FirstPage']">Player page</a>
      <a [routerLink]="['SecondPage']">Forms page</a>
      <a [routerLink]="['HomePage']">HomePage</a>
    </nav>
    `,
    directives: ROUTER_DIRECTIVES
})

export class HomeComponent {
    constructor() {

    }
}
