import {Component} from 'angular2/core';
import {CmpDto} from '../grid/cmpDto'
import {StsComponent} from '../home/sts-component.component';

@Component({
   directives: [StsComponent],
   selector: 'sts-grid',
   template: `
    <div class="sts-grid">
        <sts-grid-row *ngFor="#r of rows" class="sts-grid-row">
            <sts-grid-col *ngFor="#c of r">
               <sts-component ng-if="c != null" x="c.x" y="c.y" [name]="c.name">
               blaaa
               </sts-component>
            </sts-grid-col>
        </sts-grid-row>
    </div>
   `,
   styleUrls : ['../app/assets/grid.css']
})

export class GridComponent {
    rows : Array<Array<CmpDto>> = [
               [new CmpDto('Server01',1,1)]
           ];

    constructor() {
        //    this.rows =[
        //        [new CmpDto('Server01',1,1)]
        //    ];
    }

    addToGrid(component : CmpDto) {

    };
};
