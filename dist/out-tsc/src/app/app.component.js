import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.appTitle = 'Money App';
        this.categoryList = new Array();
    }
    ngOnInit() {
        this.getCategoryList();
    }
    getCategoryList() {
        this.categoryService.getCategoryList().subscribe(result => {
            this.categoryList = result;
        });
    }
    postCategory(category) {
        this.categoryService.postCategory(category).subscribe(result => console.log(result));
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'stf-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.sass']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map