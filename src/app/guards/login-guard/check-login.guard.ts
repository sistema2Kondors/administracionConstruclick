import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@modules/auth/services';
import { tap, map, take } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

    constructor(private authSvc: AuthService, private router: Router) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ):
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      return this.authSvc.isLogged.pipe(
        take(1),
        map((isLoggedIn) => {       
          console.log("1Login",isLoggedIn);
          if (isLoggedIn ) {
                  // this.router.navigate(['dashboard']);
              return true
          }
          else {
            this.router.navigate(['auth']);
            window.location.reload();
            return false
          }
        })
      );
    }
  
}
