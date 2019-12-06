import * as tslib_1 from "tslib";
import { Component, ViewChild, Output } from '@angular/core';
import { Validators } from '@angular/forms';
let CategoryDetailComponent = class CategoryDetailComponent {
    constructor(formBuilder, categoryService) {
        this.formBuilder = formBuilder;
        this.categoryService = categoryService;
    }
    ngOnInit() {
        this.categoryForm = this.formBuilder.group({
            nome: ['', [Validators.required, Validators.minLength(3)]]
        });
    }
    onSubmit() {
        this.categoryService.postCategory(this.categoryForm.value).subscribe(response => {
            console.log(response);
        });
        this.categoryForm.reset();
        this.categoryFormModel.resetForm();
    }
};
tslib_1.__decorate([
    ViewChild('categoryFormModel', { static: false })
], CategoryDetailComponent.prototype, "categoryFormModel", void 0);
tslib_1.__decorate([
    Output('saveCategory')
], CategoryDetailComponent.prototype, "onSubmit", null);
CategoryDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'stf-category-detail',
        templateUrl: './category-detail.component.html',
        styleUrls: ['./category-detail.component.sass']
    })
], CategoryDetailComponent);
export { CategoryDetailComponent };
//# sourceMappingURL=category-detail.component.js.map