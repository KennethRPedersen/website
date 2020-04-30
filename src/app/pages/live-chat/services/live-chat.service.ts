import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {ChatMessage} from '../models/chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class LiveChatService {
  chatMessages = this.socket.fromEvent<ChatMessage>('chat messages');
  usersTyping = this.socket.fromEvent('user typing');
  userStoppedTyping = this.socket.fromEvent('user stop typing');
  userCount = this.socket.fromEvent<number>('user count');

  /**
   * Updates the users nickname
   * @param nickname new nickname of the user
   */
  nicknamedChanged = (nickname: string) => this.socket.emit('nickname changed', nickname);

  /**
   * Emits that the user is typing a message
   */
  userTyping = () => this.socket.emit('user typing');

  /**
   * Sends the given message to the server.
   * @param message the message to send
   */
  /*sendMessage = (message: string) => this.socket.emit('chat messages', message);*/

  sendMessage(message: string) {
    this.socket.emit('chat messages', message);
  }


  constructor(private socket: Socket) { }




}
