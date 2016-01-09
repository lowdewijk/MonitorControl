import {Component, Input} from 'angular2/core';
import {StsComponent} from './sts-component.component';
import {NoUiSliderCmp}  from '../common/no-ui-slider.component';
import {StsControl} from './sts-control';

@Component({
  selector: 'sts-graphite-control',
  directives: [NoUiSliderCmp],
  template: `<div class='control'>
    <no-ui-slider orientation="vertical" size="300" (change)="onSlideChange($event)"></no-ui-slider>
    <span>Graphite control '{{name}}' for component '{{stackComponent.name}}'</span>
  </div>`
})
export class StsGraphiteControl implements StsControl {
  @Input() name: String;

  private stackComponent: StsComponent;

  constructor(stackComponent: StsComponent) {
    this.stackComponent = stackComponent;
  }
}
