import { Component, OnInit } from '@angular/core';
import { Category } from './core/entity/Category';
import { CategoryService, CategoryServiceType } from './containers/category/category.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'stf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  constructor(private categoryService: CategoryService){}
  
  ngOnInit() {
    this.futuro = this.categoryService.categoryBehaviorSubject;
    this.getCategoryList();
  }

  appTitle = 'Money App';

  public categoryList: Array<Category> = new Array();

  public futuro: BehaviorSubject<CategoryServiceType>;

  getCategoryList(){
    this.categoryService.getCategoryList();
  }

}

