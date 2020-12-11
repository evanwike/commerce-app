import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface User {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  transactions: Transaction[];
  notifications: Notifications;
}

export interface Transaction {
  accountNum: string;
  amount: number;
  balance: number;
  cr: string;
  description: string;
  date: Timestamp;
}

export interface Notifications {
  amount: AmountNotification[];
  category: CategoryNotification[];
  state: StateNotification[];
}

export interface AmountNotification {
  amount: number;
  date: Timestamp;
  note: string;
}

export interface CategoryNotification {
  category: string;
  date: Timestamp;
  note: string;
}

export interface StateNotification {
  date: Timestamp;
  note: string;
  state: string;
}
