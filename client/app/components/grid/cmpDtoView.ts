import {Component, View, Input} from 'angular2/core';
import {CmpDto} from './cmpDto';
@Component({
    selector: 'cmp-view',
    inputs: ['directories: directories']
})
@View({
    template: `
      <div>Name: {{ cmpDto.name }}</div>
      <div>X: {{ cmpDto.X }}</div>
      <div>Y: {{ cmpDto.Y }}</div>
    `
})
export class TreeView {
    @Input() cmpDto: CmpDto;
}
