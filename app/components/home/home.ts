import {Component} from 'angular2/core';
import {NoUiSliderCmp}  from '../common/no-ui-slider.component';

@Component({
  selector: 'home',
  directives: [NoUiSliderCmp],
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css']
})
export class HomeCmp {

  constructor() {
  }

}
