import {Component} from 'angular2/core';
import {GridComponent} from '../common/grid.component';

@Component({
   selector: 'sts-grid-row',
   template: `
    <div class="sts-grid-row">
        <ng-content></ng-content>
    </div>
   `,
   styleUrls : ['../app/assets/grid.css']
})

export class GridRowComponent {

    constructor(private grid : GridComponent) {}
}
