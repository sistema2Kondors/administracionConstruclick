import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericService } from '@app/generic-services/generic-service';
import { environment } from 'environments/environment';
//MODELOS Y LA CONFIGURACION 
import { ProductsServiceEntries } from 'modules/create-product/config/products.service.configuration';
import { CreateDescriptionModel } from 'modules/create-product/models/createReview.model';
import { ProductsAllModel } from 'modules/create-product/models/ProductsAll.model';



@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private _genericService: GenericService) { }


  public createNewProducts(id:any):Observable<any>{
    const URL = `${environment.DOMAIN_URL}/${ProductsServiceEntries.PRODUCTS_ENDPOINT}`
    return <Observable<any>> this._genericService.genericPostCustomer(URL, id);

  }

  public addReviewProduct(id:CreateDescriptionModel):Observable<CreateDescriptionModel>{
    const URL = `${environment.DOMAIN_URL}/${ProductsServiceEntries.PRODUCTS_ENDPOINT_REVIEW_POST}`
    return <Observable<CreateDescriptionModel>> this._genericService.genericPostCustomer(URL, id);

  }

  public getAllProducts():Observable<ProductsAllModel>{
    const URL = `${environment.DOMAIN_URL}/${ProductsServiceEntries.PRODUCTS_ENDPOINT_GET}`
    return <Observable<ProductsAllModel>> this._genericService.genericGetCustomer(URL);

  }






}
