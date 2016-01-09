import {Component, Input} from 'angular2/core';

@Component({
  selector: 'gridcomponent',
  template: `
    <div style='border:2px black solid; width: 100px; display:inline-block'>
      <div>Name: {{ name }}</div>
      <div>X: {{ X }}</div>
      <div>Y: {{ Y }}</div>
    </div>
  `
})
export class GridComponentCmp {
  @Input() name = 'geen';
  @Input() X = 0;
  @Input() Y = 1;
}
