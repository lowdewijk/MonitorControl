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
var StsComponent = (function () {
    function StsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], StsComponent.prototype, "name", void 0);
    StsComponent = __decorate([
        core_1.Component({
            selector: 'sts-component',
            template: "<div>\n              <ng-content></ng-content>\n            </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], StsComponent);
    return StsComponent;
})();
exports.StsComponent = StsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9zdHMtY29tcG9uZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTdHNDb21wb25lbnQiLCJTdHNDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUUvQztJQUFBQTtJQVNBQyxDQUFDQTtJQURDRDtRQUFDQSxZQUFLQSxFQUFFQTs7T0FBQ0EsOEJBQUlBLFVBQVNBO0lBUnhCQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsZUFBZUE7WUFDekJBLFFBQVFBLEVBQUVBLG9FQUVPQTtTQUNsQkEsQ0FBQ0E7O3FCQUlEQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0FUQSxBQVNDQSxJQUFBO0FBSFksb0JBQVksZUFHeEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvc3RzLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdHMtY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGA8ZGl2PlxuICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFN0c0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbmFtZTogU3RyaW5nO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9