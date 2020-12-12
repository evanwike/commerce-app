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
  form = new FormGroup({
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
    if (this.form.errors) {
      window.alert('Password must be at least 8 characters, containing at least 1 uppercase letter, 1 symbol, and 1 number.');
      return;
    }

    console.log('Register: ', data);
    this.authService.signUpWithEmailAndPassword(data)
      .catch(err => {
        window.alert(err.message);
      })
  }
}
