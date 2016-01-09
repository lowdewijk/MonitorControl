import {Component} from 'angular2/core';
import {StsComponent} from './sts-component.component';
import {StsGraphiteControl} from './sts-graphite-control.component';
import {StsOpsviewControl} from './sts-opsview-control.component';
import {GridComponent} from '../common/grid.component';

@Component({
  selector: 'home',
  directives: [GridComponent, StsComponent, StsGraphiteControl, StsOpsviewControl],
  template: `
  <grid>
    <sts-component name="Server 1">
      <sts-graphite-control name="CPU Load %"></sts-graphite-control>
      <sts-opsview-control name="Memory usage"></sts-opsview-control>
    </sts-component>
    <sts-component name="Server 2">
      <sts-graphite-control name="CPU Load %"></sts-graphite-control>
      <sts-opsview-control name="Memory usage"></sts-opsview-control>
    </sts-component>
  </grid>`,
  styleUrls: ['./components/home/home.css']
})
export class HomeCmp {

  constructor() {
  }
}
