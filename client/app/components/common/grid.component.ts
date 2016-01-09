import {Component} from 'angular2/core';
import {StsComponent} from '../home/sts-component.component'
@Component({
   selector: 'sts-grid',
   template: `
    <div class="sts-grid">
        {{component}}
        <sts-grid-row *ngFor="#r of rows" class="sts-grid-row">
            <sts-grid-col *ngFor="#c of r">
               {{c}}
            </sts-grid-col>
        </sts-grid-row>
    </div>
   `,
   styleUrls : ['../app/assets/grid.css']
})

export class GridComponent {
    rows = [
        [5, 5, 5],
        [2],
        [1, 2]
    ];
    component : StsComponent;

    constructor() {
           this.component = new StsComponent();
    }

    addToGrid(component : StsComponent) {

    }


}
