import {Account} from './model';
import {createSelector} from '@ngrx/store';
import {ACCOUNT_LOADED, ACCOUNTS_LOADED, Actions} from './actions';

export interface State {
  accounts: Account[];
  selectedAccount?: Account;
}

const initialState: State = {
  accounts: []
};

export function reducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case ACCOUNTS_LOADED:
      return Object.assign({}, state, {accounts: action.payload});
    case ACCOUNT_LOADED:
      return Object.assign({}, state, {selectedAccount: action.payload});
    default:
      return state;
  }
}

export interface RootState {
  app: State;
}

export const root = {app: reducer};

const appState = (state: RootState) => state.app;

export const getAccounts = createSelector(appState, (state: State) => state.accounts);
export const getActiveAccount = createSelector(appState, (state: State) => state.selectedAccount);
