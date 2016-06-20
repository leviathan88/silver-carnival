import { Component, View } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'master-edit'
})

@View({
  template: `
    <h1>Edit master yoda you will</h1>
    <p>do it do id: {{id}}</p>
  `
})

export default class MasterEdit {
  constructor(params: RouteParams) {
    this.id = params.get('id');
  }
};
