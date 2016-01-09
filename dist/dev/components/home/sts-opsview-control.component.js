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
var StsOpsviewControl = (function () {
    function StsOpsviewControl(stackComponent) {
        this.stackComponent = stackComponent;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], StsOpsviewControl.prototype, "name", void 0);
    StsOpsviewControl = __decorate([
        core_1.Component({
            selector: 'sts-opsview-control',
            directives: [],
            template: "\n    <div class='control'>\n      <span>Opsview control '{{name}}' for component '{{stackComponent.name}}'</span>\n    </div>"
        }), 
        __metadata('design:paramtypes', [sts_component_component_1.StsComponent])
    ], StsOpsviewControl);
    return StsOpsviewControl;
})();
exports.StsOpsviewControl = StsOpsviewControl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9zdHMtb3Bzdmlldy1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTdHNPcHN2aWV3Q29udHJvbCIsIlN0c09wc3ZpZXdDb250cm9sLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0Msd0NBQTJCLDJCQUEyQixDQUFDLENBQUE7QUFHdkQ7SUFhRUEsMkJBQVlBLGNBQTRCQTtRQUN0Q0MsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBTkREO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFDQSxtQ0FBSUEsVUFBU0E7SUFUeEJBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxxQkFBcUJBO1lBQy9CQSxVQUFVQSxFQUFFQSxFQUFFQTtZQUNkQSxRQUFRQSxFQUFFQSxnSUFHREE7U0FDVkEsQ0FBQ0E7OzBCQVNEQTtJQUFEQSx3QkFBQ0E7QUFBREEsQ0FoQkEsQUFnQkNBLElBQUE7QUFSWSx5QkFBaUIsb0JBUTdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL3N0cy1vcHN2aWV3LWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3RzQ29tcG9uZW50fSBmcm9tICcuL3N0cy1jb21wb25lbnQuY29tcG9uZW50JztcbmltcG9ydCB7U3RzQ29udHJvbH0gZnJvbSAnLi9zdHMtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0cy1vcHN2aWV3LWNvbnRyb2wnLFxuICBkaXJlY3RpdmVzOiBbXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPSdjb250cm9sJz5cbiAgICAgIDxzcGFuPk9wc3ZpZXcgY29udHJvbCAne3tuYW1lfX0nIGZvciBjb21wb25lbnQgJ3t7c3RhY2tDb21wb25lbnQubmFtZX19Jzwvc3Bhbj5cbiAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFN0c09wc3ZpZXdDb250cm9sIGltcGxlbWVudHMgU3RzQ29udHJvbCB7XG4gIEBJbnB1dCgpIG5hbWU6IFN0cmluZztcblxuICBwcml2YXRlIHN0YWNrQ29tcG9uZW50OiBTdHNDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3Ioc3RhY2tDb21wb25lbnQ6IFN0c0NvbXBvbmVudCkge1xuICAgIHRoaXMuc3RhY2tDb21wb25lbnQgPSBzdGFja0NvbXBvbmVudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9