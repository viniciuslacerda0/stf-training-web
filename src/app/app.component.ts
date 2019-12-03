import { Component, OnInit } from '@angular/core';
import { Category } from './core/entity/Category';

@Component({
  selector: 'stf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => this.getCategoryList() ,2000);
    console.log('APPCOMPONENT: executando OnInit')
  }

  appTitle = 'Money App';
  //entrada = '';

  //clickMe(entrada){
   // this.appTitle = this.entrada;
  //}

  categoryList: Array<Category> = new Array();

  getCategoryList(){
    this.categoryList = new Array(
      {
        id:1,
        nome: "Lazer"
    },
    {
      id:2,
      nome: "Alimentação"
  },
  {
    id:3,
    nome: "Supermercado"
},
{
  id:4,
  nome: "Farmácia"
},
{
  id:5,
  nome: "Estudo"
})
  }
}

