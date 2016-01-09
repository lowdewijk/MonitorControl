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
var gridcomponent_1 = require('../grid/gridcomponent');
var GridCmp = (function () {
    function GridCmp() {
        this.gridcomponents = [];
    }
    GridCmp = __decorate([
        core_1.Component({
            selector: 'grid',
            template: "\n    <body>\n\n      <div id=\"header\">\n        <h1>Grid</h1>\n      </div>\n\n      <div id=\"nav\">\n      </div>\n\n      <div id=\"section\">\n          <gridcomponent name='bla'></gridcomponent>\n          <gridcomponent name='blo'></gridcomponent>        \n      </div>\n\n      <div id=\"footer\">\n        StackState\n      </div>\n\n    </body>\n  ",
            directives: [gridcomponent_1.GridComponentCmp],
            styles: ["\n    #header {\n        background-color:black;\n        color:white;\n        text-align:center;\n        padding:5px;\n    }\n    #nav {\n        line-height:30px;\n        background-color:#eeeeee;\n        height:300px;\n        width:100px;\n        float:left;\n        padding:5px; \n    }\n    #section {\n        width:350px;\n        float:left;\n        padding:10px; \n    }\n    #footer {\n        background-color:black;\n        color:white;\n        clear:both;\n        text-align:center;\n        padding:5px; \n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], GridCmp);
    return GridCmp;
})();
exports.GridCmp = GridCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZC9ncmlkLnRzIl0sIm5hbWVzIjpbIkdyaWRDbXAiLCJHcmlkQ21wLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsOEJBQStCLHVCQUF1QixDQUFDLENBQUE7QUFFdkQ7SUFzREVBO1FBRUFDLG1CQUFjQSxHQUF1QkEsRUFFcENBLENBQUNBO0lBSmFBLENBQUNBO0lBdERsQkQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLE1BQU1BO1lBQ2hCQSxRQUFRQSxFQUFFQSwwV0FvQlRBO1lBQ0RBLFVBQVVBLEVBQUNBLENBQUNBLGdDQUFnQkEsQ0FBQ0E7WUFDN0JBLE1BQU1BLEVBQUVBLENBQUNBLDhoQkEyQlJBLENBQUNBO1NBQ0hBLENBQUNBOztnQkFRREE7SUFBREEsY0FBQ0E7QUFBREEsQ0E1REEsQUE0RENBLElBQUE7QUFQWSxlQUFPLFVBT25CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ncmlkL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0dyaWRDb21wb25lbnRDbXB9IGZyb20gJy4uL2dyaWQvZ3JpZGNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dyaWQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxib2R5PlxuXG4gICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMT5HcmlkPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGlkPVwibmF2XCI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cInNlY3Rpb25cIj5cbiAgICAgICAgICA8Z3JpZGNvbXBvbmVudCBuYW1lPSdibGEnPjwvZ3JpZGNvbXBvbmVudD5cbiAgICAgICAgICA8Z3JpZGNvbXBvbmVudCBuYW1lPSdibG8nPjwvZ3JpZGNvbXBvbmVudD4gICAgICAgIFxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgaWQ9XCJmb290ZXJcIj5cbiAgICAgICAgU3RhY2tTdGF0ZVxuICAgICAgPC9kaXY+XG5cbiAgICA8L2JvZHk+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6W0dyaWRDb21wb25lbnRDbXBdLFxuICBzdHlsZXM6IFtgXG4gICAgI2hlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgfVxuICAgICNuYXYge1xuICAgICAgICBsaW5lLWhlaWdodDozMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWU7XG4gICAgICAgIGhlaWdodDozMDBweDtcbiAgICAgICAgd2lkdGg6MTAwcHg7XG4gICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgIHBhZGRpbmc6NXB4OyBcbiAgICB9XG4gICAgI3NlY3Rpb24ge1xuICAgICAgICB3aWR0aDozNTBweDtcbiAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgcGFkZGluZzoxMHB4OyBcbiAgICB9XG4gICAgI2Zvb3RlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBjbGVhcjpib3RoO1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgcGFkZGluZzo1cHg7IFxuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgR3JpZENtcCB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBncmlkY29tcG9uZW50czogR3JpZENvbXBvbmVudENtcFtdID0gWyAgICBcbiAgICBcbiAgXTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9