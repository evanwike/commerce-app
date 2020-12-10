import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {Notifications} from '../../auth/user.model';

@Component({
  selector: 'app-notifications-view',
  templateUrl: './notifications-view.component.html',
  styleUrls: ['./notifications-view.component.scss']
})
export class NotificationsViewComponent implements OnInit {
  notifications$: Observable<Notifications>;

  constructor(private authService: AuthService) {
    this.notifications$ = new Observable();
  }

  ngOnInit(): void {
    this.notifications$ = this.authService.notifications$;
    this.notifications$.subscribe(data => console.log(data));
  }
}
