import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

const fireModules = [
  AngularFireAuthModule,
  AngularFirestoreModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    ...fireModules
  ],
  exports: [
    ...fireModules
  ]
})
export class FireImportsModule { }
