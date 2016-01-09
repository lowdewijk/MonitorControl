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
var no_ui_slider_component_1 = require('../common/no-ui-slider.component');
var StsGraphiteControl = (function () {
    function StsGraphiteControl(stackComponent) {
        this.stackComponent = stackComponent;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], StsGraphiteControl.prototype, "name", void 0);
    StsGraphiteControl = __decorate([
        core_1.Component({
            selector: 'sts-graphite-control',
            directives: [no_ui_slider_component_1.NoUiSliderCmp],
            template: "<div class='control'>\n    <no-ui-slider orientation=\"vertical\" size=\"300\" (change)=\"onSlideChange($event)\"></no-ui-slider>\n    <span>Graphite control '{{name}}' for component '{{stackComponent.name}}'</span>\n  </div>"
        }), 
        __metadata('design:paramtypes', [sts_component_component_1.StsComponent])
    ], StsGraphiteControl);
    return StsGraphiteControl;
})();
exports.StsGraphiteControl = StsGraphiteControl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9zdHMtZ3JhcGhpdGUtY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU3RzR3JhcGhpdGVDb250cm9sIiwiU3RzR3JhcGhpdGVDb250cm9sLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0Msd0NBQTJCLDJCQUEyQixDQUFDLENBQUE7QUFDdkQsdUNBQTZCLGtDQUFrQyxDQUFDLENBQUE7QUFHaEU7SUFhRUEsNEJBQVlBLGNBQTRCQTtRQUN0Q0MsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBTkREO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFDQSxvQ0FBSUEsVUFBU0E7SUFUeEJBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxzQkFBc0JBO1lBQ2hDQSxVQUFVQSxFQUFFQSxDQUFDQSxzQ0FBYUEsQ0FBQ0E7WUFDM0JBLFFBQVFBLEVBQUVBLG1PQUdIQTtTQUNSQSxDQUFDQTs7MkJBU0RBO0lBQURBLHlCQUFDQTtBQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtBQVJZLDBCQUFrQixxQkFROUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvc3RzLWdyYXBoaXRlLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3RzQ29tcG9uZW50fSBmcm9tICcuL3N0cy1jb21wb25lbnQuY29tcG9uZW50JztcbmltcG9ydCB7Tm9VaVNsaWRlckNtcH0gIGZyb20gJy4uL2NvbW1vbi9uby11aS1zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7U3RzQ29udHJvbH0gZnJvbSAnLi9zdHMtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0cy1ncmFwaGl0ZS1jb250cm9sJyxcbiAgZGlyZWN0aXZlczogW05vVWlTbGlkZXJDbXBdLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J2NvbnRyb2wnPlxuICAgIDxuby11aS1zbGlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHNpemU9XCIzMDBcIiAoY2hhbmdlKT1cIm9uU2xpZGVDaGFuZ2UoJGV2ZW50KVwiPjwvbm8tdWktc2xpZGVyPlxuICAgIDxzcGFuPkdyYXBoaXRlIGNvbnRyb2wgJ3t7bmFtZX19JyBmb3IgY29tcG9uZW50ICd7e3N0YWNrQ29tcG9uZW50Lm5hbWV9fSc8L3NwYW4+XG4gIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU3RzR3JhcGhpdGVDb250cm9sIGltcGxlbWVudHMgU3RzQ29udHJvbCB7XG4gIEBJbnB1dCgpIG5hbWU6IFN0cmluZztcblxuICBwcml2YXRlIHN0YWNrQ29tcG9uZW50OiBTdHNDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3Ioc3RhY2tDb21wb25lbnQ6IFN0c0NvbXBvbmVudCkge1xuICAgIHRoaXMuc3RhY2tDb21wb25lbnQgPSBzdGFja0NvbXBvbmVudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9