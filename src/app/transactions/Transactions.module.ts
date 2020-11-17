import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';

import {MatAccordion, MatExpansionModule, MatExpansionPanelDescription, MatExpansionPanelTitle} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: []
})
export class TransactionsModule { }
