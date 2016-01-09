import {Component, Input} from 'angular2/core';

@Component({
  selector: 'gridcomponent',
  templateUrl: './components/grid/gridcomponent.html'
})
export class GridComponentCmp {
  @Input() name = 'geen';
  @Input() X = 0;
  @Input() Y = 1;
}
