import {Component} from 'angular2/core';
import {NoUiSliderCmp}  from '../common/no-ui-slider.component';

@Component({
  selector: 'home',
  directives: [NoUiSliderCmp],
  template: `<no-ui-slider orientation="vertical" size="300" (change)="onSlideChange($event)"></no-ui-slider>`,
  styleUrls: ['./components/home/home.css']
})
export class HomeCmp {

  constructor() {
  }

  onSlideChange($event) {
    console.log('on change', $event);
  }
}
