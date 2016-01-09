import {Component} from 'angular2/core';
import {StsComponent} from './sts-component.component';
import {StsControl} from './sts-control.component';
import {GridComponent} from '../common/grid.component';

@Component({
  selector: 'home',
  directives: [GridComponent, StsComponent, StsControl],
  template: `
  <grid>
    <sts-component name="Server 1">
      <sts-control name="CPU Load %"></sts-control>
      <sts-control name="Memory usage %"></sts-control>
    </sts-component>
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
