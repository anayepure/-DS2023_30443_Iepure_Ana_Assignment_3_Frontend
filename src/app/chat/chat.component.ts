import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ChatService} from "../services/chat.service";
import {WebsocketService} from "../services/websocket.service";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chatMessage: string = '';
  public messageAdminUser: string = '';
  public messageForm: FormGroup;
  public messages: string[]=[];
  private serverUrl = 'http://localhost:8090/socket'
  private title = 'WebSockets chat';
  private stompClient: Stomp.Client;
  public username: string='';

  constructor(private chatClient: ChatService,
              private webSocketService: WebsocketService) {

  }

  ngOnInit(): void {
    this.messageForm = new FormGroup(
      {
        message: new FormControl()
      }
    );
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, (frame) => {
      that.stompClient.subscribe("/chat", (message) => {
        if(message.body) {
          $(".chat").append(message.body);
          this.messages.push(message.body);
        }
      });
    });
  }

  sendMessage()
  {
    this.messageAdminUser = this.messageForm.get('message')?.value;
    this.webSocketService.sendMessage(this.messageAdminUser);
  }
}
