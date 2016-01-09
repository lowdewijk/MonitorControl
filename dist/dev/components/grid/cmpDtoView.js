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
var cmpDto_1 = require('./cmpDto');
var TreeView = (function () {
    function TreeView() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', cmpDto_1.CmpDto)
    ], TreeView.prototype, "cmpDto", void 0);
    TreeView = __decorate([
        core_1.Component({
            selector: 'cmp-view',
            inputs: ['directories: directories']
        }),
        core_1.View({
            template: "\n      <div>Name: {{ cmpDto.name }}</div>\n      <div>X: {{ cmpDto.X }}</div>\n      <div>Y: {{ cmpDto.Y }}</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TreeView);
    return TreeView;
})();
exports.TreeView = TreeView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZC9jbXBEdG9WaWV3LnRzIl0sIm5hbWVzIjpbIlRyZWVWaWV3IiwiVHJlZVZpZXcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFxQyxlQUFlLENBQUMsQ0FBQTtBQUNyRCx1QkFBcUIsVUFBVSxDQUFDLENBQUE7QUFDaEM7SUFBQUE7SUFhQUMsQ0FBQ0E7SUFER0Q7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQUNBLDRCQUFNQSxVQUFTQTtJQVo1QkE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLFVBQVVBO1lBQ3BCQSxNQUFNQSxFQUFFQSxDQUFDQSwwQkFBMEJBLENBQUNBO1NBQ3ZDQSxDQUFDQTtRQUNEQSxXQUFJQSxDQUFDQTtZQUNGQSxRQUFRQSxFQUFFQSwwSEFJVEE7U0FDSkEsQ0FBQ0E7O2lCQUdEQTtJQUFEQSxlQUFDQTtBQUFEQSxDQWJBLEFBYUNBLElBQUE7QUFGWSxnQkFBUSxXQUVwQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ3JpZC9jbXBEdG9WaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q21wRHRvfSBmcm9tICcuL2NtcER0byc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NtcC12aWV3JyxcbiAgICBpbnB1dHM6IFsnZGlyZWN0b3JpZXM6IGRpcmVjdG9yaWVzJ11cbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXY+TmFtZToge3sgY21wRHRvLm5hbWUgfX08L2Rpdj5cbiAgICAgIDxkaXY+WDoge3sgY21wRHRvLlggfX08L2Rpdj5cbiAgICAgIDxkaXY+WToge3sgY21wRHRvLlkgfX08L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVWaWV3IHtcbiAgICBASW5wdXQoKSBjbXBEdG86IENtcER0bztcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==