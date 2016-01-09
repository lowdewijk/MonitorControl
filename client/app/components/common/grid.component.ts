import {Component} from 'angular2/core';

@Component({
   selector: 'grid',
   template: '<ng-content></ng-content>',
   styleUrls : ['./assets/grid.css']
})

export class GridComponent {
    constructor() {}
}
