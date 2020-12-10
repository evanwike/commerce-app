import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {Transaction} from '../../auth/user.model';

@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['./transactions-view.component.scss']
})
export class TransactionsViewComponent implements OnInit {
  transactions$: Observable<Transaction[]>;

  constructor(private authService: AuthService) {
    this.transactions$ = new Observable();
  }

  ngOnInit(): void {
    this.transactions$ = this.authService.transactions$;
    this.transactions$.subscribe(data => console.log(data));
  }

}
