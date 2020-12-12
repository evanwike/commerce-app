import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../auth/auth.service';
import firebase from 'firebase';
import firestore = firebase.firestore;


@Component({
  selector: 'app-set-notifications',
  templateUrl: './set-notifications.component.html',
  styleUrls: ['./set-notifications.component.scss']
})
export class SetNotificationsComponent {
  oos: boolean;
  category: boolean;
  amount: boolean;
  submit: boolean;
  clear: boolean;
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  oosForm = new FormGroup({
    date: new FormControl(new Date(), [Validators.required]),
    state: new FormControl('', [Validators.required]),
    note: new FormControl('', [Validators.required])
  });

  amountForm = new FormGroup({
    date: new FormControl(new Date(), [Validators.required]),
    amount: new FormControl(0, [Validators.required]),
    note: new FormControl('', [Validators.required])
  });

  categoryForm = new FormGroup({
    date: new FormControl(new Date(), [Validators.required]),
    category: new FormControl('', [Validators.required]),
    note: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService) { }

  onSelectionChange(value: string) {
    if (value === 'oos') {
      this.oos = true;
      this.category = false;
      this.amount = false;
    }
    if (value === 'category') {
      this.category = true;
      this.oos = false;
      this.amount = false;
    }
    if (value === 'amount') {
      this.amount = true;
      this.oos = false;
      this.category = false;
    }
  }

  createAmountNotification(data: FormData) {
    this.authService.createAmountNotification({
      amount: data['amount'],
      date: firestore.Timestamp.fromDate(data['date']),
      note: data['note']
    })
  }

  createStateNotification(data: FormData) {
    this.authService.createStateNotification({
      state: data['state'],
      date: firestore.Timestamp.fromDate(data['date']),
      note: data['note']
    })
  }

  createCategoryNotification(data: FormData) {
    this.authService.createCategoryNotification({
      category: data['category'],
      date: firestore.Timestamp.fromDate(data['date']),
      note: data['note']
    })
  }
}
