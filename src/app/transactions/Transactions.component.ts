import { Component, OnInit} from '@angular/core';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

export interface Tile {
  Date: string;
  Description: string;
  Amount: string;
  Balance: string;
}

const DATA: Tile[] = [
  {Date: '6/3/2020', Description: 'Starbucks', Amount: '$2.00', Balance: '$12,453.19'},
  {Date: '6/5/2020', Description: 'Hoolihans', Amount: '$32.00', Balance: '$12,421.19'},
  {Date: '6/7/2020', Description: 'Best Buy', Amount: '$50.00', Balance: '$12,371.19'},
  {Date: '6/12/2020', Description: 'Deposit', Amount: '$86.00', Balance: '$12,457.19'},
];
@Component({
  selector: 'app-transactions',
  templateUrl: './Transactions.html',
  styleUrls: ['./Transactions.component.scss']
})

export class AddTransactionsComponent implements OnInit{
  displayedColumns: string[] = ['Date', 'Description', 'Amount', 'Balance'];
  dataSource = DATA;
  constructor() { }
  ngOnInit(): void {
  }
  // openTransactionSheet(): void{
    // this.addTransactionSheet.open(AddTransactionSheetComponent);
  }


/*@Component({
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
}*/

/*@Component({
  selector: 'app-transactions',
  templateUrl: './Transactions.html',
  styleUrls: ['./Transactions.component.scss']
})

 export class ExportTransactionsComponent implements OnInit {
  constructor(private exportTransactionSheet: MatBottomSheet) {
  }

  ngOnInit(): void {
  }

  openTransactionSheet(): void {
    this.exportTransactionSheet.open(ExportTransactionSheetComponent);
  }
}
*/

/*@Component({
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
}*/

// Added to remove error, can be removed later.
export class TransactionsComponent {
}
