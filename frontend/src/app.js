import './style.scss'
import 'zone.js/dist/zone-microtask'
import 'reflect-metadata'

import {bind, Component, View} from 'angular2/core'
import {bootstrap} from 'angular2/platform/browser'
import { RouteConfig, APP_BASE_HREF, ROUTER_BINDINGS, ROUTER_DIRECTIVES } from 'angular2/router'

import Home from './app/home/home'
import Navbar from './app/nav/navbar'

import MasterList from './app/masters/list'
import MasterNew from './app/masters/new'
import MasterEdit from './app/masters/edit'
import MasterView from './app/masters/view'

import ShipList from './app/ships/list'
import ShipNew from './app/ships/new'
import ShipEdit from './app/ships/edit'
import ShipView from './app/ships/view'

import WeaponList from './app/weapons/list'
import WeaponNew from './app/weapons/new'
import WeaponEdit from './app/weapons/edit'
import WeaponView from './app/weapons/view'

@Component({
  selector: 'master-app'
})
@View({
  directives: [ROUTER_DIRECTIVES, Navbar],
  template: `
  <div class="container">
    <navbar></navbar>
    <router-outlet></router-outlet>
  </div>
  `
})
@RouteConfig([
  {path: '/', component: Home, name: 'Home'},

  {path: '/masters', component: MasterList, name: 'Masters'},
  {path: '/master/:id', component: MasterView, name: 'MasterView'},
  {path: '/master/:id/edit', component: MasterEdit, name: 'MasterEdit'},
  {path: '/master', component: MasterNew, name: 'MasterNew'},

  {path: '/weapons', component: WeaponList, name: 'Weapons'},
  {path: '/weapon/:id', component: WeaponView, name: 'WeaponView'},
  {path: '/weapon/:id/edit', component: WeaponEdit, name: 'WeaponEdit'},
  {path: '/weapon', component: WeaponNew, name: 'WeaponNew'},

  {path: '/ships', component: ShipList, name: 'Ships'},
  {path: '/ship/:id', component: ShipView, name: 'ShipView'},
  {path: '/ship/:id/edit', component: ShipEdit, name: 'ShipEdit'},
  {path: '/ship', component: ShipNew, name: 'ShipNew'}
])
class App {
}

bootstrap(App, [
  ROUTER_BINDINGS,
  bind(APP_BASE_HREF).toValue('/')
])
