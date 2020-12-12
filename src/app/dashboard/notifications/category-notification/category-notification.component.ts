import {Component, Input, OnInit} from '@angular/core';
import {CategoryNotification} from '../../../auth/user.model';
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-category-notification',
  templateUrl: './category-notification.component.html',
  styleUrls: ['./category-notification.component.scss']
})
export class CategoryNotificationComponent implements OnInit {
  @Input() data: CategoryNotification;

  constructor() { }

  ngOnInit(): void {
  }

  getDate(date: Timestamp) {
    return date.toDate().toDateString();
  }
}
