import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PubNubAngular} from 'pubnub-angular2';

@Component({
  selector: 'app-pubnub',
  templateUrl: '../chat.component.html',
  styleUrls: ['../chat.component.css']
})
export class PubnubComponent implements OnInit {
  channel: string;
  today: object;
  pubnub = new PubNubAngular();
  items: any[];
  chat: string;

  constructor() {
    this.chat = '';
    this.channel = 'bcr_channel';
    this.pubnub.init({
      publishKey: 'pub-c-2e71b1fb-cd20-4099-b900-d6bc55e613a2',
      subscribeKey: 'sub-c-adbf3382-9ba2-11e8-979a-3665db0876c0'
    });
    this.pubnub.subscribe({
      channels: [this.channel],
      triggerEvents: ['message']
    });
    this.items = this.pubnub.getMessage(this.channel);
  }

  ngOnInit() {
  }

  sendMessage(form: NgForm) {
    this.today = new Date();
    const message = form.value.message;
    // console.log(form.value);
    this.pubnub.publish({
      channel: this.channel, message: message
    });
  }

}
