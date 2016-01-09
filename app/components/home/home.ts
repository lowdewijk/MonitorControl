import {Component} from 'angular2/core';
import {NoUiSliderCmp}  from '../common/no-ui-slider.component';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {GridComponent} from '../common/grid.component';
import {fromWebSocket} from 'rx-dom/dist/rx.dom';
=======
>>>>>>> b919d9fac1461f88ac968a01449071df624243bc
>>>>>>> 8c9b83d5d661479b449296033bf84134df254bd0

@Component({
  selector: 'home',
  directives: [NoUiSliderCmp],
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
