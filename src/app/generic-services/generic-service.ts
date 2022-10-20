import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http:HttpClient) { }

  genericGetCustomer(url:string){
    return this.http.get(url);
  }

  genericPostCustomer(url:string,params:any){
    return this.http.post(url,params);
  }

  genericPutCustomer(url:string,params:any){
    return this.http.put(url,params);
  }

  genericDeleteCustomer(url:string){
    return this.http.delete(url);
  }

}
