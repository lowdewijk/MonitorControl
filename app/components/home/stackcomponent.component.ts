import {Component, Input} from 'angular2/core';
import {Control} from './control.component';

@Component({
  selector: 'stack-component',
  template: `<div>
              <ng-content></ng-content>
            </div>`
})
export class StackComponent {

  @Input() name: String;

  controls: Control[];

  constructor() {
    this.controls = [];
  }

  addControl(control: Control) {
    this.controls.push(control);
  }
}
