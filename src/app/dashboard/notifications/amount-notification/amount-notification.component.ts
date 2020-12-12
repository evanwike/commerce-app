import {Component, Input, OnInit} from '@angular/core';
import {AmountNotification} from '../../../auth/user.model';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-amount-notification',
  templateUrl: './amount-notification.component.html',
  styleUrls: ['./amount-notification.component.scss']
})
export class AmountNotificationComponent implements OnInit {
  @Input() data: AmountNotification;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  getDate(date: Timestamp) {
    return date.toDate().toDateString();
  }
}
