import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { GenericService } from '@app/generic-services/generic-service';
import { map, tap  } from 'rxjs/operators'
import { environment } from 'environments/environment';
import { LoginUser } from '@modules/auth/models/auth.model';
import { LoginServiceEntries } from '@modules/auth/config/login.service.configuration';


@Injectable()
export class AuthService {

    public userToken: string;
    public dataName:string;
    public data_id:string;
    public data_lastname:string;
    public loggedIn = new BehaviorSubject<boolean>(false);
    // public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    // isLoggedIn$ = this._isLoggedIn$.asObservable();

    get isLogged():Observable<boolean>{
      return this.loggedIn.asObservable();
    }

    constructor( private _genericService: GenericService) {
        this.readDataToken();
    }


    public postLoginUser(login):Observable<any> {

      this.loggedIn.next(true);

        const URL =  `${environment.DOMAIN_URL}/${LoginServiceEntries.LOGIN_USER_ENDPOINT_POST}`
      
        return  <Observable<any>> this._genericService.genericPostCustomer(URL, login).pipe(
          tap((resp: any) => {
            // localStorage.setItem('Session', "true");
            this.saveDataToken(resp['data']); 
            this.loggedIn.next(true);
           
          }),
          
          // map( resp => {
      
          //   // console.log("rep service",resp);
          //   // console.log("LoguetIn",this.loggedIn);
           
          // }),
       
    
        );
       
      }


      private saveDataToken(data) {

        this.userToken = data.token;
        localStorage.setItem('token', data.token);
    
        this.dataName = data.user.name; 
        localStorage.setItem('name', data.user.name);
    
        this.data_lastname = data.user.lastname; 
        localStorage.setItem('lastname', data.user.lastname);
        
        this.data_id = data.user._id; 
        localStorage.setItem('id', data.user._id);
        
        // console.log('Todo', data.user);
    
      }

      logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('lastname');
        localStorage.removeItem('id');
        this.loggedIn.next(false);
        // this._isLoggedIn$.next(false);
      }
    

      readDataToken(){

        if ( localStorage.getItem('token') || localStorage.getItem('name') || localStorage.getItem('lastname') || localStorage.getItem('id') ){
          this.userToken = localStorage.getItem('token');
          this.dataName = localStorage.getItem('name');
          this.data_lastname = localStorage.getItem('lastname');
          this.data_id = localStorage.getItem('id');
        //   this.loggedIn.next(true);
        }else{
          this.userToken = ''
        //   this.logout();
        }
        return this.userToken, this.dataName, this.data_lastname, this.data_id;
      }




}
