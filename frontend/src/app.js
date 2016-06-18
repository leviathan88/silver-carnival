import './style.scss'
import 'zone.js/dist/zone-microtask'
import 'reflect-metadata'

import {bind, Component, View} from 'angular2/core'
import {bootstrap} from 'angular2/platform/browser'
import {APP_BASE_HREF} from 'angular2/router'

@Component({
  selector: 'master-app'
})
@View({
  template: `
  <div class="container">
    <nav class="navbar navbar-dark bg-inverse">
      <a class="navbar-brand" href="#">Exploring MEAN by Elvis</a>
      <ul class="nav navbar-nav hidden-sm-down">
        <li class="nav-item">
          <a class="nav-link" href="#">Masters <span class="label label-pill label-primary">1</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Weapons <span class="label label-pill label-danger">15</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ships</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item hidden-sm-down">
          <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item hidden-md-up">
          <button type="button" (click)="onClick()" class="btn btn-secondary-online"><i class="fa fa-bars"></i></button>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `
})
class App {
}

bootstrap(App, [
  bind(APP_BASE_HREF).toValue('/')
])
