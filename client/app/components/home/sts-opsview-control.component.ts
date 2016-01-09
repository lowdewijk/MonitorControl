import {Component, Input} from 'angular2/core';
import {StsComponent} from './sts-component.component';
import {StsControl} from './sts-control';
import {TrafficLight} from '../common/traffic-light.component';

@Component({
  selector: 'sts-opsview-control',
  directives: [TrafficLight],
  template: `
    <div class='control'>
      <traffic-light (change)="onSlideChange($event)"></traffic-light>
      <span>Opsview control '{{name}}' for component '{{stackComponent.name}}'</span>
    </div>`
})
export class StsOpsviewControl implements StsControl {
  @Input() name: String;

  private stackComponent: StsComponent;

  constructor(stackComponent: StsComponent) {
    this.stackComponent = stackComponent;
  }

  onSlideChange($event) {
    console.log(`Opsview control '${this.name}' for component '${this.stackComponent.name}' changed state `, $event);
  }
}
