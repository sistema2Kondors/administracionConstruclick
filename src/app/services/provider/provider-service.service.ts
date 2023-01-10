import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from '@app/generic-services/generic-service';
import { environment } from 'environments/environment';
import { ProviderServiceEntries } from '@modules/create-provider/config/provider.service.configuration';
import { IProviderModel } from '@modules/create-provider/model/provider.model';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProviderServiceService {

  constructor(private _genericService: GenericService) { }

  public postAllProvider():Observable<IProviderModel>{
    const URL = `${environment.DOMAIN_URL}/${ProviderServiceEntries.PRODUCTS_ENDPOINT_POST_GET_ALL}`
    return <Observable<IProviderModel>> this._genericService.genericPostCustomer(URL, null);
  }

  public postProvider(provider:any):Observable<IProviderModel>{
    const URL = `${environment.DOMAIN_URL}/${ProviderServiceEntries.PRODUCTS_ENDPOINT_POST}`
    return <Observable<IProviderModel>> this._genericService.genericPostCustomer(URL, provider);
  }


public getProvider():Observable<IProviderModel>{
  const URL = `${environment.DOMAIN_URL}/${ProviderServiceEntries.PRODUCTS_ENDPOINT_GET}`
  return <Observable<IProviderModel>> this._genericService.genericGetCustomer(URL);

}
}