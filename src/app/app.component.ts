import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AuthService} from './auth/auth.service';
import firebase from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'commerce-app';
  items: Observable<any[]>;
  user: firebase.User;

  constructor(firestore: AngularFirestore, private auth: AuthService, public router: Router) {
    // FIXME: Remove this, just for testing
    this.items = firestore.collection('items').valueChanges();
  }

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      this.user = user;

      if (user) {
        console.log('User logged in.');
        this.router.navigateByUrl('/dashboard');

      } else {
        console.log('User logged out.');
        this.router.navigateByUrl('/login')
      }
    })
  }
}
