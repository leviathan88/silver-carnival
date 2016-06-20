import { Component, View } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'ship-edit'
})

@View({
  template: `
    <h1>Edit  some ships</h1>
    <p>do it do id: {{id}}</p>
  `
})

export default class ShipEdit {
  constructor(params: RouteParams) {
    this.id = params.get('id');
  }
};
