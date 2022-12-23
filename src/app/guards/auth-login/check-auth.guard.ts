import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthGuard implements CanActivate {
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
        console.log("1Auth",isLoggedIn);
        if (isLoggedIn ) {
                this.router.navigate(['dashboard']);
            return true
        }
        else {
          // this.router.navigate(['auth']);
          // window.location.reload();
          return false
        }
      })
    );
  }
  
}
