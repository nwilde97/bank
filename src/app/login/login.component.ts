import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: string;
  public password: string;

  constructor(private service:LoginService, private router:Router) { }

  ngOnInit() {
    this.service.isLoggedIn.subscribe(e => {
      if(e){
        this.router.navigate(["/"]);
      }
    });
  }

  login(){
    this.service.login(this.user, this.password);
  }

}
