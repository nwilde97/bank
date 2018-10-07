import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RoutingModule} from "./routing.module";
import { AccountListComponent } from './account-list/account-list.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule, MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {LoginService} from "./service/login.service";
import {AuthGuard} from "./auth/auth.guard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { AccountComponent } from './account/account.component';
import {AccountService} from "./service/account.service";
import { TransactionFormComponent } from './account/transaction-form/transaction-form.component';
import {reducer, root} from './state/reducer';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StateEffects} from './state/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


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
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    StoreModule.forRoot(root),
    EffectsModule.forRoot([StateEffects]),
    StoreDevtoolsModule.instrument({
      // maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    })
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
