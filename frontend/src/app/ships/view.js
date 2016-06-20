import { Component, View } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'ship-view'
})

@View({
  template: `
    <h1>YShip</h1>
    <p>id: {{id}}</p>
  `
})

export default class ShipView {
  constructor(params: RouteParams) {
    this.id = params.get('id');
  }
};
