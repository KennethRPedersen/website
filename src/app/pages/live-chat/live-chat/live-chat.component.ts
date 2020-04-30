import { Component, OnInit } from '@angular/core';
import {LiveChatService} from '../services/live-chat.service';
import {ChatMessage} from '../models/chat-message.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {

  usersCurrentlyTyping: any[] = [];
  chatMessages: ChatMessage[] = [];
  userCount: number;

  messageDataForm = new FormGroup({
    message: new FormControl(''),
    username: new FormControl('Anonymous')
  });
  usersTyping = '';

  constructor(private service: LiveChatService) {

  }

  ngOnInit() {
    this.service.usersTyping.subscribe(usr => {
      if (usr) {
        this.usersCurrentlyTyping.push(usr);
      }
      this.setUsersTyping();
    });

    this.service.userStoppedTyping.subscribe(usr => {
      if (usr) {
        const index = this.usersCurrentlyTyping.indexOf(usr);
        this.usersCurrentlyTyping.splice(index, 1);

        this.setUsersTyping();
      }
    });

    this.service.chatMessages.subscribe(message => {
      if (message) {
        this.chatMessages.push(message);
        setTimeout(() => {this.updateScroll(); }, 25);
      }
    });

    this.service.userCount.subscribe(count => {
      this.userCount = count;
    });

  }

  sendChatMessage() {
    const message = this.messageDataForm.get('message');

    if ( message.value ) {
      this.service.sendMessage(message.value);
      message.setValue('');
    }
  }

  usernameChanged() {
    const nickname = this.messageDataForm.get('username');
    this.service.nicknamedChanged(nickname.value);
  }

  userTyping() {
    const message = this.messageDataForm.get('message');

    if (message.value) {
      this.service.userTyping();
    }
  }

  setUsersTyping() {
    let message = '';
    const users = this.usersCurrentlyTyping;
    if (users.length) {
      message = users.length > 3 ? 'Several users' : users.join(', ');
      message += users.length > 1 ? ' are typing...' : ' is typing...';
    }
    this.usersTyping = message;
  }

  updateScroll() {
    const element = document.getElementById('message-area');
    element.scrollTop = element.scrollHeight;
  }
}
