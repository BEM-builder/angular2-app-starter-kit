import {Component, provide} from 'angular2/core';

import {Header} from './../modules/header/header';
import {Footer} from './../modules/footer/footer';
import {Modal} from './../modules/modal/modal';

import {HomeComponent} from './pages/homepage/homepage';
import {SecondPageComponent} from './pages/secondpage/secondpage';

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
      <footer></footer>
    </div>
  `,
  styles: [ ".router-link-active {background-color: red;}"],
  directives: [ROUTER_DIRECTIVES, Header, Footer]
})

@RouteConfig([
  {path: '/', name: 'HomePage', component: HomeComponent, useAsDefault: true},
  {path: '/modal', name: 'Modal', component: Modal},
  {
    path: '/firstpage',
    loader: () => require('./pages/firstpage/firstpage.async')('FirstPageComponent'),
    name: 'FirstPage'
  },
  {path: '/secondpage', name: 'SecondPage', component: SecondPageComponent}
])

export class AppComponent {
  constructor() {

  }
}
