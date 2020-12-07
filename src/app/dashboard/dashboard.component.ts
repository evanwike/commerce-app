
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: firebase.User;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      this.user = user;
    })
  }

}

