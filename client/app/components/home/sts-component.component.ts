import {Component, Input} from 'angular2/core';

@Component({
  selector: 'sts-component',
  template: `<div class="component">
              <ng-content></ng-content>
            </div>`
})
export class StsComponent {

  @Input() name: String;
}
