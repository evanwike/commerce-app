import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm = new FormGroup({
    first: new FormControl('', [Validators.required]),
    last: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\\]).{8,32}$')
      ]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(
    public authService: AuthService) { }

  ngOnInit(): void {
  }
}
