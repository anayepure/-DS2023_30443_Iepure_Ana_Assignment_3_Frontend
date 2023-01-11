import { Injectable } from '@angular/core';
import {ChatServiceClient} from "../../../proto/chat_pb_service";
import {ChatMessage, User} from "../../../proto/chat_pb";
import $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private client: ChatServiceClient;

  constructor() {
    this.client = new ChatServiceClient(
      'http://localhost:8080',);
  }


  join() {
    const user = new User();
    user.setName("ana");
    user.setId("1");

    this.client.join(user, (err, response) => {
      if (err) return console.log(err);
      console.log(user.getName());
    });
  }

  sendMessage(message: string):string {
    const msg = new ChatMessage();
    msg.setMsg(message);
    msg.setFrom("ana");
    msg.setTime(new Date().toLocaleString());

    this.client.sendMsg(msg, (err, response) => {
      console.log(msg.getMsg());
      console.log(response);
    });
    return message;
  }

}
