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
var StackComponent = (function () {
    function StackComponent() {
        this.controls = [];
    }
    StackComponent.prototype.addControl = function (control) {
        this.controls.push(control);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], StackComponent.prototype, "name", void 0);
    StackComponent = __decorate([
        core_1.Component({
            selector: 'stack-component',
            template: "<div>\n              <ng-content></ng-content>\n            </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], StackComponent);
    return StackComponent;
})();
exports.StackComponent = StackComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9zdGFja2NvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU3RhY2tDb21wb25lbnQiLCJTdGFja0NvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlN0YWNrQ29tcG9uZW50LmFkZENvbnRyb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUcvQztJQVlFQTtRQUNFQyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUNyQkEsQ0FBQ0E7SUFFREQsbUNBQVVBLEdBQVZBLFVBQVdBLE9BQWdCQTtRQUN6QkUsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBVkRGO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFDQSxnQ0FBSUEsVUFBU0E7SUFSeEJBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxpQkFBaUJBO1lBQzNCQSxRQUFRQSxFQUFFQSxvRUFFT0E7U0FDbEJBLENBQUNBOzt1QkFjREE7SUFBREEscUJBQUNBO0FBQURBLENBbkJBLEFBbUJDQSxJQUFBO0FBYlksc0JBQWMsaUJBYTFCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL3N0YWNrY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGFjay1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYDxkaXY+XG4gICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgU3RhY2tDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG5hbWU6IFN0cmluZztcblxuICBjb250cm9sczogQ29udHJvbFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29udHJvbHMgPSBbXTtcbiAgfVxuXG4gIGFkZENvbnRyb2woY29udHJvbDogQ29udHJvbCkge1xuICAgIHRoaXMuY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9