import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import {TransactionsComponent} from './Transactions.component';
import {MatAccordion, MatExpansionModule, MatExpansionPanelDescription, MatExpansionPanelTitle} from '@angular/material/expansion';

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [TransactionsComponent]
})
export class TransactionsModule { }
