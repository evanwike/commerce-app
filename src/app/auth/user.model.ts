import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface User {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  transactions: Transaction[]
}

export interface Transaction {
  accountNum: string;
  amount: number;
  balance: number;
  cr: string;
  description: string;
  date: Timestamp;
}
