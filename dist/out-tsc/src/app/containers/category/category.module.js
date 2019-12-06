import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { BaseMaterialModule } from 'src/app/core/config/base-material.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
let CategoryModule = class CategoryModule {
};
CategoryModule = tslib_1.__decorate([
    NgModule({
        declarations: [CategoryListComponent, CategoryDetailComponent],
        imports: [
            CommonModule,
            BaseMaterialModule,
            ReactiveFormsModule,
            HttpClientModule
        ],
        exports: [CategoryListComponent, CategoryDetailComponent]
    })
], CategoryModule);
export { CategoryModule };
//# sourceMappingURL=category.module.js.map