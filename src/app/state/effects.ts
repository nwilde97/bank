import {Injectable} from '@angular/core';
import {Action, select, Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {defer, Observable} from 'rxjs';
import {AccountService} from '../service/account.service';
import {
  AccountLoadedAction,
  AccountsLoadedAction,
  SAVE_TRANSACTION,
  SaveTransactionAction,
  SELECT_ACCOUNT,
  SelectAccountAction
} from './actions';
import {map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {Account} from './model';
import {getActiveAccount, RootState} from './reducer';

@Injectable()
export class StateEffects {

  constructor(private actions$: Actions, private store$:Store<RootState>, private accountService:AccountService) {}

  @Effect()
  getAccounts$: Observable<Action> = defer(()=>{
    return this.accountService.getAccounts()
  }).pipe(
    map((accounts:Account[]) => new AccountsLoadedAction(accounts))
  );

  @Effect()
  getTransactions$: Observable<Action> = this.actions$.pipe(
    ofType(SELECT_ACCOUNT),
    mergeMap((action:SelectAccountAction) => {
      return this.accountService.getAccount(action.payload).pipe(
        map(account => new AccountLoadedAction(account))
      )
    })
  );

  @Effect()
  saveTransaction$: Observable<Action> = this.actions$.pipe(
    ofType(SAVE_TRANSACTION),
    withLatestFrom(
      this.store$.pipe(select(getActiveAccount))
    ),
    map(([action,account]:[SaveTransactionAction, Account])=>({action, account})),
    mergeMap(({action, account}) => {
      return this.accountService.saveTransaction(action.transaction, account).pipe(
        map(() => new SelectAccountAction(account.owner))
      )
    })
  );
}
