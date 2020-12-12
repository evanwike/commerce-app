import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './auth/auth.service';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddTransactionsComponent } from './transactions/Transactions.component';
import { HomeViewComponent } from './dashboard/home-view/home-view.component';
import { TransactionsViewComponent } from './dashboard/transactions-view/transactions-view.component';
import { NotificationsViewComponent } from './dashboard/notifications-view/notifications-view.component';
import { TransactionComponent } from './dashboard/transaction/transaction.component';
import { PiechartComponent } from './dashboard/piechart/piechart.component';
import { ResetDialogComponent } from './login/reset-dialog/reset-dialog.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { SpendingComponent } from './dashboard/spending/spending.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './imports/material-imports.module';
import { FireImportsModule } from './imports/fire-imports.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import {MatDialogModule} from '@angular/material/dialog';
import { AlertViewComponent } from './dashboard/alert-view/alert-view.component';
import { SetNotificationsComponent } from './dashboard/notifications-view/set-notifications/set-notifications.component';
import { AmountNotificationComponent } from './dashboard/notifications/amount-notification/amount-notification.component';
import { CategoryNotificationComponent } from './dashboard/notifications/category-notification/category-notification.component';
import { StateNotificationComponent } from './dashboard/notifications/state-notification/state-notification.component';
import { AddTransactionDialogComponent } from './dashboard/transactions-view/add-transaction-dialog/add-transaction-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        RegisterComponent,
        NotificationsComponent,
        SpendingComponent,
        PiechartComponent,
        AddTransactionsComponent,
        TransactionComponent,
        ResetDialogComponent,
        HomeViewComponent,
        TransactionsViewComponent,
        NotificationsViewComponent,
        AlertViewComponent,
        SetNotificationsComponent,
        AmountNotificationComponent,
        CategoryNotificationComponent,
        StateNotificationComponent,
        AddTransactionDialogComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FireImportsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
