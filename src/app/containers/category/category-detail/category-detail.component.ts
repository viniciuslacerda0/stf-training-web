import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'stf-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.sass']
})
export class CategoryDetailComponent implements OnInit {
  public categoryForm: FormGroup;

  @ViewChild('categoryFormModel', {static:false})
  public categoryFormModel: NgForm;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.formControlGroup = new FormGroup({
    //   nomeControl: new FormControl()
    // });

    this.categoryForm = this.formBuilder.group({
      nomeControl: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(){
    console.log(this.categoryForm);

    this.categoryForm.reset();
    this.categoryFormModel.resetForm();
  }

}