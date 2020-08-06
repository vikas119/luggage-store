import { Injectable } from '@angular/core';
import {Form} from "./form";
import {environment} from '../environments/environment';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class SendToDbService {
  postsCollection: AngularFirestoreCollection<Form>
  postDoc: AngularFirestoreDocument<Form>

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection(`${environment.firebase.storagePath}`, ref =>
          ref.orderBy('published', 'desc'))
  }
  create(data: Form) {
    this.postsCollection.add({
      name: data.name,
      phone: data.phone,
      email: data.email
    })
  }
}
