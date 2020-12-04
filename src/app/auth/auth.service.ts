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
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router) {
      this.user$ = afAuth.authState;
  }

  signUp = (email: string, password: string) => {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log('Success!', result);
        console.log(email, password);
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
        this.router.navigateByUrl('/dashboard');
      })
      .catch(err => {
        const message = err.message;
        console.log('Something went wrong:', message);
        window.alert(message);

      });
  }

  logout = () => {
    this.afAuth.signOut();
  }
}
