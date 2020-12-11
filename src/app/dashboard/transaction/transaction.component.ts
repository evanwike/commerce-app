import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../auth/user.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input() transaction: Transaction;

  constructor() { }

  ngOnInit(): void { }

  getDate() {
    return this.transaction.date.toDate().toDateString();
  }
}
