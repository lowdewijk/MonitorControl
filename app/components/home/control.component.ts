import {Component, Input} from 'angular2/core';
import {StackComponent} from './stackcomponent.component';
import {NoUiSliderCmp}  from '../common/no-ui-slider.component';

@Component({
  selector: 'control',
  directives: [NoUiSliderCmp],
  template: `<div class='control'>
    <no-ui-slider orientation="vertical" size="300" (change)="onSlideChange($event)"></no-ui-slider>
    <span>Control '{{name}}' for component '{{stackComponent.name}}'</span>
  </div>`
})
export class Control {
  @Input() name: String;

  private stackComponent: StackComponent;

  constructor(stackComponent: StackComponent) {
    this.stackComponent = stackComponent;
    stackComponent.addControl(this);
  }
}
