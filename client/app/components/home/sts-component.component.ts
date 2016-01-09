import {Component, Input} from 'angular2/core';

@Component({
  selector: 'sts-component',
  template: `<div>
              <ng-content></ng-content>
            </div>`
})
export class StsComponent {

  @Input() name: String;
}
