import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RoutingModule} from "./routing.module";
import { AccountListComponent } from './account-list/account-list.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatToolbarModule
} from "@angular/material";
import {LoginService} from "./service/login.service";
import {AuthGuard} from "./auth/auth.guard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { AccountComponent } from './account/account.component';
import {AccountService} from "./service/account.service";
import { TransactionFormComponent } from './account/transaction-form/transaction-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountListComponent,
    AccountComponent,
    TransactionFormComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [
    LoginService,
    AccountService,
    AuthGuard,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  entryComponents: [
    TransactionFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
