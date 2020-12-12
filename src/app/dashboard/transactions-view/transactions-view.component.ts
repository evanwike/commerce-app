import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {Transaction} from '../../auth/user.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddTransactionDialogComponent} from './add-transaction-dialog/add-transaction-dialog.component';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['./transactions-view.component.scss']
})
export class TransactionsViewComponent implements OnInit {
  transactions$: Observable<Transaction[]>;
  columns = ['date', 'description', 'cr', 'amount']
  searchText: string;

  constructor(private authService: AuthService, private dialog: MatDialog) {
    this.transactions$ = new Observable();
  }

  ngOnInit(): void {
    this.transactions$ = this.authService.transactions$;
    this.transactions$.subscribe(data => console.log(data));
  }

  openAddTransactionDialog() {
    const config = new MatDialogConfig();

    this.dialog.open(AddTransactionDialogComponent, {
      disableClose: true,
      autoFocus: true
    }).afterClosed()
      .subscribe(data => {
        const _amount = Math.abs(data['amount']);
        const _cr = data['cr'];

        this.authService.createTransaction({
          amount: _cr == 'CR' ? _amount : -_amount,
          cr: _cr,
          date: data['date'],
          description: data['description']
        });
      });
  }

  getAmountString(amount: number, type: String) {
    amount = Math.abs(amount);
    return type == 'Debit' ? `-$${amount}` : `$${amount}`;
  }

  getDateString(date: Timestamp) {
    return date.toDate().toDateString();
  }
}
