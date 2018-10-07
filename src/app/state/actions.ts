import {Account, Transaction} from './model';

export const ACCOUNTS_LOADED = "[ACTIONS] ACCOUNTS_LOADED";
export const SELECT_ACCOUNT = "[ACTIONS] SELECT_ACCOUNT";
export const SAVE_TRANSACTION = "[ACTIONS] SAVE_TRANSACTION";
export const TRANSACTION_SAVED = "[ACTIONS] TRANSACTION_SAVED";
export const ACCOUNT_LOADED = "[ACTIONS] ACCOUNT_LOADED";

export class AccountsLoadedAction {
  public type = ACCOUNTS_LOADED;
  constructor(public payload: Account[]){}
}

export class SelectAccountAction {
  public type = SELECT_ACCOUNT;
  constructor(public payload: string){}
}

export class SaveTransactionAction {
  public type = SAVE_TRANSACTION;
  constructor(public transaction: Transaction){}
}

export class TransactionSavedAction {
  public type = TRANSACTION_SAVED;
  constructor(){}
}

export class AccountLoadedAction {
  public type = ACCOUNT_LOADED;
  constructor(public payload: Account){}
}

export type Actions = AccountsLoadedAction | AccountLoadedAction;
