
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import firebase from 'firebase/app';
import {User} from '../auth/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.userData$.subscribe(user => {
      this.user = user;
    })
  }
}

