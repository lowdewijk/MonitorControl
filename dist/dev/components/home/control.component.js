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
var no_ui_slider_component_1 = require('../common/no-ui-slider.component');
var Control = (function () {
    function Control(stackComponent) {
        this.stackComponent = stackComponent;
        stackComponent.addControl(this);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Control.prototype, "name", void 0);
    Control = __decorate([
        core_1.Component({
            selector: 'control',
            directives: [no_ui_slider_component_1.NoUiSliderCmp],
            template: "<div class='control'>\n    <no-ui-slider orientation=\"vertical\" size=\"300\" (change)=\"onSlideChange($event)\"></no-ui-slider>\n    <span>Control '{{name}}' for component '{{stackComponent.name}}'</span>\n  </div>"
        }), 
        __metadata('design:paramtypes', [stackcomponent_component_1.StackComponent])
    ], Control);
    return Control;
})();
exports.Control = Control;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJDb250cm9sIiwiQ29udHJvbC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHlDQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzFELHVDQUE2QixrQ0FBa0MsQ0FBQyxDQUFBO0FBRWhFO0lBYUVBLGlCQUFZQSxjQUE4QkE7UUFDeENDLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLGNBQWNBLENBQUNBO1FBQ3JDQSxjQUFjQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNsQ0EsQ0FBQ0E7SUFQREQ7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQUNBLHlCQUFJQSxVQUFTQTtJQVR4QkE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLFNBQVNBO1lBQ25CQSxVQUFVQSxFQUFFQSxDQUFDQSxzQ0FBYUEsQ0FBQ0E7WUFDM0JBLFFBQVFBLEVBQUVBLDBOQUdIQTtTQUNSQSxDQUFDQTs7Z0JBVURBO0lBQURBLGNBQUNBO0FBQURBLENBakJBLEFBaUJDQSxJQUFBO0FBVFksZUFBTyxVQVNuQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZS9jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1N0YWNrQ29tcG9uZW50fSBmcm9tICcuL3N0YWNrY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge05vVWlTbGlkZXJDbXB9ICBmcm9tICcuLi9jb21tb24vbm8tdWktc2xpZGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbnRyb2wnLFxuICBkaXJlY3RpdmVzOiBbTm9VaVNsaWRlckNtcF0sXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz0nY29udHJvbCc+XG4gICAgPG5vLXVpLXNsaWRlciBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgc2l6ZT1cIjMwMFwiIChjaGFuZ2UpPVwib25TbGlkZUNoYW5nZSgkZXZlbnQpXCI+PC9uby11aS1zbGlkZXI+XG4gICAgPHNwYW4+Q29udHJvbCAne3tuYW1lfX0nIGZvciBjb21wb25lbnQgJ3t7c3RhY2tDb21wb25lbnQubmFtZX19Jzwvc3Bhbj5cbiAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sIHtcbiAgQElucHV0KCkgbmFtZTogU3RyaW5nO1xuXG4gIHByaXZhdGUgc3RhY2tDb21wb25lbnQ6IFN0YWNrQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHN0YWNrQ29tcG9uZW50OiBTdGFja0NvbXBvbmVudCkge1xuICAgIHRoaXMuc3RhY2tDb21wb25lbnQgPSBzdGFja0NvbXBvbmVudDtcbiAgICBzdGFja0NvbXBvbmVudC5hZGRDb250cm9sKHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=