import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Account, Transaction} from '../state/model';
import {of} from 'rxjs/internal/observable/of';

@Injectable()
export class AccountService {

  private accounts: Account[] = [
    {owner: 'Peter', balance: 25.00},
    {owner: 'James', balance: 10.00},
    {owner: 'John', balance: 8.25}
  ];

  private transactions: Transaction[] = [
    {amount: -5.00, category: 'Food', date: '2018-04-23T05:08:28.319Z'}
  ];

  constructor() {
  }

  getAccounts(): Observable<Account[]> {
    return of(this.accounts);
  }

  getAccount(id: string): Observable<Account> {
    for (let account of this.accounts) {
      if (account.owner == id) {
        account.transactions = this.transactions;
        return of(account);
      }
    }
    throw "Account does not exist";
  }

  saveTransaction(t: Transaction, account:Account): Observable<void> {
    this.transactions.push(t);
    return of();
  }
}
