import {Injectable} from '@angular/core';
import { User } from './user.model';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {switchMap, tap, startWith} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  auth: firebase.User = null;
  authSub = new BehaviorSubject(this.auth);
  currentAuthStatus = this.authSub.asObservable();

  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore,
              public router: Router) {
    // Get auth data, then get firestore user document || null
    // this.userData$ = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       this.signInUser();
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       return of(null);
    //     }
    //   }),
    //   // Set/read the user data to local storage
    //   // this avoids flickering on application startup
    //   tap(user => localStorage.setItem('user', JSON.stringify(user))),
    //   startWith(JSON.parse(localStorage.getItem('user')))
    // );
    this.authListener();
    // this.user$.pipe(
    //   switchMap(user => user ? this.afs.collection('users').doc(this.auth.uid).valueChanges() : of(null)))
  }

  authListener() {
    this.afAuth.onAuthStateChanged(cred => {
      if (cred) {
        this.authSub.next(cred);
        console.log('User is logged in with credential: ', cred);

      }
      else {
        this.authSub.next(null);
        console.log('User is logged out.');
      }
    })
  }

  async signInWithPassword(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.signInUser();
      return true;
    } catch (error) {
      console.log('Sign in with email and password failed.');
      console.log(error);
      return false;
    }
  }

  signInUser() {

  }

  getUserData() {
    return this.afs.collection('users').valueChanges({idField: 'uid'})
  }

  async signUpWithEmailAndPassword(data: any) {
    try {
      this.afAuth.createUserWithEmailAndPassword(data.email, data.password)
        .then(userRef => {
          this.signInUser();

          // Add new document for user
          this.afs.collection('users').doc(userRef.user.uid).set({
            uid: userRef.user.uid,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            transactions: []
          }).then(refId => console.log('Successfully created new document for user: ', userRef.user.uid))
            .catch(console.log);
        })
        .catch(console.log);
      return true;
    }
    catch (err) {
      console.log('Sign up with email and password failed: ', err);
      return false;
    }
  }

  signOut() {
    this.afAuth.signOut().then(() => {

      this.router.navigateByUrl('/login')
        .then(res => console.log('User successfully signed out.'))
        .catch(err => console.log('Error signing user out.', err));
    });
  }

  private updateUserData(_user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${_user.uid}`
    );

    const user: User = {..._user};
    return userRef.set(user, { merge: true });
  }
}
