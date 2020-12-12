import {Component, Input, OnInit} from '@angular/core';
import {StateNotification} from '../../../auth/user.model';
import firebase from 'firebase';

@Component({
  selector: 'app-state-notification',
  templateUrl: './state-notification.component.html',
  styleUrls: ['./state-notification.component.scss']
})
export class StateNotificationComponent implements OnInit {
  @Input() data: StateNotification;

  constructor() { }

  ngOnInit(): void {
  }

  getDate(date: firebase.firestore.Timestamp) {
    return date.toDate().toDateString();
  }
}
