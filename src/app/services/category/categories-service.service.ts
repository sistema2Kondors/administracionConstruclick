import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericService } from '@app/generic-services/generic-service';
import { environment } from 'environments/environment';
//MODELOS Y LA CONFIGURACION 
import { CategoriesServiceEntries } from 'modules/create-category/config/categories.service.configuration';
import { GetCategories, PostRegisterCategories } from 'modules/create-category/model/categories.model';
import { Subcategoriesmodel, Data } from 'modules/create-category/model/subcategories.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  constructor(private _genericService: GenericService) { }


  public getCategories():Observable<GetCategories>{
    const URL = `${environment.DOMAIN_URL}/${CategoriesServiceEntries.CATEGORIES_ENDPOINT}`
    return <Observable<GetCategories>> this._genericService.genericGetCustomer(URL)
  }

  public postCategorias(id: any):Observable<PostRegisterCategories>{
    const URL = `${environment.DOMAIN_URL}/${CategoriesServiceEntries.CATEGORIES_ENDPOINT}`
    return <Observable<PostRegisterCategories>> this._genericService.genericPostCustomer(URL, id);
  }

  public postSubCategories(id: any):Observable<Subcategoriesmodel>{
    const URL = `${environment.DOMAIN_URL}/${CategoriesServiceEntries.SUBCATEGORIES_ENDPOINT_POST}`
    return <Observable<Subcategoriesmodel>> this._genericService.genericPostCustomer(URL, id);
  }



}
