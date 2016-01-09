import {Component} from 'angular2/core';
import {NoUiSliderCmp}  from '../common/no-ui-slider.component';
import {GridComponent} from '../common/grid.component';
import {fromWebSocket} from 'rx-dom/dist/rx.dom';

@Component({
  selector: 'home',
  directives: [NoUiSliderCmp, GridComponent],
  template: `<grid><no-ui-slider orientation="vertical" size="300" (change)="onSlideChange($event)"></no-ui-slider></grid>`,
  styleUrls: ['./components/home/home.css']
})
export class HomeCmp {

  constructor() {
  }

  onSlideChange($event) {
    console.log('on change', $event);
  }
}
