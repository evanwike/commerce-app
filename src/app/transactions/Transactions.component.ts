import { Component, OnInit} from '@angular/core';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

export interface Tile {
  Date: string;
  Description: string;
  Amount: string;
  Balance: string;
}
@Component({
  selector: 'app-transactions',
  templateUrl: './Transactions.html',
  styleUrls: ['./Transactions.component.scss']
})

export class AddTransactionsComponent implements OnInit{
  constructor(private addTransactionSheet: MatBottomSheet) { }
  ngOnInit(): void {
  }
  openTransactionSheet(): void{
    this.addTransactionSheet.open(AddTransactionSheetComponent);
  }
}

@Component({
  selector: 'app-transactions-sheet',
  templateUrl: './addTransactionSheet.component.html'
})

export class AddTransactionSheetComponent implements OnInit {
  constructor(private addTransactionSheetRef: MatBottomSheetRef<AddTransactionSheetComponent>) {}
  ngOnInit(): void {}
  openLink(event: MouseEvent): void{
    this.addTransactionSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'app-transactions',
  templateUrl: './Transactions.html',
  styleUrls: ['./Transactions.component.scss']
})

export class ExportTransactionsComponent implements OnInit{
  constructor(private exportTransactionSheet: MatBottomSheet) { }
  ngOnInit(): void {
  }
  openTransactionSheet(): void{
    this.exportTransactionSheet.open(ExportTransactionSheetComponent);
  }
}

@Component({
  selector: 'app-transactions-sheet',
  templateUrl: './exportTransactionSheet.component.html'
})

export class ExportTransactionSheetComponent implements OnInit {
  constructor(private exportTransactionSheetRef: MatBottomSheetRef<ExportTransactionSheetComponent>) {}
  ngOnInit(): void {}
  openLink(event: MouseEvent): void{
    this.exportTransactionSheetRef.dismiss();
    event.preventDefault();
  }
}
