import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


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
    date: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    note: new FormControl('', [Validators.required])
  });

  amountForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    amount: new FormControl(0, [Validators.required]),
    note: new FormControl('', [Validators.required])
  });

  categoryForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    note: new FormControl('', [Validators.required])
  });



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
    console.log(data)
  }

  createStateNotification(data: FormData) {
    console.log(data)
  }

  createCategoryNotification(data: FormData) {
    console.log(data)
  }
}
