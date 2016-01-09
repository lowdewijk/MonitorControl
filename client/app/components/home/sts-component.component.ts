import {Component, Input} from 'angular2/core';

@Component({
  selector: 'sts-component',
  template: `<div class="component">
               <span class="title">{{name}}</span>
              <ng-content></ng-content>
            </div>`
})

export class StsComponent {

  @Input() name: String;
  @Input() x: number;
  @Input() y: number;


  constructor() {}
}
