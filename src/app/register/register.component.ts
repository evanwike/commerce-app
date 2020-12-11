import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  hide = true;
  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(8), Validators.pattern(/\d/),
      Validators.pattern(/[A-Z]/), Validators.pattern(/[a-z]/),
      Validators.pattern(/[`~!@#$%^&*()_+={}|:";'<>?,./\-\[\]\\]/)])
  });

  constructor(
    public authService: AuthService) { }

  ngOnInit(): void {
  }

  register(data: any) {
    console.log('Register: ', data);
    this.authService.signUpWithEmailAndPassword(data);
  }
}
