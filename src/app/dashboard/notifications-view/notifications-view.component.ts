import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {AmountNotification, CategoryNotification, StateNotification} from '../../auth/user.model';

@Component({
  selector: 'app-notifications-view',
  templateUrl: './notifications-view.component.html',
  styleUrls: ['./notifications-view.component.scss']
})
export class NotificationsViewComponent implements OnInit {
  amountNotifications$: Observable<AmountNotification[]>;
  categoryNotifications$: Observable<CategoryNotification[]>;
  stateNotifications$: Observable<StateNotification[]>

  constructor(private authService: AuthService) {
    this.amountNotifications$ = new Observable();
    this.categoryNotifications$ = new Observable();
    this.stateNotifications$ = new Observable();
  }

  ngOnInit(): void {
    this.amountNotifications$ = this.authService.amountNotifications$;
    this.categoryNotifications$ = this.authService.categoryNotifications$;
    this.stateNotifications$ = this.authService.stateNotifications$;

    this.amountNotifications$.subscribe(data => console.log(data))
  }
}
