import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'commerce-app';
  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    // FIXME: Remove this, just for testing
    this.items = firestore.collection('items').valueChanges();
  }
}
