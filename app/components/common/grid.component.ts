import {Component} from 'angular2/core';

@Component({
   selector: 'sts-grid',
   template: `
    <div class="sts-grid">
        <div *ngFor="#r of rows" class="sts-grid-row">
            <div class="sts-grid-col" *ngFor="#c of r">
                <p>column</p>
            </div>
        </div>
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

    constructor() {

    }
}
