import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { BaseMaterialModule } from 'src/app/core/config/base-material.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CategoryListComponent, CategoryDetailComponent],
  imports: [
    CommonModule,
    BaseMaterialModule,
    ReactiveFormsModule
  ],
  exports: [CategoryListComponent, CategoryDetailComponent]
})
export class CategoryModule { }
