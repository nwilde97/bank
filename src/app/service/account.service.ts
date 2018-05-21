import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Account} from "../model/account";
import {Transaction} from "../model/transaction";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class AccountService {

  private accounts:Array<Account> = [
    <Account>{owner:"Peter", balance: 25.00},
    <Account>{owner:"James", balance: 10.00},
    <Account>{owner:"John", balance: 8.25}
  ];

  private transactions:Array<Transaction> = [
    <Transaction>{amount: -5.00, purpose: "candy", date: "2018-04-23T05:08:28.319Z"}
  ];

  private _transactions:BehaviorSubject<Array<Transaction>> = new BehaviorSubject<Array<Transaction>>(this.transactions);

  constructor() {
  }

  getAccounts(): Observable<Array<Account>> {
    return Observable.of(this.accounts);
  }

  getAccount(id: string): Observable<Account> {
    return this.getAccounts().map(accounts => {
      for(let account of this.accounts){
        if(account.owner == id){
          return account;
        }
      }
      return null;
    });
  }

  getTransactions(id: string): Observable<Array<Transaction>>{
    return this._transactions;
  }

  saveTransaction(t:Transaction):Observable<Transaction>{
    this.transactions.push(t);
    this._transactions.next(this.transactions.sort((a,b)=>{
      return b.date.localeCompare(a.date);
    }));
    return Observable.of(t);
  }
}
