import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-transaction-dialog',
  templateUrl: './add-transaction-dialog.component.html',
  styleUrls: ['./add-transaction-dialog.component.scss']
})

export class AddTransactionDialogComponent implements OnInit {
  form = new FormGroup({
    date: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
    cr: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private dialogRef: MatDialogRef<AddTransactionDialogComponent>) { }

  ngOnInit(): void {
  }

  // Close dialog, send email as result
  save(value: FormData) {
    this.dialogRef.close(value);  // TODO: Change to Transaction first then send
  }

  // Close Dialog
  close() {
    this.dialogRef.close();
  }

}
