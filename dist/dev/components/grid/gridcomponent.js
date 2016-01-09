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
var GridComponentCmp = (function () {
    function GridComponentCmp() {
        this.name = 'geen';
        this.X = 0;
        this.Y = 1;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridComponentCmp.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridComponentCmp.prototype, "X", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GridComponentCmp.prototype, "Y", void 0);
    GridComponentCmp = __decorate([
        core_1.Component({
            selector: 'gridcomponent',
            template: "\n    <div style='border:2px black solid; width: 100px; display:inline-block'>\n      <div>Name: {{ name }}</div>\n      <div>X: {{ X }}</div>\n      <div>Y: {{ Y }}</div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponentCmp);
    return GridComponentCmp;
})();
exports.GridComponentCmp = GridComponentCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZC9ncmlkY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkdyaWRDb21wb25lbnRDbXAiLCJHcmlkQ29tcG9uZW50Q21wLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFFL0M7SUFBQUE7UUFXV0MsU0FBSUEsR0FBR0EsTUFBTUEsQ0FBQ0E7UUFDZEEsTUFBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDTkEsTUFBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDakJBLENBQUNBO0lBSENEO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFDQSxrQ0FBSUEsVUFBVUE7SUFDdkJBO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFDQSwrQkFBQ0EsVUFBS0E7SUFDZkE7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQUNBLCtCQUFDQSxVQUFLQTtJQWJqQkE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGVBQWVBO1lBQ3pCQSxRQUFRQSxFQUFFQSw2TEFNVEE7U0FDRkEsQ0FBQ0E7O3lCQUtEQTtJQUFEQSx1QkFBQ0E7QUFBREEsQ0FkQSxBQWNDQSxJQUFBO0FBSlksd0JBQWdCLG1CQUk1QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ3JpZC9ncmlkY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JpZGNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBzdHlsZT0nYm9yZGVyOjJweCBibGFjayBzb2xpZDsgd2lkdGg6IDEwMHB4OyBkaXNwbGF5OmlubGluZS1ibG9jayc+XG4gICAgICA8ZGl2Pk5hbWU6IHt7IG5hbWUgfX08L2Rpdj5cbiAgICAgIDxkaXY+WDoge3sgWCB9fTwvZGl2PlxuICAgICAgPGRpdj5ZOiB7eyBZIH19PC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudENtcCB7XG4gIEBJbnB1dCgpIG5hbWUgPSAnZ2Vlbic7XG4gIEBJbnB1dCgpIFggPSAwO1xuICBASW5wdXQoKSBZID0gMTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==