import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './auth/auth.service';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AddTransactionsComponent} from './transactions/Transactions.component';

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


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    NotificationsComponent,
    SpendingComponent,
    PiechartComponent
    AddTransactionsComponent
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
