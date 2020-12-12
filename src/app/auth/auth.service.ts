import { Injectable } from '@angular/core';
import {AmountNotification, CategoryNotification, Notifications, StateNotification, Transaction, User} from './user.model';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
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
  readonly notifications$: Observable<Notifications>;
  readonly amountNotifications$: Observable<AmountNotification[]>;
  readonly categoryNotifications$: Observable<CategoryNotification[]>;
  readonly stateNotifications$: Observable<StateNotification[]>;
  userDocRef: AngularFirestoreDocument<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.auth$ = afAuth.authState;
    this.userProfile$ = this.afAuth.authState.pipe(
      switchMap(user => user ? this.afs.doc<User>(`users/${user.uid}`).valueChanges() : of(undefined)));
    this.transactions$ = this.userProfile$.pipe(map(user => user.transactions));
    this.notifications$ = this.userProfile$.pipe(map(user => user.notifications));
    this.amountNotifications$ = this.notifications$.pipe(map(notificationObj => notificationObj.amount));
    this.categoryNotifications$ = this.notifications$.pipe(map(notificationObj => notificationObj.category));
    this.stateNotifications$ = this.notifications$.pipe(map(notificationObj => notificationObj.state));

    // Sign user into their dashboard if already authenticated
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        this.goToDashboard();
        this.userDocRef = this.afs.collection('users').doc(user.uid);
      } else {
        this.signOut();
      }
    })
  }

  signInWithPassword(email: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.goToDashboard();
        console.log('User signed in with email and password.');
      })
      .catch(console.log)
  }

  async signUpWithEmailAndPassword(data): Promise<any> {
    this.afAuth.createUserWithEmailAndPassword(data.email, data.password)
      .then(userRef => {
        this.goToDashboard();

        // Add new document for user
        this.userDocRef.set({
          uid: userRef.user?.uid,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          transactions: [],
          notifications: {
            amount: [],
            category: [],
            state: []
          }
        }).then(() => console.log('Successfully created new document for user: ', userRef.user?.uid))
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

  createTransaction(data: Transaction) {
    console.log(data)
    console.log(typeof data)
    // @ts-ignore
    this.userDocRef.update({
      transactions: firebase.firestore.FieldValue.arrayUnion(data) as unknown as Transaction[]
    })
  }
}
