import { Component, OnInit } from '@angular/core';
import { CategoriesServiceService } from '@app/services/category/categories-service.service';

@Component({
  selector: 'sb-check-categories',
  templateUrl: './check-categories.component.html',
  styleUrls: ['./check-categories.component.scss']
})
export class CheckCategoriesComponent implements OnInit {

  opcionSeleccionado: string;
 
  arrayCategories: any[] = [];

  constructor(private _categoriesService: CategoriesServiceService) { }

  ngOnInit(): void {
    this.getCategories();


  }


  getCategories(){
    this._categoriesService.getCategories().subscribe((respuesta:any)=>{
      // this.dataCategoriesFather = respuesta.data;

            for(let i of respuesta.data) {
        
                    for(let j of i.children) {

                        for(let k of j.children) {

                            this.arrayCategories.push(k);

                    }
                }   
             }
             console.log("crear", this.arrayCategories);

          });
     
     }




}
