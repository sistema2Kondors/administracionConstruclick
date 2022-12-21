import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@modules/auth/services';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

    constructor(private authSvc: AuthService, private router: Router) {}


    // canActivate():
    //   Observable<boolean>
    //    {
    //   return this.authSvc.isLoggedIn$.pipe(
    //     tap((isLoggedIn) => {
    //       console.log("logueado",isLoggedIn);
          
    //       if (!isLoggedIn) {
    //         this.router.navigate(['auth/login']); 
    //       }
    //     })
    //   );
    // }


    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ):
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      return this.authSvc.isLogged.pipe(
        tap((isLoggedIn) => {
          console.log(isLoggedIn);
          if (!isLoggedIn) {
            this.router.navigate(['auth/login']);
          }
        })
      );
    }
  
}
