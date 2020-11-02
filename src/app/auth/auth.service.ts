import { Injectable } from '@angular/core';
import { User } from '../user.model';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // FIXME: Switch to User interface?
  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
      this.user$ = afAuth.authState;
  }

  signUp = (email: string, password: string) => {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log('Success!', result);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  login = (email: string, password: string) => {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout = () => {
    this.afAuth.signOut();
  }
}
