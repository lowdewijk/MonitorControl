import {Component} from 'angular2/core';
import {create as createSlider}  from 'noUiSlider/distribute/nouislider';

@Component({
  selector: 'no-ui-slider',
  template: `<div style="display: inline-block; width: 600px;">
    <div id="slider" style="width: 500px; display: inline-block;"></div>
  </div>`
})
export class NoUiSliderCmp {

  constructor() {
    createSlider(document.getElementById('slider'), {
      start: 0,
      connect: 'lower',
      //orientation: "vertical",
      range: {
        'min': 0,
        'max': 100
      }
    });
  }

}
