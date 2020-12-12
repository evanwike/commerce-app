import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {
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

  constructor(private dialogRef: MatDialogRef<RegisterDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.form.controls.email.setValue(data.email);
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.form);
  }

  close() {
    this.dialogRef.close();
  }
}
