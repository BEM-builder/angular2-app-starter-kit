import {Component, provide} from 'angular2/core';

import {Header} from './../modules/header/header'

import {HomeComponent} from './pages/homepage/homepage.component';
//import {FirstPageComponent} from './pages/firstpage/firstpage.component';
import {SecondPageComponent} from './pages/secondpage/secondpage.component';

import {
    Router,
    RouteConfig,
    RouteDefinition,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy} from 'angular2/router';

@Component({
  selector: 'app',
  template: `
    <div>
        <header></header>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [ ".router-link-active {background-color: red;}"],
  directives: [ROUTER_DIRECTIVES, Header]
})

@RouteConfig([
  {path: '/', name: 'HomePage', component: HomeComponent, useAsDefault: true},
  //{path: '/firstpage', name: 'FirstPage', component: FirstPageComponent},
  {
    path: '/firstpage',
    loader: () => require('./pages/firstpage/firstpage.component.async')('FirstPageComponent'),
    name: 'FirstPage'
  },
  {path: '/secondpage', name: 'SecondPage', component: SecondPageComponent}
])

export class AppComponent {
  constructor() {

  }
}
