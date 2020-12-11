import {Component, Input, OnInit} from '@angular/core';
import {AmountNotification} from '../../auth/user.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @Input() notificationAmount: AmountNotification;

  constructor() { }

  ngOnInit(): void { }
}
