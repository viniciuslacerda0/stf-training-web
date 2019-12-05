import { Component, OnInit } from '@angular/core';
import { Category } from './core/entity/Category';
import { CategoryService } from './containers/category/category.service';

@Component({
  selector: 'stf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  constructor(private categoryService: CategoryService){}
  
  ngOnInit() {
    this.getCategoryList();
  }

  appTitle = 'Money App';

  categoryList: Array<Category> = new Array();

  getCategoryList(){
    this.categoryService.getCategoryList().subscribe(
      result => {
        this.categoryList = result;
      }
    );
  }
}

