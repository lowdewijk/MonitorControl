var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var nouislider_1 = require('nouislider/distribute/nouislider');
var Orientation = (function () {
    function Orientation() {
    }
    Orientation.Horizontal = 'horizontal';
    Orientation.Vertical = 'vertical';
    return Orientation;
})();
exports.Orientation = Orientation;
var NoUiSliderCmp = (function () {
    function NoUiSliderCmp(elementRef) {
        this.orientation = Orientation.Horizontal;
        this.size = 100;
        this.change = new core_1.EventEmitter();
        this.elementStyle = '';
        if (!elementRef || !elementRef.nativeElement) {
            throw new Error('Could not instantiate no-ui-slider component. ElementRef not found.');
        }
        this.sliderElement = elementRef.nativeElement.children[0];
    }
    NoUiSliderCmp.prototype.ngOnInit = function () {
        var _this = this;
        var sizeAttr = this.orientation === Orientation.Horizontal ? 'width' : 'height';
        this.elementStyle = "display: block-inline; " + sizeAttr + ": " + this.size + "px;";
        nouislider_1.create(this.sliderElement, {
            start: 0,
            connect: 'lower',
            orientation: this.orientation,
            range: {
                'min': 0,
                'max': 100
            }
        });
        this.slider = this.sliderElement.noUiSlider;
        this.slider.on('slide', function (newValue) { return _this.change.emit(newValue[0]); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NoUiSliderCmp.prototype, "orientation", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NoUiSliderCmp.prototype, "size", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NoUiSliderCmp.prototype, "change", void 0);
    NoUiSliderCmp = __decorate([
        core_1.Component({
            selector: 'no-ui-slider',
            template: "<div [attr.style]=\"elementStyle\"></div>"
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], NoUiSliderCmp);
    return NoUiSliderCmp;
})();
exports.NoUiSliderCmp = NoUiSliderCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL25vLXVpLXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiT3JpZW50YXRpb24iLCJPcmllbnRhdGlvbi5jb25zdHJ1Y3RvciIsIk5vVWlTbGlkZXJDbXAiLCJOb1VpU2xpZGVyQ21wLmNvbnN0cnVjdG9yIiwiTm9VaVNsaWRlckNtcC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWlGLGVBQWUsQ0FBQyxDQUFBO0FBQ2pHLDJCQUE0RixrQ0FBa0MsQ0FBQyxDQUFBO0FBRS9IO0lBQUFBO0lBR0FDLENBQUNBO0lBRlFELHNCQUFVQSxHQUFHQSxZQUFZQSxDQUFDQTtJQUMxQkEsb0JBQVFBLEdBQUtBLFVBQVVBLENBQUNBO0lBQ2pDQSxrQkFBQ0E7QUFBREEsQ0FIQSxBQUdDQSxJQUFBO0FBSFksbUJBQVcsY0FHdkIsQ0FBQTtBQUVEO0lBY0VFLHVCQUFnQ0EsVUFBc0JBO1FBUjVDQyxnQkFBV0EsR0FBR0EsV0FBV0EsQ0FBQ0EsVUFBVUEsQ0FBQ0E7UUFDckNBLFNBQUlBLEdBQVVBLEdBQUdBLENBQUNBO1FBQ2xCQSxXQUFNQSxHQUFRQSxJQUFJQSxtQkFBWUEsRUFBVUEsQ0FBQ0E7UUFDbkRBLGlCQUFZQSxHQUFFQSxFQUFFQSxDQUFDQTtRQU1mQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3Q0EsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EscUVBQXFFQSxDQUFDQSxDQUFDQTtRQUN6RkEsQ0FBQ0E7UUFDREEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsVUFBVUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDNURBLENBQUNBO0lBRURELGdDQUFRQSxHQUFSQTtRQUFBRSxpQkFpQkNBO1FBaEJDQSxJQUFNQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxLQUFLQSxXQUFXQSxDQUFDQSxVQUFVQSxHQUFHQSxPQUFPQSxHQUFHQSxRQUFRQSxDQUFDQTtRQUNsRkEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsNEJBQTBCQSxRQUFRQSxVQUFLQSxJQUFJQSxDQUFDQSxJQUFJQSxRQUFLQSxDQUFDQTtRQUUxRUEsbUJBQVlBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBO1lBQy9CQSxLQUFLQSxFQUFFQSxDQUFDQTtZQUNSQSxPQUFPQSxFQUFFQSxPQUFPQTtZQUNoQkEsV0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0EsV0FBV0E7WUFDN0JBLEtBQUtBLEVBQUVBO2dCQUNMQSxLQUFLQSxFQUFFQSxDQUFDQTtnQkFDUkEsS0FBS0EsRUFBRUEsR0FBR0E7YUFDWEE7U0FDRkEsQ0FBQ0EsQ0FBQ0E7UUFFSEEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBcUJBLElBQUlBLENBQUNBLGFBQWNBLENBQUNBLFVBQVVBLENBQUNBO1FBRS9EQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxPQUFPQSxFQUFFQSxVQUFBQSxRQUFRQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUE3QkEsQ0FBNkJBLENBQUVBLENBQUNBO0lBQ3RFQSxDQUFDQTtJQWhDREY7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQUVBLHNDQUFXQSxVQUEwQkE7SUFDL0NBO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFFQSwrQkFBSUEsVUFBY0E7SUFDNUJBO1FBQUNBLGFBQU1BLEVBQUVBOztPQUFDQSxpQ0FBTUEsVUFBbUNBO0lBUnJEQTtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsY0FBY0E7WUFDeEJBLFFBQVFBLEVBQUVBLDJDQUF5Q0E7U0FDcERBLENBQUNBO1FBV1lBLFdBQUNBLGFBQU1BLENBQUNBLGlCQUFVQSxDQUFDQSxDQUFBQTs7c0JBMEJoQ0E7SUFBREEsb0JBQUNBO0FBQURBLENBeENBLEFBd0NDQSxJQUFBO0FBcENZLHFCQUFhLGdCQW9DekIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbW1vbi9uby11aS1zbGlkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5qZWN0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtjcmVhdGUgYXMgY3JlYXRlU2xpZGVyLCBJbnN0YW5jZSBhcyBTbGlkZXJJbnN0YW5jZSwgbm9VaVNsaWRlciBhcyBOb1VpU2xpZGVyfSAgZnJvbSAnbm91aXNsaWRlci9kaXN0cmlidXRlL25vdWlzbGlkZXInO1xuXG5leHBvcnQgY2xhc3MgT3JpZW50YXRpb24ge1xuICBzdGF0aWMgSG9yaXpvbnRhbCA9ICdob3Jpem9udGFsJztcbiAgc3RhdGljIFZlcnRpY2FsICAgPSAndmVydGljYWwnO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduby11aS1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgW2F0dHIuc3R5bGVdPVwiZWxlbWVudFN0eWxlXCI+PC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBOb1VpU2xpZGVyQ21wIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSAgb3JpZW50YXRpb24gPSBPcmllbnRhdGlvbi5Ib3Jpem9udGFsO1xuICBASW5wdXQoKSAgc2l6ZSAgICAgICAgPSAxMDA7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgICAgICA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBlbGVtZW50U3R5bGUgPScnO1xuXG4gIHByaXZhdGUgc2xpZGVyRWxlbWVudCA6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHNsaWRlciAgICAgICAgOiBOb1VpU2xpZGVyO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRWxlbWVudFJlZikgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGlmICghZWxlbWVudFJlZiB8fCAhZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbnN0YW50aWF0ZSBuby11aS1zbGlkZXIgY29tcG9uZW50LiBFbGVtZW50UmVmIG5vdCBmb3VuZC4nKTtcbiAgICB9XG4gICAgdGhpcy5zbGlkZXJFbGVtZW50ID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qgc2l6ZUF0dHIgPSB0aGlzLm9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5Ib3Jpem9udGFsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHRoaXMuZWxlbWVudFN0eWxlID0gYGRpc3BsYXk6IGJsb2NrLWlubGluZTsgJHtzaXplQXR0cn06ICR7dGhpcy5zaXplfXB4O2A7XG5cbiAgICBjcmVhdGVTbGlkZXIodGhpcy5zbGlkZXJFbGVtZW50LCB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGNvbm5lY3Q6ICdsb3dlcicsXG4gICAgICBvcmllbnRhdGlvbjogdGhpcy5vcmllbnRhdGlvbixcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgICdtaW4nOiAwLFxuICAgICAgICAnbWF4JzogMTAwXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlciA9ICg8U2xpZGVySW5zdGFuY2U+IHRoaXMuc2xpZGVyRWxlbWVudCkubm9VaVNsaWRlcjtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdzbGlkZScsIG5ld1ZhbHVlID0+IHRoaXMuY2hhbmdlLmVtaXQobmV3VmFsdWVbMF0pICk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9