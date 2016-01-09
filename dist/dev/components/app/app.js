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
var router_1 = require('angular2/router');
var home_1 = require('../home/home');
var about_1 = require('../about/about');
var gridcomponent_1 = require('../grid/gridcomponent');
var grid_1 = require('../grid/grid');
var AppCmp = (function () {
    function AppCmp() {
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <section class=\"sample-app-content\">\n      <nav>\n        <a [routerLink]=\"['/Home']\">Home</a>\n        <a [routerLink]=\"['/About']\">About</a>\n        <a [routerLink]=\"['/Grid']\">Grid</a>\n      </nav>\n\n      <router-outlet></router-outlet>\n    </section>\n  ",
            styles: ["\n    .sample-app-content {\n      font-family: Verdana;\n    }\n    .sample-app-content h1 {\n      color: #999;\n      font-size: 3em;\n    }\n    .sample-app-content h2 {\n      color: #990000;\n      font-size: 2em;\n    }\n    .sample-app-content p,\n    .sample-app-content nav {\n      padding: 30px;\n    }\n    .sample-app-content li,\n    .sample-app-content p {\n      font-size: 1.2em;\n    }\n    .sample-app-content li {\n      font-family: Consolas;\n    }\n    .sample-app-content nav a {\n      display: inline-block;\n      margin-right: 15px;\n    }\n    .sample-app-content input,\n    .sample-app-content button {\n      padding: 5px;\n      font-size: 1em;\n      outline: none;\n    }\n  "],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.HomeCmp, as: 'Home' },
            { path: '/about', component: about_1.AboutCmp, as: 'About' },
            { path: '/gridcomponent', component: gridcomponent_1.GridComponentCmp, as: 'Gridcomponent' },
            { path: '/grid', component: grid_1.GridCmp, as: 'Grid' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCx1QkFHTyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pCLHFCQUFzQixjQUFjLENBQUMsQ0FBQTtBQUNyQyxzQkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUN4Qyw4QkFBK0IsdUJBQXVCLENBQUMsQ0FBQTtBQUN2RCxxQkFBc0IsY0FBYyxDQUFDLENBQUE7QUFFckM7SUFBQUE7SUF3RHFCQyxDQUFDQTtJQXhEdEJEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUNmQSxRQUFRQSxFQUFFQSx3UkFVVEE7WUFDREEsTUFBTUEsRUFBRUEsQ0FBQ0EseXNCQWlDUkEsQ0FBQ0E7WUFDRkEsYUFBYUEsRUFBRUEsd0JBQWlCQSxDQUFDQSxJQUFJQTtZQUNyQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtTQUNoQ0EsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLGNBQU9BLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1lBQzdDQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxnQkFBUUEsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7WUFDcERBLEVBQUVBLElBQUlBLEVBQUVBLGdCQUFnQkEsRUFBRUEsU0FBU0EsRUFBRUEsZ0NBQWdCQSxFQUFFQSxFQUFFQSxFQUFFQSxlQUFlQSxFQUFFQTtZQUM1RUEsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsY0FBT0EsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7U0FDbERBLENBQUNBOztlQUNvQkE7SUFBREEsYUFBQ0E7QUFBREEsQ0F4RHJCLEFBd0RzQkEsSUFBQTtBQUFULGNBQU0sU0FBRyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1xuICBSb3V0ZUNvbmZpZyxcbiAgUk9VVEVSX0RJUkVDVElWRVNcbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbi8vIGltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge0hvbWVDbXB9IGZyb20gJy4uL2hvbWUvaG9tZSc7XG5pbXBvcnQge0Fib3V0Q21wfSBmcm9tICcuLi9hYm91dC9hYm91dCc7XG5pbXBvcnQge0dyaWRDb21wb25lbnRDbXB9IGZyb20gJy4uL2dyaWQvZ3JpZGNvbXBvbmVudCc7XG5pbXBvcnQge0dyaWRDbXB9IGZyb20gJy4uL2dyaWQvZ3JpZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzYW1wbGUtYXBwLWNvbnRlbnRcIj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0hvbWUnXVwiPkhvbWU8L2E+XG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL0Fib3V0J11cIj5BYm91dDwvYT5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvR3JpZCddXCI+R3JpZDwvYT5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9zZWN0aW9uPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLnNhbXBsZS1hcHAtY29udGVudCB7XG4gICAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBoMSB7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGgyIHtcbiAgICAgIGNvbG9yOiAjOTkwMDAwO1xuICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgcCxcbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IG5hdiB7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGxpLFxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgcCB7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGxpIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcztcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBuYXYgYSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgaW5wdXQsXG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBidXR0b24ge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgYF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lQ21wLCBhczogJ0hvbWUnIH0sXG4gIHsgcGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDbXAsIGFzOiAnQWJvdXQnIH0sXG4gIHsgcGF0aDogJy9ncmlkY29tcG9uZW50JywgY29tcG9uZW50OiBHcmlkQ29tcG9uZW50Q21wLCBhczogJ0dyaWRjb21wb25lbnQnIH0sXG4gIHsgcGF0aDogJy9ncmlkJywgY29tcG9uZW50OiBHcmlkQ21wLCBhczogJ0dyaWQnIH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ21wIHt9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=