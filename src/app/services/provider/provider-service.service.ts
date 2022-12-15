import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from '@app/generic-services/generic-service';
import { environment } from 'environments/environment';
import { ProviderServiceEntries } from '@modules/create-provider/config/provider.service.configuration';
import { IProviderModel } from '@modules/create-provider/model/provider.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderServiceService {

  constructor(private _genericService: GenericService) { }

  public postAllProvider():Observable<IProviderModel>{
    const URL = `${environment.DOMAIN_URL}/${ProviderServiceEntries.PRODUCTS_ENDPOINT_POST}`
    return <Observable<IProviderModel>> this._genericService.genericPostCustomer(URL, null);
  }

  


}
