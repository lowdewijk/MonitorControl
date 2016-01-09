import {Component} from 'angular2/core';

@Component({
   selector: 'sts-grid-column',
   template: `
    <div class="sts-grid-column">
        <ng-content></ng-content>
    </div>
   `,
   styleUrls : ['../app/assets/grid.css']
})

export class GridComponent {
    private grid : GridComponent;

    constructor(grid : GridComponent) {

    }
}
