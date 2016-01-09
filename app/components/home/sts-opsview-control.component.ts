import {Component, Input} from 'angular2/core';
import {StsComponent} from './sts-component.component';
import {StsControl} from './sts-control';

@Component({
  selector: 'sts-opsview-control',
  directives: [],
  template: `
    <div class='control'>
      <span>Opsview control '{{name}}' for component '{{stackComponent.name}}'</span>
    </div>`
})
export class StsOpsviewControl implements StsControl {
  @Input() name: String;

  private stackComponent: StsComponent;

  constructor(stackComponent: StsComponent) {
    this.stackComponent = stackComponent;
  }
}
