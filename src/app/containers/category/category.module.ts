import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { BaseMaterialModule } from 'src/app/core/config/base-material.module';



@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    BaseMaterialModule
  ],
  exports: [CategoryListComponent]
})
export class CategoryModule { }
