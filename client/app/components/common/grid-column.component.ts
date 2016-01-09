import {Component} from 'angular2/core';
import {GridComponent} from '../common/grid.component';

@Component({
   selector: 'sts-grid-column',
   template: `
    <div class="sts-grid-column">
        <ng-content></ng-content>
    </div>
   `,
   styleUrls : ['../app/assets/grid.css']
})

export class GridColumnComponent {

    constructor(private grid : GridComponent) {

    }
}
