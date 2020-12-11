import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {Transaction} from '../../auth/user.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddTransactionDialogComponent} from './add-transaction-dialog/add-transaction-dialog.component';

@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['./transactions-view.component.scss']
})
export class TransactionsViewComponent implements OnInit {
  transactions$: Observable<Transaction[]>;
  searchText: string;

  constructor(private authService: AuthService, private dialog: MatDialog) {
    this.transactions$ = new Observable();
  }

  ngOnInit(): void {
    this.transactions$ = this.authService.transactions$;
    this.transactions$.subscribe(data => console.log(data))
  }

  openAddTransactionDialog() {
    const config = new MatDialogConfig();

    this.dialog.open(AddTransactionDialogComponent, {
      disableClose: true,
      autoFocus: true
    }).afterClosed()
      .subscribe(data => {
        console.log('Received data:', data);
        // TODO: Send to auth service.
      })
  }

}
