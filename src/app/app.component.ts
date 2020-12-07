import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AuthService} from './auth/auth.service';
import firebase from 'firebase/app';
import {Router} from '@angular/router';
import {User} from './auth/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'commerce-app';
  @Input() loggedIn: boolean;
  // TODO: FIXME, not picking up emit

  constructor(firestore: AngularFirestore, private authService: AuthService, public router: Router) { }

  logout() {
    this.authService.signOut();
    this.loggedIn = false;
  }

  ngOnInit(): void {
    if (this.authService.userData$) {
      console.log('User already signed in.');
      this.router.navigateByUrl('/dashboard');
      this.loggedIn = true;
    } else {
      console.log("User's authentication token expired, must login.");
      this.router.navigateByUrl('/login');
      this.loggedIn = false;
    }
  }
}
