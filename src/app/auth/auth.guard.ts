import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LoginService} from "../service/login.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: LoginService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.auth.isLoggedIn.map(e => {
      if(!e){
        this.router.navigate(["/login"]);
      }
      return e;
    }).catch(err => {
      console.log("Error login", err);
      this.router.navigate(["/login"]);
      return Observable.of(false);
    });
  }
}
