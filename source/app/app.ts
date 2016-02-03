import {Component, provide} from 'angular2/core';

import {HomeComponent} from './pages/homepage/homepage.component';
import {FirstPageComponent} from './pages/firstpage/firstpage.component';
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
      <router-outlet></router-outlet>
    </div>
  `,
  directives: ROUTER_DIRECTIVES
})

@RouteConfig([
  {path: '/', name: 'HomePage', component: HomeComponent, useAsDefault: true},
  {path: '/firstpage', name: 'FirstPage', component: FirstPageComponent},
  {path: '/secondpage', name: 'SecondPage', component: SecondPageComponent}
])

export class AppComponent {
  constructor() {

  }
}
