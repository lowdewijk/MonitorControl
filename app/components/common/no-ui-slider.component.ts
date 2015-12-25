import {Component, Input, OnInit, ElementRef, Inject} from 'angular2/core';
import {create as createSlider, Instance as SliderInstance, noUiSlider as NoUiSlider}  from 'noUiSlider/distribute/nouislider';

export class Orientation {
  static Horizontal = 'horizontal';
  static Vertical   = 'vertical';
}

@Component({
  selector: 'no-ui-slider',
  template: `<div [attr.style]="elementStyle"></div>`
})
export class NoUiSliderCmp implements OnInit {

  @Input() orientation = Orientation.Horizontal;
  @Input() size        = 100;
  elementStyle ='';

  private sliderElement : HTMLElement;
  private slider        : NoUiSlider;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    if (!elementRef || !elementRef.nativeElement) {
      throw new Error('Could not instantiate no-ui-slider component. ElementRef not found.');
    }
    this.sliderElement = elementRef.nativeElement.children[0];
  }

  ngOnInit() {
    const sizeAttr = this.orientation === Orientation.Horizontal ? 'width' : 'height';
    this.elementStyle = `display: block-inline; ${sizeAttr}: ${this.size}px;`;

    createSlider(this.sliderElement, {
      start: 0,
      connect: 'lower',
      orientation: this.orientation,
      range: {
        'min': 0,
        'max': 100
      }
    });

    this.slider = (<SliderInstance> this.sliderElement).noUiSlider;

    this.slider.on('slide', newValue => {
      console.log('new value', newValue);
    });
  }

}
