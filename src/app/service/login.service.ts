import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";

@Injectable()
export class LoginService {

  public isLoggedIn:Observable<boolean> = new BehaviorSubject<boolean>(this.checkLocalStorage());
  private _key = "_isLoggedIn";

  constructor(private router:Router) { }

  login(user, pass){
    localStorage.setItem(this._key, user);
    (<BehaviorSubject<boolean>>this.isLoggedIn).next(true);
  }

  checkLocalStorage(){
    return localStorage._isLoggedIn != null;
  }

  logout(){
    localStorage.removeItem(this._key);
    (<BehaviorSubject<boolean>>this.isLoggedIn).next(false);
    this.router.navigate(["/login"]);
  }

}
