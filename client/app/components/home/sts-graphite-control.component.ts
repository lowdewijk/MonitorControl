import {Component, Input} from 'angular2/core';
import {StsComponent} from './sts-component.component';
import {NoUiSliderCmp}  from '../common/no-ui-slider.component';
import {StsControl} from './sts-control';
import {DataPointPublisher} from '../common/DataPointPublisher';

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

  constructor(private stackComponent: StsComponent, private dataPointPublisher: DataPointPublisher) {
  }

  onSlideChange($event) {
    this.dataPointPublisher.observer.next({
      provider: 'Graphite',
      identifier: `${this.stackComponent.name}.${this.name}`,
      data: {
        value: parseFloat($event)
      }
    });
    console.log(`Graphite control moved '${this.name}' for component '${this.stackComponent.name}' `, $event);
  }
}
