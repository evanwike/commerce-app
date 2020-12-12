import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ResetDialogComponent} from './reset-dialog/reset-dialog.component';
import {Router} from '@angular/router';
import {RegisterDialogComponent} from './register-dialog/register-dialog.component';

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

  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getEmailErrorMessage() {
    if (this.loginForm.controls.email.hasError('Required')) {
      return 'Please enter your email.';
    }
  }

  openResetDialog() {
    this.dialog.open(ResetDialogComponent, {
      autoFocus: true,
      width: '400px',
      data: {
        title: 'Reset Password',
        email: this.loginForm.controls.email.value
      }
    }).afterClosed()
      .subscribe(data => {
        console.log("Dialog output: ", data)
        // TODO: Send password reset email w/ data
        // TODO: Open dialog to show email has been sent
      });
  }

  openRegisterDialog() {
    this.dialog.open(RegisterDialogComponent, {
      autoFocus: true,
      width: '400px',
      data: {
        email: this.loginForm.controls.email.value
      }
    }).afterClosed()
      .subscribe(data => {
        this.authService.signUpWithEmailAndPassword(data)
          .catch(console.log);
      })
  }

  login(data: any) {
    this.authService.signInWithPassword(data.email, data.password)
  }

  register() {
    this.router.navigateByUrl('/register');
  }
}
