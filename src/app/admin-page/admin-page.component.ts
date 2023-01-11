import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ChatService} from "../services/chat.service";
import {WebsocketService} from "../services/websocket.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public message: string;
  public messages: string[]=[];
  constructor(private router: Router,
            ) {
  }

  ngOnInit(): void {

  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }




}
