import { Component, View } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'weapon-edit'
})

@View({
  template: `
    <h1>Edit weapons</h1>
    <p>do it do id: {{id}}</p>
  `
})

export default class WeaponEdit {
  constructor(params: RouteParams) {
    this.id = params.get('id');
  }
};
