import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'stf-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.sass']
})
export class CategoryDetailComponent implements OnInit {
  public categoryForm: FormGroup;

  @ViewChild('categoryFormModel', {static:false})
  public categoryFormModel: NgForm;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(){

    this.categoryService.postCategory(this.categoryForm.value);
    this.categoryForm.reset();
    this.categoryFormModel.resetForm();
    
  }

}
