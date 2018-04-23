import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Account} from "../model/account";
import {AccountService} from "../service/account.service";
import {Observable} from "rxjs/Observable";
import {Transaction} from "../model/transaction";
import {MatDialog} from "@angular/material";
import {TransactionFormComponent} from "./transaction-form/transaction-form.component";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition("void => *", [
        style({transform: 'translateX(100%)'}),
        animate(200)
      ])
    ])
  ]
})
export class AccountComponent implements OnInit {

  public account: Observable<Account>;
  public transactions: Observable<Array<Transaction>>;

  constructor(private activatedRoute: ActivatedRoute, private service: AccountService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.account = this.service.getAccount(params.id);
      this.transactions = this.service.getTransactions(params.id);
    });
  }

  showDialog() {
    this.dialog.open(TransactionFormComponent, {
      width: "90%"
    }).afterClosed().subscribe(transaction => {
      if (transaction) {
        this.service.saveTransaction(transaction);
      }
    });
  }

}
