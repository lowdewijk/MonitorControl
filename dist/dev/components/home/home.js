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
var sts_component_component_1 = require('./sts-component.component');
var sts_graphite_control_component_1 = require('./sts-graphite-control.component');
var sts_opsview_control_component_1 = require('./sts-opsview-control.component');
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
            directives: [grid_component_1.GridComponent, sts_component_component_1.StsComponent, sts_graphite_control_component_1.StsGraphiteControl, sts_opsview_control_component_1.StsOpsviewControl],
            template: "\n  <sts-grid>\n    <sts-component name=\"Server 1\">\n      <sts-graphite-control name=\"CPU Load %\"></sts-graphite-control>\n      <sts-opsview-control name=\"Memory usage\"></sts-opsview-control>\n    </sts-component>\n    <sts-component name=\"Server 2\">\n      <sts-graphite-control name=\"CPU Load %\"></sts-graphite-control>\n      <sts-opsview-control name=\"Memory usage\"></sts-opsview-control>\n    </sts-component>\n  </sts-grid>",
            styles: ["\n    .note {\n      color: #a8a8a8;\n    }\n    smile {\n      width: 32px;\n      height: 32px;\n      display: inline-block;\n      vertical-align: bottom;\n      background: url(\"./assets/img/smile.png\");\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeCmp);
    return HomeCmp;
})();
exports.HomeCmp = HomeCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWVDbXAiLCJIb21lQ21wLmNvbnN0cnVjdG9yIiwiSG9tZUNtcC5vblNsaWRlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsd0NBQTJCLDJCQUEyQixDQUFDLENBQUE7QUFDdkQsK0NBQWlDLGtDQUFrQyxDQUFDLENBQUE7QUFDcEUsOENBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsK0JBQTRCLDBCQUEwQixDQUFDLENBQUE7QUFFdkQ7SUE2QkVBO0lBQ0FDLENBQUNBO0lBRURELCtCQUFhQSxHQUFiQSxVQUFjQSxNQUFNQTtRQUNsQkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0lBbENIRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsTUFBTUE7WUFDaEJBLFVBQVVBLEVBQUVBLENBQUNBLDhCQUFhQSxFQUFFQSxzQ0FBWUEsRUFBRUEsbURBQWtCQSxFQUFFQSxpREFBaUJBLENBQUNBO1lBQ2hGQSxRQUFRQSxFQUFFQSw2YkFVRUE7WUFDWkEsTUFBTUEsRUFBRUEsQ0FBQ0EsK05BV1JBLENBQUNBO1NBQ0hBLENBQUNBOztnQkFTREE7SUFBREEsY0FBQ0E7QUFBREEsQ0FuQ0EsQUFtQ0NBLElBQUE7QUFSWSxlQUFPLFVBUW5CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1N0c0NvbXBvbmVudH0gZnJvbSAnLi9zdHMtY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1N0c0dyYXBoaXRlQ29udHJvbH0gZnJvbSAnLi9zdHMtZ3JhcGhpdGUtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHtTdHNPcHN2aWV3Q29udHJvbH0gZnJvbSAnLi9zdHMtb3Bzdmlldy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQge0dyaWRDb21wb25lbnR9IGZyb20gJy4uL2NvbW1vbi9ncmlkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvbWUnLFxuICBkaXJlY3RpdmVzOiBbR3JpZENvbXBvbmVudCwgU3RzQ29tcG9uZW50LCBTdHNHcmFwaGl0ZUNvbnRyb2wsIFN0c09wc3ZpZXdDb250cm9sXSxcbiAgdGVtcGxhdGU6IGBcbiAgPHN0cy1ncmlkPlxuICAgIDxzdHMtY29tcG9uZW50IG5hbWU9XCJTZXJ2ZXIgMVwiPlxuICAgICAgPHN0cy1ncmFwaGl0ZS1jb250cm9sIG5hbWU9XCJDUFUgTG9hZCAlXCI+PC9zdHMtZ3JhcGhpdGUtY29udHJvbD5cbiAgICAgIDxzdHMtb3Bzdmlldy1jb250cm9sIG5hbWU9XCJNZW1vcnkgdXNhZ2VcIj48L3N0cy1vcHN2aWV3LWNvbnRyb2w+XG4gICAgPC9zdHMtY29tcG9uZW50PlxuICAgIDxzdHMtY29tcG9uZW50IG5hbWU9XCJTZXJ2ZXIgMlwiPlxuICAgICAgPHN0cy1ncmFwaGl0ZS1jb250cm9sIG5hbWU9XCJDUFUgTG9hZCAlXCI+PC9zdHMtZ3JhcGhpdGUtY29udHJvbD5cbiAgICAgIDxzdHMtb3Bzdmlldy1jb250cm9sIG5hbWU9XCJNZW1vcnkgdXNhZ2VcIj48L3N0cy1vcHN2aWV3LWNvbnRyb2w+XG4gICAgPC9zdHMtY29tcG9uZW50PlxuICA8L3N0cy1ncmlkPmAsXG4gIHN0eWxlczogW2BcbiAgICAubm90ZSB7XG4gICAgICBjb2xvcjogI2E4YThhODtcbiAgICB9XG4gICAgc21pbGUge1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3NtaWxlLnBuZ1wiKTtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDbXAge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgb25TbGlkZUNoYW5nZSgkZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnb24gY2hhbmdlJywgJGV2ZW50KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9