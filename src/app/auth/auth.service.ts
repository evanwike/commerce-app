import {EventEmitter, Injectable, Output} from '@angular/core';
import { User } from './user.model';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, tap, startWith } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // FIXME: Switch to User interface?
  userData$: Observable<User>;
  @Output() loggedIn = new EventEmitter<boolean>();

  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore,
              public router: Router) {
    // Get auth data, then get firestore user document || null
    this.userData$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }),
      // Set/read the user data to local storage
      // this avoids flickering on application startup
      tap(user => localStorage.setItem('user', JSON.stringify(user))),
      startWith(JSON.parse(localStorage.getItem('user')))
    );
    // this.user = new Observable(subscriber => {
    //   this.afAuth.onAuthStateChanged(subscriber);
    // });



    // Get the auth state, then fetch the Firestore user document or return null
    // this.user = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     // Logged in
    //     if (user) {
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       // Logged out
    //       return of(null);
    //     }
    //   })
    // );
  }

  async signInWithPassword(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.loggedIn.emit(true);
      return true;
    } catch (error) {
      console.log('Sign in with email and password failed.');
      console.log(error);
      return false;
    }
  }

  getUserData() {
    return this.afs.collection('users').valueChanges({idField: 'uid'})
  }

  async signUpWithEmailAndPassword(data: any) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(data.email, data.password);
      return true;
    } catch (error) {
      console.log('Sign up with email and password failed.');
      console.log(error);
      return false;
    }
  }

  signOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigateByUrl('/login');
      this.loggedIn.emit(false);
    });
  }

  // private updateUserData(fbUser: firebase.User) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(
  //     `users/${fbUser.uid}`
  //   );
  //
  //   const user: User = {
  //     uid: fbUser.uid,
  //     email: fbUser.email,
  //     displayName: fbUser.displayName
  //   };
  //
  //   return userRef.set(user, { merge: true });
  // }
}
