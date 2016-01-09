var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var stackcomponent_component_1 = require('./stackcomponent.component');
var control_component_1 = require('./control.component');
var grid_component_1 = require('../common/grid.component');
var HomeCmp = (function () {
    function HomeCmp() {
    }
    HomeCmp.prototype.onSlideChange = function ($event) {
        console.log('on change', $event);
    };
    HomeCmp = __decorate([
        core_1.Component({
            selector: 'home',
            directives: [grid_component_1.GridComponent, stackcomponent_component_1.StackComponent, control_component_1.Control],
            template: "\n  <grid>\n    <stack-component name=\"Server 1\">\n      <control name=\"CPU Load %\"></control>\n      <control name=\"Memory usage %\"></control>\n    </stack-component>\n  </grid>",
            styles: ["\n    .note {\n      color: #a8a8a8;\n    }\n    smile {\n      width: 32px;\n      height: 32px;\n      display: inline-block;\n      vertical-align: bottom;\n      background: url(\"./assets/img/smile.png\");\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeCmp);
    return HomeCmp;
})();
exports.HomeCmp = HomeCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWVDbXAiLCJIb21lQ21wLmNvbnN0cnVjdG9yIiwiSG9tZUNtcC5vblNsaWRlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMseUNBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFDMUQsa0NBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFDNUMsK0JBQTRCLDBCQUEwQixDQUFDLENBQUE7QUFFdkQ7SUF5QkVBO0lBQ0FDLENBQUNBO0lBRURELCtCQUFhQSxHQUFiQSxVQUFjQSxNQUFNQTtRQUNsQkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0lBOUJIRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsTUFBTUE7WUFDaEJBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFhQSxFQUFFQSx5Q0FBY0EsRUFBRUEsMkJBQU9BLENBQUNBO1lBQ3BEQSxRQUFRQSxFQUFFQSwwTEFNRkE7WUFDUkEsTUFBTUEsRUFBRUEsQ0FBQ0EsK05BV1JBLENBQUNBO1NBQ0hBLENBQUNBOztnQkFTREE7SUFBREEsY0FBQ0E7QUFBREEsQ0EvQkEsQUErQkNBLElBQUE7QUFSWSxlQUFPLFVBUW5CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1N0YWNrQ29tcG9uZW50fSBmcm9tICcuL3N0YWNrY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHtHcmlkQ29tcG9uZW50fSBmcm9tICcuLi9jb21tb24vZ3JpZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgZGlyZWN0aXZlczogW0dyaWRDb21wb25lbnQsIFN0YWNrQ29tcG9uZW50LCBDb250cm9sXSxcbiAgdGVtcGxhdGU6IGBcbiAgPGdyaWQ+XG4gICAgPHN0YWNrLWNvbXBvbmVudCBuYW1lPVwiU2VydmVyIDFcIj5cbiAgICAgIDxjb250cm9sIG5hbWU9XCJDUFUgTG9hZCAlXCI+PC9jb250cm9sPlxuICAgICAgPGNvbnRyb2wgbmFtZT1cIk1lbW9yeSB1c2FnZSAlXCI+PC9jb250cm9sPlxuICAgIDwvc3RhY2stY29tcG9uZW50PlxuICA8L2dyaWQ+YCxcbiAgc3R5bGVzOiBbYFxuICAgIC5ub3RlIHtcbiAgICAgIGNvbG9yOiAjYThhOGE4O1xuICAgIH1cbiAgICBzbWlsZSB7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvc21pbGUucG5nXCIpO1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNtcCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBvblNsaWRlQ2hhbmdlKCRldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdvbiBjaGFuZ2UnLCAkZXZlbnQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=