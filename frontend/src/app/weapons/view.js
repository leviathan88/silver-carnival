import { Component, View } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'weapon-view'
})

@View({
  template: `
    <h1>Weapon vie</h1>
    <p>id: {{id}}</p>
  `
})

export default class WeaponView {
  constructor(params: RouteParams) {
    this.id = params.get('id');
  }
};
