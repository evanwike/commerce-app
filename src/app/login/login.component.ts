import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ResetDialogComponent} from './reset-dialog/reset-dialog.component';
import {Router} from '@angular/router';

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

  openResetDialog() {
    const dialogConfig = new MatDialogConfig();

    this.dialog.open(ResetDialogComponent, {
      disableClose: true,
      autoFocus: true,
      width: '400px',
      data: {
        title: 'Reset Password',
        email: this.loginForm.controls.email.value
      }
    })
      .afterClosed()
      .subscribe(data => {
        console.log("Dialog output: ", data)
        // TODO: Send password reset email w/ data
        // TODO: Open dialog to show email has been sent
      });


  }

  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(data: any) {
    this.authService.login(data.email, data.password);
  }

  register() {
    this.router.navigateByUrl('/register');
  }
}
