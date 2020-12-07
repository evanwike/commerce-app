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

  constructor(firestore: AngularFirestore, public authService: AuthService, public router: Router) { }

  logout() {
    this.authService.signOut();
  }

  ngOnInit(): void {
  }
}
