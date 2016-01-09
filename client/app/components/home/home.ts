import {Component} from 'angular2/core';
import {StsComponent} from './sts-component.component';
import {StsGraphiteControl} from './sts-graphite-control.component';
import {StsOpsviewControl} from './sts-opsview-control.component';
import {GridComponent} from '../common/grid.component';

@Component({
  selector: 'home',
  directives: [GridComponent, StsComponent, StsGraphiteControl, StsOpsviewControl],
  template: `
  <sts-component name="server1">
    <sts-graphite-control name="cpuLoadPercent"></sts-graphite-control>
    <sts-opsview-control name="Memory usage"></sts-opsview-control>
  </sts-component>
  <sts-grid>
    <sts-component name="server2">
      <sts-graphite-control name="cpuLoadPercent"></sts-graphite-control>
      <sts-opsview-control name="Memory usage"></sts-opsview-control>
    </sts-component>
  </sts-grid>`,
  styleUrls: ['./components/home/home.css']
})
export class HomeCmp {

  constructor() {
  }
}
