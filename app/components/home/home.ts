import {Component} from 'angular2/core';
import {StackComponent} from './stackcomponent.component';
import {Control} from './control.component';
import {GridComponent} from '../common/grid.component';

@Component({
  selector: 'home',
  directives: [GridComponent, StackComponent, Control],
  template: `
  <grid>
    <stack-component name="Server 1">
      <control name="CPU Load %"></control>
      <control name="Memory usage %"></control>
    </stack-component>
  </grid>`,
  styleUrls: ['./components/home/home.css']
})
export class HomeCmp {

  constructor() {
  }

  onSlideChange($event) {
    console.log('on change', $event);
  }
}
