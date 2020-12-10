import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {AmountNotification} from '../../auth/user.model';

@Component({
  selector: 'app-notifications-view',
  templateUrl: './notifications-view.component.html',
  styleUrls: ['./notifications-view.component.scss']
})
export class NotificationsViewComponent implements OnInit {
  notificationAmount$: Observable<AmountNotification[]>;

  constructor(private authService: AuthService) {
    this.notificationAmount$ = new Observable();
  }

  ngOnInit(): void {
    this.notificationAmount$ = this.authService.notificationAmount;
    this.notificationAmount$.subscribe(data => console.log(data));
  }
}
