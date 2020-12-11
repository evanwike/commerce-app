import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Observable} from 'rxjs';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'commerce-app';
  auth: Observable<firebase.User>;

  constructor(private authService: AuthService) {
    this.auth = new Observable();
  }

  logout(): void {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.auth = this.authService.auth$;
  }
}
