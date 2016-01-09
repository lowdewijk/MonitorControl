import {Component, Input} from 'angular2/core';
import {StsControl} from './sts-control.component';

@Component({
  selector: 'sts-component',
  template: `<div>
              <ng-content></ng-content>
            </div>`
})
export class StsComponent {

  @Input() name: String;

  controls: StsControl[];

  constructor() {
    this.controls = [];
  }

  addControl(control: StsControl) {
    this.controls.push(control);
  }
}
