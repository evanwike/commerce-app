import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './imports/material-imports.module';
import { FireImportsModule } from './imports/fire-imports.module';
import {ReactiveFormsModule} from '@angular/forms';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { SpendingComponent } from './dashboard/spending/spending.component';
import {ChartsModule} from 'ng2-charts';
import { PiechartComponent } from './dashboard/piechart/piechart.component';
import { TransactionComponent } from './dashboard/transaction/transaction.component';
import { SetNotificationsComponent } from './dashboard/set-notifications/set-notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    NotificationsComponent,
    SpendingComponent,
    PiechartComponent,
    TransactionComponent,
    SetNotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FireImportsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
