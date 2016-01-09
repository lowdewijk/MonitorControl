import {Component} from 'angular2/core';
import {GridComponentCmp} from '../grid/gridcomponent';

@Component({
  selector: 'grid',
  templateUrl: './components/grid/grid.html',
  directives:[GridComponentCmp],
  styleUrls: ['./assets/supergrid.css']
})
export class GridCmp {
  constructor() {}

  gridcomponents: GridComponentCmp[] = [    
    
  ];

}
