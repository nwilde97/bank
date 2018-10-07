import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs/Observable';
import {getAccounts, RootState, State} from '../state/reducer';
import {select, Store} from '@ngrx/store';
import {Account} from '../state/model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        style({transform: 'translateX(100%)'}),
        animate(200)
      ])
    ])
  ]
})
export class AccountListComponent implements OnInit {

  public accounts$: Observable<Account[]>;

  constructor(private store$: Store<RootState>) {
  }

  ngOnInit() {
    this.accounts$ = this.store$.pipe(select(getAccounts));
  }

}
