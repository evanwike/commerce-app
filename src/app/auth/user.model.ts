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
  amountNtfs: AmountNtf[];
  categoryNtfs: CategoryNtf[];
  stateNtfs: StateNtf[];
}

export interface AmountNtf {
  amount: number;
  date: Timestamp;
  note: string;
}

export interface CategoryNtf {
  category: string;
  date: Timestamp;
  note: string;
}

export interface StateNtf {
  date: Timestamp;
  note: string;
  state: string;
}
