import { Component, OnInit} from '@angular/core';
import { MatGridListModule} from '@angular/material/grid-list';

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
  constructor() { }
  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-transactions-sheet',
  templateUrl: '',
})

export class AddTransactionSheetComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {}
}
