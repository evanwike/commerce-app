import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-reset-dialog',
  templateUrl: './reset-dialog.component.html',
  styleUrls: ['./reset-dialog.component.scss']
})
export class ResetDialogComponent implements OnInit {
  email: string;
  title: string;

  constructor(private dialogRef: MatDialogRef<ResetDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.email = data.email;
    this.title = data.title;
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.email);
  }

  close() {
    this.dialogRef.close();
  }
}
