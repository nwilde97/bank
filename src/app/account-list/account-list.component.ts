import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AccountService} from "../service/account.service";
import {Observable} from "rxjs/Observable";
import {Account} from "../model/account";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  animations: [
    trigger('flyIn',[
      state('in', style({transform: 'translateX(0)'})),
      transition("void => *", [
        style({transform: 'translateX(-100%)'}),
        animate(200)
      ]),
      transition("* => void", [
        style({transform: 'translateX(100%)'}),
        animate(200)
      ])
    ])
  ]
})
export class AccountListComponent implements OnInit {

  public accounts:Observable<Array<Account>>;

  constructor(private service:AccountService) { }

  ngOnInit() {
    this.accounts = this.service.getAccounts();
  }

}
