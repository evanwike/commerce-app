import { Injectable } from '@angular/core';
import {AmountNotification, Transaction, User} from './user.model';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly auth$: Observable<firebase.User>;
  readonly userProfile$: Observable<User>;
  readonly transactions$: Observable<Transaction[]>;
  readonly notificationAmount: Observable<AmountNotification[]>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.auth$ = afAuth.authState;
    this.userProfile$ = this.afAuth.authState.pipe(
      switchMap(user => user ? this.afs.doc<User>(`users/${user.uid}`).valueChanges() : of(undefined)));
    this.transactions$ = this.userProfile$.pipe(map(user => user.transactions));
    this.notificationAmount = this.userProfile$.pipe(map(user => user.notificationAmount));

  }

  signInWithPassword(email: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.goToDashboard();
        console.log('User signed in with email and password.');
      })
      .catch(console.log);
  }

  async signUpWithEmailAndPassword(data): Promise<any> {
    this.afAuth.createUserWithEmailAndPassword(data.email, data.password)
      .then(userRef => {
        this.goToDashboard();

        // Add new document for user
        this.afs.collection('users').doc(userRef.user?.uid).set({
          uid: userRef.user?.uid,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          transactions: [],
          notificationAmount: [],
          notifications: {
            amount: [],
            category: [],
            state: []
          }
        }).then(refId => console.log('Successfully created new document for user: ', userRef.user?.uid))
          .catch(console.log);
      })
      .catch(console.log);
  }

  goToDashboard(): void {
    this.router.navigateByUrl('/dashboard');
  }

  signOut(): void {
    this.afAuth.signOut().then(() => {

      this.router.navigateByUrl('/login')
        .then(() => console.log('User signed out.'))
        .catch(err => console.log('Error signing user out: ', err));
    });
  }
}
