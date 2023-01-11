import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private serverUrl = 'http://localhost:8090/socket'
  private title = 'WebSockets chat';
  private stompClient: Stomp.Client;

  constructor(){
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/chat", (message) => {
        if(message.body) {
          $(".chat").append(message.body)
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(message: string){
    this.stompClient.send("/app/send/message" , {}, message);
    $('#input').val('');
  }
}
