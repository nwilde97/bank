import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs/Observable';
import {MatDialog} from '@angular/material';
import {TransactionFormComponent} from './transaction-form/transaction-form.component';
import {select, Store} from '@ngrx/store';
import {getActiveAccount, RootState} from '../state/reducer';
import {Account, Transaction} from '../state/model';
import {SaveTransactionAction, SelectAccountAction} from '../state/actions';

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

  public account$: Observable<Account>;

  constructor(private activatedRoute: ActivatedRoute, private store$:Store<RootState>, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.store$.dispatch(new SelectAccountAction(params.id));
    });
    this.account$ = this.store$.pipe(select(getActiveAccount));
  }

  showDialog() {
    this.dialog.open(TransactionFormComponent, {
      width: "90%"
    }).afterClosed().subscribe(transaction => {
      if (transaction) {
        this.store$.dispatch(new SaveTransactionAction(transaction));
      }
    });
  }

}
