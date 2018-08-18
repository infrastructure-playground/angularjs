import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-chat-firebase',
  templateUrl: '../chat.component.html',
  styleUrls: ['../chat.component.css']
})


export class ChatFirebaseComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<any[]>;
  items: Observable<any[]>;
  chat: string;

  constructor(db: AngularFirestore) {
    this.chat = 'firebase';
    this.itemsCollection = db.collection('messages');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
  }

  sendMessage(form: NgForm) {
    // const message = form.value.message;
    this.itemsCollection.add(form.value);
  }

}
