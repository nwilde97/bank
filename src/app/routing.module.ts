import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountListComponent} from "./account-list/account-list.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginComponent} from "./login/login.component";
import {AccountComponent} from "./account/account.component";

const routes: Routes = [
  {path: "", component: AccountListComponent, canActivate:[AuthGuard]},
  {path: "account/:id", component: AccountComponent, canActivate:[AuthGuard]},
  {path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
