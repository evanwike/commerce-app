import { Injectable } from '@angular/core';
import { User } from './user.model';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';


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

  signUpWithEmailAndPassword = (data: any) => {
    this.afAuth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(result => {
        console.log('Account created successfully.', result);
        // Update profile
        this.getUser()
          .then(user => {
            user.updateProfile({
              displayName: `${data.firstName} ${data.lastName}`
            }).then(res => {
              console.log('Successfully updated new user profile.');
            }).catch(err => {
              console.log('Profile updated failure: ', err);
            })
        })
      })
      .catch(err => {
        console.log(err.message);
      });
  };

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
  };

  logout = () => {
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
    // Send to dashboard
  };

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async getUser() {
    const user = await this.isLoggedIn();
    if (user) {
      return user;
    } else {
      return null;
    }
  }
}
