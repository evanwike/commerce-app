import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  validationMessages = {
    email: {
      required: 'Please enter your email.'
    },
    password: {
      required: 'Please enter your password.'
    }
  };

  getEmailErrorMessage() {
    if (this.loginForm.controls.email.hasError('Required')) {
      return 'Please enter your email.';
    }
  }

  getErrorMessage(control: string) {
    const errors = this.loginForm.controls[control].errors;
    console.log(errors)
    console.log(errors.keys)
    return this.validationMessages[control][errors.keys];
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
